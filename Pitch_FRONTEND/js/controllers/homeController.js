import { homeView } from '../views/homeView.js';

export function homeController() {
  document.getElementById('app').innerHTML = homeView();
}
