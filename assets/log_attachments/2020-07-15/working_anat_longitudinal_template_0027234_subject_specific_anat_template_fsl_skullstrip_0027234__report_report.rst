Node: subject_specific_anat_template_fsl_skullstrip_0027234 (utility)
=====================================================================


 Hierarchy : anat_longitudinal_template_0027234.subject_specific_anat_template_fsl_skullstrip_0027234
 Exec ID : subject_specific_anat_template_fsl_skullstrip_0027234


Original Inputs
---------------


* avg_method : median
* convergence_threshold : -1
* cost : corratio
* dof : 12
* function_str : def template_creation_flirt(input_brain_list, input_skull_list, init_reg=None, avg_method='median', dof=12,
                            interp='trilinear', cost='corratio', mat_type='matrix',
                            convergence_threshold=-1, thread_pool=2):
    """
    Parameters
    ----------
    input_brain_list : list of str
        list of brain images paths
    input_skull_list : list of str
        list of skull images paths
    init_reg : list of Node
        (default None so no initial registration performed)
        the output of the function register_img_list with another reference
        Reuter et al. 2012 (NeuroImage) section "Improved template estimation"
        doi:10.1016/j.neuroimage.2012.02.084 uses a ramdomly
        selected image from the input dataset
    avg_method : str
        function names from numpy library such as 'median', 'mean', 'std' ...
    dof : integer (int of long)
        number of transform degrees of freedom (FLIRT) (12 by default)
    interp : str
        ('trilinear' (default) or 'nearestneighbour' or 'sinc' or 'spline')
        final interpolation method used in reslicing
    cost : str
        ('mutualinfo' or 'corratio' (default) or 'normcorr' or 'normmi' or
         'leastsq' or 'labeldiff' or 'bbr')
        cost function
    mat_type : str
        'matrix'(default), 'ITK'
        The type of matrix used to represent the transformations
    convergence_threshold : float
        (numpy.finfo(np.float64).eps (default)) threshold for the convergence
        The threshold is how different from no transformation is the
        transformation matrix.
    thread_pool : int or multiprocessing.dummy.Pool
        (default 2) number of threads. You can also provide a Pool so the
        node will be added to it to be run.

    Returns
    -------
    template : str
        path to the final template

    """
    # DEBUG to skip the longitudinal template generation which takes a lot of time.
    # return 'CECI_EST_UN_TEST'

    if isinstance(thread_pool, int):
        pool = ThreadPool(thread_pool)
    else:
        pool = thread_pool

    if convergence_threshold == -1:
        convergence_threshold = np.finfo(np.float64).eps

    if not input_brain_list:
        print('ERROR create_temporary_template: image list is empty')

    if len(input_brain_list) == 1:
        print("input_brain_list contains only 1 image, no template calculated")
        return input_brain_list[0]

    warp_list = []
    warp_list_filenames = [os.path.join(
        os.getcwd(), str(os.path.basename(img).split('.')[0]) + '_anat_to_template.mat') for img in input_brain_list]

    # I added this part because it is mentioned in the paper but I actually never used it
    # You could run a first register_img_list() with a selected image as starting point and
    # give the output to this function
    if init_reg is not None:
        if isinstance(init_reg, list):
            output_brain_list = [node.inputs.out_file for node in init_reg]
            mat_list = [node.inputs.out_matrix_file for node in init_reg]
            warp_list = mat_list
            # test if every transformation matrix has reached the convergence
            convergence_list = [template_convergence(
                mat, mat_type, convergence_threshold) for mat in mat_list]
            converged = all(convergence_list)
        else:
            raise ValueError("init_reg must be a list of FLIRT nipype nodes files")
    else:
        output_brain_list = input_brain_list
        output_skull_list = input_skull_list
        converged = False

    temporary_brain_template = os.path.join(os.getcwd(), 'temporary_brain_template.nii.gz')
    temporary_skull_template = os.path.join(os.getcwd(), 'temporary_skull_template.nii.gz')

    """ First is calculated an average image of the dataset to be the temporary template
    and the loop stops when this temporary template is close enough (with a transformation
    distance smaller than the threshold) to all the images of the precedent iteration.
    """
    while not converged:
        temporary_brain_template, temporary_skull_template = create_temporary_template(output_brain_list,
                                                output_skull_list,
                                                output_brain_path=temporary_brain_template,
                                                output_skull_path=temporary_skull_template,
                                                avg_method=avg_method)

        # TODO applyxfm mat_list to register output_skull_list to longitudinal space
        reg_list_node = register_img_list(output_brain_list,
                                          ref_img=temporary_brain_template,
                                          dof=dof,
                                          interp=interp,
                                          cost=cost)

        mat_list = [node.inputs.out_matrix_file for node in reg_list_node]

        # TODO clean code, refactor variables 
        if len(warp_list) == 0:
            warp_list = mat_list

        for index, mat in enumerate(mat_list):
            cmd = "flirt -in %s -ref %s -applyxfm -init %s -dof %s -interp %s -cost %s -out %s" % (output_skull_list[index], 
                    temporary_skull_template, mat, dof, interp, cost, 
                    os.path.join(os.getcwd(), os.path.basename(output_skull_list[index])))
            os.system(cmd)

            output_skull_list[index] = os.path.join(os.getcwd(), os.path.basename(output_skull_list[index]))

            # why inverse?
            cmd = "convert_xfm -omat %s -inverse %s" % (warp_list_filenames[index], warp_list[index])
            os.system(cmd)

            warp_list[index] = warp_list_filenames[index]

        output_brain_list = [node.inputs.out_file for node in reg_list_node]

        # test if every transformation matrix has reached the convergence
        convergence_list = [template_convergence(
            mat, mat_type, convergence_threshold) for mat in mat_list]
        converged = all(convergence_list)

    if isinstance(thread_pool, int):
        pool.close()
        pool.join()

    brain_template = temporary_brain_template
    skull_template = temporary_skull_template

    # register T1 to longitudinal template space
    reg_list_node = register_img_list(input_brain_list,
                                      ref_img=temporary_brain_template,
                                      dof=dof,
                                      interp=interp,
                                      cost=cost)

    warp_list = [node.inputs.out_matrix_file for node in reg_list_node]

    return brain_template, skull_template, output_brain_list, output_skull_list, warp_list

