---
title: "crash-20201112-221549-av2902-resampled_template_skull_for_func_preproc-d990e452-b918-4f2a-9bd8-af9267ce50dc.pklz"
slug: "crash-20201112-221549-av2902-resampled_template_skull_for_func_preproc-d990e452-b918-4f2a-9bd8-af9267ce50dc.pklz"
categories: [files]
author: Anna Vannucci
date: 2020-11-16
---
```BASH
resting_preproc_sub-026_ses-3.resampled_template_skull_for_func_preproc
```
```Python
Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 523, in run
    outputs = self.aggregate_outputs(runtime)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 597, in aggregate_outputs
    predicted_outputs = self._list_outputs()

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/afni/base.py", line 218, in _list_outputs
    outputs = super(AFNICommand, self)._list_outputs()

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 1167, in _list_outputs
    outputs[out_name] = os.path.abspath(fname)

  File "/usr/local/miniconda/lib/python3.7/posixpath.py", line 383, in abspath
    cwd = os.getcwd()

FileNotFoundError: [Errno 2] No such file or directory


During handling of the above exception, another exception occurred:


Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 635, in _run_command
    result = self._interface.run(cwd=outdir)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 569, in run
    vals = np.loadtxt(mon_sp.fname, delimiter=',')

  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/npyio.py", line 962, in loadtxt
    fh = np.lib._datasource.open(fname, 'rt', encoding=encoding)

  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 265, in open
    ds = DataSource(destpath)

  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 322, in __init__
    self._destpath = os.path.abspath(destpath)

  File "/usr/local/miniconda/lib/python3.7/posixpath.py", line 383, in abspath
    cwd = os.getcwd()

FileNotFoundError: [Errno 2] No such file or directory


During handling of the above exception, another exception occurred:


Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 555, in _run_interface
    return self._run_command(execute)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 639, in _run_command
    _save_resultfile(result, outdir, self.name)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/utils.py", line 309, in save_resultfile
    savepkl(resultsfile, result)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 720, in savepkl
    pkl_file = gzip.open(filename, 'wb')

  File "/usr/local/miniconda/lib/python3.7/gzip.py", line 53, in open
    binary_file = GzipFile(filename, gz_mode, compresslevel)

  File "/usr/local/miniconda/lib/python3.7/gzip.py", line 163, in __init__
    fileobj = self.myfileobj = builtins.open(filename, mode or 'rb')

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/tmp/resting_preproc_sub-026_ses-3/resampled_template_skull_for_func_preproc/template_skull_for_func_preproc/result_template_skull_for_func_preproc.pklz'


During handling of the above exception, another exception occurred:


Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 521, in run
    runtime = self._run_interface(runtime)

  File "/code/CPAC/utils/interfaces/function.py", line 152, in _run_interface
    out = function_handle(**args)

  File "/code/CPAC/utils/datasource.py", line 586, in resolve_resolution
    resampled_template = resample.run()

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/tmp/resting_preproc_sub-026_ses-3/resampled_template_skull_for_func_preproc/template_skull_for_func_preproc/_0x515bd94bea7e6e1cc7ab705d0b32d7d0_unfinished.json'


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

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 569, in run
    vals = np.loadtxt(mon_sp.fname, delimiter=',')

  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/npyio.py", line 962, in loadtxt
    fh = np.lib._datasource.open(fname, 'rt', encoding=encoding)

  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 265, in open
    ds = DataSource(destpath)

  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 322, in __init__
    self._destpath = os.path.abspath(destpath)

  File "/usr/local/miniconda/lib/python3.7/posixpath.py", line 383, in abspath
    cwd = os.getcwd()

FileNotFoundError: [Errno 2] No such file or directory
```