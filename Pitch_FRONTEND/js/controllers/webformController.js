import { webformView } from '../views/webformView.js';

export function webformController() {
  document.getElementById('app').innerHTML = webformView();

  const form = document.querySelector('.webform');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submission = {
      name: document.getElementById('name').value,
      company: document.getElementById('company').value,
      sector: document.getElementById('sector').value,
      role: document.getElementById('role').value,
      summary: document.getElementById('summary').value,
      fileName: document.getElementById('file').files[0]?.name || null,
      status: "Pendente",
      dateTime: new Date().toLocaleString(),
    };

    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    submissions.push(submission);
    localStorage.setItem("submissions", JSON.stringify(submissions));

    alert("Submissão realizada com sucesso!");
    window.history.pushState(null, null, "/dashboard");
    window.dispatchEvent(new PopStateEvent("popstate"));
  });
}

