---
title: "crash-20201112-221525-av2902-sinker_0_raw_functional.b8-dcc67a78-7222-47ad-96a1-8242b82933c9.pklz"
slug: "crash-20201112-221525-av2902-sinker_0_raw_functional.b8-dcc67a78-7222-47ad-96a1-8242b82933c9.pklz"
categories: [files]
author: Anna Vannucci
date: 2020-11-16
---
```BASH
resting_preproc_sub-026_ses-3.sinker_0_raw_functional
```
```Python
Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 566, in move
    os.rename(src, real_dst)

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/tmp/resting_preproc_sub-026_ses-3/_scan_tgng_run-2/sinker_0_raw_functional/_0xf95be67d8b3efdfdb260328cc28327bb_unfinished.json' -> '/outputs/tmp/resting_preproc_sub-026_ses-3/_scan_tgng_run-2/sinker_0_raw_functional/_0xf95be67d8b3efdfdb260328cc28327bb.json'


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

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/tmp/resting_preproc_sub-026_ses-3/_scan_tgng_run-2/sinker_0_raw_functional/_0xf95be67d8b3efdfdb260328cc28327bb_unfinished.json'
```