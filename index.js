import fs from "fs";
import { nanoid } from "nanoid";

const options = {
  colorMode: "rainbow",
};
const defaultCanvas = {
  type: "excalidraw",
  version: 2,
  source: "https://excalidraw.com",
  elements: [],
  appState: {
    gridSize: null,
    viewBackgroundColor: "#ececef",
  },
  files: {},
};

const getRandomColor = () =>
  "#" +
  Math.floor(Math.random() * 255 * 255 * 255)
    .toString(16)
    .padStart(6, "0");

const createTag = ({ text, xPos, yPos }) => {
  const width = text.length * 20 + 46;
  const textId = nanoid();
  const boxId = nanoid();
  return [
    {
      id: boxId,
      type: "rectangle",
      x: xPos,
      y: yPos,
      width,
      height: 66,
      angle: 0,
      strokeColor: "#000000",
      backgroundColor:
        options.colorMode === "rainbow" ? getRandomColor() : "#ccc",
      fillStyle: "hachure",
      strokeWidth: 1,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      groupIds: [],
      strokeSharpness: "sharp",
      seed: 1109829816,
      version: 176,
      versionNonce: 727038904,
      isDeleted: false,
      boundElements: [
        {
          type: "text",
          id: textId,
        },
      ],
      updated: 1656483559491,
      link: null,
      locked: false,
    },
    {
      id: textId,
      type: "text",
      x: xPos,
      y: yPos + 10,
      width,
      height: 47,
      angle: 0,
      strokeColor: "#000000",
      backgroundColor: "#40c057",
      fillStyle: "solid",
      strokeWidth: 4,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      groupIds: [],
      strokeSharpness: "sharp",
      seed: 713226680,
      version: 80,
      versionNonce: 1147642040,
      isDeleted: false,
      boundElements: null,
      updated: 1656483548926,
      link: null,
      locked: false,
      text,
      fontSize: 36,
      fontFamily: 1,
      textAlign: "center",
      verticalAlign: "middle",
      baseline: 32,
      containerId: "cwCOtmajCjowp2dXspYMS",
      originalText: text,
    },
  ];
};

// get the specified path on function call
const filePath = process.argv[2];
options.colorMode = process.argv[3] || "rainbow";

if (!filePath) {
  console.error("Error: Please specify a .csv file containing the tags.");
  process.exit(1);
}

const data = fs.readFileSync(filePath).toString();

const testTags = data.split(",").map((string) => string.trim());

const elements = testTags.reduce((acc, text) => {
  if (!acc.length) return [...acc, ...createTag({ text, xPos: 0, yPos: 0 })];

  const lastElement = acc[acc.length - 2];
  const currentX = lastElement.x + lastElement.width + 20;
  const nextTagWidth = text.length * 20 + 46;

  const isOverflowingContainer = currentX + nextTagWidth <= 1200;

  const xPos = isOverflowingContainer ? currentX : 0;
  const yPos = isOverflowingContainer
    ? lastElement.y
    : lastElement.y + lastElement.height + 20;
  return [...acc, ...createTag({ text, xPos, yPos })];
}, []);

const updatedCanvas = {
  ...defaultCanvas,
  elements,
};

fs.writeFileSync(
  `tag-cloud-${new Date().toISOString().slice(0, 10)}.excalidraw`,
  JSON.stringify(updatedCanvas, null, 2)
);
