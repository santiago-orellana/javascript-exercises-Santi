const leapYears = function(year) {
    // if (year % 400 == 0) {
    //     return true;
    // }
    // if (year % 100 == 0) {
    //     return false;
    // }
    // if (year % 4 == 0) {
    //     return true;
    // }
    // return false;


    if ((year % 4 === 0) && (!(year % 100 == 0) || (year % 400 === 0))) {
        return true;
    } else {
        return false;
    }

    // const isYearDivisibleByFour = year % 4 === 0;
    // const isCentury = year % 100 === 0;
    // const isYearDivisibleByFourHundred = year % 400 === 0;

    // if (isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred)){
    //     console.log('year%4: ', !isYearDivisibleByFour);
    //     console.log('!year%400: ', !isCentury);
    //     console.log('year%400: ', !isYearDivisibleByFourHundred);
    //     return true;
    // } else {
    //     return false;
    // }
};
// leapYears(501);

// Do not edit below this line
module.exports = leapYears;
