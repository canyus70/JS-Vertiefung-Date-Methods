const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);
const output = document.getElementById("output");


output.innerHTML = date1 + "<br>" + date2 + "<br>" +date3 + "<br>" + date4;
