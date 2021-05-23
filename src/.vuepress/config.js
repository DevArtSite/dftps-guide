const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'DFtpS',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/Devartsite/dftps.github.io',
    editLinks: true,
    docsDir: 'src',
    docsBranch: 'main',
    editLinkText: 'Edit this page',
    lastUpdated: true,
    nav: [
      {
        text: 'Introduction',
        link: '/guide/',
      },
      {
        text: 'Setup',
        ariaLabel: 'Setup',
        items: [
          { text: 'Software', link: '/guide/soft-setup' },
          { text: 'Module', link: '/guide/mod-setup' }
        ]
      },
      {
        text: 'Software CLI',
        ariaLabel: 'Software CLI',
        items: [
          { text: 'Manage ftp users', link: '/guide/cli/users' },
          { text: 'Run server', link: '/guide/cli/serve' },
          { text: 'Upgrade', link: '/guide/cli/upgrade' }
        ]
      },
      {
        text: 'Module usage',
        ariaLabel: 'Module usage',
        items: [
          { text: 'Simple example', link: '/guide/module/simple' },
          { text: 'Example with database', link: '/guide/module/with-database' }
        ]
      },
      {
        text: 'Documentations',
        ariaLabel: 'Documentations',
        items: [
          { text: 'Server', link: 'https://doc.deno.land/https/deno.land/x/dftps/src/server/mod.ts' },
          { text: 'Connection', link: 'https://doc.deno.land/https/deno.land/x/dftps/src/server/connection.ts' },
          { text: 'File System', link: 'https://doc.deno.land/https/deno.land/x/dftps/src/server/filesystem.ts' },
          { text: "Commands Registry", link: "https://doc.deno.land/https/deno.land/x/dftps/src/server/commands/_REGISTRY.ts" }
        ]
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/gnx7ZAv'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Home',
          collapsable: false,
          children: [
            '',
            'soft-setup',
            'mod-setup'
          ]
        },
        {
          title: 'Software CLI',
          collapsable: false,
          children: [
            'cli/users',
            'cli/serve',
            'cli/upgrade'
          ]
        },
        {
          title: 'Module usage',
          collapsable: false,
          children: [
            'module/simple',
            'module/with-database'
          ]
        }
      ],
    }
  },

  theme: 'yuu',

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

