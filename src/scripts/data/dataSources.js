import API_ENDPOINT from '../globals/apiEndpoint';

class DataSource {
  static async restaurantList() {
    const loading = document.querySelector('#loading');
    const response = await fetch(API_ENDPOINT.RESTAURANT);
    const responseJson = await response.json();
    loading.classList.add('display');
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const loading = document.querySelector('#loading');
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    loading.classList.add('display');
    return responseJson.restaurant;
  }

  static async addCustomerReview(review) {
    try {
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });
      return response.json();
    } catch (error) {
      return { error: true, message: `${error.message}` };
    }
  }
}

export default DataSource;
