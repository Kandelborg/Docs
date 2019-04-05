---
title: MoNA Has Officially Launched!
author: Mathias Wøbbe
authorURL: https://twitter.com/kandelborg
---

Yaaay! After having spent months on planning, keeping updated and putting the pieces together... and having spent tens of hours on documentation, it's finally ready!

`MoNA`, `KATS` and `configuration` are three repositories living together.

- [MoNA](https://github.com/Kandelborg/MoNA-starter-kit) is a Next.js Apollo with MUI starter
- [KATS](https://github.com/Kandelborg/KATS) is a Prisma API starter
- [configuration](https://github.com/Kandelborg/MoNA-configuration) is the essential part of setting up servers and deploying the applications

There's is probably mistakes everywhere, so the next couple of days are going to be about fixing typos, refactoring to reflect current conventions, and sweeping everything else under the rug.
Or maybe not, the Codeclimate issues badge in the readme reads all current issues, not regarding their current status - this leads me to the conclusion that they have to be properly fixed.
This is going to happen mostly via configuration settings, as most of the duplication errors aren't actual duplicates, but the [the settings](https://docs.codeclimate.com/docs/duplication#section-per-language-mass-threshold-defaults) are by default too low.

Some code still needs to be refactored, or completely re-done in MoNA, as this project has lived through a refactoring from class-based components to hooks and Material-UI v3 -> v4.
Some components are just badly written right now. That's the first thing to go about, then I'll start looking at that duplication issues.

I'll celebrate this release by looking at a bunch of things to fix and start fixing them.

That sums it up for the first blog post for MoNA. I'm so pumped to see what the future brings!
