import fs from "fs";

const defaultCanvas = {
  type: "excalidraw",
  version: 2,
  source: "https://excalidraw.com",
  elements: [],
  appState: {
    gridSize: null,
    viewBackgroundColor: "#ffffff",
  },
  files: {},
};

const createTag = ({ text, xPos, yPos }) => {
  const width = text.length * 20 + 46;
  return [
    {
      id: "cwCOtmajCjowp2dXspYMS",
      type: "rectangle",
      x: xPos,
      y: yPos,
      width,
      height: 66,
      angle: 0,
      strokeColor: "#000000",
      backgroundColor: "#ccc",
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
          id: "G4yzI8bJRmMMHIyBQI5JI",
        },
      ],
      updated: 1656483559491,
      link: null,
      locked: false,
    },
    {
      id: "G4yzI8bJRmMMHIyBQI5JI",
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

const testTags = ["test", "json", "backend", "mongoose"];

const elements = testTags.reduce((acc, text, index) => {
  return [...acc, ...createTag({ text, xPos: 0, yPos: index * 80 })];
}, []);

const updatedCanvas = {
  ...defaultCanvas,
  elements,
};

fs.writeFileSync(
  `tag-cloud-${new Date().toISOString().slice(0, 10)}.excalidraw`,
  JSON.stringify(updatedCanvas, null, 2)
);
