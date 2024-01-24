const fs = require("fs");
const chokidar = require("chokidar");
const { exec } = require("child_process");

const jsonFilePath = "./xt.config.json";
const scriptToExecute = "./src/xt/lib/build-pages.sh";

// Watch for changes in the JSON file
const watcher = chokidar.watch(jsonFilePath, {
  persistent: true,
});

console.log(`Watching changes in ${jsonFilePath}`);

watcher
  .on("add", () => console.log("File has been added."))
  .on("change", (path) => {
    console.log(`File ${path} has been changed. Executing script...`);
    executeScript();
  })
  .on("unlink", () => console.log("File has been removed."));

// Execute the script
function executeScript() {
  exec(`sh ${scriptToExecute}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error}`);
      return;
    }
    console.log(`Script output:\n${stdout}`);
  });
}
