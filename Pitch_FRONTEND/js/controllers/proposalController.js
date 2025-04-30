import { proposalView } from "../views/proposalView.js";

export function proposalController() {
  document.getElementById("app").innerHTML = proposalView();
}
