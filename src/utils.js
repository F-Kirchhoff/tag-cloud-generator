export const getRandomColor = () =>
  "#" +
  Math.floor(Math.random() * 255 * 255 * 255)
    .toString(16)
    .padStart(6, "0");
