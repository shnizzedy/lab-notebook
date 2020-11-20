---
title: "crash-20201023-220917-ljcampos-selectrest.b0-fedac1c2-2e33-43ce-bed4-29585c7c74b9.pklz"
slug: "crash-20201023-220917-ljcampos-selectrest.b0-fedac1c2-2e33-43ce-bed4-29585c7c74b9.pklz"
categories: [files]
author: Lillian Campos
date: 2020-11-20
---
```BASH
resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.selectrest
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

OSError: [Errno 39] Directory not empty: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/selectrest'
```