import { homeController } from './controllers/homeController.js';
import { webformController } from './controllers/webformController.js';
import { dashboardController } from './controllers/dashboardController.js';

export function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
      homeController();
      break;
    case "/webform":
      webformController();
      break;
    case "/dashboard":
      dashboardController();
      break;
    default:
      document.getElementById("app").innerHTML =
        "<h1>404 - Página não encontrada</h1>";
  }
}

