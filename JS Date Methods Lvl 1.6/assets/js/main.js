date1 = new Date(1999, 10, 5, 15) // PM
date2 = new Date()
date3 = new Date(2019, 12, 3, 12) // PM
date4 = new Date(2000, 1, 1, 11) // AM



const date = new Date();
console.log(date);

const amPm = (datum) => {
    const stunden = datum.getHours();
    // console.log(stunden);
    return stunden > 12 ? "PM" : "AM";

}
console.log(amPm(date1));
console.log(amPm(date2));
console.log(amPm(date3));
console.log(amPm(date4));