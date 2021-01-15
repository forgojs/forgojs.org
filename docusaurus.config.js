module.exports = {
  title: "Forgo JS",
  tagline: "Tiny UI runtime for modern web apps",
  url: "https://forgojs.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "forgojs", // Usually your GitHub org/user name.
  projectName: "forgo", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "ForgoJS",
      logo: {
        alt: "ForgoJS",
        src: "img/forgo.png",
      },
      items: [
        {
          href: "https://twitter.com/forgojs",
          label: "@forgojs",
          position: "left",
        },
        {
          href: "https://github.com/forgojs/forgo",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://github.com/forgojs/forgo-examples",
          label: "Examples",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "@forgojs",
              href: "https://twitter.com/forgojs",
            },
            {
              label: "@jeswin",
              href: "https://twitter.com/jeswin",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} @jeswin. Built with Docusaurus v2.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          routeBasePath: "/",
          homePageId: "homepage",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
