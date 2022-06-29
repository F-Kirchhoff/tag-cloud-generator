import createTag from "./createTag.js";
import { getRandomColor } from "./utils.js";

const colorModeMap = {
  mono: () => "#889",
  rainbow: getRandomColor,
};

const generateTagCloud = (tags, options) => {
  const elements = tags.reduce((acc, text) => {
    const backgroundColor = (
      colorModeMap[options.colorMode] || (() => "#889")
    )();
    if (!acc.length)
      return [
        ...acc,
        ...createTag({ text, xPos: 0, yPos: 0, backgroundColor }),
      ];

    const lastElement = acc[acc.length - 2];
    const currentX = lastElement.x + lastElement.width + 20;
    const nextTagWidth = text.length * 20 + 46;

    const isOverflowingContainer = currentX + nextTagWidth <= 1200;

    const xPos = isOverflowingContainer ? currentX : 0;
    const yPos = isOverflowingContainer
      ? lastElement.y
      : lastElement.y + lastElement.height + 20;
    return [...acc, ...createTag({ text, xPos, yPos, backgroundColor })];
  }, []);

  return {
    type: "excalidraw",
    version: 2,
    source: "https://excalidraw.com",
    appState: {
      gridSize: null,
      viewBackgroundColor: options.backgroundColor,
    },
    files: {},
    elements,
  };
};

export default generateTagCloud;
