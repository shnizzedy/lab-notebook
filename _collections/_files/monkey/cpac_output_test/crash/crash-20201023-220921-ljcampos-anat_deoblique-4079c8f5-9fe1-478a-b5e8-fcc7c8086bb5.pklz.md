---
title: "crash-20201023-220921-ljcampos-anat_deoblique-4079c8f5-9fe1-478a-b5e8-fcc7c8086bb5.pklz"
slug: "crash-20201023-220921-ljcampos-anat_deoblique-4079c8f5-9fe1-478a-b5e8-fcc7c8086bb5.pklz"
categories: [files]
author: Lillian Campos
date: 2020-11-20
---
```BASH
resting_preproc_sub-44135_ses-necfdg2017.anat_preproc_unet_0.anat_deoblique
```
```Python
Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 449, in run
    emptydirs(outdir, noexist_ok=True)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 830, in emptydirs
    raise ex

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/utils/filemanip.py", line 818, in emptydirs
    shutil.rmtree(path)

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 494, in rmtree
    _rmtree_safe_fd(fd, path, onerror)

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 452, in _rmtree_safe_fd
    onerror(os.unlink, fullname, sys.exc_info())

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 450, in _rmtree_safe_fd
    os.unlink(entry.name, dir_fd=topfd)

OSError: [Errno 16] Device or resource busy: '.nfs00000000001beac40000000c'
```