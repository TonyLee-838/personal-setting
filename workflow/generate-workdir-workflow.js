const fs = require("fs/promises");

const PATH = "/users/tonylee/dev";
const OUTPUT_PATH = "/users/tonylee/Downloads/output-workflow.csv";

//title,subtitle,description
let csv = [];

(async function () {
  const dir = await fs.readdir(PATH);
  console.log(dir);
  const ignoreList = [".DS_Store"];

  dir.forEach((dir_name) => {
    if (ignoreList.indexOf(dir_name) !== -1) {
      return;
    }

    const title = dir_name;

    const subtitle = `Open Project ${dir_name} in Visual Studio Code.`;

    const args = dir_name.split`-`[0];
    csv.push([title, subtitle, args].join(",") + "\n");
  });
  console.log(csv);

  await fs.writeFile(OUTPUT_PATH, csv);
})();
