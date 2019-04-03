---
id: container
title: Container registries
---

It's really easy to get free private container registries with GitLab:

- Login to GitLab
- Create new project called `website-registry`
- Create new project called `api-registry`
- Login to GitLab registry with docker

> New projects on <https://gitlab.com> have the [Container Registry](https://gitlab.com/help/user/project/container_registry) setting enabled by default.
>
> **NOTE:** If you have 2FA enabled you need to use a [personal access token](https://gitlab.com/help/user/profile/account/two_factor_authentication#personal-access-tokens)

```bash
docker login registry.gitlab.com
```

And that's it, we're now ready to push docker images to the GitLab registry.

Furthermore, we've configured all the things. This means we can start developing in a personalized project based on MoNA, just follow the next section and get started for real!
