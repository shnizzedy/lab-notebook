---
title: "crash-20201112-220558-av2902-select_scan_params.b2-56b9681b-6399-4b4c-be3c-87e4421ff524.pklz"
slug: "crash-20201112-220558-av2902-select_scan_params.b2-56b9681b-6399-4b4c-be3c-87e4421ff524.pklz"
categories: [files]
author: Anna Vannucci
date: 2020-11-16
---
```BASH
resting_preproc_sub-026_ses-2.func_gather_0.select_scan_params
```
```Python
Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 566, in move
    os.rename(src, real_dst)

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/tmp/resting_preproc_sub-026_ses-2/func_gather_0/_scan_rest_run-1/select_scan_params/_0x3f91034bc8ad51786cf917ab092c779c_unfinished.json' -> '/outputs/tmp/resting_preproc_sub-026_ses-2/func_gather_0/_scan_rest_run-1/select_scan_params/_0x3f91034bc8ad51786cf917ab092c779c.json'


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

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/tmp/resting_preproc_sub-026_ses-2/func_gather_0/_scan_rest_run-1/select_scan_params/_0x3f91034bc8ad51786cf917ab092c779c_unfinished.json'
```