import { webformView } from '../views/webformView.js';

export function webformController() {
  document.getElementById('app').innerHTML = webformView();
  const form = document.querySelector('.webform');

  const nameField = document.getElementById('name');
  nameField.addEventListener('input', function () {
    this.value = this.value.replace(/[0-9]/g, '');
  });

  const textarea = document.getElementById('summary');
  const charCount = document.getElementById('char-count');
  const maxChars = 500;

  textarea.addEventListener('input', () => {
    const remaining = maxChars - textarea.value.length;
    charCount.textContent = `${remaining} characters remaining`;
  });

  const editIndex = localStorage.getItem("editIndex");
  if (editIndex !== null) {
    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    const submission = submissions[editIndex];
    if (submission) {
      document.getElementById('name').value = submission.name;
      document.getElementById('company').value = submission.company;
      document.getElementById('sector').value = submission.sector;
      document.getElementById('role').value = submission.role;
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
      summary: document.getElementById('summary').value,
      fileName: document.getElementById('file').files[0]?.name || null,
      status: "Pendente",
      dateTime: new Date().toISOString()
    };

    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    if (editIndex !== null) {
      submissions[editIndex] = { ...submissions[editIndex], ...submission };
      localStorage.removeItem("editIndex");
    } else {
      submissions.push(submission);
    }

    localStorage.setItem("submissions", JSON.stringify(submissions));

    alert("New Submission Saved");
    window.location.hash = "#/dashboard";
  });
}
