---
id: configuration
title: Configuration
---

Edit the configuration files in order to make a unique project with the functionality MoNA provides.

## Website

### [.env.example](https://github.com/Kandelborg/MoNA-starter-kit/blob/master/.env.example)

- Ignore this file by renaming to `.env`

> **Never commit sensitive information to versioning software** - use other means of sharing sensitive information like [Bitwarden](https://bitwarden.com/)

| Variable                  | Description                                       |
| ------------------------- | ------------------------------------------------- |
| DOMAIN                    | Domain of website when in production              |
| PORT                      | Which port the website runs on                    |
| **Cloudinary Variables:** | ------------------------------------------------- |
| CLOUD_NAMES               | Cloud names in use in website                     |
| API_DOMAIN                | Domain of GraphQL endpoint                        |
| API_TOKEN                 | No apparent use                                   |

### [manifest.json](https://github.com/Kandelborg/MoNA-starter-kit/blob/master/static/manifest.json)

This file defines how an installed PWA behaves and looks.

- Name
- Short name
- Description
- Theme color
- Background color (for the splash screen)
- Language
- Icons

All the available options for a web app manifest is [available at MDN](https://developer.mozilla.org/en-US/docs/Web/Manifest#Members). The values in our manifest is enough to get started.

### [routing.ts](https://github.com/Kandelborg/MoNA-starter-kit/blob/master/server/routing.ts)

All routes are defined here.

If you ever choose to create new routes or rename files in `src/pages`, those changes should be reflected in `routing.ts`.

### [robots.txt](https://github.com/Kandelborg/MoNA-starter-kit/blob/master/static/robots.txt)

New or deleted pages, and edited page names should be reflected here.

- Change URL of sitemap to app domain according to the `DOMAIN` env variable in `.env`

### [package.json](https://github.com/Kandelborg/MoNA-starter-kit/blob/master/package.json)

Personalize package.json to fit your project:

- Name
- Author
- Description
- Repository

---

## API

### [.env.example](https://github.com/Kandelborg/KATS/blob/master/.env.example)

- Ignore this file by renaming to `.env`

> **Never commit sensitive information to versioning software** - use other means of sharing sensitive information like [Bitwarden](https://bitwarden.com/)

| Variable                  | Description                                       |
| ------------------------- | ------------------------------------------------- |
| ALLOWED_DOMAINS           | List of CORS enabled URLs                         |
| **Cloudinary Variables:** | ------------------------------------------------- |
| CLOUDINARY_API_KEY        | API key                                           |
| CLOUDINARY_API_SECRET     | Secret API key                                    |
| CLOUD_NAME                | Name of account space                             |
| PRESET                    | Name of **signed** preset                         |

### [package.json](https://github.com/Kandelborg/KATS/blob/master/package.json)

Personalize package.json to fit your project:

- Name
- Author
- Description
- Repository

---

> Changes in the configuration directory is only needed when deploying. There's no need to configure here if you're getting started for development.

If you're already happy with your editor or really want to start developing, go follow the [maintaining a project](usage/maintaining-a-project.md) guide.
Yeah, that's right! We've finally come to a point where the project is our own.

If you're interested in getting properly started with a project, go read the [editor](setup/editor) and [development](setup/development) pages in this section.
