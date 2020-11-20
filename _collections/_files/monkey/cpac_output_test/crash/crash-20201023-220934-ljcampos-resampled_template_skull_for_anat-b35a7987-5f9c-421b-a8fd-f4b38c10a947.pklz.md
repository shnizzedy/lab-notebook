---
title: "crash-20201023-220934-ljcampos-resampled_template_skull_for_anat-b35a7987-5f9c-421b-a8fd-f4b38c10a947.pklz"
slug: "crash-20201023-220934-ljcampos-resampled_template_skull_for_anat-b35a7987-5f9c-421b-a8fd-f4b38c10a947.pklz"
categories: [files]
author: Lillian Campos
date: 2020-11-20
---
```BASH
resting_preproc_sub-44135_ses-necfdg2017.resampled_template_skull_for_anat
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
```