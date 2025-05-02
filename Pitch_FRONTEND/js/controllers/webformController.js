import { webformView } from '../views/webformView.js';
import { returnNewSubmission } from './controllerUtil.js';



export function webformController() {
  document.getElementById('app').innerHTML = webformView();

  const form = document.querySelector('.webform');

  // Verifica se é edição e pré-carrega os dados no formulário
  const editIndex = localStorage.getItem("editIndex");

  form.addEventListener('submit', (e) => {
    console.log("Submited1");
    e.preventDefault();

    const newEntry = returnNewSubmission(); 

    console.log(newEntry);

    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    const editIndex = localStorage.getItem("editIndex");

    if (editIndex !== null) { 
      // ✏️ Atualiza submissão existente
      submissions[editIndex] = { ...submissions[editIndex], ...newEntry} ;
      localStorage.removeItem("editIndex");
    } else {
      // ➕ Nova submissão
      submissions.push(newEntry);
    }

    localStorage.setItem("submissions", JSON.stringify(submissions));
    alert("New Submission Saved");

    // api.createNewUser(submission)

    // 🔁 Redireciona para o dashboard
    window.history.pushState(null, null, "/dashboard");
    window.dispatchEvent(new PopStateEvent("popstate"));
  });
}


