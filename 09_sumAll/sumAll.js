const sumAll = function(a , b) { // a = 10; b = 2 
    if (a < 0 || b < 0) {
        return "ERROR";
    } else if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }else if (b < a) {
        let x = b; // 2
        b = a; // 10
        a = x; // 2
    }

    let suma = 0;
    for (let y = a; y <= b; y++) {
        suma = suma + y;
    }

    console.log('Suma Total = ', suma);
    return suma;
};

// Do not edit below this line
module.exports = sumAll;
