import classnames from "classnames";
import { twMerge } from "tailwind-merge";

export const stockIsOpen = () => {
  const day = new Date().getDay();
  const time = new Date().getHours();
  return day > 0 && day < 6 && time >= 9 && time <= 16;
};

export const formatDate = (date, dateTime) => {
  return (
    date.slice(0, 4) +
    "/" +
    date.slice(4, 6) +
    "/" +
    date.slice(6, 8) +
    "-" +
    dateTime
  ); //更新時間
};

export const formatPrice = (price) => {
  return parseFloat(price).toFixed(2);
};

export const cn = (...inputs) => {
  return twMerge(classnames(inputs));
};
