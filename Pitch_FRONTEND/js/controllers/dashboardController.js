import { dashboardView } from "../views/dashboardView.js";

export function dashboardController() {
  document.getElementById("app").innerHTML = dashboardView();
  loadDashboardData();
}

function loadDashboardData() {
  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  
  const tbody = document.getElementById("dashboard-body");
  tbody.innerHTML = submissions.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${item.dateTime}</td>
      <td>${item.status}</td>
      <td><button onclick="reavaliar(${index})">Reavaliar</button></td>
    </tr>
  `).join('');
}

window.reavaliar = function (id) {
  alert(`Reavaliação solicitada para ID ${id}`);
};
