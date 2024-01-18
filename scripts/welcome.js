import { welcomeCardsData } from "../constants/welcome.data.js";

const welcomeCardsContainer = document.querySelector(
  ".welcome-cards-container"
);

welcomeCardsData.forEach((item, idx) => {
  welcomeCardsContainer.innerHTML += `
    <div class="welcome-card-container">
          <div class="welcome-card-image-container relative">
            <div class="welcome-card-image">
              <img src=${item.image} alt="" />
            </div>
            <div class="welcome-card-bg-image bg-${idx + 1} absolute">
              <img src=${item.bgImage} alt="" />
            </div>
          </div>
          <div class="welcome-card-title">
            <p>${item.title}</p>
            <h1>${item.heading1} <span>${item.heading2}</span></h1>
          </div>
          <div class="welcome-card-desc">
            <p>
              ${item.desc}
            </p>
          </div>
          <div class = "welcome-card-button-container"></div><button class="btn-hover welcome-card-button btn-primary">Learn More</button>
        </div>
    `;
});
