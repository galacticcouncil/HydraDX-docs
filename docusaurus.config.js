module.exports = {
  title: "HydraDX Docs",
  tagline: "Let's learn this",
  url: "https://docs.hydradx.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "galacticcouncil", // Usually your GitHub org/user name.
  projectName: "HydraDX-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "HydraDX Documentation",
      logo: {
        alt: "HydraDX logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/",
          activeBasePath: "/",
          label: "Docs",
          position: "left",
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: "https://hydradx.io",
          label: "HydraDX Homepage",
          position: "right",
        },
      ],
    },
    colorMode: {
      switchConfig: {
        lightIcon: '🐍'
      }
    },
    footer: {
      logo: {
        alt: "HydraDX",
        src: "img/logo.svg"
      },
      links: [
        {
          title: "HydraDX",
          items: [
            {
              label: "Home",
              href: "https://hydradx.io"
            },
            {
              label: "Newsletter",
              href: "https://hydradx.substack.com"
            }
          ]
        },
        {
          title: "For developers",
          items: [
            {
              label: "Github",
              href: "https://github.com/galacticcouncil"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/HDNPFFrcnW",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/hydra_dx",
            },
          ],
        },
      ]
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/galacticcouncil/HydraDX-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'ru', 'es'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      de: {
        label: 'Deutsch',
      },
      ru: {
        label: 'русский',
      },
      es: {
        label: 'español',
      }
    },
  },
};
