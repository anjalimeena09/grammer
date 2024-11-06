// json2html.js
export default function json2html(data) {
    // Start building the table with the data-user attribute
    let tableHTML = '<table data-user="anjalimeena09052003@gmail.com">';
    
    // Create the table header
    tableHTML += '<thead><tr>';
    // Loop through the keys of the first object to create table headers
    Object.keys(data[0]).forEach(key => {
      tableHTML += `<th>${key}</th>`;
    });
    tableHTML += '</tr></thead>';
  
    // Create the table body
    tableHTML += '<tbody>';
    data.forEach(item => {
      tableHTML += '<tr>';
      Object.values(item).forEach(value => {
        tableHTML += `<td>${value}</td>`;
      });
      tableHTML += '</tr>';
    });
    tableHTML += '</tbody>';
  
    // Close the table
    tableHTML += '</table>';
  
    return tableHTML;
  }
  