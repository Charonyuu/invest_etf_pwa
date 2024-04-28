export const stockIsOpen = () => {
  const day = new Date().getDay();
  const time = new Date().getHours();
  return day > 0 && day < 6 && time >= 9 && time <= 16;
};
