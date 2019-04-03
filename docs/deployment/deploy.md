---
id: deploy
title: Deploy
---

Soon, a CLI-tool will make it really easy to deploy an app with MoNA.

## Configuration files

Deployment configuration happens in the `configuration` directory.

---

### Website

These are located in `configuration/website`

#### .conf

There's nginx `.conf` files for redirecting www, api.example.com and example.com.

1. Use find & replace to make sure all instances are changed without typos
2. Change domain in `configuration/website/api.conf`
3. Change domain in `configuration/website/default.conf`
4. Change domain in `configuration/website/www.conf`

#### docker-compose.yml

Here, the api & website apps are defined along with an nginx container with HTTPS enabled.

- Change app image to newest docker build
- Change api image to newest docker build
- Change `CERTBOT_EMAIL` to email used for registering HTTPS certificates
- **Optional:** Change `IS_STAGING=0` to `IS_STAGING=1` so HTTPS keys aren't 'real' but for testing if everything works over _many_ deploys. Here's more [information on staging](https://letsencrypt.org/docs/staging-environment/). Keys are persisted to disk, that means restarting nginx with real keys (not in staging) doesn't ask for new keys on every boot.

#### .env

This is the `website/.env` file.

- Copy `website/.env` to `configuration/website/.env`

---

### API

These are located in `configuration/api`

#### docker-compose.yml

This is the `api/docker-compose.yml` file.

- **Optional:** add a [management api secret](https://www.prisma.io/docs/1.29/prisma-server/authentication-and-security-kke4/#prisma-server)
- Copy `api/docker-compose.yml` to `configuration/api/docker-compose.yml`

If you added a management api secret, be sure to set the `PRISMA_MANAGEMENT_SECRET` in `api/.env` accordingly.

#### .env

This is the `website/.env` file.

- Copy `website/.env` to `configuration/website/.env`

---

## Push Docker images

Make sure both website and api has been [built with Docker](build#docker-images).

- Change USER_NAME to your GitLab username

```bash
docker push registry.gitlab.com/USER_NAME/api-registry/api:v1.0.0
docker push registry.gitlab.com/USER_NAME/website-registry/website:v1.0.0
```

---

## Start Prisma server

- Copy the contents of `configuration/api` to the server
- SSH into the server
- Login to Docker with GitLab credentials
- Start docker-compose

```bash
scp -r -P 2222 -i ~/generated-keys/server_id.pub \
PROJECT_NAME/configuration/api admin@server_ip:/home/admin/ \ # Copy files to server

ssh -p 2222 admin@server_ip -i ~/generated-keys/server_id.pub # Connect via SSH

sudo docker-compose up -d # start docker

exit # logout of server
```

---

## Start API & Website server

- SSH into the server
- Copy the contents of `configuration/website` to the server
- Login to Docker with GitLab credentials
- Start docker-compose

```bash
scp -r -P 2222 -i ~/generated-keys/server_id.pub \
PROJECT_NAME/configuration/website admin@server_ip:/home/admin/ \ # Copy files to server

ssh -p 2222 admin@server_ip -i ~/generated-keys/server_id.pub # Connect via SSH

sudo docker-compose up -d # start docker

exit # logout of server
```

## Deploy Prisma Service

A Prisma service can only be deployed to a server with a Prisma server running.

```bash
cd api
npm run prisma:deploy:production
```

---

And that should be it! Try visiting you domain and see what happens.
