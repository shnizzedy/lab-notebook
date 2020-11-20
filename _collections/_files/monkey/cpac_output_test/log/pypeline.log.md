---
title: "pypeline.log"
slug: "pypeline.log"
categories: [files]
author: Lillian Campos
date: 2020-11-20
---
```YAML
201023-22:09:10,959 nipype.workflow INFO:
	 

[!] LOCKING CPUs PER PARTICIPANT TO 1 FOR U-NET MODEL.

This is a temporary measure due to a known issue preventing Nipype's parallelization from running U-Net properly.


201023-22:09:10,960 nipype.workflow INFO:
	 

    C-PAC version: 1.7.0

    Setting maximum number of cores per participant to 1
    Setting number of participants at once to 3
    Setting OMP_NUM_THREADS to 1
    Setting MKL_NUM_THREADS to 1
    Setting ANTS/ITK thread usage to 1
    Maximum potential number of cores that might be used during this run: 3


201023-22:09:10,994 nipype.workflow INFO:
	 

[!] LOCKING CPUs PER PARTICIPANT TO 1 FOR U-NET MODEL.

This is a temporary measure due to a known issue preventing Nipype's parallelization from running U-Net properly.


201023-22:09:10,995 nipype.workflow INFO:
	 

    C-PAC version: 1.7.0

    Setting maximum number of cores per participant to 1
    Setting number of participants at once to 3
    Setting OMP_NUM_THREADS to 1
    Setting MKL_NUM_THREADS to 1
    Setting ANTS/ITK thread usage to 1
    Maximum potential number of cores that might be used during this run: 3


201023-22:09:11,106 nipype.workflow INFO:
	 

[!] LOCKING CPUs PER PARTICIPANT TO 1 FOR U-NET MODEL.

This is a temporary measure due to a known issue preventing Nipype's parallelization from running U-Net properly.


201023-22:09:11,107 nipype.workflow INFO:
	 

    C-PAC version: 1.7.0

    Setting maximum number of cores per participant to 1
    Setting number of participants at once to 3
    Setting OMP_NUM_THREADS to 1
    Setting MKL_NUM_THREADS to 1
    Setting ANTS/ITK thread usage to 1
    Maximum potential number of cores that might be used during this run: 3


201023-22:09:14,422 nipype.workflow INFO:
	 

Pipeline building completed.


201023-22:09:14,423 nipype.workflow INFO:
	 

Strategy forks:
- cpac_default_monkey_skullstrip


201023-22:09:14,430 nipype.workflow INFO:
	 

Pipeline building completed.


201023-22:09:14,431 nipype.workflow INFO:
	 

Strategy forks:
- cpac_default_monkey_skullstrip


201023-22:09:14,504 nipype.workflow INFO:
	 

Pipeline building completed.


201023-22:09:14,505 nipype.workflow INFO:
	 

Strategy forks:
- cpac_default_monkey_skullstrip


201023-22:09:16,441 nipype.workflow INFO:
	 Workflow resting_preproc_sub-44135_ses-necfdg2017 settings: ['check', 'execution', 'logging', 'monitoring']
201023-22:09:16,447 nipype.workflow INFO:
	 Workflow resting_preproc_sub-44135_ses-necfdg2017 settings: ['check', 'execution', 'logging', 'monitoring']
201023-22:09:16,686 nipype.workflow INFO:
	 Workflow resting_preproc_sub-44135_ses-necfdg2017 settings: ['check', 'execution', 'logging', 'monitoring']
201023-22:09:16,802 nipype.workflow INFO:
	 Running serially.
201023-22:09:16,805 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.select_scan_params" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/select_scan_params".
201023-22:09:16,813 nipype.workflow INFO:
	 Running serially.
201023-22:09:16,816 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.select_scan_params" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/select_scan_params".
201023-22:09:16,853 nipype.workflow ERROR:
	 Node select_scan_params.b0 failed to run on host cycle-0.
201023-22:09:16,857 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220916-ljcampos-select_scan_params.b0-e9d70acb-9089-49cc-afb9-d8f52f91865b.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 466, in run
    self, report_type='preexec', is_mapnode=isinstance(self, MapNode))
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/utils.py", line 147, in write_report
    with open(report_file, 'wt') as fp:
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/select_scan_params/_report/report.rst'

201023-22:09:16,884 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.selectrest" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/selectrest".
201023-22:09:16,921 nipype.workflow INFO:
	 [Node] Running "select_scan_params" ("CPAC.utils.interfaces.function.Function")
201023-22:09:16,999 nipype.workflow INFO:
	 [Node] Running "selectrest" ("CPAC.utils.interfaces.function.Function")
201023-22:09:17,50 nipype.workflow INFO:
	 Running serially.
201023-22:09:17,53 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.select_scan_params" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/select_scan_params".
201023-22:09:17,104 nipype.workflow ERROR:
	 Node select_scan_params.b0 failed to run on host cycle-0.
201023-22:09:17,111 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220917-ljcampos-select_scan_params.b0-2b218a25-16fb-4379-bc5b-6866b9a228c4.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 828, in emptydirs
    raise ex
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 498, in rmtree
    onerror(os.rmdir, path, sys.exc_info())
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 496, in rmtree
    os.rmdir(path)
OSError: [Errno 39] Directory not empty: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/select_scan_params'

201023-22:09:17,139 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.selectrest" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/selectrest".
201023-22:09:17,172 nipype.workflow ERROR:
	 Node selectrest.b0 failed to run on host cycle-0.
201023-22:09:17,174 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220917-ljcampos-selectrest.b0-fedac1c2-2e33-43ce-bed4-29585c7c74b9.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 828, in emptydirs
    raise ex
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 498, in rmtree
    onerror(os.rmdir, path, sys.exc_info())
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 496, in rmtree
    os.rmdir(path)
OSError: [Errno 39] Directory not empty: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/selectrest'

201023-22:09:17,204 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.check_func_scan" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/check_func_scan".
201023-22:09:17,282 nipype.workflow WARNING:
	 [Node] Error on "resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.select_scan_params" (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/select_scan_params)
201023-22:09:17,290 nipype.workflow ERROR:
	 Node select_scan_params.b0 failed to run on host cycle-0.
201023-22:09:17,298 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220917-ljcampos-select_scan_params.b0-b5553486-c63d-4056-b577-3c85fd684071.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 555, in _run_interface
    return self._run_command(execute)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 635, in _run_command
    result = self._interface.run(cwd=outdir)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 569, in run
    vals = np.loadtxt(mon_sp.fname, delimiter=',')
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/npyio.py", line 962, in loadtxt
    fh = np.lib._datasource.open(fname, 'rt', encoding=encoding)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 266, in open
    return ds.open(path, mode, encoding=encoding, newline=newline)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 624, in open
    raise IOError("%s not found." % path)
OSError: .proc-124352_time-1603490956.928419_freq-1.00 not found.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/select_scan_params/_0x5c2759a05489ac0674c09e6b273de185_unfinished.json'

201023-22:09:17,307 nipype.workflow INFO:
	 [Node] Running "check_func_scan" ("CPAC.utils.interfaces.function.Function")
201023-22:09:17,330 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.selectrest" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/selectrest".
201023-22:09:17,358 nipype.workflow ERROR:
	 Node selectrest.b0 failed to run on host cycle-0.
201023-22:09:17,363 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220917-ljcampos-selectrest.b0-2e654e50-3201-4226-923c-87f03f0e51e5.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 828, in emptydirs
    raise ex
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 498, in rmtree
    onerror(os.rmdir, path, sys.exc_info())
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 496, in rmtree
    os.rmdir(path)
OSError: [Errno 39] Directory not empty: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/selectrest'

201023-22:09:17,386 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.check_func_scan" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/check_func_scan".
201023-22:09:17,421 nipype.workflow ERROR:
	 Node check_func_scan.b0 failed to run on host cycle-0.
201023-22:09:17,423 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220917-ljcampos-check_func_scan.b0-c7b1c7b0-46f3-4a4c-a605-4fee1fa7f157.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 828, in emptydirs
    raise ex
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 498, in rmtree
    onerror(os.rmdir, path, sys.exc_info())
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 496, in rmtree
    os.rmdir(path)
OSError: [Errno 39] Directory not empty: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/check_func_scan'

201023-22:09:17,445 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.anat_preproc_unet_0.check_for_s3_unet" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/check_for_s3_unet".
201023-22:09:17,461 nipype.workflow INFO:
	 [Node] Running "check_for_s3_unet" ("CPAC.utils.interfaces.function.Function")
201023-22:09:17,660 nipype.workflow WARNING:
	 [Node] Error on "resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.check_func_scan" (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/check_func_scan)
201023-22:09:17,668 nipype.workflow ERROR:
	 Node check_func_scan.b0 failed to run on host cycle-0.
201023-22:09:17,674 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220917-ljcampos-check_func_scan.b0-b4cc5a1d-4fb0-435b-bb09-0be8c7bd0c4b.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 555, in _run_interface
    return self._run_command(execute)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 635, in _run_command
    result = self._interface.run(cwd=outdir)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 569, in run
    vals = np.loadtxt(mon_sp.fname, delimiter=',')
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/npyio.py", line 962, in loadtxt
    fh = np.lib._datasource.open(fname, 'rt', encoding=encoding)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 266, in open
    return ds.open(path, mode, encoding=encoding, newline=newline)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 624, in open
    raise IOError("%s not found." % path)
OSError: .proc-124345_time-1603490957.311729_freq-1.00 not found.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/check_func_scan/_0x5e97cc66100b56283c878d551860a126_unfinished.json'

201023-22:09:17,703 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.anat_preproc_unet_0.check_for_s3_unet" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/check_for_s3_unet".
201023-22:09:17,716 nipype.workflow ERROR:
	 Node check_for_s3_unet failed to run on host cycle-0.
201023-22:09:17,718 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220917-ljcampos-check_for_s3_unet-ea9c7f08-562d-4b39-b052-b6bd1615e3cb.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 828, in emptydirs
    raise ex
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 498, in rmtree
    onerror(os.rmdir, path, sys.exc_info())
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 496, in rmtree
    os.rmdir(path)
OSError: [Errno 39] Directory not empty: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/check_for_s3_unet'

201023-22:09:17,723 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.anat_gather_0.check_for_s3" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_gather_0/check_for_s3".
201023-22:09:17,740 nipype.workflow INFO:
	 [Node] Running "check_for_s3" ("CPAC.utils.interfaces.function.Function")
201023-22:09:18,77 nipype.workflow INFO:
	 [Node] Finished "resting_preproc_sub-44135_ses-necfdg2017.anat_gather_0.check_for_s3".
201023-22:09:18,81 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.anat_preproc_unet_0.anat_deoblique" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/anat_deoblique".
201023-22:09:17,359 nipype.workflow WARNING:
	 [Node] Error on "resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.selectrest" (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/selectrest)
201023-22:09:18,391 nipype.workflow ERROR:
	 Node selectrest.b0 failed to run on host cycle-0.
201023-22:09:18,399 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220918-ljcampos-selectrest.b0-b368b6c5-7a78-415e-a1ad-2bf702aff361.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 555, in _run_interface
    return self._run_command(execute)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 635, in _run_command
    result = self._interface.run(cwd=outdir)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 569, in run
    vals = np.loadtxt(mon_sp.fname, delimiter=',')
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/npyio.py", line 962, in loadtxt
    fh = np.lib._datasource.open(fname, 'rt', encoding=encoding)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 266, in open
    return ds.open(path, mode, encoding=encoding, newline=newline)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 624, in open
    raise IOError("%s not found." % path)
OSError: .proc-124348_time-1603490957.0029032_freq-1.00 not found.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/selectrest/_0xac197a2a5cf86cb477e192d3bac57830_unfinished.json'

201023-22:09:18,468 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.check_func_scan" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/check_func_scan".
201023-22:09:18,722 nipype.workflow INFO:
	 [Node] Running "anat_deoblique" ("nipype.interfaces.afni.utils.Refit"), a CommandLine Interface with command:
3drefit -deoblique /outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/anat_deoblique/sub-44135_ses-necfdg2017_T1w.nii.gz
201023-22:09:18,764 nipype.workflow INFO:
	 [Node] Running "check_func_scan" ("CPAC.utils.interfaces.function.Function")
201023-22:09:19,165 nipype.workflow INFO:
	 [Node] Finished "resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.check_func_scan".
201023-22:09:19,183 nipype.interface INFO:
	 stderr 2020-10-23T22:09:19.183056:++ 3drefit: AFNI version=AFNI_20.2.05 (Jul 20 2020) [64-bit]
201023-22:09:19,184 nipype.interface INFO:
	 stderr 2020-10-23T22:09:19.183056:++ Authored by: RW Cox
201023-22:09:19,204 nipype.interface INFO:
	 stderr 2020-10-23T22:09:19.204458:++ Processing AFNI dataset /outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/anat_deoblique/sub-44135_ses-necfdg2017_T1w.nii.gz
201023-22:09:19,219 nipype.interface INFO:
	 stderr 2020-10-23T22:09:19.219646: + deoblique
201023-22:09:19,225 nipype.interface INFO:
	 stderr 2020-10-23T22:09:19.219646: + loading and re-writing dataset /outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/anat_deoblique/sub-44135_ses-necfdg2017_T1w.nii.gz (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/anat_deoblique/sub-44135_ses-necfdg2017_T1w.nii.gz in NIFTI storage)
201023-22:09:19,204 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.anat_preproc_unet_0.check_for_s3_unet" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/check_for_s3_unet".
201023-22:09:20,214 nipype.workflow ERROR:
	 Node check_for_s3_unet failed to run on host cycle-0.
201023-22:09:20,220 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220920-ljcampos-check_for_s3_unet-18062390-5065-42d5-b975-9e33e8493986.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 830, in emptydirs
    raise ex
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 494, in rmtree
    _rmtree_safe_fd(fd, path, onerror)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 452, in _rmtree_safe_fd
    onerror(os.unlink, fullname, sys.exc_info())
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 450, in _rmtree_safe_fd
    os.unlink(entry.name, dir_fd=topfd)
OSError: [Errno 16] Device or resource busy: '.nfs00000000001c07850000000b'

201023-22:09:20,232 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.anat_gather_0.check_for_s3" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_gather_0/check_for_s3".
201023-22:09:20,238 nipype.workflow INFO:
	 [Node] Cached "resting_preproc_sub-44135_ses-necfdg2017.anat_gather_0.check_for_s3" - collecting precomputed outputs
201023-22:09:20,239 nipype.workflow INFO:
	 [Node] "resting_preproc_sub-44135_ses-necfdg2017.anat_gather_0.check_for_s3" found cached.
201023-22:09:20,245 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.anat_preproc_unet_0.anat_deoblique" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/anat_deoblique".
201023-22:09:20,261 nipype.workflow ERROR:
	 Node anat_deoblique failed to run on host cycle-0.
201023-22:09:20,263 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220920-ljcampos-anat_deoblique-5f13e301-afd7-4481-a183-f5004e725669.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 828, in emptydirs
    raise ex
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 498, in rmtree
    onerror(os.rmdir, path, sys.exc_info())
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 496, in rmtree
    os.rmdir(path)
OSError: [Errno 39] Directory not empty: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/anat_deoblique'

201023-22:09:20,268 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_lateral_ventricles_mask" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_lateral_ventricles_mask".
201023-22:09:20,294 nipype.workflow INFO:
	 [Node] Running "check_for_s3_lateral_ventricles_mask" ("CPAC.utils.interfaces.function.Function")
201023-22:09:20,634 nipype.workflow INFO:
	 [Node] Finished "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_lateral_ventricles_mask".
201023-22:09:20,637 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_func_derivative" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_derivative".
201023-22:09:20,653 nipype.workflow INFO:
	 [Node] Running "resampled_template_brain_for_func_derivative" ("CPAC.utils.interfaces.function.Function")
201023-22:09:21,807 nipype.workflow WARNING:
	 [Node] Error on "resting_preproc_sub-44135_ses-necfdg2017.anat_preproc_unet_0.check_for_s3_unet" (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/check_for_s3_unet)
201023-22:09:21,811 nipype.workflow ERROR:
	 Node check_for_s3_unet failed to run on host cycle-0.
201023-22:09:21,813 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220921-ljcampos-check_for_s3_unet-f6874af8-f070-430d-85f4-251ce37b9a99.pklz
Traceback (most recent call last):
  File "/code/CPAC/utils/datasource.py", line 461, in check_for_s3
    bucket.download_file(Key=s3_key, Filename=local_path)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/inject.py", line 246, in bucket_download_file
    ExtraArgs=ExtraArgs, Callback=Callback, Config=Config)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/inject.py", line 172, in download_file
    extra_args=ExtraArgs, callback=Callback)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/transfer.py", line 307, in download_file
    future.result()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/futures.py", line 73, in result
    return self._coordinator.result()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/futures.py", line 233, in result
    raise self._exception
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/tasks.py", line 126, in __call__
    return self._execute_main(kwargs)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/tasks.py", line 150, in _execute_main
    return_value = self._main(**kwargs)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/download.py", line 582, in _main
    fileobj.seek(offset)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 335, in seek
    self._open_if_needed()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 318, in _open_if_needed
    self._fileobj = self._open_function(self._filename, self._mode)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 244, in open
    return open(filename, mode)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/check_for_s3_unet/fcp-indi/resources/cpac/resources/Site-All-T-epoch_36.model.eCc3fECA'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 521, in run
    runtime = self._run_interface(runtime)
  File "/code/CPAC/utils/interfaces/function.py", line 152, in _run_interface
    out = function_handle(**args)
  File "/code/CPAC/utils/datasource.py", line 482, in check_for_s3
    raise Exception(err_msg)
Exception: Unable to connect to bucket: "fcp-indi". Error message:
[Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/check_for_s3_unet/fcp-indi/resources/cpac/resources/Site-All-T-epoch_36.model.eCc3fECA'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 555, in _run_interface
    return self._run_command(execute)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 635, in _run_command
    result = self._interface.run(cwd=outdir)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 569, in run
    vals = np.loadtxt(mon_sp.fname, delimiter=',')
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/npyio.py", line 962, in loadtxt
    fh = np.lib._datasource.open(fname, 'rt', encoding=encoding)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 266, in open
    return ds.open(path, mode, encoding=encoding, newline=newline)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 624, in open
    raise IOError("%s not found." % path)
OSError: .proc-124352_time-1603490957.4639127_freq-1.00 not found.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/check_for_s3_unet/_0xd1f17676faaef7026b4d8c07f91cac82_unfinished.json'

201023-22:09:21,818 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.anat_gather_0.check_for_s3" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_gather_0/check_for_s3".
201023-22:09:21,822 nipype.workflow INFO:
	 [Node] Cached "resting_preproc_sub-44135_ses-necfdg2017.anat_gather_0.check_for_s3" - collecting precomputed outputs
201023-22:09:21,823 nipype.workflow INFO:
	 [Node] "resting_preproc_sub-44135_ses-necfdg2017.anat_gather_0.check_for_s3" found cached.
201023-22:09:21,826 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.anat_preproc_unet_0.anat_deoblique" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/anat_deoblique".
201023-22:09:21,830 nipype.workflow ERROR:
	 Node anat_deoblique failed to run on host cycle-0.
201023-22:09:21,832 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220921-ljcampos-anat_deoblique-4079c8f5-9fe1-478a-b5e8-fcc7c8086bb5.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 830, in emptydirs
    raise ex
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 494, in rmtree
    _rmtree_safe_fd(fd, path, onerror)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 452, in _rmtree_safe_fd
    onerror(os.unlink, fullname, sys.exc_info())
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 450, in _rmtree_safe_fd
    os.unlink(entry.name, dir_fd=topfd)
OSError: [Errno 16] Device or resource busy: '.nfs00000000001beac40000000c'

201023-22:09:21,836 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_lateral_ventricles_mask" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_lateral_ventricles_mask".
201023-22:09:21,841 nipype.workflow INFO:
	 [Node] Cached "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_lateral_ventricles_mask" - collecting precomputed outputs
201023-22:09:21,842 nipype.workflow INFO:
	 [Node] "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_lateral_ventricles_mask" found cached.
201023-22:09:21,844 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_func_derivative" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_derivative".
201023-22:09:21,862 nipype.workflow ERROR:
	 Node resampled_template_brain_for_func_derivative failed to run on host cycle-0.
201023-22:09:21,863 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220921-ljcampos-resampled_template_brain_for_func_derivative-ba75dd54-da19-4c86-8b5e-930ef53d16d7.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 828, in emptydirs
    raise ex
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 498, in rmtree
    onerror(os.rmdir, path, sys.exc_info())
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 496, in rmtree
    os.rmdir(path)
OSError: [Errno 39] Directory not empty: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_derivative'

201023-22:09:21,868 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_func_preproc" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_preproc".
201023-22:09:21,882 nipype.workflow INFO:
	 [Node] Running "resampled_template_brain_for_func_preproc" ("CPAC.utils.interfaces.function.Function")
201023-22:09:23,168 nipype.workflow WARNING:
	 [Node] Error on "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_func_derivative" (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_derivative)
201023-22:09:23,174 nipype.workflow ERROR:
	 Node resampled_template_brain_for_func_derivative failed to run on host cycle-0.
201023-22:09:23,176 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220923-ljcampos-resampled_template_brain_for_func_derivative-5d952ba5-14c4-492e-abff-e01ea74b0305.pklz
Traceback (most recent call last):
  File "/code/CPAC/utils/datasource.py", line 461, in check_for_s3
    bucket.download_file(Key=s3_key, Filename=local_path)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/inject.py", line 246, in bucket_download_file
    ExtraArgs=ExtraArgs, Callback=Callback, Config=Config)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/inject.py", line 172, in download_file
    extra_args=ExtraArgs, callback=Callback)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/transfer.py", line 307, in download_file
    future.result()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/futures.py", line 73, in result
    return self._coordinator.result()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/futures.py", line 233, in result
    raise self._exception
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/tasks.py", line 126, in __call__
    return self._execute_main(kwargs)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/tasks.py", line 150, in _execute_main
    return_value = self._main(**kwargs)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/download.py", line 582, in _main
    fileobj.seek(offset)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 335, in seek
    self._open_if_needed()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 318, in _open_if_needed
    self._fileobj = self._open_function(self._filename, self._mode)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 244, in open
    return open(filename, mode)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_derivative/fcp-indi/resources/cpac/resources/MacaqueYerkes19_T1w_2mm_brain.nii.gz.1e4e3CBE'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 521, in run
    runtime = self._run_interface(runtime)
  File "/code/CPAC/utils/interfaces/function.py", line 152, in _run_interface
    out = function_handle(**args)
  File "/code/CPAC/utils/datasource.py", line 541, in resolve_resolution
    local_path = check_for_s3(template)
  File "/code/CPAC/utils/datasource.py", line 482, in check_for_s3
    raise Exception(err_msg)
Exception: Unable to connect to bucket: "fcp-indi". Error message:
[Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_derivative/fcp-indi/resources/cpac/resources/MacaqueYerkes19_T1w_2mm_brain.nii.gz.1e4e3CBE'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 555, in _run_interface
    return self._run_command(execute)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 635, in _run_command
    result = self._interface.run(cwd=outdir)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 569, in run
    vals = np.loadtxt(mon_sp.fname, delimiter=',')
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/npyio.py", line 962, in loadtxt
    fh = np.lib._datasource.open(fname, 'rt', encoding=encoding)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 266, in open
    return ds.open(path, mode, encoding=encoding, newline=newline)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 624, in open
    raise IOError("%s not found." % path)
OSError: .proc-124348_time-1603490960.655279_freq-1.00 not found.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_derivative/_0xc36b0dfc7bc4f728bfe4b4e341b0276e_unfinished.json'

201023-22:09:23,179 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_func_preproc" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_preproc".
201023-22:09:23,191 nipype.workflow ERROR:
	 Node resampled_template_brain_for_func_preproc failed to run on host cycle-0.
201023-22:09:23,193 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220923-ljcampos-resampled_template_brain_for_func_preproc-3ab793f1-15e5-44ed-9257-ad9ad1fd6d50.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 828, in emptydirs
    raise ex
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 498, in rmtree
    onerror(os.rmdir, path, sys.exc_info())
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 496, in rmtree
    os.rmdir(path)
OSError: [Errno 39] Directory not empty: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_preproc'

201023-22:09:23,197 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_func_derivative" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_derivative".
201023-22:09:23,210 nipype.workflow INFO:
	 [Node] Running "resampled_template_skull_for_func_derivative" ("CPAC.utils.interfaces.function.Function")
201023-22:09:24,365 nipype.workflow WARNING:
	 [Node] Error on "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_func_preproc" (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_preproc)
201023-22:09:24,371 nipype.workflow ERROR:
	 Node resampled_template_brain_for_func_preproc failed to run on host cycle-0.
201023-22:09:24,373 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220924-ljcampos-resampled_template_brain_for_func_preproc-0cda144f-3955-4a0b-b06a-33ccab83518e.pklz
Traceback (most recent call last):
  File "/code/CPAC/utils/datasource.py", line 461, in check_for_s3
    bucket.download_file(Key=s3_key, Filename=local_path)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/inject.py", line 246, in bucket_download_file
    ExtraArgs=ExtraArgs, Callback=Callback, Config=Config)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/inject.py", line 172, in download_file
    extra_args=ExtraArgs, callback=Callback)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/transfer.py", line 307, in download_file
    future.result()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/futures.py", line 73, in result
    return self._coordinator.result()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/futures.py", line 233, in result
    raise self._exception
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/tasks.py", line 126, in __call__
    return self._execute_main(kwargs)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/tasks.py", line 150, in _execute_main
    return_value = self._main(**kwargs)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/download.py", line 582, in _main
    fileobj.seek(offset)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 335, in seek
    self._open_if_needed()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 318, in _open_if_needed
    self._fileobj = self._open_function(self._filename, self._mode)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 244, in open
    return open(filename, mode)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_preproc/fcp-indi/resources/cpac/resources/MacaqueYerkes19_T1w_2mm_brain.nii.gz.CaaBf5Ad'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 521, in run
    runtime = self._run_interface(runtime)
  File "/code/CPAC/utils/interfaces/function.py", line 152, in _run_interface
    out = function_handle(**args)
  File "/code/CPAC/utils/datasource.py", line 541, in resolve_resolution
    local_path = check_for_s3(template)
  File "/code/CPAC/utils/datasource.py", line 482, in check_for_s3
    raise Exception(err_msg)
Exception: Unable to connect to bucket: "fcp-indi". Error message:
[Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_preproc/fcp-indi/resources/cpac/resources/MacaqueYerkes19_T1w_2mm_brain.nii.gz.CaaBf5Ad'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 555, in _run_interface
    return self._run_command(execute)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 635, in _run_command
    result = self._interface.run(cwd=outdir)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 569, in run
    vals = np.loadtxt(mon_sp.fname, delimiter=',')
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/npyio.py", line 962, in loadtxt
    fh = np.lib._datasource.open(fname, 'rt', encoding=encoding)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 266, in open
    return ds.open(path, mode, encoding=encoding, newline=newline)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 624, in open
    raise IOError("%s not found." % path)
OSError: .proc-124352_time-1603490961.884852_freq-1.00 not found.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_preproc/_0x59f56e8fc05529155b427185dc289214_unfinished.json'

201023-22:09:24,379 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_func_derivative" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_derivative".
201023-22:09:24,397 nipype.workflow ERROR:
	 Node resampled_template_skull_for_func_derivative failed to run on host cycle-0.
201023-22:09:24,398 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220924-ljcampos-resampled_template_skull_for_func_derivative-52cb6d93-261a-44cc-a1a2-485aca0612c8.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 828, in emptydirs
    raise ex
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 498, in rmtree
    onerror(os.rmdir, path, sys.exc_info())
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 496, in rmtree
    os.rmdir(path)
OSError: [Errno 39] Directory not empty: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_derivative'

201023-22:09:24,402 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_func_preproc" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_preproc".
201023-22:09:24,415 nipype.workflow INFO:
	 [Node] Running "resampled_template_skull_for_func_preproc" ("CPAC.utils.interfaces.function.Function")
201023-22:09:25,791 nipype.workflow WARNING:
	 [Node] Error on "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_func_derivative" (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_derivative)
201023-22:09:25,796 nipype.workflow ERROR:
	 Node resampled_template_skull_for_func_derivative failed to run on host cycle-0.
201023-22:09:25,798 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220925-ljcampos-resampled_template_skull_for_func_derivative-6b2adec8-2769-4369-b907-1f64133b9d3d.pklz
Traceback (most recent call last):
  File "/code/CPAC/utils/datasource.py", line 461, in check_for_s3
    bucket.download_file(Key=s3_key, Filename=local_path)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/inject.py", line 246, in bucket_download_file
    ExtraArgs=ExtraArgs, Callback=Callback, Config=Config)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/inject.py", line 172, in download_file
    extra_args=ExtraArgs, callback=Callback)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/transfer.py", line 307, in download_file
    future.result()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/futures.py", line 73, in result
    return self._coordinator.result()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/futures.py", line 233, in result
    raise self._exception
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/tasks.py", line 126, in __call__
    return self._execute_main(kwargs)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/tasks.py", line 150, in _execute_main
    return_value = self._main(**kwargs)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/download.py", line 582, in _main
    fileobj.seek(offset)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 335, in seek
    self._open_if_needed()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 318, in _open_if_needed
    self._fileobj = self._open_function(self._filename, self._mode)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 244, in open
    return open(filename, mode)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_derivative/fcp-indi/resources/cpac/resources/MacaqueYerkes19_T1w_2mm.nii.gz.9A859622'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 521, in run
    runtime = self._run_interface(runtime)
  File "/code/CPAC/utils/interfaces/function.py", line 152, in _run_interface
    out = function_handle(**args)
  File "/code/CPAC/utils/datasource.py", line 541, in resolve_resolution
    local_path = check_for_s3(template)
  File "/code/CPAC/utils/datasource.py", line 482, in check_for_s3
    raise Exception(err_msg)
Exception: Unable to connect to bucket: "fcp-indi". Error message:
[Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_derivative/fcp-indi/resources/cpac/resources/MacaqueYerkes19_T1w_2mm.nii.gz.9A859622'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 555, in _run_interface
    return self._run_command(execute)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 635, in _run_command
    result = self._interface.run(cwd=outdir)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 569, in run
    vals = np.loadtxt(mon_sp.fname, delimiter=',')
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/npyio.py", line 962, in loadtxt
    fh = np.lib._datasource.open(fname, 'rt', encoding=encoding)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 266, in open
    return ds.open(path, mode, encoding=encoding, newline=newline)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 624, in open
    raise IOError("%s not found." % path)
OSError: .proc-124348_time-1603490963.2127478_freq-1.00 not found.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_derivative/_0x050cac41172345df20010a31300e6e4a_unfinished.json'

201023-22:09:25,801 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_func_preproc" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_preproc".
201023-22:09:25,814 nipype.workflow ERROR:
	 Node resampled_template_skull_for_func_preproc failed to run on host cycle-0.
201023-22:09:25,816 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220925-ljcampos-resampled_template_skull_for_func_preproc-3e3006ae-dec1-4d39-988b-c6cecb0d814f.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 828, in emptydirs
    raise ex
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 498, in rmtree
    onerror(os.rmdir, path, sys.exc_info())
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 496, in rmtree
    os.rmdir(path)
OSError: [Errno 39] Directory not empty: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_preproc'

201023-22:09:25,819 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_segmentation_list" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_segmentation_list".
201023-22:09:25,835 nipype.workflow INFO:
	 [Node] Setting-up "_check_for_s3_ANTs_prior_seg_template_segmentation_list0" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_segmentation_list/mapflow/_check_for_s3_ANTs_prior_seg_template_segmentation_list0".
201023-22:09:25,850 nipype.workflow INFO:
	 [Node] Running "_check_for_s3_ANTs_prior_seg_template_segmentation_list0" ("CPAC.utils.interfaces.function.Function")
201023-22:09:27,131 nipype.workflow WARNING:
	 [Node] Error on "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_func_preproc" (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_preproc)
201023-22:09:27,137 nipype.workflow ERROR:
	 Node resampled_template_skull_for_func_preproc failed to run on host cycle-0.
201023-22:09:27,138 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220927-ljcampos-resampled_template_skull_for_func_preproc-d804bd5c-0b19-4484-a5e4-e7efa33262b2.pklz
Traceback (most recent call last):
  File "/code/CPAC/utils/datasource.py", line 461, in check_for_s3
    bucket.download_file(Key=s3_key, Filename=local_path)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/inject.py", line 246, in bucket_download_file
    ExtraArgs=ExtraArgs, Callback=Callback, Config=Config)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/inject.py", line 172, in download_file
    extra_args=ExtraArgs, callback=Callback)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/transfer.py", line 307, in download_file
    future.result()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/futures.py", line 73, in result
    return self._coordinator.result()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/futures.py", line 233, in result
    raise self._exception
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/tasks.py", line 126, in __call__
    return self._execute_main(kwargs)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/tasks.py", line 150, in _execute_main
    return_value = self._main(**kwargs)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/download.py", line 582, in _main
    fileobj.seek(offset)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 335, in seek
    self._open_if_needed()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 318, in _open_if_needed
    self._fileobj = self._open_function(self._filename, self._mode)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 244, in open
    return open(filename, mode)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_preproc/fcp-indi/resources/cpac/resources/MacaqueYerkes19_T1w_2mm.nii.gz.914Ac059'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 521, in run
    runtime = self._run_interface(runtime)
  File "/code/CPAC/utils/interfaces/function.py", line 152, in _run_interface
    out = function_handle(**args)
  File "/code/CPAC/utils/datasource.py", line 541, in resolve_resolution
    local_path = check_for_s3(template)
  File "/code/CPAC/utils/datasource.py", line 482, in check_for_s3
    raise Exception(err_msg)
Exception: Unable to connect to bucket: "fcp-indi". Error message:
[Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_preproc/fcp-indi/resources/cpac/resources/MacaqueYerkes19_T1w_2mm.nii.gz.914Ac059'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 555, in _run_interface
    return self._run_command(execute)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 635, in _run_command
    result = self._interface.run(cwd=outdir)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 569, in run
    vals = np.loadtxt(mon_sp.fname, delimiter=',')
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/npyio.py", line 962, in loadtxt
    fh = np.lib._datasource.open(fname, 'rt', encoding=encoding)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 266, in open
    return ds.open(path, mode, encoding=encoding, newline=newline)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 624, in open
    raise IOError("%s not found." % path)
OSError: .proc-124352_time-1603490964.4169462_freq-1.00 not found.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_preproc/_0x1a74de481a9e9a83511f472586ef76aa_unfinished.json'

201023-22:09:27,143 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_segmentation_list" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_segmentation_list".
201023-22:09:27,166 nipype.workflow INFO:
	 [Node] Setting-up "_check_for_s3_ANTs_prior_seg_template_segmentation_list0" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_segmentation_list/mapflow/_check_for_s3_ANTs_prior_seg_template_segmentation_list0".
201023-22:09:27,177 nipype.workflow WARNING:
	 [Node] Error on "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_segmentation_list" (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_segmentation_list)
201023-22:09:27,179 nipype.workflow ERROR:
	 Node check_for_s3_ANTs_prior_seg_template_segmentation_list failed to run on host cycle-0.
201023-22:09:27,184 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220927-ljcampos-check_for_s3_ANTs_prior_seg_template_segmentation_list-8e194409-a5ed-435a-9898-1bae185307b4.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/utils.py", line 106, in nodelist_runner
    result = node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 828, in emptydirs
    raise ex
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 498, in rmtree
    onerror(os.rmdir, path, sys.exc_info())
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 496, in rmtree
    os.rmdir(path)
OSError: [Errno 39] Directory not empty: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_segmentation_list/mapflow/_check_for_s3_ANTs_prior_seg_template_segmentation_list0'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 1250, in _run_interface
    self.config['execution']['stop_on_first_crash'])))
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 1125, in _collate_results
    for i, nresult, err in nodes:
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/utils.py", line 113, in nodelist_runner
    if result.runtime and hasattr(result.runtime, 'traceback'):
AttributeError: 'NoneType' object has no attribute 'runtime'

201023-22:09:27,189 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_brain_list" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list".
201023-22:09:27,205 nipype.workflow INFO:
	 [Node] Setting-up "_check_for_s3_ANTs_prior_seg_template_brain_list0" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list/mapflow/_check_for_s3_ANTs_prior_seg_template_brain_list0".
201023-22:09:27,219 nipype.workflow INFO:
	 [Node] Running "_check_for_s3_ANTs_prior_seg_template_brain_list0" ("CPAC.utils.interfaces.function.Function")
201023-22:09:28,435 nipype.workflow WARNING:
	 [Node] Error on "_check_for_s3_ANTs_prior_seg_template_segmentation_list0" (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_segmentation_list/mapflow/_check_for_s3_ANTs_prior_seg_template_segmentation_list0)
201023-22:09:28,439 nipype.workflow INFO:
	 [Node] Setting-up "_check_for_s3_ANTs_prior_seg_template_segmentation_list1" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_segmentation_list/mapflow/_check_for_s3_ANTs_prior_seg_template_segmentation_list1".
201023-22:09:28,450 nipype.workflow INFO:
	 [Node] Running "_check_for_s3_ANTs_prior_seg_template_segmentation_list1" ("CPAC.utils.interfaces.function.Function")
201023-22:09:30,310 nipype.workflow INFO:
	 [Node] Finished "_check_for_s3_ANTs_prior_seg_template_brain_list0".
201023-22:09:30,314 nipype.workflow INFO:
	 [Node] Setting-up "_check_for_s3_ANTs_prior_seg_template_brain_list1" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list/mapflow/_check_for_s3_ANTs_prior_seg_template_brain_list1".
201023-22:09:30,331 nipype.workflow INFO:
	 [Node] Running "_check_for_s3_ANTs_prior_seg_template_brain_list1" ("CPAC.utils.interfaces.function.Function")
201023-22:09:31,266 nipype.workflow INFO:
	 [Node] Finished "_check_for_s3_ANTs_prior_seg_template_segmentation_list1".
201023-22:09:31,268 nipype.workflow WARNING:
	 [Node] Error on "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_segmentation_list" (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_segmentation_list)
201023-22:09:31,269 nipype.workflow ERROR:
	 Node check_for_s3_ANTs_prior_seg_template_segmentation_list failed to run on host cycle-0.
201023-22:09:31,270 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220931-ljcampos-check_for_s3_ANTs_prior_seg_template_segmentation_list-6ee576dc-170d-4f09-8f45-4430664734a6.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 1250, in _run_interface
    self.config['execution']['stop_on_first_crash'])))
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 1172, in _collate_results
    (self.name, '\n'.join(msg)))
Exception: Subnodes of node: check_for_s3_ANTs_prior_seg_template_segmentation_list failed:
Subnode 0 failed
Error: Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 555, in _run_interface
    return self._run_command(execute)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 635, in _run_command
    result = self._interface.run(cwd=outdir)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 569, in run
    vals = np.loadtxt(mon_sp.fname, delimiter=',')

  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/npyio.py", line 962, in loadtxt
    fh = np.lib._datasource.open(fname, 'rt', encoding=encoding)

  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 266, in open
    return ds.open(path, mode, encoding=encoding, newline=newline)

  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 624, in open
    raise IOError("%s not found." % path)

OSError: .proc-124348_time-1603490965.85313_freq-1.00 not found.


During handling of the above exception, another exception occurred:


Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/utils.py", line 106, in nodelist_runner
    result = node.run(updatehash=updatehash)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_segmentation_list/mapflow/_check_for_s3_ANTs_prior_seg_template_segmentation_list0/_0xdc61e8a67f3576925664cd62a8a518b1_unfinished.json'


During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_segmentation_list/_0x9568dfb272292cc1376ac51bc76363d6_unfinished.json'

201023-22:09:31,275 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_brain_list" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list".
201023-22:09:31,288 nipype.workflow INFO:
	 [Node] Setting-up "_check_for_s3_ANTs_prior_seg_template_brain_list0" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list/mapflow/_check_for_s3_ANTs_prior_seg_template_brain_list0".
201023-22:09:31,292 nipype.workflow INFO:
	 [Node] Cached "_check_for_s3_ANTs_prior_seg_template_brain_list0" - collecting precomputed outputs
201023-22:09:31,292 nipype.workflow INFO:
	 [Node] "_check_for_s3_ANTs_prior_seg_template_brain_list0" found cached.
201023-22:09:31,295 nipype.workflow INFO:
	 [Node] Setting-up "_check_for_s3_ANTs_prior_seg_template_brain_list1" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list/mapflow/_check_for_s3_ANTs_prior_seg_template_brain_list1".
201023-22:09:31,303 nipype.workflow WARNING:
	 [Node] Error on "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_brain_list" (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list)
201023-22:09:31,305 nipype.workflow ERROR:
	 Node check_for_s3_ANTs_prior_seg_template_brain_list failed to run on host cycle-0.
201023-22:09:31,307 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220931-ljcampos-check_for_s3_ANTs_prior_seg_template_brain_list-7a9bc5fe-5e30-474e-a9cc-82da032103bf.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/utils.py", line 106, in nodelist_runner
    result = node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 828, in emptydirs
    raise ex
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 498, in rmtree
    onerror(os.rmdir, path, sys.exc_info())
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 496, in rmtree
    os.rmdir(path)
OSError: [Errno 39] Directory not empty: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list/mapflow/_check_for_s3_ANTs_prior_seg_template_brain_list1'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 1250, in _run_interface
    self.config['execution']['stop_on_first_crash'])))
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 1125, in _collate_results
    for i, nresult, err in nodes:
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/utils.py", line 113, in nodelist_runner
    if result.runtime and hasattr(result.runtime, 'traceback'):
AttributeError: 'NoneType' object has no attribute 'runtime'

201023-22:09:31,311 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_anat" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_anat".
201023-22:09:31,325 nipype.workflow INFO:
	 [Node] Running "resampled_template_skull_for_anat" ("CPAC.utils.interfaces.function.Function")
201023-22:09:33,619 nipype.workflow WARNING:
	 [Node] Error on "_check_for_s3_ANTs_prior_seg_template_brain_list1" (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list/mapflow/_check_for_s3_ANTs_prior_seg_template_brain_list1)
201023-22:09:33,622 nipype.workflow WARNING:
	 [Node] Error on "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_brain_list" (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list)
201023-22:09:33,624 nipype.workflow ERROR:
	 Node check_for_s3_ANTs_prior_seg_template_brain_list failed to run on host cycle-0.
201023-22:09:33,626 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220933-ljcampos-check_for_s3_ANTs_prior_seg_template_brain_list-b7d5e66e-b5e6-4569-a34d-a2ef6fc6ec0e.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 1250, in _run_interface
    self.config['execution']['stop_on_first_crash'])))
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 1172, in _collate_results
    (self.name, '\n'.join(msg)))
Exception: Subnodes of node: check_for_s3_ANTs_prior_seg_template_brain_list failed:
Subnode 1 failed
Error: Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 555, in _run_interface
    return self._run_command(execute)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 635, in _run_command
    result = self._interface.run(cwd=outdir)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 569, in run
    vals = np.loadtxt(mon_sp.fname, delimiter=',')

  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/npyio.py", line 962, in loadtxt
    fh = np.lib._datasource.open(fname, 'rt', encoding=encoding)

  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 266, in open
    return ds.open(path, mode, encoding=encoding, newline=newline)

  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 624, in open
    raise IOError("%s not found." % path)

OSError: .proc-124352_time-1603490970.3339686_freq-1.00 not found.


During handling of the above exception, another exception occurred:


Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/utils.py", line 106, in nodelist_runner
    result = node.run(updatehash=updatehash)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list/mapflow/_check_for_s3_ANTs_prior_seg_template_brain_list1/_0xe56e13dd687db8fad5592687f497a9f7_unfinished.json'


During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list/_0x46979645826f842930a4be3d003d8d31_unfinished.json'

201023-22:09:33,631 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_anat" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_anat".
201023-22:09:33,645 nipype.workflow ERROR:
	 Node resampled_template_skull_for_anat failed to run on host cycle-0.
201023-22:09:33,646 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220933-ljcampos-resampled_template_skull_for_anat-c96c3a33-a374-43ab-8395-aaaa0823190f.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 828, in emptydirs
    raise ex
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 498, in rmtree
    onerror(os.rmdir, path, sys.exc_info())
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 496, in rmtree
    os.rmdir(path)
OSError: [Errno 39] Directory not empty: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_anat'

201023-22:09:33,651 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_anat" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_anat".
201023-22:09:33,664 nipype.workflow INFO:
	 [Node] Running "resampled_template_brain_for_anat" ("CPAC.utils.interfaces.function.Function")
201023-22:09:34,106 nipype.workflow WARNING:
	 [Node] Error on "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_anat" (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_anat)
201023-22:09:34,111 nipype.workflow ERROR:
	 Node resampled_template_skull_for_anat failed to run on host cycle-0.
201023-22:09:34,113 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220934-ljcampos-resampled_template_skull_for_anat-b35a7987-5f9c-421b-a8fd-f4b38c10a947.pklz
Traceback (most recent call last):
  File "/code/CPAC/utils/datasource.py", line 461, in check_for_s3
    bucket.download_file(Key=s3_key, Filename=local_path)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/inject.py", line 246, in bucket_download_file
    ExtraArgs=ExtraArgs, Callback=Callback, Config=Config)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/inject.py", line 172, in download_file
    extra_args=ExtraArgs, callback=Callback)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/transfer.py", line 307, in download_file
    future.result()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/futures.py", line 73, in result
    return self._coordinator.result()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/futures.py", line 233, in result
    raise self._exception
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/tasks.py", line 126, in __call__
    return self._execute_main(kwargs)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/tasks.py", line 150, in _execute_main
    return_value = self._main(**kwargs)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/download.py", line 582, in _main
    fileobj.seek(offset)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 335, in seek
    self._open_if_needed()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 318, in _open_if_needed
    self._fileobj = self._open_function(self._filename, self._mode)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 244, in open
    return open(filename, mode)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_anat/fcp-indi/resources/cpac/resources/MacaqueYerkes19_T1w_1.0mm.nii.gz.FC34fC89'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 521, in run
    runtime = self._run_interface(runtime)
  File "/code/CPAC/utils/interfaces/function.py", line 152, in _run_interface
    out = function_handle(**args)
  File "/code/CPAC/utils/datasource.py", line 541, in resolve_resolution
    local_path = check_for_s3(template)
  File "/code/CPAC/utils/datasource.py", line 482, in check_for_s3
    raise Exception(err_msg)
Exception: Unable to connect to bucket: "fcp-indi". Error message:
[Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_anat/fcp-indi/resources/cpac/resources/MacaqueYerkes19_T1w_1.0mm.nii.gz.FC34fC89'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 555, in _run_interface
    return self._run_command(execute)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 635, in _run_command
    result = self._interface.run(cwd=outdir)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 569, in run
    vals = np.loadtxt(mon_sp.fname, delimiter=',')
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/npyio.py", line 962, in loadtxt
    fh = np.lib._datasource.open(fname, 'rt', encoding=encoding)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 266, in open
    return ds.open(path, mode, encoding=encoding, newline=newline)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 624, in open
    raise IOError("%s not found." % path)
OSError: .proc-124348_time-1603490971.3278074_freq-1.00 not found.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_anat/_0xaa849319727ed0c876fc76bbac0d2824_unfinished.json'

201023-22:09:34,118 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_anat" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_anat".
201023-22:09:34,132 nipype.workflow ERROR:
	 Node resampled_template_brain_for_anat failed to run on host cycle-0.
201023-22:09:34,133 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220934-ljcampos-resampled_template_brain_for_anat-3a355d10-09bb-4573-ae44-6671f2a63d2c.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 828, in emptydirs
    raise ex
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 498, in rmtree
    onerror(os.rmdir, path, sys.exc_info())
  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 496, in rmtree
    os.rmdir(path)
OSError: [Errno 39] Directory not empty: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_anat'

201023-22:09:34,140 nipype.workflow INFO:
	 ***********************************
201023-22:09:34,141 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.select_scan_params.b0
201023-22:09:34,142 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220916-ljcampos-select_scan_params.b0-e9d70acb-9089-49cc-afb9-d8f52f91865b.pklz
201023-22:09:34,143 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.selectrest.b0
201023-22:09:34,143 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220918-ljcampos-selectrest.b0-b368b6c5-7a78-415e-a1ad-2bf702aff361.pklz
201023-22:09:34,144 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.anat_preproc_unet_0.check_for_s3_unet
201023-22:09:34,145 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220920-ljcampos-check_for_s3_unet-18062390-5065-42d5-b975-9e33e8493986.pklz
201023-22:09:34,145 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.anat_preproc_unet_0.anat_deoblique
201023-22:09:34,146 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220920-ljcampos-anat_deoblique-5f13e301-afd7-4481-a183-f5004e725669.pklz
201023-22:09:34,147 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_func_derivative
201023-22:09:34,147 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220923-ljcampos-resampled_template_brain_for_func_derivative-5d952ba5-14c4-492e-abff-e01ea74b0305.pklz
201023-22:09:34,148 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_func_preproc
201023-22:09:34,148 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220923-ljcampos-resampled_template_brain_for_func_preproc-3ab793f1-15e5-44ed-9257-ad9ad1fd6d50.pklz
201023-22:09:34,149 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_func_derivative
201023-22:09:34,149 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220925-ljcampos-resampled_template_skull_for_func_derivative-6b2adec8-2769-4369-b907-1f64133b9d3d.pklz
201023-22:09:34,150 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_func_preproc
201023-22:09:34,151 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220925-ljcampos-resampled_template_skull_for_func_preproc-3e3006ae-dec1-4d39-988b-c6cecb0d814f.pklz
201023-22:09:34,151 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_segmentation_list
201023-22:09:34,152 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220931-ljcampos-check_for_s3_ANTs_prior_seg_template_segmentation_list-6ee576dc-170d-4f09-8f45-4430664734a6.pklz
201023-22:09:34,153 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_brain_list
201023-22:09:34,153 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220931-ljcampos-check_for_s3_ANTs_prior_seg_template_brain_list-7a9bc5fe-5e30-474e-a9cc-82da032103bf.pklz
201023-22:09:34,155 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_anat
201023-22:09:34,156 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220934-ljcampos-resampled_template_skull_for_anat-b35a7987-5f9c-421b-a8fd-f4b38c10a947.pklz
201023-22:09:34,157 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_anat
201023-22:09:34,158 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220934-ljcampos-resampled_template_brain_for_anat-3a355d10-09bb-4573-ae44-6671f2a63d2c.pklz
201023-22:09:34,158 nipype.workflow INFO:
	 ***********************************
201023-22:09:34,171 nipype.workflow INFO:
	 

Error of subject workflow resting_preproc_sub-44135_ses-necfdg2017

CPAC run error:

    Pipeline configuration: cpac_default_monkey_skullstrip
    Subject workflow: resting_preproc_sub-44135_ses-necfdg2017
    Elapsed run time (minutes): 0.3863305926322937
    Timing information saved in /outputs/log/cpac_individual_timing_cpac_default_monkey_skullstrip.csv
    System time of start:      2020-10-23 22:09:14


201023-22:09:36,251 nipype.workflow WARNING:
	 [Node] Error on "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_anat" (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_anat)
201023-22:09:36,257 nipype.workflow ERROR:
	 Node resampled_template_brain_for_anat failed to run on host cycle-0.
201023-22:09:36,259 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220936-ljcampos-resampled_template_brain_for_anat-b0f0155e-1d03-400c-97d7-dc407f317ffa.pklz
Traceback (most recent call last):
  File "/code/CPAC/utils/datasource.py", line 461, in check_for_s3
    bucket.download_file(Key=s3_key, Filename=local_path)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/inject.py", line 246, in bucket_download_file
    ExtraArgs=ExtraArgs, Callback=Callback, Config=Config)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/inject.py", line 172, in download_file
    extra_args=ExtraArgs, callback=Callback)
  File "/usr/local/miniconda/lib/python3.7/site-packages/boto3/s3/transfer.py", line 307, in download_file
    future.result()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/futures.py", line 73, in result
    return self._coordinator.result()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/futures.py", line 233, in result
    raise self._exception
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/tasks.py", line 126, in __call__
    return self._execute_main(kwargs)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/tasks.py", line 150, in _execute_main
    return_value = self._main(**kwargs)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/download.py", line 582, in _main
    fileobj.seek(offset)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 335, in seek
    self._open_if_needed()
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 318, in _open_if_needed
    self._fileobj = self._open_function(self._filename, self._mode)
  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 244, in open
    return open(filename, mode)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_anat/fcp-indi/resources/cpac/resources/MacaqueYerkes19_T1w_1.0mm_brain.nii.gz.33258C2c'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 521, in run
    runtime = self._run_interface(runtime)
  File "/code/CPAC/utils/interfaces/function.py", line 152, in _run_interface
    out = function_handle(**args)
  File "/code/CPAC/utils/datasource.py", line 541, in resolve_resolution
    local_path = check_for_s3(template)
  File "/code/CPAC/utils/datasource.py", line 482, in check_for_s3
    raise Exception(err_msg)
Exception: Unable to connect to bucket: "fcp-indi". Error message:
[Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_anat/fcp-indi/resources/cpac/resources/MacaqueYerkes19_T1w_1.0mm_brain.nii.gz.33258C2c'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 555, in _run_interface
    return self._run_command(execute)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 635, in _run_command
    result = self._interface.run(cwd=outdir)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 569, in run
    vals = np.loadtxt(mon_sp.fname, delimiter=',')
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/npyio.py", line 962, in loadtxt
    fh = np.lib._datasource.open(fname, 'rt', encoding=encoding)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 266, in open
    return ds.open(path, mode, encoding=encoding, newline=newline)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 624, in open
    raise IOError("%s not found." % path)
OSError: .proc-124352_time-1603490973.6662755_freq-1.00 not found.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_anat/_0xd13cac71a57052b4be010aafc7332209_unfinished.json'

201023-22:09:36,265 nipype.workflow INFO:
	 ***********************************
201023-22:09:36,265 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.select_scan_params.b0
201023-22:09:36,266 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220917-ljcampos-select_scan_params.b0-b5553486-c63d-4056-b577-3c85fd684071.pklz
201023-22:09:36,267 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.selectrest.b0
201023-22:09:36,268 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220917-ljcampos-selectrest.b0-2e654e50-3201-4226-923c-87f03f0e51e5.pklz
201023-22:09:36,269 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.check_func_scan.b0
201023-22:09:36,270 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220917-ljcampos-check_func_scan.b0-c7b1c7b0-46f3-4a4c-a605-4fee1fa7f157.pklz
201023-22:09:36,270 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.anat_preproc_unet_0.check_for_s3_unet
201023-22:09:36,271 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220921-ljcampos-check_for_s3_unet-f6874af8-f070-430d-85f4-251ce37b9a99.pklz
201023-22:09:36,272 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.anat_preproc_unet_0.anat_deoblique
201023-22:09:36,272 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220921-ljcampos-anat_deoblique-4079c8f5-9fe1-478a-b5e8-fcc7c8086bb5.pklz
201023-22:09:36,273 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_func_derivative
201023-22:09:36,274 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220921-ljcampos-resampled_template_brain_for_func_derivative-ba75dd54-da19-4c86-8b5e-930ef53d16d7.pklz
201023-22:09:36,274 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_func_preproc
201023-22:09:36,275 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220924-ljcampos-resampled_template_brain_for_func_preproc-0cda144f-3955-4a0b-b06a-33ccab83518e.pklz
201023-22:09:36,275 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_func_derivative
201023-22:09:36,276 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220924-ljcampos-resampled_template_skull_for_func_derivative-52cb6d93-261a-44cc-a1a2-485aca0612c8.pklz
201023-22:09:36,277 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_func_preproc
201023-22:09:36,277 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220927-ljcampos-resampled_template_skull_for_func_preproc-d804bd5c-0b19-4484-a5e4-e7efa33262b2.pklz
201023-22:09:36,278 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_segmentation_list
201023-22:09:36,278 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220927-ljcampos-check_for_s3_ANTs_prior_seg_template_segmentation_list-8e194409-a5ed-435a-9898-1bae185307b4.pklz
201023-22:09:36,279 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_brain_list
201023-22:09:36,280 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220933-ljcampos-check_for_s3_ANTs_prior_seg_template_brain_list-b7d5e66e-b5e6-4569-a34d-a2ef6fc6ec0e.pklz
201023-22:09:36,280 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_anat
201023-22:09:36,281 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220933-ljcampos-resampled_template_skull_for_anat-c96c3a33-a374-43ab-8395-aaaa0823190f.pklz
201023-22:09:36,281 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_anat
201023-22:09:36,282 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220936-ljcampos-resampled_template_brain_for_anat-b0f0155e-1d03-400c-97d7-dc407f317ffa.pklz
201023-22:09:36,283 nipype.workflow INFO:
	 ***********************************
201023-22:09:36,291 nipype.workflow INFO:
	 

Error of subject workflow resting_preproc_sub-44135_ses-necfdg2017

CPAC run error:

    Pipeline configuration: cpac_default_monkey_skullstrip
    Subject workflow: resting_preproc_sub-44135_ses-necfdg2017
    Elapsed run time (minutes): 0.4197879950205485
    Timing information saved in /outputs/log/cpac_individual_timing_cpac_default_monkey_skullstrip.csv
    System time of start:      2020-10-23 22:09:14


201023-22:09:46,771 nipype.interface INFO:
	 stderr 2020-10-23T22:09:46.771482:++ 3drefit processed 1 datasets
201023-22:09:46,937 nipype.workflow WARNING:
	 [Node] Error on "resting_preproc_sub-44135_ses-necfdg2017.anat_preproc_unet_0.anat_deoblique" (/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/anat_deoblique)
201023-22:09:46,942 nipype.workflow ERROR:
	 Node anat_deoblique failed to run on host cycle-0.
201023-22:09:46,943 nipype.workflow ERROR:
	 Saving crash info to /outputs/crash/crash-20201023-220946-ljcampos-anat_deoblique-3fdf89fe-1926-4454-815d-f1196e40a47b.pklz
Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 555, in _run_interface
    return self._run_command(execute)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 635, in _run_command
    result = self._interface.run(cwd=outdir)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 569, in run
    vals = np.loadtxt(mon_sp.fname, delimiter=',')
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/npyio.py", line 962, in loadtxt
    fh = np.lib._datasource.open(fname, 'rt', encoding=encoding)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 266, in open
    return ds.open(path, mode, encoding=encoding, newline=newline)
  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 624, in open
    raise IOError("%s not found." % path)
OSError: .proc-124345_time-1603490958.7245622_freq-1.00 not found.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)
  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)
FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/anat_deoblique/_0x33d42211e8a4d754f4b8f94cdc2e9843_unfinished.json'

201023-22:09:46,948 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_lateral_ventricles_mask" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_lateral_ventricles_mask".
201023-22:09:46,951 nipype.workflow INFO:
	 [Node] Cached "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_lateral_ventricles_mask" - collecting precomputed outputs
201023-22:09:46,952 nipype.workflow INFO:
	 [Node] "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_lateral_ventricles_mask" found cached.
201023-22:09:46,955 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_func_derivative" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_derivative".
201023-22:09:46,973 nipype.workflow INFO:
	 [Node] Running "resampled_template_brain_for_func_derivative" ("CPAC.utils.interfaces.function.Function")
201023-22:09:49,494 nipype.workflow INFO:
	 [Node] Setting-up "template_brain_for_func_derivative" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_derivative/template_brain_for_func_derivative".
201023-22:09:49,515 nipype.workflow INFO:
	 [Node] Running "template_brain_for_func_derivative" ("nipype.interfaces.afni.utils.Resample"), a CommandLine Interface with command:
3dresample -prefix MacaqueYerkes19_T1w_2mm_brain_resample.nii.gz -rmode Cu -dxyz 2.000000 2.000000 2.000000 -inset /outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_derivative/template_brain_for_func_derivative/MacaqueYerkes19_T1w_2mm_brain.nii.gz
201023-22:09:50,86 nipype.workflow INFO:
	 [Node] Finished "template_brain_for_func_derivative".
201023-22:09:50,153 nipype.workflow INFO:
	 [Node] Finished "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_func_derivative".
201023-22:09:50,156 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_func_preproc" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_preproc".
201023-22:09:50,171 nipype.workflow INFO:
	 [Node] Running "resampled_template_brain_for_func_preproc" ("CPAC.utils.interfaces.function.Function")
201023-22:09:52,586 nipype.workflow INFO:
	 [Node] Setting-up "template_brain_for_func_preproc" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_preproc/template_brain_for_func_preproc".
201023-22:09:52,604 nipype.workflow INFO:
	 [Node] Running "template_brain_for_func_preproc" ("nipype.interfaces.afni.utils.Resample"), a CommandLine Interface with command:
3dresample -prefix MacaqueYerkes19_T1w_2mm_brain_resample.nii.gz -rmode Cu -dxyz 2.000000 2.000000 2.000000 -inset /outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_func_preproc/template_brain_for_func_preproc/MacaqueYerkes19_T1w_2mm_brain.nii.gz
201023-22:09:53,91 nipype.workflow INFO:
	 [Node] Finished "template_brain_for_func_preproc".
201023-22:09:53,156 nipype.workflow INFO:
	 [Node] Finished "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_func_preproc".
201023-22:09:53,159 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.func_template_edge_0" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_template_edge_0".
201023-22:09:53,172 nipype.workflow INFO:
	 [Node] Running "func_template_edge_0" ("CPAC.utils.interfaces.function.Function")
201023-22:09:53,616 nipype.workflow INFO:
	 [Node] Finished "resting_preproc_sub-44135_ses-necfdg2017.func_template_edge_0".
201023-22:09:53,619 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.montage_mfi_0.resample_o" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/montage_mfi_0/resample_o".
201023-22:09:53,635 nipype.workflow INFO:
	 [Node] Running "resample_o" ("CPAC.utils.interfaces.function.Function")
201023-22:09:54,43 nipype.workflow INFO:
	 [Node] Finished "resting_preproc_sub-44135_ses-necfdg2017.montage_mfi_0.resample_o".
201023-22:09:54,47 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_func_derivative" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_derivative".
201023-22:09:54,64 nipype.workflow INFO:
	 [Node] Running "resampled_template_skull_for_func_derivative" ("CPAC.utils.interfaces.function.Function")
201023-22:09:58,307 nipype.workflow INFO:
	 [Node] Setting-up "template_skull_for_func_derivative" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_derivative/template_skull_for_func_derivative".
201023-22:09:58,324 nipype.workflow INFO:
	 [Node] Running "template_skull_for_func_derivative" ("nipype.interfaces.afni.utils.Resample"), a CommandLine Interface with command:
3dresample -prefix MacaqueYerkes19_T1w_2mm_resample.nii.gz -rmode Cu -dxyz 2.000000 2.000000 2.000000 -inset /outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_derivative/template_skull_for_func_derivative/MacaqueYerkes19_T1w_2mm.nii.gz
201023-22:09:58,865 nipype.workflow INFO:
	 [Node] Finished "template_skull_for_func_derivative".
201023-22:09:58,927 nipype.workflow INFO:
	 [Node] Finished "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_func_derivative".
201023-22:09:58,931 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_func_preproc" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_preproc".
201023-22:09:58,948 nipype.workflow INFO:
	 [Node] Running "resampled_template_skull_for_func_preproc" ("CPAC.utils.interfaces.function.Function")
201023-22:10:02,700 nipype.workflow INFO:
	 [Node] Setting-up "template_skull_for_func_preproc" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_preproc/template_skull_for_func_preproc".
201023-22:10:02,718 nipype.workflow INFO:
	 [Node] Running "template_skull_for_func_preproc" ("nipype.interfaces.afni.utils.Resample"), a CommandLine Interface with command:
3dresample -prefix MacaqueYerkes19_T1w_2mm_resample.nii.gz -rmode Cu -dxyz 2.000000 2.000000 2.000000 -inset /outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_func_preproc/template_skull_for_func_preproc/MacaqueYerkes19_T1w_2mm.nii.gz
201023-22:10:03,407 nipype.workflow INFO:
	 [Node] Finished "template_skull_for_func_preproc".
201023-22:10:03,472 nipype.workflow INFO:
	 [Node] Finished "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_func_preproc".
201023-22:10:03,476 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_segmentation_list" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_segmentation_list".
201023-22:10:03,491 nipype.workflow INFO:
	 [Node] Setting-up "_check_for_s3_ANTs_prior_seg_template_segmentation_list0" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_segmentation_list/mapflow/_check_for_s3_ANTs_prior_seg_template_segmentation_list0".
201023-22:10:03,509 nipype.workflow INFO:
	 [Node] Running "_check_for_s3_ANTs_prior_seg_template_segmentation_list0" ("CPAC.utils.interfaces.function.Function")
201023-22:10:03,852 nipype.workflow INFO:
	 [Node] Finished "_check_for_s3_ANTs_prior_seg_template_segmentation_list0".
201023-22:10:03,856 nipype.workflow INFO:
	 [Node] Setting-up "_check_for_s3_ANTs_prior_seg_template_segmentation_list1" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_segmentation_list/mapflow/_check_for_s3_ANTs_prior_seg_template_segmentation_list1".
201023-22:10:03,860 nipype.workflow INFO:
	 [Node] Cached "_check_for_s3_ANTs_prior_seg_template_segmentation_list1" - collecting precomputed outputs
201023-22:10:03,861 nipype.workflow INFO:
	 [Node] "_check_for_s3_ANTs_prior_seg_template_segmentation_list1" found cached.
201023-22:10:03,874 nipype.workflow INFO:
	 [Node] Finished "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_segmentation_list".
201023-22:10:03,875 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_brain_list" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list".
201023-22:10:03,891 nipype.workflow INFO:
	 [Node] Setting-up "_check_for_s3_ANTs_prior_seg_template_brain_list0" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list/mapflow/_check_for_s3_ANTs_prior_seg_template_brain_list0".
201023-22:10:03,895 nipype.workflow INFO:
	 [Node] Cached "_check_for_s3_ANTs_prior_seg_template_brain_list0" - collecting precomputed outputs
201023-22:10:03,896 nipype.workflow INFO:
	 [Node] "_check_for_s3_ANTs_prior_seg_template_brain_list0" found cached.
201023-22:10:03,899 nipype.workflow INFO:
	 [Node] Setting-up "_check_for_s3_ANTs_prior_seg_template_brain_list1" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list/mapflow/_check_for_s3_ANTs_prior_seg_template_brain_list1".
201023-22:10:03,919 nipype.workflow INFO:
	 [Node] Running "_check_for_s3_ANTs_prior_seg_template_brain_list1" ("CPAC.utils.interfaces.function.Function")
201023-22:10:04,259 nipype.workflow INFO:
	 [Node] Finished "_check_for_s3_ANTs_prior_seg_template_brain_list1".
201023-22:10:04,270 nipype.workflow INFO:
	 [Node] Finished "resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_brain_list".
201023-22:10:04,271 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_anat" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_anat".
201023-22:10:04,287 nipype.workflow INFO:
	 [Node] Running "resampled_template_skull_for_anat" ("CPAC.utils.interfaces.function.Function")
201023-22:10:07,212 nipype.workflow INFO:
	 [Node] Setting-up "template_skull_for_anat" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_anat/template_skull_for_anat".
201023-22:10:07,230 nipype.workflow INFO:
	 [Node] Running "template_skull_for_anat" ("nipype.interfaces.afni.utils.Resample"), a CommandLine Interface with command:
3dresample -prefix MacaqueYerkes19_T1w_1.nii.gz -rmode Cu -dxyz 2.000000 2.000000 2.000000 -inset /outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_skull_for_anat/template_skull_for_anat/MacaqueYerkes19_T1w_1.0mm.nii.gz
201023-22:10:07,795 nipype.workflow INFO:
	 [Node] Finished "template_skull_for_anat".
201023-22:10:07,857 nipype.workflow INFO:
	 [Node] Finished "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_anat".
201023-22:10:07,860 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_anat" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_anat".
201023-22:10:07,876 nipype.workflow INFO:
	 [Node] Running "resampled_template_brain_for_anat" ("CPAC.utils.interfaces.function.Function")
201023-22:10:10,488 nipype.workflow INFO:
	 [Node] Setting-up "template_brain_for_anat" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_anat/template_brain_for_anat".
201023-22:10:10,504 nipype.workflow INFO:
	 [Node] Running "template_brain_for_anat" ("nipype.interfaces.afni.utils.Resample"), a CommandLine Interface with command:
3dresample -prefix MacaqueYerkes19_T1w_1.nii.gz -rmode Cu -dxyz 2.000000 2.000000 2.000000 -inset /outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_anat/template_brain_for_anat/MacaqueYerkes19_T1w_1.0mm_brain.nii.gz
201023-22:10:11,52 nipype.workflow INFO:
	 [Node] Finished "template_brain_for_anat".
201023-22:10:11,115 nipype.workflow INFO:
	 [Node] Finished "resting_preproc_sub-44135_ses-necfdg2017.resampled_template_brain_for_anat".
201023-22:10:11,119 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.anat_preproc_unet_0.template_brain_mask" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/template_brain_mask".
201023-22:10:11,137 nipype.workflow INFO:
	 [Node] Running "template_brain_mask" ("nipype.interfaces.fsl.maths.MathsCommand"), a CommandLine Interface with command:
fslmaths /outputs/working/resting_preproc_sub-44135_ses-necfdg2017/resampled_template_brain_for_anat/template_brain_for_anat/MacaqueYerkes19_T1w_1.nii.gz -bin /outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_preproc_unet_0/template_brain_mask/MacaqueYerkes19_T1w_1_maths.nii.gz
201023-22:10:11,671 nipype.workflow INFO:
	 [Node] Finished "resting_preproc_sub-44135_ses-necfdg2017.anat_preproc_unet_0.template_brain_mask".
201023-22:10:11,675 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.anat_template_edge_0" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/anat_template_edge_0".
201023-22:10:11,688 nipype.workflow INFO:
	 [Node] Running "anat_template_edge_0" ("CPAC.utils.interfaces.function.Function")
201023-22:10:12,94 nipype.workflow INFO:
	 [Node] Finished "resting_preproc_sub-44135_ses-necfdg2017.anat_template_edge_0".
201023-22:10:12,98 nipype.workflow INFO:
	 [Node] Setting-up "resting_preproc_sub-44135_ses-necfdg2017.montage_mni_anat_0.resample_o" in "/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/montage_mni_anat_0/resample_o".
201023-22:10:12,114 nipype.workflow INFO:
	 [Node] Running "resample_o" ("CPAC.utils.interfaces.function.Function")
201023-22:10:12,512 nipype.workflow INFO:
	 [Node] Finished "resting_preproc_sub-44135_ses-necfdg2017.montage_mni_anat_0.resample_o".
201023-22:10:12,516 nipype.workflow INFO:
	 ***********************************
201023-22:10:12,516 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.select_scan_params.b0
201023-22:10:12,517 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220917-ljcampos-select_scan_params.b0-2b218a25-16fb-4379-bc5b-6866b9a228c4.pklz
201023-22:10:12,518 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.selectrest.b0
201023-22:10:12,518 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220917-ljcampos-selectrest.b0-fedac1c2-2e33-43ce-bed4-29585c7c74b9.pklz
201023-22:10:12,519 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.check_func_scan.b0
201023-22:10:12,520 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220917-ljcampos-check_func_scan.b0-b4cc5a1d-4fb0-435b-bb09-0be8c7bd0c4b.pklz
201023-22:10:12,520 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.anat_preproc_unet_0.check_for_s3_unet
201023-22:10:12,521 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220917-ljcampos-check_for_s3_unet-ea9c7f08-562d-4b39-b052-b6bd1615e3cb.pklz
201023-22:10:12,522 nipype.workflow ERROR:
	 could not run node: resting_preproc_sub-44135_ses-necfdg2017.anat_preproc_unet_0.anat_deoblique
201023-22:10:12,522 nipype.workflow INFO:
	 crashfile: /outputs/crash/crash-20201023-220946-ljcampos-anat_deoblique-3fdf89fe-1926-4454-815d-f1196e40a47b.pklz
201023-22:10:12,523 nipype.workflow INFO:
	 ***********************************
201023-22:10:12,541 nipype.workflow INFO:
	 

Error of subject workflow resting_preproc_sub-44135_ses-necfdg2017

CPAC run error:

    Pipeline configuration: cpac_default_monkey_skullstrip
    Subject workflow: resting_preproc_sub-44135_ses-necfdg2017
    Elapsed run time (minutes): 1.0263908942540487
    Timing information saved in /outputs/log/cpac_individual_timing_cpac_default_monkey_skullstrip.csv
    System time of start:      2020-10-23 22:09:14


```