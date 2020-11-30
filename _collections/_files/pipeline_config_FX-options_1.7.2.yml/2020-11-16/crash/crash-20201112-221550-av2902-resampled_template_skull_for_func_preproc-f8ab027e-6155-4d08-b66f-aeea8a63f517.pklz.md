---
title: "crash-20201112-221550-av2902-resampled_template_skull_for_func_preproc-f8ab027e-6155-4d08-b66f-aeea8a63f517.pklz"
slug: "crash-20201112-221550-av2902-resampled_template_skull_for_func_preproc-f8ab027e-6155-4d08-b66f-aeea8a63f517.pklz"
categories: [files]
author: Anna Vannucci
date: 2020-11-16
---
```BASH
resting_preproc_sub-026_ses-3.resampled_template_skull_for_func_preproc
```
```Python
Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 566, in move
    os.rename(src, real_dst)

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/tmp/resting_preproc_sub-026_ses-3/resampled_template_skull_for_func_preproc/_0xf705cab77a4aca355794f4ca8fefe6a7_unfinished.json' -> '/outputs/tmp/resting_preproc_sub-026_ses-3/resampled_template_skull_for_func_preproc/_0xf705cab77a4aca355794f4ca8fefe6a7.json'


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

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/tmp/resting_preproc_sub-026_ses-3/resampled_template_skull_for_func_preproc/_0xf705cab77a4aca355794f4ca8fefe6a7_unfinished.json'
```