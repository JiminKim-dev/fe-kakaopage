import {containerInfo} from './data/containerInfoData.js'
import {todayWebtoonsData} from './data/todayWebtoons.js'
import {renderHome, renderDaily} from './render.js'
import {dailyTopData} from './data/scrape/dailyTopData.js'
import {makeWebtoonList} from './components/webtoonList.js'
import {eventMainBanner} from './slideEvent.js'
import {$, $all} from './utility.js'

const setFocus = (target, className) => {
  const focused = $(`.${className}`);
  if (focused) focused.classList.remove(className);
  target.classList.add(className);
}

const clickGenresList = () => {
  const genresItem = $all('.genres__item');
  genresItem.forEach(item => {
    item.addEventListener('click', (event) => {
      const focusedClass = 'genres--focused';
      setFocus(event.target, focusedClass);
      moveGenreNav(event.target);
    })
  });
}

const moveGenreNav = (target) => {
  switch (target.dataset.nav) {
    case 'home':
      resetMain();
      renderHome('홈', containerInfo, 'reRender', todayWebtoonsData);
      eventHome();
      break;
    case 'daily':
      resetMain();
      renderDaily(todayWebtoonsData);
      clickDailyTopList(dailyTopData);
      break;
  }
}

const resetMain = () =>{
  const main = $('.main');

  while (main.children.length > 2) {
    main.removeChild(main.lastChild);
  }
}

const clickDailyTopList = (data) => {
  const selectDay = $all('.day');
  selectDay.forEach((item) => {
    item.addEventListener('click', (event) => {
      const parentNode = event.target.parentNode;
      const focusedClass = 'day--focused';
      setFocus(parentNode, focusedClass);

      const topContainer = event.target.closest('.select__day').parentNode;
      topContainer.removeChild($('.webtoons__list'));

      const filterData = selectDailyWebtoonData(parentNode, data);
      const DAILY_ITEMS = 10; 
      const newList = makeWebtoonList(DAILY_ITEMS, filterData);
      
      topContainer.appendChild(newList);
    })
  })
}

const selectDailyWebtoonData = (parentNode, data) => {
  const select = parentNode.dataset.day;
  const filterData = (select === 'end')
    ? data
    : data.filter((el) => el.day.includes(select) && !(el.review.includes('위')));

  return filterData;
}

const clickBannerPrevBtn = () => {
  const focused = $('.focused');
  const prevItem = focused.previousElementSibling;

  if (prevItem !== null) {
    prevItem.classList.toggle('none');
    prevItem.classList.toggle('focused');

    focused.classList.toggle('none');
    focused.classList.toggle('focused');
  }
}

const clickBannerNextBtn = () => {
  const focused = $('.focused');
  const nextItem = focused.nextElementSibling;

  if (nextItem !== null) {
    nextItem.classList.toggle('none');
    nextItem.classList.toggle('focused');

    focused.classList.toggle('none');
    focused.classList.toggle('focused');
  }
}

const clickPromotionBanner = () => {
  const promo = $('.promotion__banner');
  promo.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-chevron-left')) {
      clickBannerPrevBtn();
    }

    if (e.target.classList.contains('fa-chevron-right')) {
      clickBannerNextBtn();
    }
  })
}

const eventHome = () => {
  clickPromotionBanner();
  clickDailyTopList(dailyTopData);
}

const loadHome = () => {
  renderHome('홈', containerInfo, 'firstRender', todayWebtoonsData);
  eventHome();
  clickGenresList();
}

window.addEventListener('load', () => {
  loadHome();
  eventMainBanner();
});