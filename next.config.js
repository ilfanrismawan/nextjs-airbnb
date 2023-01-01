const { linkSync } = require("fs");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["links.papareact.com", "jsonkeeper.com", "www.jsonkeeper.com"],
  },
};
