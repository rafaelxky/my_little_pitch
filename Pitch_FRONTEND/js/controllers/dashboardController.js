import { dashboardView } from "../views/dashboardView.js";

export function dashboardController() {
  document.getElementById("app").innerHTML = dashboardView();
  loadDashboardData();
  addRowClickListener();
}

function loadDashboardData() {
  const storedSubmissions = JSON.parse(localStorage.getItem("submissions")) || [];

  const tbody = document.getElementById("dashboard-body");
  tbody.innerHTML = storedSubmissions.map((item, index) => `
    <tr data-index="${index}">
      <td>${index + 1}</td>
      <td>${item.dateTime}</td>
      <td>${item.status}</td>
      <td><button onclick="reavaliar(${index})">Reavaliar</button></td>
      <td><button onclick="download(${index})">Download</button></td>
    </tr>
  `).join('');
}

function addRowClickListener() {
  document.addEventListener("click", (e) => {
    const row = e.target.closest("tr[data-index]");
    if (row) {
      const index = row.getAttribute("data-index");
      showSubmissionDetails(index);
    }
  });
}

function showSubmissionDetails(index) {
  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  const submission = submissions[index];
  const container = document.getElementById("submission-details");
  container.innerHTML = `
    <h3>Detalhes da Submissão</h3>
    <p><strong>Nome:</strong> ${submission.name}</p>
    <p><strong>Empresa:</strong> ${submission.company}</p>
    <p><strong>Setor:</strong> ${submission.sector}</p>
    <p><strong>Cargo:</strong> ${submission.role}</p>
    <p><strong>Resumo:</strong> ${submission.summary}</p>
    <p><strong>Ficheiro:</strong> ${submission.fileName || "Nenhum"}</p>
  `;
}

window.reavaliar = function (index) {
  alert(`Reavaliação solicitada para submissão #${index + 1}`);
};

window.download = function (index) {
  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  const fileName = submissions[index]?.fileName;
  if (fileName) {
    alert(`Simulação de download: ${fileName}`);
    // mais tarde: fetch(`/api/download/${fileName}`)
  } else {
    alert("Nenhum ficheiro disponível para download.");
  }
};
