import API_ENDPOINT from '../../globals/apiEndpoint';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createSkeletonRestaurantItemTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
        <div class="restaurant-item">
            <a href="#" aria-label="skeleton">
                <div>
                    <h2 class="restaurant-name skeleton">Lorem ipsum dolor sit.</h2>
                    <img src="./images/placeholder.png" width="100%" height="300px" alt="skeleton">
                    <div class="restaurant-detail">
                        <h3 class="skeleton">Lorem ipsum dolor</h3>
                        <h3 class="skeleton">Lorem ipsum</h3>
                    </div>
                </div>
            </a>
        </div>
    `;
  }
  return template;
};

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
        <a href="/#/detail/${restaurant.id}" aria-label="Link to detail restaurant ${restaurant.name}">
            <div>
                <h2 class="restaurant-name" id="restaurant">${restaurant.name}</h2>
                <img class="lazyload" data-src="${API_ENDPOINT.IMAGE_MEDIUM + restaurant.pictureId}" alt="Picture Restaurant ${restaurant.name}">
                <div class="restaurant-detail">
                    <h3>📍 ${restaurant.city}</h3>
                    <h3>⭐ ${restaurant.rating}</h3>
                </div>
            </div>
        </a>
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant">
        <h2 class="restaurant-name" tabindex="0" id="maincontent" aria-label="Restaurant name ${restaurant.name}">${restaurant.name}</h2>
        <div class="restaurant-container">
            <img class="lazyload" data-src="${API_ENDPOINT.IMAGE_LARGE + restaurant.pictureId}" alt="Picture Restaurant ${restaurant.name}" tabindex="0">
            <div class="restaurant-container-detail">
                <p tabindex="0">Rating : ⭐ ${restaurant.rating}</p>
                <p tabindex="0">Address : 📍 ${restaurant.address}, ${restaurant.city}</p>
                <p tabindex="0">Description : <br>${restaurant.description}</p>
            </div>
        </div>
        <h3 class="menu-restaurant" tabindex="0">MENU</h3>
        <div class="restaurant-menu-container">
            <div class="restaurant-menu-foods">
                <h4 tabindex="0">FOODS</h4>
            </div>
            <div class="restaurant-menu-drinks">
                <h4 tabindex="0">DRINKS</h4>
            </div>
        </div>
        <h3 class="customer-reviews" tabindex="0">CUSTOMER REVIEWS</h3>
        <div class="customer-reviews-container"></div>
        <div class="add-review-container">
            <h3 class="add-customer-review" tabindex="0">ADD REVIEW</h3>
            <form id="inputCustomerReview">
                <div class="input">
                    <label for="inputName">Name</label>
                    <br>
                    <input type="text" id="inputName" placeholder="Your Name..." required>
                </div>
                <div class="input">
                    <label for="inputReview">Review</label>
                    <br>
                    <textarea id="inputReview" cols="30" rows="5" placeholder="Your Review..."></textarea>
                </div>
                <div class="addReviewButtonContainer"></div>
            </form>
        </div>
    </div>
`;

const createRestaurantMenuTemplate = (menu) => `
    <p tabindex="0">● ${menu.name}</p>
`;

const createCustomerReviewTemplate = (review) => `
    <div class="customer-review-container">
        <p class="customer-review-name" tabindex="0" aria-label="Customer name ${review.name}">${review.name}</p>
        <p class="customer-review-date" tabindex="0" aria-label="Review date ${review.date}">${review.date}</p>
        <p class="customer-review-review" tabindex="0" aria-label="Customer review ${review.review}">${review.review}</p>
    </div>
`;

const createAddReviewButtonTemplate = () => `
    <button type="submit" id="addReviewButton">+ Add New Review</button>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="Like this restaurant" id="likeButton" class="like">
        <img src="../../images/favoriteIcon/unfavoriteIcon.png" alt="Icon Like Button"/>
    </button>
`;

const createUnlikeButtonTemplate = () => `
    <button aria-label="Unlike this restaurant" id="likeButton" class="like">
        <img src="../../images/favoriteIcon/favoriteIcon.png" alt="Icon Unlike Button"/>
    </button>
`;

const alertModal = (message) => `
    <div class="modal-container">
        <div>${message}</div>
        <button id="closeButton" tabindex="0">Close</button>
    </div>
`;

export {
  createSkeletonRestaurantItemTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantMenuTemplate,
  createCustomerReviewTemplate,
  createAddReviewButtonTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
  alertModal,
};
