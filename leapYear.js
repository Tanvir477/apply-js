function isLeapYear(year1){

    let remainder = year1;

    if((remainder % 4 == 0) && (remainder % 100  != 0 ) || (remainder % 400 == 0) ){
        return true
    }
    else{
        return false;
    }

}

function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input

checkLeapYear(256);

const result = isLeapYear(2000);
console.log(result);


const d = new Date("february 28, 1983 ");
let day = d.getDate()
console.log(day);

// program to check leap year
function checkLeaYear(year) {

    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

checkLeaYear(2000);