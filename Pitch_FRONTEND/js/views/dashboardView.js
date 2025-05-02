export function dashboardView() {
  return `
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
    <div id="submission-details" class="submission-details"></div>
  `;
}

