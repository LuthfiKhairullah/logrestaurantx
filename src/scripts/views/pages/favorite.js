import '../component/restaurantList';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    return `
        <h2 tabindex="0" class="title" id="maincontent">Favorite Restaurant</h2>
        <h2 tabindex="0" class="status">You don't have favorite restaurant</h2>
        <restaurant-list></restaurant-list>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const status = document.querySelector('.status');
    const restaurantListElement = document.querySelector('restaurant-list');
    if (restaurants.length !== 0) {
      status.classList.add('display');
      restaurantListElement.restaurants = restaurants;
    }
  },
};

export default Favorite;
