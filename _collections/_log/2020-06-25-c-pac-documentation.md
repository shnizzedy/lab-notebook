---
layout: post
title:  C-PAC Documentation
projects: [c-pac-documentation]
issues: []
specs: []
slug: c-pac-documentation
author: [Jon Clucas]
date: 2020-06-25
---

I tried to trigger a rebuild to pull in the release notes from today's hotfix and discovered I no longer have enough permissions to triger builds for this repository on CircleCI nor to write to the repository on GitHub.

```BASH
ERROR: Permission to FCP-INDI/fcp-indi.github.com.git denied to shnizzedy.
```

Steve saved the day and restored my permissions on GitHub.

<!--more-->

I also started looking into setting up [a GitHub Action to trigger a docs build](https://github.com/marketplace/actions/github-action-trigger-circleci-job) any time a new release is… released.