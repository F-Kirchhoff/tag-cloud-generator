import fs from "fs";
import generateTagCloud from "./src/generateTagCloud.js";

// get the specified path on function call
const filePath = process.argv[2];
if (!filePath) {
  console.error("Error: Please specify a .csv file containing the tags.");
  process.exit(1);
}

const options = {
  colorMode: "mono",
  backgroundColor: "#efefff",
};

options.colorMode = process.argv[process.argv.indexOf("--color") + 1] || "mono";

const data = fs.readFileSync(filePath).toString();
const tags = data.split(",").map((string) => string.trim());

const tagCloud = generateTagCloud(tags, options);

fs.writeFileSync(
  `tag-cloud-${new Date().toISOString().slice(0, 10)}.excalidraw`,
  JSON.stringify(tagCloud, null, 2)
);
