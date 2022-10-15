import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Restaurant from '../views/pages/listRestaurants';

const routes = {
  '/': Restaurant,
  '/list': Restaurant,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
