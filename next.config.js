/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  // google adsense
  // cors allows all origins
  // mode: "production",
  // cors allows all origins
  // scope: "/", // default is '/' (all routes)
});

module.exports = withPWA({
  reactStrictMode: true,
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
  },
  staticPageGenerationTimeout: 160, // default is 60 seconds
  images: {
    domains: [
      "database.shodkk.com",
      "wild-puce-hippopotamus-hose.cyclic.app",
      "shodkk.com",
      "shodkk-blog.vercel.app",
      "images.unsplash.com",
      "cdn.pixabay.com",
      "www.google.com",
      "dummyimage.com",
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
      "www.shodkk.com",
      "i.ibb.co",
      "giphy.com",
      "loving-jones-ff749a.netlify.app",
      "upload.wikimedia.org",
      "expressjs.com",
      "tailwindcss.com",
      "nextjs.org",
      "reactjs.org",
      "nodejs.org",
      "www.mongodb.com",
      "www.mysql.com",
      "www.python.org",
      "core.telegram.org",
      "sathish-portfolio.vercel.app",
      

    ],
  },
  // i18n: {
  //   // locales: ["en-US", "hi-IN"],
  //   defaultLocale: "en-US",
  // },
});
