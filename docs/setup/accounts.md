---
id: accounts
title: Accounts
---

This document walks through setting up accounts for the third-party services in use.

## Cloudinary

- Go to [cloudinary.com](https://cloudinary.com)

- Sign up for a free account using your credentials
- Copy the following information from your [Cloudinary console](https://cloudinary.com/console):
  - Cloud name
  - API key
  - API secret
- Go to your [upload settings](https://cloudinary.com/console/settings/upload), scroll to 'Upload presets', then add a new upload preset:
  - Choose signing mode: **signed**
  - Make sure you **do not** enable Eager async transformations; they aren't supported in MoNA yet.

## Digital Ocean

- Go to [digitalocean.com](https://digitalocean.com) &mdash; _100 USD credit for 60 days: [referral link](https://m.do.co/c/acc19c3cd28f)_
- Sign up for a free account using your credentials

## GitLab

- Go to [https://hub.docker.com/](https://hub.docker.com/)
- Sign up for a free account using your credentials
- Create two new projects named `api-registry`& `website-registry`

## Github

If you want your code to be on Github, make an account there.
GitLab is another great platform with even more features.
In this regard, the GitLab account is needed for _unlimited_ private docker registries. So hosting the code on Github is also possible.

- Go to [github.com](https://github.com/)
- Sign up for a free account using your credentials

---

When we're finished here, all we need is editing the placeholders and meta data!
