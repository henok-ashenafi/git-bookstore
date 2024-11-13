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

let departmentsHTML = `
  <div class="department">Departments</div>
  <div class="list">
`;

document.addEventListener("DOMContentLoaded", () => {
  addtodepartments();
  gotodepartmentpage();
});

function addtodepartments() {
  let departmentsHTML = `
    <div class="department">Departments</div>
    <div class="list">
  `;

  department.forEach((dept) => {
    departmentsHTML += `<div class="item">${dept.name}</div>`;
  });

  departmentsHTML += `</div>`;

  const thirdContainer = document.querySelector('.third-container');
  if (thirdContainer) {
    thirdContainer.innerHTML = departmentsHTML;
    console.log("Departments added to third-container");
  } else {
    console.error("third-container not found");
  }
}

function gotodepartmentpage() {
  const itemElements = document.querySelectorAll('.item');

  itemElements.forEach((item) => {
    item.addEventListener('click', (event) => {
      const departmentName = event.target.textContent.replace(/\s+/g, '-').toLowerCase();
      window.location.href = `department.html?department=${departmentName}`;
    });
  });
}
