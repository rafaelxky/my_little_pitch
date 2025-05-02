export function proposalView(proposalData, finalConsiderations) {
  return `
    <section class="proposal-review">
      <h2>Proposal Review</h2>
      
      <div class="ai-proposal">
        <p>AI-generated proposal based on your submission.</p>
      </div>

      <!-- Tabela com os dados da proposta -->
      <div class="response-box">
        <table class="table table-striped" id="proposal-table">
          <thead>
            <tr>
              <th>Session Title</th>
              <th>Information Submitted</th>
            </tr>
          </thead>
          <tbody>
            ${proposalData.map(item => `
              <tr>
                <td>${item.key}</td>
                <td>${item.value}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Card com as considerações finais -->
      <div class="final-considerations">
        <div class="feedback">
          <h5 id="feedback-title">Final Step</h5>
          <!-- Botões para aceitar e baixar ou rejeitar a proposta -->

              <div class="buttons-container">
  <button class="proposal-buttons" id="download-btn">Accept and Download</button>
  <button class="proposal-buttons" id="reject-btn">Reject Proposal</button>
</div>

        </div>
      </div>
    </section>
  `;
}
