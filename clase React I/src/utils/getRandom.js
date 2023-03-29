export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
export const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
