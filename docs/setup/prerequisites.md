---
id: prerequisites
title: Prerequisites
---

So you want to get started but aren't sure what you need? Luckily, a requirements page has emerged!

Make sure everything is installed and ready to use on **your** account on your PC.

## Software

Let's begin by installing all the required software by going to the linked pages and following the instructions. It's not a lot, you could already have everything installed:

### Required

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/) & [NPM (comes with Node)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Docker](https://docs.docker.com/install/) (choose OS on the left) & [docker-compose](https://docs.docker.com/compose/install/)

### Optional

_Although optional, the following items are highly recommended:_

- An IDE or editor with IDE-like capabilities such as [VSCode](https://code.visualstudio.com/insiders/), [Atom](https://atom.io/), [Neovim](https://neovim.io/) or whatever else you like

---

## Accounts

To provide the best developer & user experience, MoNA uses some third-party services from the beginning:

- Cloudinary, because they have a great free tier and _the best_ API for manipulating images, videos and storing files
  Furthermore, there's already customizable widgets for different use cases
- Digital Ocean, because it's a great IaaS provider that has reasonable costs
- Github, Bitbucket or GitLab in order to create repositories online
- GitLab, for _unlimited private_ docker registries

### Required

If you want to use MoNA as is, out-of-the-box, you **must** to create a Cloudinary account for image uploading.

- GitLab - **_unlimited private_ docker registries**

### Optional

_Although optional, the following items are highly recommended:_

- Digital Ocean or another IaaS provider with Ubuntu servers - **Server hosting**
- Cloudinary - **Media transformations & files upload**
- Github, Bitbucket, Gitlab or something of the likes - **Remote git repository**

For a walk-through of each account creation and needed steps, go to [the accounts document](accounts)
