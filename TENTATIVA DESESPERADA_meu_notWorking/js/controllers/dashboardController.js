import { dashboardView } from "../views/dashboardView.js";
import { setResponseService } from "../persistance/set.js";
import { setAiResponseService } from "../persistance/set.js";

const responseService = setResponseService;
const aiResponseService = setAiResponseService;

export function dashboardController() {
  document.getElementById("app").innerHTML = dashboardView();
  loadDashboardData();
}

async function loadDashboardData() {
  console.log("Loading local projects");

  try {
    // Wait for the promise to resolve from responseService.list()
    const storedSubmissions = await responseService.list(); 

    // Check if storedSubmissions is an array
    if (!Array.isArray(storedSubmissions)) {
      console.error("Expected an array but got:", storedSubmissions);
      return;
    }

    const tbody = document.getElementById("dashboard-body");
    console.log("Stored Submissions:", storedSubmissions);

    // Use Promise.all to handle async operations inside the map
    const rows = await Promise.all(storedSubmissions.map(async (item, index) => {
      // Fetch AI responses for each submission
      let aiResponses = await aiResponseService.getByUserId(index);
      
      console.log("ai responses from the dashboard status: ", aiResponses, " from index ", index);
      console.log("Item:", item); // Log the current item
      console.log("Item.id: " + item.id);
      console.log("Index:", index); // Log the current index

      // Return a row for the table
      return `
        <tr onClick="showSubmissionDetails('${item.id}')">
          <td>${item.id}</td>
          <td class="project-name" style="cursor:pointer; color:var(--accent-orange); font-weight:bold;">
            ${item.name || "No Name"}
          </td>
          <td>${aiResponses.feedBack || "Pending"}</td>
          <td>
            <button class="review-btn" id="review" onClick="review('${item.id}')">Review Proposal</button>
          </td>
        </tr>
      `;
    }));

    // Join all rows and set the innerHTML for tbody
    tbody.innerHTML = rows.join('');
  } catch (error) {
    console.error("Error loading stored submissions:", error);
  }
}

// Makes showSubmissionDetails globally available
window.showSubmissionDetails = async function(id) {
  console.log("Showing submission details");
  const submission = await responseService.get(id);
  console.log("submission", submission);
  const container = document.getElementById("submission-details");

  if (!submission) {
    container.innerHTML = "<p>Submission not found.</p>";
    return;
  }

  container.innerHTML = `
    <div class="submission-card">
      <h3>📋 Project Details</h3>
      <p><strong>Client Name:</strong> ${submission.userName}</p>
      <p><strong>Company:</strong> ${submission.company}</p>
      <p><strong>Sector:</strong> ${submission.sector}</p>
      <p><strong>Role:</strong> ${submission.role}</p>
      <p><strong>Project Name:</strong> ${submission.name}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      <p><strong>Summary:</strong> ${submission.text}</p>
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
      dashboardController(); // Reload the dashboard after deletion
      container.innerHTML = "";
    }
  });
};

// Makes editForm globally available
window.editForm = function(id) {
  console.log("edit id from window.editForm : " + id);
  localStorage.setItem("editingId", id); // Store ID for editing
  console.log("editingId: " + localStorage.getItem("editingId"));
  window.location.hash = "#/webform"; // Navigate to the web form page
  window.dispatchEvent(new PopStateEvent("popstate"));
};

// Makes review globally available
window.review = function(id) {
  console.log("edit id from window.review : " + id);
  localStorage.setItem("editingId", id);
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
