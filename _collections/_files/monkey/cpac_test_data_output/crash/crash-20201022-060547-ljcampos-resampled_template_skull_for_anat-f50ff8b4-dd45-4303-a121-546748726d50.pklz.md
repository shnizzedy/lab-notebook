---
title: "crash-20201022-060547-ljcampos-resampled_template_skull_for_anat-f50ff8b4-dd45-4303-a121-546748726d50.pklz"
slug: "crash-20201022-060547-ljcampos-resampled_template_skull_for_anat-f50ff8b4-dd45-4303-a121-546748726d50.pklz"
categories: [files]
author: [Lillian Campos]
date: 2020-10-22
---
```BASH
resting_preproc_sub-032182_ses-001.resampled_template_skull_for_anat
```
```Python
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

  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/download.py", line 612, in _main
    osutil.rename_file(fileobj.name, final_filename)

  File "/usr/local/miniconda/lib/python3.7/site-packages/s3transfer/utils.py", line 256, in rename_file
    rename_file(current_filename, new_filename)

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-032182_ses-001/resampled_template_skull_for_anat/fcp-indi/resources/cpac/resources/MacaqueYerkes19_T1w_1.0mm.nii.gz.BbdFF7cE' -> '/outputs/working/resting_preproc_sub-032182_ses-001/resampled_template_skull_for_anat/fcp-indi/resources/cpac/resources/MacaqueYerkes19_T1w_1.0mm.nii.gz'


During handling of the above exception, another exception occurred:


Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 555, in _run_interface
    return self._run_command(execute)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 635, in _run_command
    result = self._interface.run(cwd=outdir)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 521, in run
    runtime = self._run_interface(runtime)

  File "/code/CPAC/utils/interfaces/function.py", line 152, in _run_interface
    out = function_handle(**args)

  File "/code/CPAC/utils/datasource.py", line 541, in resolve_resolution
    local_path = check_for_s3(template)

  File "/code/CPAC/utils/datasource.py", line 482, in check_for_s3
    raise Exception(err_msg)

Exception: Unable to connect to bucket: "fcp-indi". Error message:
[Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-032182_ses-001/resampled_template_skull_for_anat/fcp-indi/resources/cpac/resources/MacaqueYerkes19_T1w_1.0mm.nii.gz.BbdFF7cE' -> '/outputs/working/resting_preproc_sub-032182_ses-001/resampled_template_skull_for_anat/fcp-indi/resources/cpac/resources/MacaqueYerkes19_T1w_1.0mm.nii.gz'
```