export function dashboardView() {
  return `
    <h2>Dashboard</h2>
    <table class="dashboard-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Data/Hora de Submissão</th>
          <th>Estado do Processo</th>
          <th>Reavaliação</th>
        </tr>
      </thead>
      <tbody id="dashboard-body"></tbody>
    </table>
  `;
}
