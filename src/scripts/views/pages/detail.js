import DataSource from '../../data/dataSources';
import UrlParser from '../../routes/urlParser';
import '../component/restaurantDetail';
import AddReviewButtonInitiator from '../../utils/addReviewButtonInitiator';
import LikeButtonPresenter from '../../utils/likeButtonPresenter';
import { createCustomerReviewTemplate, createRestaurantMenuTemplate } from '../templates/templateCreator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
        <div id="loading">Waiting for Data Source...</div>
        <restaurant-detail></restaurant-detail>
        <div id="modal" class="display"></div>
        <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DataSource.detailRestaurant(url.id);
    const restaurantDetailElement = document.querySelector('restaurant-detail');
    restaurantDetailElement.restaurant = restaurant;

    const menuFoodContainer = document.querySelector('.restaurant-menu-foods');
    restaurant.menus.foods.forEach((food) => {
      menuFoodContainer.innerHTML += createRestaurantMenuTemplate(food);
    });

    const menuDrinkContainer = document.querySelector('.restaurant-menu-drinks');
    restaurant.menus.drinks.forEach((drink) => {
      menuDrinkContainer.innerHTML += createRestaurantMenuTemplate(drink);
    });

    const customerReviewContainer = document.querySelector('.customer-reviews-container');
    restaurant.customerReviews.forEach((review) => {
      customerReviewContainer.innerHTML += createCustomerReviewTemplate(review);
    });

    AddReviewButtonInitiator.init({
      restaurant: restaurant.id,
      addReviewContainer: document.querySelector('.addReviewButtonContainer'),
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
