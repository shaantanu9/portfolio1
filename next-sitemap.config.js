/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://pravassy.com',
    generateRobotsTxt: true, // (optional)
    pagesDirectory: __dirname + "/public/webstories",
    // ...other options
  }