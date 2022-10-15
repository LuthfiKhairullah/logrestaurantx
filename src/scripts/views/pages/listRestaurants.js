import '../component/heroElement';
import '../component/restaurantList';
import DataSource from '../../data/dataSources';
import { createSkeletonRestaurantItemTemplate } from '../templates/templateCreator';

const Restaurant = {
  async render() {
    return `
        <hero-element></hero-element>
        <h2 tabindex="0" class="title" id="maincontent">Explore Restaurant</h2>
        <restaurant-list>
          <div id="loading">Waiting for Data Source...</div>
          ${createSkeletonRestaurantItemTemplate(20)}
        </restaurant-list>
    `;
  },

  async afterRender() {
    const restaurants = await DataSource.restaurantList();
    const restaurantListElement = document.querySelector('restaurant-list');
    restaurantListElement.innerHTML = '';
    restaurantListElement.restaurants = restaurants;
  },
};

export default Restaurant;
