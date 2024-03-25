const fs = require("fs");
const buildPages = require("./create-pages.js");

console.log("👀 Watching for changes");

fs.watchFile("./xt.config.json", { interval: 1000 }, (curr, prev) => {
  buildPages();
});
