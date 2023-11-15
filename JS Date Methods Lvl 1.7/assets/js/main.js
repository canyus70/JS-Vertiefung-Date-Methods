
const istWeekend = (dateAsString) => {
    const date = new Date(dateAsString);
    const days = date.getDay()
    if( days === 0 ||  days === 6) {
        return "Es ist Wochenende";
    } else {
        return "Es ist ein Werktag";
    }
}


console.log(istWeekend("12, 15, 2019"));
console.log(istWeekend("2, 16, 2001"));
console.log(istWeekend("2, 1, 2020"));
console.log(istWeekend("2, 29, 2020"));
