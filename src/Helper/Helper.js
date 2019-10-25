import { format, render, cancel, register } from "timeago.js";

let dateOption01 = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
};

let timeOption01 = {
  hours: ""
};

const oneSecond = 1000;
const oneMinute = 60 * oneSecond;
const oneHour = 60 * oneMinute;
const oneDay = 24 * oneHour;
const oneWeek = 7 * oneDay;

export default {
  handleDate(str) {
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
  }
};
