const department = [
  { name: 'Software Engineering' },
  { name: 'Computer Science' },
  { name: 'Information System' },
  { name: 'Information Technology' },
  { name: 'Mechanical Engineering' },
  { name: 'Cyber Security' },
  { name: 'Automotive Engineering' },
  { name: 'Chemical Engineering' }
];

let departmentElement=document.querySelector('.name-of-department');

document.addEventListener("DOMContentLoaded", () => {
  const selectedDepartment = localStorage.getItem("selectedDepartment"); 
  if (selectedDepartment) {
 departmentElement.innerHTML=selectedDepartment;
  }
});
