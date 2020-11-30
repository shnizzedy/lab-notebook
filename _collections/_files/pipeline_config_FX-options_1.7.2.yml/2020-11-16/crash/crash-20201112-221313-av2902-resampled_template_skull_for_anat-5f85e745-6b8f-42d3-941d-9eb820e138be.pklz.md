---
title: "crash-20201112-221313-av2902-resampled_template_skull_for_anat-5f85e745-6b8f-42d3-941d-9eb820e138be.pklz"
slug: "crash-20201112-221313-av2902-resampled_template_skull_for_anat-5f85e745-6b8f-42d3-941d-9eb820e138be.pklz"
categories: [files]
author: Anna Vannucci
date: 2020-11-16
---
```BASH
resting_preproc_sub-206_ses-1.resampled_template_skull_for_anat
```
```Python
Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 566, in move
    os.rename(src, real_dst)

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/tmp/resting_preproc_sub-206_ses-1/resampled_template_skull_for_anat/_0x66ccbe1150e4c53dbb06b60b12aa0fe8_unfinished.json' -> '/outputs/tmp/resting_preproc_sub-206_ses-1/resampled_template_skull_for_anat/_0x66ccbe1150e4c53dbb06b60b12aa0fe8.json'


During handling of the above exception, another exception occurred:


Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 480, in run
    hashfile_unfinished.replace('_unfinished', ''))

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 580, in move
    copy_function(src, real_dst)

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 266, in copy2
    copyfile(src, dst, follow_symlinks=follow_symlinks)

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 120, in copyfile
    with open(src, 'rb') as fsrc:

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/tmp/resting_preproc_sub-206_ses-1/resampled_template_skull_for_anat/_0x66ccbe1150e4c53dbb06b60b12aa0fe8_unfinished.json'
```