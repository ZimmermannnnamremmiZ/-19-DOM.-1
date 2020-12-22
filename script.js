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
  },
];

// // #
// const Numbering = users.map((e, index) => {
//   return index + 1
// })

// // // Names
// // const objOfName = users.reduce((acc, user, index) => {
// //   acc[index + 1] = user.name;
// //   return acc
// // }, {})

// // // Emails
// // const objOfEmail = users.reduce((acc, user) => {
// //   acc[user.name] = user.email;
// //   return acc
// // }, {})

// Balances
const objOfBalance = users.reduce((acc, user) => {
  acc[user.name] = user.balance;
  return acc
}, {})

// // const first = users.reduce((acc, user, index) => {
// //     acc[index + 1] = user.name;
// //     return acc
// //   }, {})



// // countainer
// const newDiv = document.createElement('div');
// newDiv.setAttribute("id", "tables")
// document.querySelector("body").appendChild(newDiv);

// // create Table
// function createTable(parent, colones, rows) {
//   let table = document.createElement('table');
//   for (let i = 0; i < rows; i++) {
//     let tr = document.createElement('tr');
//     for (let j = 0; j < colones; j++) {
//       let td = document.createElement('td');
//       tr.appendChild(td)
//     }
//     table.appendChild(tr)
//     let th = document.createElement('th');
//     // document.querySelector(table).appendChild(th)
//   }
//   parent.appendChild(table)
// }

// createTable(newDiv, 4, users.length)


// // users.reduce((el) => {for (let key in el) {console.log(key)}})

// console.log(document.querySelector('table'))


// for (let i=0; i<users.length; i++) {
//   let td = document.querySelectorAll('td')
//   let numbering = Numbering[i]
//   let name = users[i].name;
//   let email = users[i].email; 
//   let balance = users[i].balance;



let ths = [{
  numbering: '#',
  name: "Name",
  email: 'Email',
  balance: 'Balance'
}];



let countusers = users.length;
let table = document.createElement('table');
document.write('<div className="tracks-table"><table className="table">');
for (let i = 0; i < ths.length; i++) {
  let num = ths[i].numbering;
  let nam = ths[i].name;
  let ema = ths[i].email;
  let bal = ths[i].balance;
  document.write('<th><h4>' + num + '</h4></th><th><h4>' + nam + '</h4></th><th><h4>' + ema + '</h4></th><th><h4>' + bal + '</h4></th>');
}
for (let i = 0; i < countusers; i++) {
  let num = i + 1;
  let name = users[i].name;
  let email = users[i].email;
  let balance = users[i].balance;
  document.write('<tr className="mess-hide"><td className="num"><h4>' + num + '</h4></td><td className="name"><h4>' + name + '</h4></td><td className="song"><h4>' + email + '</h4></td><td className="url"><h4>' + balance + '</h4></td></tr>');
};
let res = 0;
  for (let balance of Object.values(objOfBalance)) {
    res += balance;
  }
  
document.write('<td></td><td></td><td></td><td><h4>' + res + '</h4></td>')
document.write('</table></div>');




console.log(objOfBalance)