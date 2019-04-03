/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  /* {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true
  } */
]

const siteConfig = {
  title: 'MoNA', // Title for your website.
  tagline: 'A Secure, Fully-Fledged TS Starter Kit',
  // For github.io type URLs, you would set the url and baseUrl like:
  url: 'https://docs.github.io',
  baseUrl: '/',

  projectName: 'Docs',
  organizationName: 'Kandelborg',
  url: 'https://Kandelborg.github.io',
  repoUrl: 'https://github.com/Kandelborg/Docs',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'what-is-mona', label: 'Docs' },
    { doc: 'usage/maintaining-a-project', label: 'Usage' },
    { blog: true, label: 'Blog' }
  ],

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: 'img/mona.svg',
  footerIcon: 'img/mona-no-fill.svg',
  favicon: 'img/favicon/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#005cb2',
    secondaryColor: '#01a9f4'
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
    },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Mathias Kandelborg`,

  highlight: {
    theme: 'vs2015'
  },
  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/mona.png',
  twitterImage: 'img/mona.png',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true

  // You may provide arbitrary config keys to be used as needed by your
}

module.exports = siteConfig
