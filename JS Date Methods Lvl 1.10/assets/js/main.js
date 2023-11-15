const output = document.body.querySelector(".output");
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();


const datumAnzeige = () => {
    return output.innerHTML = day + "-"+ month + "-" + year
}
datumAnzeige()