import createTag from "./createTag.js";
import { getRandomColor } from "./utils.js";

const colorModeMap = {
  default: () => "#889",
  rainbow: getRandomColor,
  "#": (colorCode) => colorCode,
};

const generateTagCloud = (tags, options) => {
  const elements = tags.reduce((acc, text) => {
    const backgroundColor = (
      colorModeMap[options.colorMode[0]] || // check if the colorMode is a hex value
      colorModeMap[options.colorMode] || // check if the colorMode is specified in modeMap
      colorModeMap.default
    )(options.colorMode); // call the function which was selected from the colorModeMap

    if (!acc.length)
      return [
        ...acc,
        ...createTag({ text, xPos: 0, yPos: 0, backgroundColor }),
      ];

    const lastElement = acc[acc.length - 2];
    const currentXpos = lastElement.x + lastElement.width + 20;
    const nextTagWidth = text.length * 20 + 46;

    const isOverflowingContainer = currentXpos + nextTagWidth <= 1200;

    // if new Element would overfow, put it in the next row
    const xPos = isOverflowingContainer ? currentXpos : 0;
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
