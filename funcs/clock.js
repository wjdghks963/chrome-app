// 시계
const clock = document.body.querySelector(".clock");
const toDay = document.body.querySelector(".today");

// 요일 구하기 위한 주

const week = ["월", "화", "수", "목", "금", "토", "일"];

const clockFunc = () => {
  let date = new Date();
  let mon = date.getMonth() + 1;
  let day = date.getDate();
  let hour = String(date.getHours()).padStart(2, "0");
  let min = String(date.getMinutes()).padStart(2, "0");
  let sec = String(date.getSeconds()).padStart(2, "0");
  let yoil = date.getDay() - 1;

  toDay.innerHTML = `${mon}월 ${day}일 ${week[yoil]}요일`;
  clock.innerHTML = `${hour} : ${min} : ${sec}`;
};

setInterval(clockFunc, 1000);
