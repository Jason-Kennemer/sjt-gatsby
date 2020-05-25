
const config = {
  siteTitle: `Shit Jason Texts`,
  siteTitleShort: 'SJT',
  siteTitleAlt: 'Shit Jason Texts: Late Night Fun', // Alternative site title for SEO
  siteLogo: '', // Logo used for SEO and manifest
  siteAuthor: `@ValescoAgency`,
  siteDevUrl: 'https://valescoagency.com/',
  pathPrefix: "/", // Prefixes all links. For cases when deployed to github.io.
  siteDescription: `SJT: Late Night Fun`,
  siteKeywords: [
    'gatsby',
    'fun'
  ],
  siteUrl: process.env.SITE_URL || 'https://shitjasontexts.com',
  siteLanguage: 'en',
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  googleTagManagerID: "", // GTM ID
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  copyright: "© 2020 SJT", // Copyright string for the footer of the website.
  themeColor: "#252525", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

module.exports = config;