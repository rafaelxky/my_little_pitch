import { dashboardView } from "../views/dashboardView.js";
import { ResponseLocalService } from "../persistance/local/responseLocalService.js";

const responseService = new ResponseLocalService();

export function dashboardController() {
  document.getElementById("app").innerHTML = dashboardView();
  loadDashboardData();
}

function loadDashboardData() {
  console.log("Loading local projects");
  const storedSubmissions = responseService.list(); // replace localStorage
  const tbody = document.getElementById("dashboard-body");

  tbody.innerHTML = storedSubmissions.map((item, index) => {
    console.log("Item:", item); // Log the current item
    console.log("Index:", index); // Log the current index
    
    // Corrigir o retorno da template literal com parênteses
    return `
      <tr data-id="${item.id}">
        <td>${index + 1}</td>
        <td class="project-name" style="cursor:pointer; color:var(--accent-orange); font-weight:bold;">
          ${item.projectName || "No Name"}
        </td>
        <td>${item.status || "Pending"}</td>
        <td>
          <button class="review-btn" data-id="${item.id}">Review Proposal</button>
        </td>
      </tr>
    `;
  }).join('');

  attachEventListeners();
}

function attachEventListeners() {
  document.querySelectorAll(".project-name").forEach(cell => {
    cell.addEventListener("click", () => {
      const row = cell.closest("tr");
      document.querySelectorAll("tr[data-id]").forEach(r => r.classList.remove("active-row"));
      row.classList.add("active-row");

      const id = row.getAttribute("data-id");
      showSubmissionDetails(id);
    });
  });

  document.querySelectorAll(".review-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      review(id);
    });
  });
}

function showSubmissionDetails(id) {
  const submission = responseService.get(id);
  console.log("submission" + submission);
  const container = document.getElementById("submission-details");

  if (!submission) {
    container.innerHTML = "<p>Submission not found.</p>";
    return;
  }

  container.innerHTML = `
    <div class="submission-card">
      <h3>📋 Project Details</h3>
      <p><strong>Client Name:</strong> ${submission.name}</p>
      <p><strong>Company:</strong> ${submission.company}</p>
      <p><strong>Sector:</strong> ${submission.sector}</p>
      <p><strong>Role:</strong> ${submission.role}</p>
      <p><strong>Project Name:</strong> ${submission.projectName}</p>
      <p><strong>Summary:</strong> ${submission.summary}</p>
      <p><strong>File:</strong> ${submission.fileName || "None"}</p>
      <div class="submission-actions">
        <button onclick="editForm('${submission.id}')">✏️ Edit</button>
        <button id="delete-form">🗑️ Delete</button>
      </div>
    </div>
  `;

  document.getElementById("delete-form").addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this submission?")) {
      responseService.delete(id);
      localStorage.removeItem("editIndex");
      dashboardController();
      container.innerHTML = "";
    }
  });
}

// Makes editForm globally available
// when button pressed, calls this function with its specific ID
window.editForm = function(id) {
  console.log("id: " + id);
  localStorage.setItem("editingId", id); // replaces index with ID
  window.location.hash = "#/webform";
  window.dispatchEvent(new PopStateEvent("popstate"));
};

// Makes review globally available
window.review = function(id) {
  localStorage.setItem("reviewId", id);
  window.location.hash = "#/proposal";
  window.dispatchEvent(new PopStateEvent("popstate"));
};

// Simulates download functionality
window.download = function(id) {
  const submission = responseService.get(id);
  if (submission?.fileName) {
    alert(`Simulated download: ${submission.fileName}`);
  } else {
    alert("No file available for download.");
  }
};
