import { homeController } from './controllers/homeController.js';
import { webformController } from './controllers/webformController.js';
import { dashboardController } from './controllers/dashboardController.js';
import { proposalController } from './controllers/proposalController.js';

export function router() {
  const hash = window.location.hash || "/";
  
  switch (hash) {
    case "#/":
      homeController();
      break;
    case "#/webform":
      webformController();
      break;
    case "#/dashboard":
      dashboardController();
      break;
    case "#/proposal":
      proposalController();
      break;
    default:
      document.getElementById("app").innerHTML =
        "<h1>404 - Página não encontrada</h1>";
  }
}
