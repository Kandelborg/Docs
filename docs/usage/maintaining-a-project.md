---
id: maintaining-a-project
title: Maintaining a project
---

By going through a some easy steps, a new & personalized project will be ready for development!

A [CLI tool](#reference) will soon make it incredibly easy to get started with a new MoNA project.

By reading this guide, you'll have a better understanding of how to have the best experience while developing with MoNA.
This document can be read from start to end, but also works as a reference.

## Creating the project

When beginning to use MoNA, you should start a project from scratch.

Having followed the [installation](../setup/installation.md) documentation, a directory structure is present.

> The following steps assumes the [directory structure](setup/installation.md#directory-structure) present in the installation docs. Any structure is considered valid though.

### `/website`

This is the home of the MoNA project.

1. Create a new git repository on Github, GitLab or somewhere else
2. Go to the `website` folder in the project
3. Add new repo as a [remote](#reference)

### `/api`

This is the home of the GraphQL API made with Prisma.

1. Create a new git repository on Github, GitLab or somewhere else
2. Go to the `api` folder in the project
3. Add new repo as a [remote](#reference)

### `/configuration`

This is the home of configuration files used e.g. for initial server setup and nginx.

1. Create the final new git repository - make sure it's **private**
2. Go to the `configuration` folder in the project
3. Add new repo as a [remote](#reference)

And there, everything is ready to go!

---

## Developing

It is recommended to use a [terminal multiplexer](#reference) like tmux for multiple bash sessions.
Tmux is really nice because it has plugins to keep session state between reboots, enabling a fast startup every time.

---

## Theme & UI Components

MoNA uses Material-UI for UI components and global styling.

There's one exception to this, simply for ease of use:

- Global styles are set in `_app.ts` with Styled-jsx to ensure constant globally available styles.

This also means that besides the several available paradigms of Material-UI, Styled-jsx is also available!

### Themes

The MainTheme file contains the project theme definition. It's located in `website/util/themes/MainTheme.ts`

Some likely values to fiddle with is the `typography` object and the `primary` and `secondary` keys in the `palette` object.

Changing values in the theme reflects in all components used by Material-UI, which ensures a global theme with possibility of component level styling.

### Components

More information on theming and components can be found in the [Material-UI official documentation](https://material-ui.com).
It's riddled with great examples and well thought out explanations.

It really is a treat to navigate and find new ways to make customize components with the Material-UI docs.

---

## Using a Flat Import Structure

With the help of tsconfig-paths and babel-plugin-module-resolver MoNA and KATS have a 'flat' import structure.

This effectively means that developers don't have to define complex relative paths and can instead define consistent paths.

So, Instead of this:

`import MyUtilFn from '../../../../utils/MyUtilFn'`

We get to write:

`import MyUtilFn from '@utils/MyUtilFn'`

This helps _a lot_ with cognitive load.

Pre-defined paths are much easier to remember than relative paths to every file, from _every file_.

Paths for MoNA are found in `website/.babelrc` _**and**_ `website/tsconfig.json`. Paths defined in these files are interconnected and should **not** be out of sync.

Paths for KATS are found in `api/webpack.config.js` _**and**_ `api/tsconfig.json`. Paths defined in these files are interconnected and should **not** be out of sync.

Defining paths will be automated with CLI commands. Comming soon.

Settings are in `@settings`, forms in `@forms` etc. which is easy to remember.
This ensures faster development speed and less cognitive overhead when developing. It also makes it easy to show new project devs where specific functionality is located.
No more spending a long time on understanding the structure, it's easily ready to use and reason about.

Get to know the default paths, add your own paths if needed and feel the benefits of a flat import structure...
Then be happy and continue coding, or go celebrate in your favorite way.
I'm not sure where I was going with this sentence, so yeah, remember to have fun and be active!

---

## Making & Committing Changes

Whenever changes are made and committed, you push them to the new origins.
This way it's easy to get crucial updates from the official repositories, while still making a custom application.

Using a GUI for the most annoying git things can speed things up a lot.
Especially if branches is something you use.
With a visual representation and drag & drop features, some things take 2 seconds in a GUI vs 30 seconds by writing commands.
That's hard to argue against.

Mathias Kandelborg recommends [GitKraken](https://gitkraken.com/git-client) as a git GUI.
It's free to use, has dark theme and amazing git capabilities.
They also have excellent documentation and even videos for a lot of the features.

Because we're using commitizen by default, GitKraken isn't good for actually committing.
Unless you know the rules by heart or use a commit template, then it gets a bit easier.
That being said, it's the _only_ thing not possible with GitKraken for general usage.

When committing changes run `npm run cz`. 'cz' stands for commitizen and runs the commitizen-cli default command.
This opens an interactive prompt where useful information is displayed for each option.
Pick relevant options by choosing or pressing enter for defaults, and watch as the commit and staged files gets linted.

---

**This guide will be completed with time. I'm sorry I haven't gotten further yet.**

**If you have any requests, think something is poorly explained or want to help out; don't hesitate to open an issue or PR. Those are much appreciated!**

---

## Reference

### Remote URL

> A remote URL is Git's fancy way of saying "the place where your code is stored." That URL could be your repository on GitHub, or another user's fork, or even on a completely different server.
> `git remote add origin <REMOTE_URL>`
>
> – [Github help](https://help.github.com/articles/about-remote-repositories)

### CLI tool

> A [CLI](https://en.wikipedia.org/wiki/Command-line_interface) tool is a program that automates or executes a task or outputs something.
> In short: it does _something_. However the tool does its thing, if it can take arguments, these execute via command-line arguments from [stdin](<https://en.wikipedia.org/wiki/Standard_streams#Standard_input_(stdin)>) or programmatically

### Terminal multiplexer

> A program that runs several separate bash sessions in a single terminal window.
