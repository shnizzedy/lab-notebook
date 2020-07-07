---
parent_project: c-pac
title: C-PAC testing
author: [C-PAC Team]
date: 2019-12-09
updated: [2020-07-07, 2020-07-01, 2020-06-30, 2020-06-28]
end_date: 2020-07-07
version: 1.7
boards: []
mvp: 
---

1. continuous integration
2. longitudinal

<!--more-->

## [continuous integration](#continuous-integration)

<div class="flowchart-container keep-together">
  <mark><a href="https://app.lucidchart.com/documents/edit/43287778-3f8f-488c-9170-fcacd9692854"><img src="{{ site.baseurl }}/assets/images/logos/lucidchart.svg" alt="Lucidchart" /></a></mark>
  <object data="{{ site.baseurl }}/assets/images/diagrams/CI-testing.svg" type="image/svg+xml"></object>
</div>

### push

* [ ] build Docker image from Dockerfile
* [ ] build Singularity image from Singularity recipe
* [ ] run unit tests
* [ ] run test of AFNI library links for Singularity

### PR to development branch

* [ ] all push tests
* [ ] full run of one random participant × one random preconfig in Docker
* [ ] full run of one random participant × one random preconfig in Singularity
* [ ] combine coverage

### PR to primary branch

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

## longitudinal
[🔗📄 CNL Plan: Longitudinal Pipeline](https://docs.google.com/document/d/1dJFOKNctXUiXZhyVLLBlerBD8rjbkC1jeToXHKZoKng)
<iframe width="100%" height="528" src="https://docs.google.com/document/d/e/2PACX-1vTvj9KnXUzlgmA2VIWhL9KurM8HyyuqCLn-Qc7cD8cQCMsI71BmvvPg7zcvye6WaYsmb85kWbUKvNk1/pub?embedded=true"></iframe>