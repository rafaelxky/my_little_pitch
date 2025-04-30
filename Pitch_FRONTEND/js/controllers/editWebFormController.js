import { editWebformView } from '../views/editWebFormView.js';
import { returnNewSubmission } from './controllerUtil.js';
import { rfpService } from '../model/persistance/set.js';
import { Rfp } from '../model/models/rfp.js';

export function editWebFormController() {
  editForm();
}

function editForm() {
  document.getElementById('app').innerHTML = editWebformView();

  const form = document.querySelector('.editform');
  const editIndex = localStorage.getItem("editIndex");

  // Carrega dados no formulário se em modo de edição
    console.log("index !== null")
    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    const submission = submissions[editIndex];

    if (submission) {
      console.log("submission true");
      document.getElementById('name').value = submission.name;
      document.getElementById('company').value = submission.company;
      document.getElementById('sector').value = submission.sector;
      document.getElementById('role').value = submission.role;
      document.getElementById('projectName').value = submission.projectName;
      document.getElementById('summary').value = submission.summary;
    }

  // if (update){
  // https://api/user/update
  // Post: 
  //  return
  // }
  // https://api/user/add
  // Post:


  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submission = returnNewSubmission;

    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];

    if (editIndex !== null) {
      submissions[editIndex] = { ...submissions[editIndex], ...submission };
      //localStorage.setItem("submissions", JSON.stringify(submissions));
      let newRfp = new Rfp().setDescription(submission.summary).setTitle(submission.projectName);
      rfpService.addRfp(newRfp);
      localStorage.removeItem("editIndex");

      alert("Submissão atualizada com sucesso!");

      window.history.pushState(null, null, "/dashboard");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  });
}
