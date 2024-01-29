/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "https://enfa.org.tr",
  generateRobotsTxt: true // (optional)
  // ...other options
};
