import { editWebformView } from '../views/editWebFormView.js';

export function editWebFormController() {
  editForm();
}

function editForm() {
  document.getElementById('app').innerHTML = editWebformView();

  const form = document.querySelector('.editform');
  const editIndex = localStorage.getItem("editIndex");

  // Carrega dados no formulário se em modo de edição
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
      fileName: document.getElementById('newfile').files[0]?.name || null,
      status: "Pendente",
    };

    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];

    if (editIndex !== null) {
      submissions[editIndex] = { ...submissions[editIndex], ...submission };
      localStorage.setItem("submissions", JSON.stringify(submissions));
      localStorage.removeItem("editIndex");

      alert("Submissão atualizada com sucesso!");

      window.history.pushState(null, null, "/dashboard");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  });
}
