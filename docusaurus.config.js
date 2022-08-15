/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'My Portfolio',
  tagline: 'A React-based static github website template.',
  url: 'https://github.com',
  baseUrl: '/',
  organizationName: 'anushka4118', // Usually your GitHub org/user name.
  projectName: 'anushka4118.github.io', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'about',
          position: 'left',
          label: 'About me',
        },
        {
          href: 'https://github.com/anushka4118',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Anushka Mehta',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Resume',
              to: '/docs/resume',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/<GITHUB-USER>',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'About me',
              to: '/docs/about',
            },
            {
              label: 'Timeline',
              to: '/docs/timeline',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} MyPortfolio. Built with Docusaurus.`,
    },
  },

  themes: ['docusaurus-portfolio-theme'],
  plugins: [
    [
      'docusaurus-portfolio-plugin',
      {
        username: 'anushka4118',
        path: '/',
        pageTitle: 'My Site',
        pageDescription: 'About me.',
        userOptions: {},
        repoOptions: {
          type: 'all',
          sort: 'updated',
          direction: 'desc',
          numRepos: 10,
        },
      },
    ],
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
