---
parent_project: cheatsheet
title: sshfs
author: [Jon Clucas]
date: 2020-11-19
updated: [2020-11-19]
---
#### mount AWS
```BASH
sudo sshfs -o IdentityFile=$FULL_PATH ubuntu@$PUBLIC_ADDRESS:/media/ebs /media/ebs -o allow_other
```
