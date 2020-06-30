---
parent_project: c-pac
title: C-PAC testing
author: [C-PAC Team]
date: 2019-12-09
updated: [2020-06-30, 2020-06-28]
end_date: 2020-06-30
version: 1.7
boards: []
mvp: 
---

1. continuous integration

<!--more-->

## [continuous integration](#continuous-integration)

### push

* [ ] build Docker image from Dockerfile
* [ ] build Singularity image from Singularity recipe
* [ ] run unit tests
* [ ] run test of AFNI library links for Singularity

### PR to develop

* [ ] all push tests
* [ ] full run of one random participant × one random preconfig in Docker
* [ ] full run of one random participant × one random preconfig in Singularity
* [ ] combine coverage

### PR to master

* [ ] all push tests
* [ ] full run of all participants in testing config × all preconfig pipelines in Docker
* [ ] full run of all participants in testing config × all preconfig pipelines in Singularity
* [ ] combine coverage

<div class="pencil keep-together" markdown="1">
### notes

* [CircleCI: Re-use code snippets with Commands](https://predictablynoisy.com/three-things-circleci#re-use-code-snippets-with-commands)
* Set up default non-root user in testing image
</div>

### would be nice

* preserve newlines in [`test_for_success` script]()
<code id="test_for_success"></code>
<script defer>external_code("https://raw.githubusercontent.com/shnizzedy/C-PAC/Habanero/1306/spike-censor-not-found/dev/circleci_data/runscripts/look_for_success.sh", "test_for_success", "BASH")</script>