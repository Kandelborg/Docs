---
id: development
title: Development
---

We're now ready to start the servers! Here's what we gotta do:

- Start the database along with the Prisma server
- Start the api server
- Start the website server

1. Open a terminal
2. Start prisma + api server

```bash
cd PROJECT_NAME
cd api && docker-compose up-d && npm run dev
```

3. Open a new terminal or session
4. Start website server

```bash
cd PROJECT_NAME
cd website && npm run dev
```

> It is recommended to use a terminal multiplexer like tmux for multiple bash sessions.
> Tmux is really nice because it has plugins to keep session state between reboots, enabling a fast startup every time.
> I'll soon write a blog on how to setup tmux with session restoring and other nice things

Let's configure some Docker container registries with GitLab so we can build & deploy to private repositories.
