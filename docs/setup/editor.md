---
id: editor
title: Editor
---

Right now there's only instructions for setting up VS Code. Other editor setups will be added.

Go to the [overview](#overview-of-essential-extensions) for a list of extensions used.

---

The settings in `/.vscode/settings.json` are all you need for a great developer experience.
Make sure those are the ones being used, or you know what you're doing.

1. Install the extensions via [the provided commands](#essential-extensions)

## Essential extensions

These are essential for the developer experience in VS Code.

Run the following commands in a terminal:

<!--DOCUSAURUS_CODE_TABS-->
<!--VS Code-->

```bash
code --install-extension blanu.vscode-styled-jsx
code --install-extension dbaeumer.vscode-eslint
code --install-extension EditorConfig.EditorConfig
code --install-extension eg2.tslint
code --install-extension esbenp.prettier-vscode
code --install-extension ms-vscode.vscode-typescript-tslint-plugin
code --install-extension pmneo.tsimporter
```

<!--VS Code Insiders-->

```bash
code-insiders --install-extension blanu.vscode-styled-jsx
code-insiders --install-extension dbaeumer.vscode-eslint
code-insiders --install-extension EditorConfig.EditorConfig
code-insiders --install-extension eg2.tslint
code-insiders --install-extension esbenp.prettier-vscode
code-insiders --install-extension ms-vscode.vscode-typescript-tslint-plugin
code-insiders --install-extension pmneo.tsimporter
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Overview of essential extensions

This is a list containing each essential extension and reasoning behind using it.

### ESLint

For linting and formatting the few javascript files there'll be.

This is also _really_ useful when copying JS code for use in your project - before converting to TS, one could use these steps to consistently get started:

- Make a .js file
- Format the code
- Auto fix and/or resolve errors & warnings
- Put comments if needed

Now, the code is ready for a TS rework, which will be fast since the most basic mistakes and syntax errors are taken care of.

### TSLint

For linting and formatting the TS code.

### Prettier

This is used in conjunction with the packages `prettier-tslint` & `prettier-eslint`, in order to make formatting really smooth and (if wanted) configurable.

It's also used for formatting files that aren't TS or JS.

### EditorConfig

So we all have a proper editor experience

> EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.
>
> – [EditorConfig webpage](https://editorconfig.org/)

### Styled-jsx

Syntax highlighting for CSS in JSX.

Styled-jsx is a part of Next.js and makes it really easy to include third-party stylesheets in a SSR rendered app, where MUI is the main styling solution.

### TS Importer

Makes it super easy and fast to include components and files when coding.
