---
id: build
title: Build
---

Make sure you've followed the [configuration setup](setup/configuration.md) and added your domain to the env variables.

## Website

Build website in production

```bash
cd website
npm run build
```

---

## Api

```bash
cd api
npm run build
```

---

## Docker images

Both API and Website should be build before building with Docker.

### API

Build api docker image:

- Change `USER_NAME` to your GitLab username

```bash
cd api
docker build -t registry.gitlab.com/USER_NAME/api-registry/api:v1.0.0 .
```

### Website

Build website docker image:

- Change `USER_NAME` to your GitLab username

```bash
cd website
docker build -t registry.gitlab.com/USER_NAME/website-registry/website:v1.0.0 .
```
