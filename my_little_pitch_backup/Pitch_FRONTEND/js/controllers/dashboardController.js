import { dashboardView } from "../views/dashboardView.js";

export function dashboardController() {
  document.getElementById("app").innerHTML = dashboardView();
  loadDashboardData();
}

function loadDashboardData() {
  const data = [
    { id: 1, dateTime: "2025-04-29 22:30", status: "Pendente" },
    { id: 2, dateTime: "2025-04-29 22:45", status: "Em andamento" },
    { id: 3, dateTime: "2025-04-29 23:00", status: "Concluído" }
  ];
  
  const tbody = document.getElementById("dashboard-body");
  tbody.innerHTML = data.map(item => `
    <tr>
      <td>${item.id}</td>
      <td>${item.dateTime}</td>
      <td>${item.status}</td>
      <td><button onclick="reavaliar(${item.id})">Reavaliar</button></td>
    </tr>
  `).join('');
}

window.reavaliar = function (id) {
  alert(`Reavaliação solicitada para ID ${id}`);
};
