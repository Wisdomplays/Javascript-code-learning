var today = newDate();

var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Fridayday", "Saturday",]

var months = [
    "January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

var day = days[today.getDay()];
var date = today.getDate();
var month = months[today.getMonth()];
var year = today.getFullYear();

document.getElementByID("day").innerHTML = "Day:" + days;
document.getElementByID("date").innerHTML = "Date:" + days;
document.getElementByID("month").innerHTML = "Month:" + days;
document.getElementByID("year").innerHTML = "Year:" + days;