* init_reg : <undefined>
* input_brain_list : ['/outputs/working/anat_longitudinal_template_0027234/anat_preproc_fsl_0027234_1/anat_skullstrip_orig_vol/anat_resample_calc.nii.gz']
* input_skull_list : ['/outputs/working/anat_longitudinal_template_0027234/anat_preproc_fsl_0027234_1/anat_reorient/anat_resample.nii.gz']
* interp : trilinear
* mat_type : <undefined>
* thread_pool : 2

Execution Inputs
----------------


* avg_method : median
* convergence_threshold : -1
* cost : corratio
* dof : 12
* function_str : def template_creation_flirt(input_brain_list, input_skull_list, init_reg=None, avg_method='median', dof=12,
                            interp='trilinear', cost='corratio', mat_type='matrix',
                            convergence_threshold=-1, thread_pool=2):
    """
    Parameters
    ----------
    input_brain_list : list of str
        list of brain images paths
    input_skull_list : list of str
        list of skull images paths
    init_reg : list of Node
        (default None so no initial registration performed)
        the output of the function register_img_list with another reference
        Reuter et al. 2012 (NeuroImage) section "Improved template estimation"
        doi:10.1016/j.neuroimage.2012.02.084 uses a ramdomly
        selected image from the input dataset
    avg_method : str
        function names from numpy library such as 'median', 'mean', 'std' ...
    dof : integer (int of long)
        number of transform degrees of freedom (FLIRT) (12 by default)
    interp : str
        ('trilinear' (default) or 'nearestneighbour' or 'sinc' or 'spline')
        final interpolation method used in reslicing
    cost : str
        ('mutualinfo' or 'corratio' (default) or 'normcorr' or 'normmi' or
         'leastsq' or 'labeldiff' or 'bbr')
        cost function
    mat_type : str
        'matrix'(default), 'ITK'
        The type of matrix used to represent the transformations
    convergence_threshold : float
        (numpy.finfo(np.float64).eps (default)) threshold for the convergence
        The threshold is how different from no transformation is the
        transformation matrix.
    thread_pool : int or multiprocessing.dummy.Pool
        (default 2) number of threads. You can also provide a Pool so the
        node will be added to it to be run.

    Returns
    -------
    template : str
        path to the final template

    """
    # DEBUG to skip the longitudinal template generation which takes a lot of time.
    # return 'CECI_EST_UN_TEST'

    if isinstance(thread_pool, int):
        pool = ThreadPool(thread_pool)
    else:
        pool = thread_pool

    if convergence_threshold == -1:
        convergence_threshold = np.finfo(np.float64).eps

    if not input_brain_list:
        print('ERROR create_temporary_template: image list is empty')

    if len(input_brain_list) == 1:
        print("input_brain_list contains only 1 image, no template calculated")
        return input_brain_list[0]

    warp_list = []
    warp_list_filenames = [os.path.join(
        os.getcwd(), str(os.path.basename(img).split('.')[0]) + '_anat_to_template.mat') for img in input_brain_list]

    # I added this part because it is mentioned in the paper but I actually never used it
    # You could run a first register_img_list() with a selected image as starting point and
    # give the output to this function
    if init_reg is not None:
        if isinstance(init_reg, list):
            output_brain_list = [node.inputs.out_file for node in init_reg]
            mat_list = [node.inputs.out_matrix_file for node in init_reg]
            warp_list = mat_list
            # test if every transformation matrix has reached the convergence
            convergence_list = [template_convergence(
                mat, mat_type, convergence_threshold) for mat in mat_list]
            converged = all(convergence_list)
        else:
            raise ValueError("init_reg must be a list of FLIRT nipype nodes files")
    else:
        output_brain_list = input_brain_list
        output_skull_list = input_skull_list
        converged = False

    temporary_brain_template = os.path.join(os.getcwd(), 'temporary_brain_template.nii.gz')
    temporary_skull_template = os.path.join(os.getcwd(), 'temporary_skull_template.nii.gz')

    """ First is calculated an average image of the dataset to be the temporary template
    and the loop stops when this temporary template is close enough (with a transformation
    distance smaller than the threshold) to all the images of the precedent iteration.
    """
    while not converged:
        temporary_brain_template, temporary_skull_template = create_temporary_template(output_brain_list,
                                                output_skull_list,
                                                output_brain_path=temporary_brain_template,
                                                output_skull_path=temporary_skull_template,
                                                avg_method=avg_method)

        # TODO applyxfm mat_list to register output_skull_list to longitudinal space
        reg_list_node = register_img_list(output_brain_list,
                                          ref_img=temporary_brain_template,
                                          dof=dof,
                                          interp=interp,
                                          cost=cost)

        mat_list = [node.inputs.out_matrix_file for node in reg_list_node]

        # TODO clean code, refactor variables 
        if len(warp_list) == 0:
            warp_list = mat_list

        for index, mat in enumerate(mat_list):
            cmd = "flirt -in %s -ref %s -applyxfm -init %s -dof %s -interp %s -cost %s -out %s" % (output_skull_list[index], 
                    temporary_skull_template, mat, dof, interp, cost, 
                    os.path.join(os.getcwd(), os.path.basename(output_skull_list[index])))
            os.system(cmd)

            output_skull_list[index] = os.path.join(os.getcwd(), os.path.basename(output_skull_list[index]))

            # why inverse?
            cmd = "convert_xfm -omat %s -inverse %s" % (warp_list_filenames[index], warp_list[index])
            os.system(cmd)

            warp_list[index] = warp_list_filenames[index]

        output_brain_list = [node.inputs.out_file for node in reg_list_node]

        # test if every transformation matrix has reached the convergence
        convergence_list = [template_convergence(
            mat, mat_type, convergence_threshold) for mat in mat_list]
        converged = all(convergence_list)

    if isinstance(thread_pool, int):
        pool.close()
        pool.join()

    brain_template = temporary_brain_template
    skull_template = temporary_skull_template

    # register T1 to longitudinal template space
    reg_list_node = register_img_list(input_brain_list,
                                      ref_img=temporary_brain_template,
                                      dof=dof,
                                      interp=interp,
                                      cost=cost)

    warp_list = [node.inputs.out_matrix_file for node in reg_list_node]

    return brain_template, skull_template, output_brain_list, output_skull_list, warp_list

