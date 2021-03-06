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
  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'what-is-mona', label: 'Docs' },
    { doc: 'usage/maintaining-a-project', label: 'Usage' },
    { blog: true, label: 'Blog' }
  ],

  baseUrl: '/Docs/',
  organizationName: 'Kandelborg',
  projectName: 'Docs',
  repoUrl: 'https://github.com/Kandelborg/MoNA-starter-kit', // Stargazers on MoNA stater-kit repo
  url: 'https://kandelborg.github.io',

  // Open Graph and Twitter card images.
  ogImage: 'img/mona.png',
  twitterImage: 'img/mona.png',

  // If you have users set above, you add it here:
  users,

  headerIcon: 'img/mona.svg',
  footerIcon: 'img/mona-no-fill.svg',
  favicon: 'img/favicon/favicon.ico',

  colors: {
    primaryColor: '#005cb2',
    secondaryColor: '#01a9f4'
  },

  fonts: {
    myFont: ['Times New Roman', 'Serif'],
    myOtherFont: ['-apple-system', 'system-ui']
  },

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
  // Show documentation's last contributor's name.
  enableUpdateBy: true,
  // Show documentation's last update time.
  enableUpdateTime: true,
  scrollToTop: true,
  docsSideNavCollapsible: true
}

module.exports = siteConfig
