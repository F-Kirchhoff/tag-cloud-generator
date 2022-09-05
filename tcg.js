import fs from "fs";
import generateTagCloud from "./src/generateTagCloud.js";

// get the specified path on function call
const filePath = process.argv[2];
if (!filePath) {
  console.error("Error: Please specify a .csv file containing the tags.");
  process.exit(1);
}

const colorFlagIndex = process.argv.indexOf("--color");
const fileNameIndex = process.argv.indexOf("--name");

const fileName =
  (fileNameIndex > -1 && process.argv[fileNameIndex + 1]) ||
  `tag-cloud-${new Date().toISOString().slice(0, 10)}`;

const options = {
  colorMode:
    (colorFlagIndex > -1 && process.argv[colorFlagIndex + 1]) || "default",
  backgroundColor: "#efeff5",
};

const tags = fs
  .readFileSync(filePath)
  .toString()
  .split(/[,\n]+/)
  .map((string) => string.trim())
  .filter((string) => string)
  .sort(() => Math.random() - 0.5);

const tagCloud = generateTagCloud(tags, options);

fs.writeFileSync(`${fileName}.excalidraw`, JSON.stringify(tagCloud, null, 2));

console.log(
  `Success! \n${tags.length} Tags created: \n${tags[0]}, ... , ${
    tags[tags.length - 1]
  }`
);
