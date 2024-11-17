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

const books = [
  { name: 'book1.pdf' },
  { name: 'book2.pdf' },
  { name: 'book3.pdf' },
  { name: 'book4.pdf' },
  { name: 'book5.pdf' },
  { name: 'book6.pdf' },
  { name: 'book7.pdf' },
  { name: 'book8.pdf' },
  { name: 'book9.pdf' },
  { name: 'book10.pdf' },
  { name: 'book11.pdf' }
];

document.addEventListener("DOMContentLoaded", () => {

  const selectedDepartment = localStorage.getItem("selectedDepartment");
  const departmentElement = document.querySelector('.name-of-department');
  if (selectedDepartment && departmentElement) {
    departmentElement.innerHTML = selectedDepartment;
  }

 
  const tableBody = document.querySelector("#bookTable tbody");
  function displayBooks(filteredBooks) {
    tableBody.innerHTML = ""; 
    filteredBooks.forEach(book => {
      const row = document.createElement("tr");

   
      const nameCell = document.createElement("td");
      nameCell.textContent = book.name;
      row.appendChild(nameCell);

 
      const downloadCell = document.createElement("td");
      const downloadButton = document.createElement("a");
      downloadButton.textContent = "Download";
      downloadButton.className = "download-btn";
      downloadButton.href = `./books/${book.name}`;
      downloadButton.download = book.name;
      downloadCell.appendChild(downloadButton);
      row.appendChild(downloadCell);

      tableBody.appendChild(row);
    });
  }


  displayBooks(books);

 
  const searchBar = document.querySelector('.search-bar input');
  const searchButton = document.querySelector('.search-bar .search-button');

  function filterBooks() {
    const searchTerm = searchBar.value.trim().toLowerCase();
    const filteredBooks = books.filter(book =>
      book.name.toLowerCase().includes(searchTerm)
    );

    if (filteredBooks.length > 0) {
      displayBooks(filteredBooks);
    } else {
     
      tableBody.innerHTML = `
        <tr>
          <td colspan="2">No books found</td>
        </tr>
      `;
    }
  }
 searchButton.addEventListener('click', filterBooks);

  
  searchBar.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      filterBooks();
    }
  });
});
