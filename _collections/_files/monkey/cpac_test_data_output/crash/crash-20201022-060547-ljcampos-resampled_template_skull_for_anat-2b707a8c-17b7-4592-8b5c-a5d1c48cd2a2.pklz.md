---
title: "crash-20201022-060547-ljcampos-resampled_template_skull_for_anat-2b707a8c-17b7-4592-8b5c-a5d1c48cd2a2.pklz"
slug: "crash-20201022-060547-ljcampos-resampled_template_skull_for_anat-2b707a8c-17b7-4592-8b5c-a5d1c48cd2a2.pklz"
categories: [files]
author: [Lillian Campos]
date: 2020-10-22
---
```BASH
resting_preproc_sub-032182_ses-001.resampled_template_skull_for_anat
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

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 494, in rmtree
    _rmtree_safe_fd(fd, path, onerror)

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 432, in _rmtree_safe_fd
    _rmtree_safe_fd(dirfd, fullname, onerror)

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 432, in _rmtree_safe_fd
    _rmtree_safe_fd(dirfd, fullname, onerror)

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 432, in _rmtree_safe_fd
    _rmtree_safe_fd(dirfd, fullname, onerror)

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 436, in _rmtree_safe_fd
    onerror(os.rmdir, fullname, sys.exc_info())

  File "/usr/local/miniconda/lib/python3.7/shutil.py", line 434, in _rmtree_safe_fd
    os.rmdir(entry.name, dir_fd=topfd)

OSError: [Errno 39] Directory not empty: 'resources'
```