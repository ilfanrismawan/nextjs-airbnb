const { linkSync } = require("fs");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["links.papareact.com", "jsonkeeper.com", "www.jsonkeeper.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiaWxmYW5yaXNtYXdhbiIsImEiOiJjbGNlMmljdGoxYzEzM29wNGxvOTFpYzUyIn0.j7noaLUWmNvsKe_3xbw0Vg",
  },
};
