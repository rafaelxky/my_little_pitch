console.log("webFormController")
import { webformView } from '../views/webformView.js'
import { ResponseLocalService } from '../persistance/local/responseLocalService.js';
import { Submission } from "../model/models/submission.js";

const responseService = new ResponseLocalService();

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

  const editingId = localStorage.getItem('editingId');
  console.log("editing id: " + editingId);
  if (editingId) {
    console.log("Is editing")
    const submission = responseService.get(editingId);
    if (submission) {
      document.getElementById('name').value = submission.name;
      document.getElementById('company').value = submission.company;
      document.getElementById('sector').value = submission.sector;
      document.getElementById('role').value = submission.role;
      document.getElementById('email').value = submission.email;
      document.getElementById('projectName').value = submission.projectName;
      document.getElementById('summary').value = submission.summary;

      console.log("Inside Webform Controller: " + submission)
      

      charCount.textContent = `${maxChars - (submission.summary?.length || 0)} characters remaining`;
    }
  }

  console.log("added submit")
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newSubmission = returnNewSubmission();


    console.log("newSubmission: ", newSubmission);

    if (editingId) {
      responseService.update(editingId, newSubmission);
      localStorage.removeItem('editingId');
    } else {
      console.log("responseService.add: ", newSubmission)
      responseService.add(newSubmission);
    }

    alert("Submission saved successfully.");
    form.reset();
    charCount.textContent = `${maxChars - (newSubmission?.summary.length || 0)} characters remaining`;


    window.location.hash = "#/dashboard";
  
    window.dispatchEvent(new PopStateEvent("popstate"));
  });
}

export function returnNewSubmission(){
  return new Submission()
  .setName(returnValue('name'))
  .setCompany(returnValue('company'))
  .setSector(returnValue('sector'))
  .setRole(returnValue('role'))
  .setProjectName(returnValue('projectName'))
  .setSummary(returnValue('summary'))
  .setFileName(returnValue('file'))
  .setStatus('pending')
  ;  
}

export function returnValue(id){
  return document.getElementById(id).value;
}
