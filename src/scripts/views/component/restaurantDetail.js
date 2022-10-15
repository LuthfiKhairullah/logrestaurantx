import { createRestaurantDetailTemplate } from '../templates/templateCreator';

class RestaurantDetail extends HTMLElement {
  constructor() {
    super();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = createRestaurantDetailTemplate(this._restaurant);
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
