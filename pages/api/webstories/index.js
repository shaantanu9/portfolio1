import fs from "fs";
const getWebstories = () => {
    // get current working directory
    const currentDirectory = process.cwd();
    const folder = fs.readdirSync("../../public/webstories");
    console.log(folder, "folder");
    // console.log(currentDirectory, "currentDirectory");
  };
  getWebstories();