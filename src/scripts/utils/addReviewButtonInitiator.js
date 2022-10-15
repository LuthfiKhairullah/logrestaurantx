import DataSource from '../data/dataSources';
import { alertModal, createAddReviewButtonTemplate, createCustomerReviewTemplate } from '../views/templates/templateCreator';

const AddReviewButtonInitiator = {
  async init({ restaurant, addReviewContainer }) {
    this._restaurant = restaurant;
    this._addReviewContainer = addReviewContainer;

    await this._render();
  },

  async _render() {
    this._addReviewContainer.innerHTML = createAddReviewButtonTemplate();

    const addReviewButton = document.querySelector('#inputCustomerReview');
    addReviewButton.addEventListener('submit', async (e) => {
      e.preventDefault();
      const review = {
        id: this._restaurant,
        name: document.getElementById('inputName').value,
        review: document.getElementById('inputReview').value,
      };
      const updateReview = await DataSource.addCustomerReview(review);
      document.getElementById('inputName').value = '';
      document.getElementById('inputReview').value = '';
      const alertModalElement = document.querySelector('#modal');
      alertModalElement.classList.remove('display');
      if (await updateReview.error === false) {
        alertModalElement.innerHTML = alertModal('Thank you for your review');
        const closeButton = document.querySelector('#closeButton');
        await closeButton.addEventListener('click', (event) => {
          event.stopPropagation();
          alertModalElement.classList.add('display');
        });
        const customerReviewContainer = document.querySelector('.customer-reviews-container');
        customerReviewContainer.innerHTML = '';
        updateReview.customerReviews.forEach((newreview) => {
          customerReviewContainer.innerHTML += createCustomerReviewTemplate(newreview);
        });
      } else {
        alertModalElement.innerHTML = alertModal('Please Check Your Connection!');
        const closeButton = document.querySelector('#closeButton');
        closeButton.addEventListener('click', (event) => {
          event.stopPropagation();
          alertModalElement.classList.add('display');
        });
      }
    });
  },
};

export default AddReviewButtonInitiator;
