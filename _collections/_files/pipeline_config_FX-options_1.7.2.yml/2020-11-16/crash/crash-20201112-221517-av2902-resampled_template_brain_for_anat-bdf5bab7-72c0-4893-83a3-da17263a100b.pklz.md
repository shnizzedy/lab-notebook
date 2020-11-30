---
title: "crash-20201112-221517-av2902-resampled_template_brain_for_anat-bdf5bab7-72c0-4893-83a3-da17263a100b.pklz"
slug: "crash-20201112-221517-av2902-resampled_template_brain_for_anat-bdf5bab7-72c0-4893-83a3-da17263a100b.pklz"
categories: [files]
author: Anna Vannucci
date: 2020-11-16
---
```BASH
resting_preproc_sub-026_ses-2.resampled_template_brain_for_anat
```
```Python
Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 566, in move
    os.rename(src, real_dst)

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/tmp/resting_preproc_sub-026_ses-2/resampled_template_brain_for_anat/template_brain_for_anat/_0xcf1d0e2343535ec937c915b26dee9c5a_unfinished.json' -> '/outputs/tmp/resting_preproc_sub-026_ses-2/resampled_template_brain_for_anat/template_brain_for_anat/_0xcf1d0e2343535ec937c915b26dee9c5a.json'


During handling of the above exception, another exception occurred:


Traceback (most recent call last):

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

  File "/code/CPAC/utils/datasource.py", line 586, in resolve_resolution
    resampled_template = resample.run()

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 480, in run
    hashfile_unfinished.replace('_unfinished', ''))

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 580, in move
    copy_function(src, real_dst)

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 266, in copy2
    copyfile(src, dst, follow_symlinks=follow_symlinks)

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 120, in copyfile
    with open(src, 'rb') as fsrc:

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/tmp/resting_preproc_sub-026_ses-2/resampled_template_brain_for_anat/template_brain_for_anat/_0xcf1d0e2343535ec937c915b26dee9c5a_unfinished.json'


During handling of the above exception, another exception occurred:


Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/tmp/resting_preproc_sub-026_ses-2/resampled_template_brain_for_anat/_0xc06dea8a5398854f64b41a336e53b651_unfinished.json'
```