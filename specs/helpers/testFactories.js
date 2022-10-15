import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';
import LikeButtonPresenter from '../../src/scripts/utils/likeButtonPresenter';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
