// Returns the HTML structure of the dashboard view
export function dashboardView() {
  return `
    <section class="dashboard-section">
      <!-- Main dashboard table with submissions -->
      <table class="dashboard-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Project Name</th>
            <th>Status</th>
            <th>Proposal</th> 
          </tr>
        </thead>
        <tbody id="dashboard-body"></tbody>
      </table>

      <!-- Submission details will be displayed below the table -->
      <div id="submission-details" class="submission-details"></div>
    </section>
  `;
}
