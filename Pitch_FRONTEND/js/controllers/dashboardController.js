import { dashboardView } from "../views/dashboardView.js";
import { rfpService } from "../model/persistance/set.js";

export function dashboardController() {
  document.getElementById("app").innerHTML = dashboardView();
  loadDashboardData();
}

function loadDashboardData() {
  //const storedSubmissions = JSON.parse(localStorage.getItem("submissions")) || [];
  const storedSubmissions = JSON.parse(rfpService.list()) || [];
  const tbody = document.getElementById("dashboard-body");

  // todo: 
  tbody.innerHTML = storedSubmissions.map((item) => `
    <tr data-index="${item.id}">
      <td>${index + 1}</td> 
      <td class="project-name" style="cursor:pointer;">${item.projectName}</td>
      <td>${item.status}</td>
      <td><button onclick="review(${index})">Review Proposal</button></td>
    </tr>
  `).join('');

  addProjectNameClickListener();
}

function addProjectNameClickListener() {
  document.querySelectorAll(".project-name").forEach(cell => {
    cell.addEventListener("click", () => {
      const row = cell.closest("tr");

      document.querySelectorAll("tr[data-index]").forEach(r => r.classList.remove("active-row"));
      row.classList.add("active-row");

      const index = row.getAttribute("data-index");
      showSubmissionDetails(index);
    });
  });
}


function showSubmissionDetails(index) {
  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  const submission = submissions[index];
  const container = document.getElementById("submission-details");

  container.innerHTML = `
    <h3>Project Details</h3>
    <p><strong>Client Name:</strong> ${submission.name}</p>
    <p><strong>Company:</strong> ${submission.company}</p>
    <p><strong>Field:</strong> ${submission.sector}</p>
    <p><strong>Role:</strong> ${submission.role}</p>
    <p><strong>Project Name:</strong> ${submission.projectName}</p>
    <p><strong>Summary:</strong> ${submission.summary}</p>
    <p><strong>File:</strong> ${submission.fileName || "None"}</p>
    <button onclick="editForm(${index})">Edit Form</button>
    <button id="delete-form">Delete Form</button>
  `;

  // Delete Submission
  document.getElementById("delete-form").addEventListener("click", () => {
    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    if (confirm("Tens a certeza que queres apagar esta submissão?")) {
      submissions.splice(index, 1);
      localStorage.setItem("submissions", JSON.stringify(submissions));
      localStorage.removeItem("editIndex");
      dashboardController();
      document.getElementById("submission-details").innerHTML = "";
    }
  });
}

// Garantir que esta função está definida no `window`
window.editForm = function(index) {
  localStorage.setItem("editIndex", index);
  window.history.pushState(null, null, "/editform");
  window.dispatchEvent(new PopStateEvent("popstate"));
};


// Redireciona para a /proposal - página de revisão da proposta
window.review = function (index) {
  localStorage.setItem("reviewIndex", index); // Guarda o índice para uso futuro
  window.history.pushState(null, null, "/proposal");
  window.dispatchEvent(new PopStateEvent("popstate"));
};


// Download de um documento
window.download = function (index) {
  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  const fileName = submissions[index]?.fileName;
  if (fileName) {
    alert(`Simulação de download: ${fileName}`);
  } else {
    alert("Nenhum ficheiro disponível para download.");
  }
};
