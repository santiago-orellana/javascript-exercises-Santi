const fibonacci = function(number) {
    if(typeof(number) !== "number") {
        // console.log("ES UN STRING: ", typeof(number));
        // console.log("String a numero: ", parseInt(number, 10));
        number = parseInt(number);
        // console.log("number es un: ", typeof(number));
    }
    if(number == 0) return 0;
    if(number < 0) return "OOPS";
    
    let fibonacciSerie = [1, 1];
    for(let i = 2; i < number; i++) {
        ant1 = fibonacciSerie[i-1];
        ant2 = fibonacciSerie[i-2];
        fibonacciSerie.push(ant1 + ant2);
    }

    console.log("Fibonacci Serie "+ "("+ number + "): ", fibonacciSerie);

    return fibonacciSerie[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
