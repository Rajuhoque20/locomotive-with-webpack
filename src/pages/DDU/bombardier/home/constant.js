export const getFontSize = (
  height,
  scale = 0.01,
  min = "4px",
  max = "1.7vh"
) => {
  return height ? `clamp(${min}, ${height * scale}px, ${max})` : "";
};
