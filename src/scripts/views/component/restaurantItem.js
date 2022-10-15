import { createRestaurantItemTemplate } from '../templates/templateCreator';

class RestaurantItem extends HTMLElement {
  constructor() {
    super();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML += createRestaurantItemTemplate(this._restaurant);
  }
}

customElements.define('restaurant-item', RestaurantItem);
