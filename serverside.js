// Function to populate the table
function populateTable() {
  const tableBody = document.getElementById('dataTable');
  tableBody.innerHTML = ""; // Clear existing rows

  // Retrieve data from localStorage
  const formData = JSON.parse(localStorage.getItem('formData'));

  if (formData) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <th scope="row">1</th>
      <td>${formData.firstName}</td>
      <td>${formData.lastName}</td>
      <td>${formData.email}</td>
      <td>${formData.comment}</td>
    `;
    tableBody.appendChild(row);
  } else {
    tableBody.innerHTML = `<tr><td colspan="5" class="text-center">No data available</td></tr>`;
  }
}

// Populate the table on page load
document.addEventListener("DOMContentLoaded", populateTable);