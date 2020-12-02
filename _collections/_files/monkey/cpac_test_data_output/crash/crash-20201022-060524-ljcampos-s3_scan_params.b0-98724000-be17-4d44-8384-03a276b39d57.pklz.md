---
title: "crash-20201022-060524-ljcampos-s3_scan_params.b0-98724000-be17-4d44-8384-03a276b39d57.pklz"
slug: "crash-20201022-060524-ljcampos-s3_scan_params.b0-98724000-be17-4d44-8384-03a276b39d57.pklz"
categories: [files]
author: [Lillian Campos]
date: 2020-10-22
---
```BASH
resting_preproc_sub-032182_ses-001.func_gather_0.s3_scan_params
```
```Python
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

OSError: .proc-20063_time-1603346723.700666_freq-1.00 not found.


During handling of the above exception, another exception occurred:


Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-032182_ses-001/func_gather_0/_scan_resting_run-1/s3_scan_params/_0x2d77ac0bc6ef8e89d7ae626d964e5df5_unfinished.json'
```