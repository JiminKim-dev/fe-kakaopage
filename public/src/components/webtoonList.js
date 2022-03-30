// ========== WebtoonList ==========
function makeWebtoonList(num, data) {
  return `
    <ul class="webtoons__list">
      ${makeWebtoonItems(num, data)}
    </ul>
  `;
}

function makeWebtoonItems(num, data) {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += `
    <li class="webtoons__item">
      <div class="item__privew">
        <div class="item__img">
          <img src=${data[i].img_url} alt="${data[i].img_alt}" loading="lazy"/>
        </div>
        <div class="item__rating">
          <div class="rating-star">
            <i class="fas fa-star"></i>
            <span>${data[i].review}</span>
          </div>
          <i class="fas fa-clock"></i>
        </div>
      </div>
      <div class="item__info">
        <h4 class="item__title">${data[i].title}</h4>
        <i class="fas fa-user"></i>
        <span class="item__viewer">${data[i].viewer}</span>
      </div>
    </li>
    `
  }

  return result
}

export {makeWebtoonList, makeWebtoonItems}