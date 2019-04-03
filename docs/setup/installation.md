---
id: installation
title: Installation
---

**NOTE:** _Make sure **[the requirements](../setup/prerequisites.md) are met** before continuing_

Here's what we've got to do in order to install MoNA:

1. Decide on a directory structure
2. Fork or clone the three repositories: configuration, MoNA, and KATS

## Directory Structure

First, we need to decide on the project structure. Here's a good starting point:

```text
PROJECT_NAME
├── api
├── configuration
├── website
```

## Installation

If you chose the mentioned directory structure, you can copy these commands after replacing `PROJECT_NAME` on the two first lines:

- Make project folder and work from there
- Clone the starter-kit into the website folder:
- Clone the API into the api folder:
- Clone the configuration into the configuration folder:

```bash
mkdir -p PROJECT_NAME
cd PROJECT_NAME
git clone https://github.com/Kandelborg/MoNA-starter-kit.git website
git clone https://github.com/Kandelborg/KATS.git api
git clone https://github.com/Kandelborg/MoNA-configuration.git configuration
```

> _Don't worry about the comments, they won't be read by the terminal_

## Dependencies

Install project dependencies

```bash
cd PROJECT_NAME
```

<!--DOCUSAURUS_CODE_TABS-->
<!--NPM-->

```plaintext
cd api && npm install
cd ../website && npm install
```

<!--Yarn-->

```plaintext
cd api && yarn
cd ../website && yarn
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Next steps

That's it! Now we're ready to develop on our own project.

Well... We can _develop_ with MoNA - but to run the development server and have a great experience, we can continue configuring _or_ follow the [maintaining a project](../usage/maintaining-a-project) guide.
In order to keep things organized, it's suggested to keep configuring by [creating some accounts](setup/accounts.md).