* init_reg : <undefined>
* input_brain_list : ['/outputs/working/anat_longitudinal_template_0027234/anat_preproc_fsl_0027234_1/anat_skullstrip_orig_vol/anat_resample_calc.nii.gz']
* input_skull_list : ['/outputs/working/anat_longitudinal_template_0027234/anat_preproc_fsl_0027234_1/anat_reorient/anat_resample.nii.gz']
* interp : trilinear
* mat_type : <undefined>
* thread_pool : 2


Execution Outputs
-----------------


* brain_template : /
* output_brain_list : u
* output_skull_list : <undefined>
* skull_template : o
* warp_list : p


Runtime info
------------


* duration : 0.003687
* hostname : 57aedce1fd70
* prev_wd : /
* working_dir : /outputs/working/anat_longitudinal_template_0027234/subject_specific_anat_template_fsl_skullstrip_0027234


Environment
~~~~~~~~~~~


* ANTSPATH : /usr/lib/ants/
* C3DPATH : /opt/c3d/
* FSLDIR : /usr/share/fsl/5.0
* FSLMULTIFILEQUIT : TRUE
* FSLOUTPUTTYPE : NIFTI_GZ
* FSLTCLSH : /usr/bin/tclsh
* FSLWISH : /usr/bin/wish
* HOME : /
* HOSTNAME : 57aedce1fd70
* KMP_DUPLICATE_LIB_OK : True
* KMP_INIT_AT_FORK : FALSE
* LC_CTYPE : C.UTF-8
* LD_LIBRARY_PATH : /usr/lib/fsl/5.0:
* MPLCONFIGDIR : /tmp/matplotlib-6yza8y2m
* PATH : /usr/local/miniconda/bin:/opt/ICA-AROMA:/usr/lib/ants:/usr/lib/fsl/5.0:/opt/afni:/opt/c3d//bin:/root/.nvm/versions/node/v11.15.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
* POSSUMDIR : /usr/share/fsl/5.0
* TERM : xterm