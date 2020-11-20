---
title: "crash-20201023-220933-ljcampos-check_for_s3_ANTs_prior_seg_template_brain_list-b7d5e66e-b5e6-4569-a34d-a2ef6fc6ec0e.pklz"
slug: "crash-20201023-220933-ljcampos-check_for_s3_ANTs_prior_seg_template_brain_list-b7d5e66e-b5e6-4569-a34d-a2ef6fc6ec0e.pklz"
categories: [files]
author: Lillian Campos
date: 2020-11-20
---
```BASH
resting_preproc_sub-44135_ses-necfdg2017.check_for_s3_ANTs_prior_seg_template_brain_list
```
```Python
Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 1250, in _run_interface
    self.config['execution']['stop_on_first_crash'])))

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 1172, in _collate_results
    (self.name, '\n'.join(msg)))

Exception: Subnodes of node: check_for_s3_ANTs_prior_seg_template_brain_list failed:
Subnode 1 failed
Error: Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 471, in run
    result = self._run_interface(execute=True)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 555, in _run_interface
    return self._run_command(execute)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 635, in _run_command
    result = self._interface.run(cwd=outdir)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/interfaces/base/core.py", line 569, in run
    vals = np.loadtxt(mon_sp.fname, delimiter=',')

  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/npyio.py", line 962, in loadtxt
    fh = np.lib._datasource.open(fname, 'rt', encoding=encoding)

  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 266, in open
    return ds.open(path, mode, encoding=encoding, newline=newline)

  File "/usr/local/miniconda/lib/python3.7/site-packages/numpy/lib/_datasource.py", line 624, in open
    raise IOError("%s not found." % path)

OSError: .proc-124352_time-1603490970.3339686_freq-1.00 not found.


During handling of the above exception, another exception occurred:


Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/utils.py", line 106, in nodelist_runner
    result = node.run(updatehash=updatehash)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list/mapflow/_check_for_s3_ANTs_prior_seg_template_brain_list1/_0xe56e13dd687db8fad5592687f497a9f7_unfinished.json'



During handling of the above exception, another exception occurred:


Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 475, in run
    os.remove(hashfile_unfinished)

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/check_for_s3_ANTs_prior_seg_template_brain_list/_0x46979645826f842930a4be3d003d8d31_unfinished.json'
```