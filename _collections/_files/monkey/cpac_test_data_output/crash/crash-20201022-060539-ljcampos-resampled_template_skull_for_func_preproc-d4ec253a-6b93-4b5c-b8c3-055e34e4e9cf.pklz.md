---
title: "crash-20201022-060539-ljcampos-resampled_template_skull_for_func_preproc-d4ec253a-6b93-4b5c-b8c3-055e34e4e9cf.pklz"
slug: "crash-20201022-060539-ljcampos-resampled_template_skull_for_func_preproc-d4ec253a-6b93-4b5c-b8c3-055e34e4e9cf.pklz"
categories: [files]
author: [Lillian Campos]
date: 2020-10-22
---
```BASH
resting_preproc_sub-032182_ses-001.resampled_template_skull_for_func_preproc
```
```Python
Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 828, in emptydirs
    raise ex

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 498, in rmtree
    onerror(os.rmdir, path, sys.exc_info())

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 496, in rmtree
    os.rmdir(path)

OSError: [Errno 39] Directory not empty: '/outputs/working/resting_preproc_sub-032182_ses-001/resampled_template_skull_for_func_preproc'
```