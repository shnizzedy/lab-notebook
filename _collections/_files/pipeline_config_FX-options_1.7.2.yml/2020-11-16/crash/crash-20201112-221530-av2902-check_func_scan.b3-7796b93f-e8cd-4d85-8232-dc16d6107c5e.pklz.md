---
title: "crash-20201112-221530-av2902-check_func_scan.b3-7796b93f-e8cd-4d85-8232-dc16d6107c5e.pklz"
slug: "crash-20201112-221530-av2902-check_func_scan.b3-7796b93f-e8cd-4d85-8232-dc16d6107c5e.pklz"
categories: [files]
author: Anna Vannucci
date: 2020-11-16
---
```BASH
resting_preproc_sub-026_ses-3.func_gather_0.check_func_scan
```
```Python
Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 566, in move
    os.rename(src, real_dst)

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/tmp/resting_preproc_sub-026_ses-3/func_gather_0/_scan_conditioning_run-1/check_func_scan/_0x1baa350ee652d6d766548dfe1383c825_unfinished.json' -> '/outputs/tmp/resting_preproc_sub-026_ses-3/func_gather_0/_scan_conditioning_run-1/check_func_scan/_0x1baa350ee652d6d766548dfe1383c825.json'


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

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/tmp/resting_preproc_sub-026_ses-3/func_gather_0/_scan_conditioning_run-1/check_func_scan/_0x1baa350ee652d6d766548dfe1383c825_unfinished.json'
```