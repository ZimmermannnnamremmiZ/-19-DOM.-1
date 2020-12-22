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

const objOfBalance = users.reduce((acc, user) => {
  acc[user.name] = user.balance;
  return acc
}, {})

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
  document.write('<th><h4>' + num + '</h4></th><td><h4>' + nam + '</h4></td><td><h4>' + ema + '</h4></td><td><h4>' + bal + '</h4></td>');
}
for (let i = 0; i < countusers; i++) {
  let num = i + 1;
  let name = users[i].name;
  let email = users[i].email;
  let balance = users[i].balance;
  document.write('<tr className="tr"><td className="td"><h4>' + num + '</h4></td><td className="td"><h4>' + name + '</h4></td><td className="td"><h4>' + email + '</h4></td><td className="td"><h4>' + balance + '</h4></td></tr>');
};
let res = 0;
  for (let balance of Object.values(objOfBalance)) {
    res += balance;
  }
  
document.write('<td></td><td></td><td></td><td><h4>' + 'Total balance: ' + res + '</h4></td>')
document.write('</table></div>');

let tds = document.querySelectorAll('td');
tds.forEach((e) => {e.style.cssText = `padding: 20px 100px; border: 1px solid rgb(197, 196, 196); border-left: none; border-right: none; border-bottom: none;`;})
let tab = document.querySelector('table');
tab.style.cssText = `padding: 20px 100px; border: 1px solid rgb(197, 196, 196); border-collapse: collapse; border-left: none; border-right: none; border-bottom: none;`
let th = document.querySelector('th');
th.style.cssText = `padding: 20px 100px; border: 1px solid rgb(197, 196, 196); border-left: none; border-right: none; border-bottom: none;`
