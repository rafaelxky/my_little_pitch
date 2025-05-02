import { proposalView } from '../views/proposalView.js';
import { setResponseService } from '../persistance/set.js';
import { setAiResponseGenService } from '../persistance/set.js';

const responseService = setResponseService;
const responseGenService = setAiResponseGenService;

export async function proposalController() {
  let id = localStorage.getItem("editingId");
  console.log("proposal id: " + id);
  // Recupera a submissão específica pelo ID
  const submission = await responseGenService.generateResponseByRfpId(id);

  if (!submission) {
    document.getElementById('app').innerHTML = "<p>No proposal available.</p>";
    return;
  }

  // Simulação de proposta — substitua com dados reais da submissão ou de API externa
  const proposal = {
    introduction: submission || "Lorem Ipsum is simply dummy text...",
    vendor_instructions: submission.vendorInstructions || "Instructions for the vendor go here...",
    pricing_details: submission.pricingDetails || "Details about pricing go here..."
  };

  const proposalData = [
    { key: "Introduction", value: proposal.introduction },
    { key: "Vendor Instructions", value: proposal.vendor_instructions },
    { key: "Pricing Details", value: proposal.pricing_details }
  ];

  const finalConsiderations = submission.finalConsiderations || "These are the final considerations for the proposal.";

  document.getElementById('app').innerHTML = proposalView(proposalData, finalConsiderations);

  // Botão de download
  document.getElementById('download-btn').addEventListener('click', () => {
    const content = `
      Proposal Review\n\n
      ${proposalData.map(item => `${item.key}: ${item.value}`).join('\n\n')}
      
      Final Considerations:
      ${finalConsiderations}
    `;

    const blob = new Blob([content], { type: 'text/plain' }); // Change to 'application/pdf' with PDF generation
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "proposal.txt";
    link.click();
  });

  // Botão de rejeição
  document.getElementById('reject-btn').addEventListener('click', () => {
    responseService.update(id, { status: "Rejected by Client" });

    alert("Proposal rejected.");

    window.history.pushState(null, null, "/dashboard");
    window.dispatchEvent(new PopStateEvent("popstate"));
  });
}
