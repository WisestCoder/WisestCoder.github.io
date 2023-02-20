const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '陌尘的小私橱',
  url: 'https://wisestcoder.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '陌尘的小私橱',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'component/graph-editor/introduction',
          position: 'left',
          label: '组件文档',
        },
        {
          type: 'doc',
          docId: 'tools/ols/index',
          position: 'left',
          label: '工具',
        },
        {
          href: 'https://github.com/WisestCoder',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '广告位',
          items: [
            {
              label: '招广告位啦',
              to: 'advertising',
            },
            {
              label: '招广告位啦',
              to: 'advertising',
            },
            {
              label: '招广告位啦',
              to: 'advertising',
            },
          ],
        },
        {
          title: '广告位',
          items: [
            {
              label: '招广告位啦',
              to: 'advertising',
            },
            {
              label: '招广告位啦',
              to: 'advertising',
            },
            {
              label: '招广告位啦',
              to: 'advertising',
            },
          ],
        },
        {
          title: '友情链接',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/WisestCoder',
            },
            {
              label: '招广告位啦',
              to: 'advertising',
            },
            {
              label: '招广告位啦',
              to: 'advertising',
            },
          ],
        },
      ],
      logo: {
        alt: '涂鸦-服务平台',
        src: 'img/logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()}, Inc.  ❤️ &nbsp;Built by Mochen.`,
    },
    prism: {
      defaultLanguage: 'typescript',
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  themes: ['./src/plugins/theme-live-codeblock'],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
    './plugins/parse-less-plugin.js',
    './plugins/close-minimize-plugin.js'
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
