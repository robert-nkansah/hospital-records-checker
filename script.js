// Hospital Records stored using an Array

let patients = [
  {
    id: 101,
    name: "John Mensah",
    age: 35,
    condition: "Malaria",
  },
  {
    id: 102,
    name: "Ama Boateng",
    age: 28,
    condition: "Asthma",
  },
];

// Select HTML elements
const form = document.querySelector("form");
const tableBody = document.querySelector("tbody");

// Display patients in the table
function displayPatients() {
  tableBody.innerHTML = "";

  patients.forEach(function (patient) {
    let row = `
            <tr>
                <td>${patient.id}</td>
                <td>${patient.name}</td>
                <td>${patient.age}</td>
                <td>${patient.condition}</td>
            </tr>
        `;

    tableBody.innerHTML += row;
  });
}

// Add new patient
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input values
  let id = document.querySelector("input[type='number']").value;
  let name = document.querySelectorAll("input")[1].value;
  let age = document.querySelectorAll("input")[2].value;
  let condition = document.querySelectorAll("input")[3].value;

  // Create new patient object
  let newPatient = {
    id: id,
    name: name,
    age: age,
    condition: condition,
  };

  // Add patient to array
  patients.push(newPatient);

  // Refresh table
  displayPatients();

  // Clear form
  form.reset();
});

// Load existing records when page opens
displayPatients();
