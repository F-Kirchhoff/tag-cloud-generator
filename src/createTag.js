import { nanoid } from "nanoid";

export default ({ text, xPos, yPos, backgroundColor }) => {
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
      strokeColor: "#334",
      backgroundColor,
      fillStyle: "hachure",
      strokeWidth: 1,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      groupIds: [],
      strokeSharpness: "round",
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
      y: yPos + 12,
      width,
      height: 47,
      angle: 0,
      strokeColor: "#223",
      backgroundColor: "#fff",
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