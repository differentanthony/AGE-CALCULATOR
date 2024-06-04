
let userinput = document.getElementById("date");
let notify = document.getElementById('result');


function calAge() {

    let car = document.getElementById("car-name").value;

    let brithdate = new Date(userinput.value);

    let y1 = brithdate.getFullYear();
    let m1 = brithdate.getMonth() + 1;
    let d1 = brithdate.getDate();

    let currentdate = new Date();

    let y2 = currentdate.getFullYear();
    let m2 = currentdate.getMonth() + 1;
    let d2 = currentdate.getDate();

    let y3, m3, d3;

    y3 = y2 - y1;

    if(car <=0){
        document.getElementById("message").innerHTML= "** CHOOSE A MODEL PLEASE----";
        return false;
    }
    else if(m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonths(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    document.getElementById('result').innerHTML = car + " " +`IS<span> ${y3}</span>  YEARS, 
    <span> ${m3}</span>  MONTHS, AND <span> ${y3}</span>  DAYS OLD`;
}

function getDaysInMonths(year, month) {
    return new Date(year, month, 0).getDate();
}
