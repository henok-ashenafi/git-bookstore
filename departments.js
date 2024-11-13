import {department} from "./book-homepage";

let departmentElement=document.querySelector('.second-container');


department.forEach((dept) => {
  departmentElement.innerHTML=`<li>${dept.name}</li>`;
});