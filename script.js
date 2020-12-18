const users = [{
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
    "nestedField": {
      total: 300
    }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
    "nestedField": {
      total: 400
    }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
    "nestedField": {
      total: 200
    }
  }
];

// #
// const Numbering = users.map((e, index) => {
//   return index + 1
// })

// // Names
// const objOfName = users.reduce((acc, user, index) => {
//   acc[index + 1] = user.name;
//   return acc
// }, {})

// // Emails
// const objOfEmail = users.reduce((acc, user) => {
//   acc[user.name] = user.email;
//   return acc
// }, {})

// // Balances
// const objOfBalance = users.reduce((acc, user) => {
//   acc[user.name] = user.balance;
//   return acc
// }, {})

// const first = users[].reduce((acc, user, index) => {
//     acc[index + 1] = user.name;
//     return acc
//   }, {})



// countainer
const newDiv = document.createElement('div');
newDiv.setAttribute("id", "tables")
document.querySelector("body").appendChild(newDiv);

// create Table
function createTable(parent, colones, rows) {
  let table = document.createElement('table');
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < colones; j++) {
      let td = document.createElement('td');
      tr.appendChild(td)
    }
    table.appendChild(tr)
    let th = document.createElement('th');
    // document.querySelector(table).appendChild(th)
  }
  parent.appendChild(table)
}

createTable(newDiv, 4, 4)

// console.log(Numbering, objOfName, objOfEmail, objOfBalance)

// users.reduce((el) => {for (let key in el) {console.log(key)}})