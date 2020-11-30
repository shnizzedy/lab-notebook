---
title: "crash-20201112-221527-av2902-select_scan_params.b6-50adcc1d-4260-4a58-8f4c-43b203b0ab52.pklz"
slug: "crash-20201112-221527-av2902-select_scan_params.b6-50adcc1d-4260-4a58-8f4c-43b203b0ab52.pklz"
categories: [files]
author: Anna Vannucci
date: 2020-11-16
---
```BASH
resting_preproc_sub-026_ses-3.func_gather_0.select_scan_params
```
```Python
Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 566, in move
    os.rename(src, real_dst)

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/tmp/resting_preproc_sub-026_ses-3/func_gather_0/_scan_rewav_run-2/select_scan_params/_0x1559e6f6f0f682cbba30330aea522823_unfinished.json' -> '/outputs/tmp/resting_preproc_sub-026_ses-3/func_gather_0/_scan_rewav_run-2/select_scan_params/_0x1559e6f6f0f682cbba30330aea522823.json'


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

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/tmp/resting_preproc_sub-026_ses-3/func_gather_0/_scan_rewav_run-2/select_scan_params/_0x1559e6f6f0f682cbba30330aea522823_unfinished.json'
```