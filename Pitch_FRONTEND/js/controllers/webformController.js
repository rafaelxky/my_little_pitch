import { webformView } from '../views/webformView.js';

export function webformController() {
  document.getElementById('app').innerHTML = webformView();

  const form = document.querySelector('.webform');

  // Verifica se é edição e pré-carrega os dados no formulário
  const editIndex = localStorage.getItem("editIndex");
  if (editIndex !== null) {
    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    const submission = submissions[editIndex];
    if (submission) {
      document.getElementById('name').value = submission.name;
      document.getElementById('company').value = submission.company;
      document.getElementById('sector').value = submission.sector;
      document.getElementById('role').value = submission.role;
      document.getElementById('projectName').value = submission.projectName;
      document.getElementById('summary').value = submission.summary;
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submission = {
      name: document.getElementById('name').value,
      company: document.getElementById('company').value,
      sector: document.getElementById('sector').value,
      role: document.getElementById('role').value,
      projectName: document.getElementById('projectName').value,
      summary: document.getElementById('summary').value,
      fileName: document.getElementById('file').files[0]?.name || null,
      status: "Pendente",
    };

    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    const editIndex = localStorage.getItem("editIndex");

    if (editIndex !== null) {
      // ✏️ Atualiza submissão existente
      submissions[editIndex] = { ...submissions[editIndex], ...submission };
      localStorage.removeItem("editIndex");
    } else {
      // ➕ Nova submissão
      submissions.push(submission);
    }

    localStorage.setItem("submissions", JSON.stringify(submissions));
    alert("New Submission Saved");

    // 🔁 Redireciona para o dashboard
    window.history.pushState(null, null, "/dashboard");
    window.dispatchEvent(new PopStateEvent("popstate"));
  });
}
