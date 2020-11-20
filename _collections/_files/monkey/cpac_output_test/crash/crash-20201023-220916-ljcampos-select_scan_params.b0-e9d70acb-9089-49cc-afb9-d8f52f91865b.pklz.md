---
title: "crash-20201023-220916-ljcampos-select_scan_params.b0-e9d70acb-9089-49cc-afb9-d8f52f91865b.pklz"
slug: "crash-20201023-220916-ljcampos-select_scan_params.b0-e9d70acb-9089-49cc-afb9-d8f52f91865b.pklz"
categories: [files]
author: Lillian Campos
date: 2020-11-20
---
```BASH
resting_preproc_sub-44135_ses-necfdg2017.func_gather_0.select_scan_params
```
```Python
Traceback (most recent call last):

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/plugins/linear.py", line 44, in run
    node.run(updatehash=updatehash)

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/nodes.py", line 466, in run
    self, report_type='preexec', is_mapnode=isinstance(self, MapNode))

  File "/usr/local/miniconda/lib/python3.7/site-packages/nipype/pipeline/engine/utils.py", line 147, in write_report
    with open(report_file, 'wt') as fp:

FileNotFoundError: [Errno 2] No such file or directory: '/outputs/working/resting_preproc_sub-44135_ses-necfdg2017/func_gather_0/_scan_rest_run-02/select_scan_params/_report/report.rst'
```