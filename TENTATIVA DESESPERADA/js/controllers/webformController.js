console.log("webFormController")
import { webformView } from '../views/webformView.js'
import { setResponseService } from '../persistance/set.js';
import { Submission } from "../model/models/submission.js";

const responseService = setResponseService;

export async function webformController() {
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
    const remaining = maxChars - textarea.value.length || 0;
    charCount.textContent = `${remaining} characters remaining`;
  });

  const editingId = localStorage.getItem('editingId');
  console.log("editing id: " + editingId);
  if (editingId) {
    console.log("Is editing")
    const submission = await responseService.get(editingId);
    if (submission) {
      // todo: change this shit to add the user or some thing
      document.getElementById('name').value = submission.userName;
      document.getElementById('company').value = submission.company;
      document.getElementById('sector').value = submission.sector;
      document.getElementById('role').value = submission.role;
      document.getElementById('email').value = submission.email;
      document.getElementById('projectName').value = submission.name;
      document.getElementById('summary').value = submission.text;

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
      console.log("edited: id - " + editingId);
      console.log("edited: submission - ", newSubmission);
      responseService.update(editingId, newSubmission);
      localStorage.removeItem('editingId');
    } else {
      console.log("responseService.add: ", newSubmission)
      responseService.add(newSubmission);
    }

    alert("Submission saved successfully.");
    form.reset();
    charCount.textContent = `${maxChars - (newSubmission.summary ? newSubmission.summary.length : 0)} characters remaining`;




    window.location.hash = "#/dashboard";
  
    window.dispatchEvent(new PopStateEvent("popstate"));
  });
}

/*function returnNewSubmission(){
  let sbmtn = new Submission;
  sbmtn.name = returnValue('name');
  sbmtn.email = returnValue('email');
  return sbmtn;  
}*/


function returnNewSubmission(){
  let submission = new Submission()
  .setName(returnValue('name'))
  .setCompany(returnValue('company'))
  .setSector(returnValue('sector'))
  .setRole(returnValue('role'))
  .setProjectName(returnValue('projectName'))
  .setSummary(returnValue('summary'))
  .setFileName(returnValue('file'))
  .setStatus('done!')
  .setEmail(returnValue('email'))
  ;  

  return {
    name: submission.name,
    company: submission.company,
    sector: submission.sector,
    role: submission.role,
    projectName: submission.projectName,
    text: submission.summary,
    file: submission.fileName,
    status: submission.status,
    email: submission.email,
    userId: null,
};
}

export function returnValue(id){
  return document.getElementById(id).value;
}
