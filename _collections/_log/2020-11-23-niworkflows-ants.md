---
projects: [c-pac]
categories: [C-PAC]
author: [Jon Clucas]
date: 2020-11-23
end_date: 2020-11-25
---
Difference between niworkflows and C-PAC niworkflows
<!--more-->
<table>
<tr>
<td markdown="1">

[![niworkflows]({{ site.baseurl }}/assets/images/niworkflows-ants/2020-11-23/graph_hierarchical.png)]({{ site.baseurl }}/assets/images/niworkflows-ants/2020-11-23/graph_hierarchical.png)
</td><td markdown="1">

[![C-PAC niworkflows]({{ site.baseurl }}/assets/images/niworkflows-ants/2020-11-23/graph_hierarchical2.png)]({{ site.baseurl }}/assets/images/niworkflows-ants/2020-11-23/graph_hierarchical2.png)
</td>
</tr>
</table>

I don't see anything obviously hanging.

One level higher workflow just adds an input and output node:

[![C-PAC skullstrip]({{ site.baseurl }}/assets/images/niworkflows-ants/2020-11-23/skullstrip_graph_hierarchical.png)]({{ site.baseurl }}/assets/images/niworkflows-ants/2020-11-23/skullstrip_graph_hierarchical.png)

Original niworkflows-ants was refactored in September… 

---

Extra parameters for C-PAC niworkflows-ants:

`tpl_target_path`

```Python
tpl_target_path, common_spec = get_template_specs(
    in_template, template_spec=template_spec
)
```

`tpl_mask_path`

```Python
# Get probabilistic brain mask if available
tpl_mask_path = get_template(
    in_template, label="brain", suffix="probseg", **common_spec
) or get_template(in_template, desc="brain", suffix="mask", **common_spec)
```

`tpl_regmask_path`

```Python
# Try to find a registration mask, set if available
tpl_regmask_path = get_template(
    in_template, desc="BrainCerebellumExtraction", suffix="mask", **common_spec
)
```

After monkeypatching:
[![C-PAC niworkflows after monkeypatching]({{ site.baseurl }}/assets/images/niworkflows-ants/2020-11-25/graph_hierarchical2.png)]({{ site.baseurl }}/assets/images/niworkflows-ants/2020-11-25/graph_hierarchical2.png)

[![C-PAC niworkflows after monkeypatching: one level up (skullstrip_anatomical)]({{ site.baseurl }}/assets/images/niworkflows-ants/2020-11-25/skullstrip_anatomical.png)]({{ site.baseurl }}/assets/images/niworkflows-ants/2020-11-25/skullstrip_anatomical.png)