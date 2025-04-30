import { homeController } from './controllers/homeController.js';
import { webformController } from './controllers/webformController.js';
import { dashboardController } from './controllers/dashboardController.js';
import { proposalController } from './controllers/proposalController.js';
import { editWebFormController } from './controllers/editWebFormController.js';
console.log("---------------")
console.log("router.js")

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
    case "/proposal":
      proposalController();
      break;
    case "/editform":
      editWebFormController();
      break;
    default:
      document.getElementById("app").innerHTML =
        "<h1>404 - Page Not Found</h1>";
  }
}

