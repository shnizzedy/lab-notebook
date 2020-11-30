---
title: "crash-20201112-221310-av2902-resampled_template_skull_for_anat-7c5afe82-a9f9-4021-aede-def6d25f1240.pklz"
slug: "crash-20201112-221310-av2902-resampled_template_skull_for_anat-7c5afe82-a9f9-4021-aede-def6d25f1240.pklz"
categories: [files]
author: Anna Vannucci
date: 2020-11-16
---
```BASH
resting_preproc_sub-206_ses-1.resampled_template_skull_for_anat
```
```Python
Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 521, in run
    runtime = self._run_interface(runtime)

  File "/code/CPAC/utils/interfaces/function.py", line 152, in _run_interface
    out = function_handle(**args)

  File "/code/CPAC/utils/datasource.py", line 586, in resolve_resolution
    resampled_template = resample.run()

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 402, in run
    outdir = self.output_dir()

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 269, in output_dir
    self._output_dir = op.realpath(op.join(outputdir, self.name))

  File "/usr/local/miniconda/lib/python3.7/posixpath.py", line 396, in realpath
    return abspath(path)

  File "/usr/local/miniconda/lib/python3.7/posixpath.py", line 383, in abspath
    cwd = os.getcwd()

FileNotFoundError: [Errno 2] No such file or directory


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