---
title: "crash-20201023-220931-ljcampos-check_for_s3_ANTs_prior_seg_template_brain_list-7a9bc5fe-5e30-474e-a9cc-82da032103bf.pklz"
slug: "crash-20201023-220931-ljcampos-check_for_s3_ANTs_prior_seg_template_brain_list-7a9bc5fe-5e30-474e-a9cc-82da032103bf.pklz"
categories: [files]
author: Lillian Campos
date: 2020-11-20
---
```BASH
resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_brain_list
```
```Python
Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/utils.py", line 106, in nodelist_runner
    result = node.run(updatehash=updatehash)

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

OSError: [Errno 39] Directory not empty: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list/mapflow/_check_for_s3_ANTs_prior_seg_template_brain_list1'


During handling of the above exception, another exception occurred:


Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 1250, in _run_interface
    self.config['execution']['stop_on_first_crash'])))

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 1125, in _collate_results
    for i, nresult, err in nodes:

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/utils.py", line 113, in nodelist_runner
    if result.runtime and hasattr(result.runtime, 'traceback'):

AttributeError: 'NoneType' object has no attribute 'runtime'
```