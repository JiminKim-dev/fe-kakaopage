const $ = (select) => document.querySelector(select);
const $all = (select) => document.querySelectorAll(select);

const getData = (router) =>  {
  return fetch(`https://clone-kakaopage-dobby.herokuapp.com/${router}`)
  .then(res => res.json());
}

const getToday = () => {
  const today = new Date().getDay();
  const day = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  return day[today];
}

export {$, $all, getData, getToday}