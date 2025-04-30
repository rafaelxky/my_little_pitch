import { router } from './router.js';
console.log("----------------")
console.log("app.js")
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      history.pushState(null, null, e.target.href);
      router();
    }
  });

  window.addEventListener("popstate", router);
  router();
});


