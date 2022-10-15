import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANT: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
  IMAGE_MEDIUM: `${CONFIG.BASE_IMAGE_URL}medium/`,
  IMAGE_LARGE: `${CONFIG.BASE_IMAGE_URL}large/`,
};

export default API_ENDPOINT;
