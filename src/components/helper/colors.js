const colorConfigs = [
  { bgColor: "#fff", textColor: "#000" },
  { bgColor: "#D093FF", textColor: "#000" },
  { bgColor: "#363636", textColor: "#fff" },
  { bgColor: "#939AFF", textColor: "#000" },
  {
    bgColor: "#CCCCCC",
    textColor: "#000",
    tabArrow: "#cccccc",
    tabBg: "#181D39",
  },
  { bgColor: "#93EDFF", textColor: "#000" },
];

export const getColor = (i) => {
  const index = i % colorConfigs.length;
  return colorConfigs[index];
};
