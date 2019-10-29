import { format, render, cancel, register } from "timeago.js";

let dateOption01 = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
};
let dateOption02 = {
  year: "numeric",
  month: "short",
  day: "numeric"
};
let dateOption03 = {
  hours: "numeric",
  minute: "numeric"
};

const oneSecond = 1000;
const oneMinute = 60 * oneSecond;
const oneHour = 60 * oneMinute;
const oneDay = 24 * oneHour;
const oneWeek = 7 * oneDay;

const handlePostingDate = str => {
  let date = new Intl.DateTimeFormat("en-GB", dateOption01);
  let now = +new Date();

  if (str > now - oneMinute) {
    return "Just now";
  } else if (str > now - oneHour) {
    return format(str);
  } else if (str > now - oneDay) {
    let minuteTwoDigits = str.getMinutes() < 10 ? "0" : "";
    return (
      "Yesterday at " +
      str.getHours() +
      ":" +
      minuteTwoDigits +
      str.getMinutes()
    );
  } else {
    return date.format(str);
  }
};

const getDate = str => {
  let date = new Intl.DateTimeFormat("en-GB", dateOption02);
  return date.format(str);
};

const getAge = birthDate => {
  //convert to UTC
  let date2_UTC = new Date();
  let date1_UTC = new Date(
    Date.UTC(
      birthDate.getUTCFullYear(),
      birthDate.getUTCMonth(),
      birthDate.getUTCDate()
    )
  );

  //--------------------------------------------------------------
  let days = date2_UTC.getDate() - date1_UTC.getDate();
  if (days < 0) {
    date2_UTC.setMonth(date2_UTC.getMonth() - 1);
    days += DaysInMonth(date2_UTC);
  }
  //--------------------------------------------------------------
  let months = date2_UTC.getMonth() - date1_UTC.getMonth();
  if (months < 0) {
    date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
    months += 12;
  }
  //--------------------------------------------------------------
  let years = date2_UTC.getFullYear() - date1_UTC.getFullYear();

  return "(" + years + "Y " + months + "M " + days + "D" + ")";
};

const DaysInMonth = date2_UTC => {
  let monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
  let monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
  let monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
  return monthLength;
};

export { handlePostingDate, getDate, getAge };
