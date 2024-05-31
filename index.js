// Seperti melakukan penarikan data lewat API tapi dalam bentuk file
// Bisa menggunakan fetch() juga
var request = new XMLHttpRequest();
request.open("GET", "./data/people.json", false);
request.send(null);

// variable objPeopleParsed menampung translasi dari JSON String ke JSON Object
var objPeopleParsed = JSON.parse(request.responseText);

// mengurutkan atau sorting berdasarkan umur
objPeopleParsed.people.sort((a, b) => b.age - a.age);

// Looping setiap element di dalam objPeopleParsed.people
objPeopleParsed.people.forEach((element) => {
  //Mengakses table yang sudah ada di HTML lewat ID Tablenya
  var tableBody = document.getElementById("example-01-table-body");

  //Membuat row dan cell table baru via javascript
  var row = document.createElement("tr");
  var cell1 = document.createElement("td");
  var cell2 = document.createElement("td");

  //Mengisi cell dengan data dari JSON
  cell1.innerHTML = element.firstName + " " + element.lastName;
  cell2.innerHTML = element.age;

  //Menambahkan cell ke dalam row
  row.appendChild(cell1);
  row.appendChild(cell2);

  //Menambahkan row ke dalam table
  tableBody.appendChild(row);
});

var arrData = [];

fetch("data/contoh.json")
  .then((response) => response.json())
  .then((data) => {
    window.arrData = data;
    console.log(window.arrData);
  });
