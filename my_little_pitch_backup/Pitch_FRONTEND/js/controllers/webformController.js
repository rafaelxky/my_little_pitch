import { webformView } from '../views/webformView.js';

export function webformController() {
  document.getElementById('app').innerHTML = webformView();
}

