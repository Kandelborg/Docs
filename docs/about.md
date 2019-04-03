---
id: what-is-mona
title: What is MoNA?
sidebar_label: What is MoNA
---

## Introduction

MoNA stands for Material-UI (over) Next.js & Apollo.

It's a TS starter-kit built on Next.JS, Apollo, Formik, and Material-UI.

When creating MoNA, [Mathias Kandelborg](https://github.com/MathiasKandelborg) had a very clear goal:

> Be able to make _excellent_ web applications **fast** - and enable whole teams to do so

This template project would be built on tons of great software with OSS licenses, and he wants to give back and help as much as possible...

Within long, he'd decided which aspects should be in focus from the beginning:

- A First-class developer experience
- Teamwork
- Compliance
- Offline-first
- Internationalization
- Accessability
- Great theming
- GraphQL
- Agreed upon/widely used practices
- Security
- Performance
- Automation
- Good documentation

This kit may not be the answer to every need you have...

And there'll (hopefully) always be different needs, so here's a list of what MoNA is **not**:

- It's **not** a static site generator
- It's **not** made with REST in mind
- It's **not** 100% secure and safe from hackers

> **Remember to research and implement the security strategies needed for your application**

MoNA takes care of a big amount of topics, but nothing is out of reach.
All implementations and customizations can be changed or reverted to defaults.

As a rule of thumb, everything is made to be extensible _and_ removable.

## Follows standards

Whenever there's a widely used standard, convention, or a specification - MoNA will follow it by the book!

This is still a work in progress - the maintainers of MoNA might not even have thought of everything yet.

It's hard to follow all conventions, standards and specifications at once, if you see a problem or know a better implementation - **don't hesitate to open an issue or PR**.

Be sure to read both the **[code of conduct](https://github.com/Kandelborg/MoNA-starter-kit/blob/master/CODE_OF_CONDUCT.md)** and the **[contributing](https://github.com/Kandelborg/MoNA-starter-kit/blob/master/CONTRIBUTING.md)** documents so we all stand on common grounds when contributing to MoNA, and ultimately to make the process faster and more enjoyable.

## Secure from the start

Instead of worrying about who _and how_ someone hacks your website built with _XXX_ framework or website builder ([because it will](https://www.sitepoint.com/someone-hack-small-business-website/))... wouldn't it be easier if the security was opt-out and covered from the start? If you think so, then you'll love MoNA. Here's some things that's already taken care of:

- XSS
- CSP (on its way)
- CSRF
- CORS
- Secure password storage

## Awesome developer experience

With MoNA, the developer comes first. In order to make great applications, developers should be comfortable in their digital - as well as physical - environments.

Here's a list of the things that make MoNA so great to work with:

- Intellisense
- Auto fix problems
- HMR (Hot Module Replacement)
- Code formatting
- Static type checking
- Flat import structure
- Automated versioning, changelog, build and deployment

## TypeScript

Find errors before compiling, be more sure of your code and have unbelievable [code completion](https://en.wikipedia.org/wiki/Intelligent_code_completion).

"Well, how?" You might ask. It's quite simple: use TypeScript!

TypeScript is a superset of JavaScript that adds [static type checking](https://en.wikipedia.org/wiki/Type_system#STATIC). This ensures a great developer experience,
because the compiler and editor knows how parameters should look, and if they should be strings, integers or arrays of integers.

Static type checking removes a whole category of bugs (types), helps developer tools and is a great foundation for large application development.
It's even possible to automatically define how code behaves with automatic source documentation with [JSDoc](http://usejsdoc.org/) in VS Code!

## GraphQL API

Look out for _'the new kid on the block'_ with everything figured out. It's untouchable!

> GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.
>
> &mdash; [GraphQL website](https://graphql.org/)

Instead of having to maintain a bunch of URLs to enable a data-driven application with a lot of features, like one does with REST...

GraphQL makes it easy to reason with the data layer via a single URL. It's even easier to visualize everything, which [we'll get to know more about](usage/graphql-playground.md).
