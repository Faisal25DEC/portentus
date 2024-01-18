import { servicesList } from "../constants/services.data.js";

const servicesListContainer = document.querySelector(
  ".services-list-container"
);
servicesList.forEach(
  (item) =>
    (servicesListContainer.innerHTML += ` <div class="service-list-item">
    <div class="service-list-item-desc">
      <h1 class="service-list-item-heading">
        ${item.heading1} <span class="heading-secondary">${item.heading2}</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        quos hic id ipsum. Corporis ipsum dolores blanditiis
        perspiciatis vero ad. Lorem ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        quos hic id ipsum. Corporis ipsum dolores blanditiis
        perspiciatis vero ad. Lorem, ipsum dolor.
      </p>
      <p>Learn More</p>
    </div>
    <div class="service-list-item-img">
      <img src="${item.image}" alt="service-list-item-img" />
    </div>
  </div>`)
);
