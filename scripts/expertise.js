import { expertiseList, expertiseStats } from "../constants/expertise.data.js";

const expertiseListContainer = document.querySelector(
  ".expertise-lists-container"
);
const expertiseStatsNumbersContainer = document.querySelector(
  ".expertise-stats-numbers-container"
);
expertiseList.forEach(
  (item) =>
    (expertiseListContainer.innerHTML += ` <div class="expertise-list-item">
    <div class="expertise-list-item-img">
      <img src=${item.image} alt="" />
    </div>
    <div class="expertise-list-item-desc">
      <h1>${item.title1} <span class="heading-secondary">${item.title2}</span></h1>
      <p>
       ${item.desc}
      </p>
      <p>LEARN MORE</p>
    </div>
  </div>`)
);

expertiseStats.forEach(
  (item) =>
    (expertiseStatsNumbersContainer.innerHTML += `
    <div class="expertise-stat-number-container">
    <p>${item.title}</p>
    <div class="expertise-stat-number-item">
      <div class="percent">
        <div class="percent-${item.percent}"></div>
      </div>
      <p>${item.percent}%</p>
    </div>
  </div>`)
);
