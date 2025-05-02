import { Submission } from "../model/models/submission.js";

export function returnNewSubmission(){
  return new Submission()
  .setName(returnValue("name"))
  .setCompany(returnValue("company"))
  .setSector(returnValue("sector"))
  .setRole(returnValue("role"))
  .setProjectName(returnValue("projectName"))
  .setSummary(returnValue("summary"))
  .setFileName(returnValue("file"))
  .setStatus("pending");  
}

export function returnValue(id){
  return document.getElementById(id).value;
}