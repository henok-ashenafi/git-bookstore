const department = [
  { name: 'Software Engineering' },
  { name: 'Computer Science' },
  { name: 'Information System' },
  { name: 'Information Technology' },
  { name: 'Cyber Security' },
   { name: 'chemical engineering' } ,
    { name: 'ccc engineering' }
];

document.addEventListener("DOMContentLoaded", () => {
  addtodepartments();
  gotodepartmentpage();
  setupSearchFunctionality();
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
      const selecteddepartment = event.target.textContent;
      localStorage.setItem("selectedDepartment", selecteddepartment);
      const departmentName = selecteddepartment.replace(/\s+/g, '-').toLowerCase();
      window.location.href = `department.html?department=${departmentName}`;
    });
  });
}

function setupSearchFunctionality() {
  let searchElement = document.querySelector('.search-button');
  let inputElement = document.querySelector('.text');

  if (searchElement && inputElement) {
    function performSearch() {
      const searchValue = inputElement.value.trim().toLowerCase();
      const dept = department.find((dept) => dept.name.toLowerCase() === searchValue);

      if (dept) {
        localStorage.setItem("selectedDepartment", dept.name); 
        const departmentName = dept.name.replace(/\s+/g, '-').toLowerCase();
        window.location.href = `department.html?department=${departmentName}`;
      } else {
        alert("Department not found. We are working on it.");
      }
    }

   
    searchElement.addEventListener('click', performSearch);

    
    inputElement.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') { 
        performSearch();
      }
    });
  } else {
    console.error("Search button or input element not found in the DOM");
  }
}
