---
parent_project: c-pac
title: C-PAC
author: [C-PAC Team]
date: 2019-12-09
updated: [2020-07-01]
end_date: 2020-07-01
version: 1.7
boards: ["https://app.zenhub.com/workspaces/c-pac-5e18fd371a6a5e26fe181e0f/board?repos=4733263,6067619,128152404,187101737,237050721,232425128"]
mvp: 
---

Planned release: {{ "2020-07-10" | date:"%A, %Y %B %e" }}

<!--more-->

<table class="conversation"><tr><td>Steve</td><td markdown="1">
I'd like to shoot for Friday July 10th for 1.7 release- which means code locked by preferably Tuesday or Wednesday next week

[…]

I would like it if we could try out some of each other's additions to start sanity checking:
* running CPAC via cpac-py
* running the longitudinal pipelines with some appropriate data
* running the ANTS prior-based segmentation
</td></tr><tr><td>Jon</td><td markdown="1">
For cpac-py, I think it's only working for Singularity at the moment. I'm not sure what the bug is with Docker, but it's recent and should be small. I can prioritize fixing it.

For a longitudinal run, do you have data in mind, or do we need to find some?

For ANTS priors, same question, plus human / NHP / rat?
</td></tr><tr><td>Xinhui</td><td markdown="1">
re longitudinal dataset: [http://fcon_1000.projects.nitrc.org/indi/CoRR/html/ibatrt.html](http://fcon_1000.projects.nitrc.org/indi/CoRR/html/ibatrt.html)
</td></tr><tr><td>Hecheng</td><td markdown="1">
I believe ants-prior segmentation is mainly for NHP. kick off 3 subjects oxford site data. `/data3/cnl/monkey_benchmark/cpac_run/run_bash/run_monkey_ants_priors_seg_0701.sh`
</td></tr></table>
