const removeFromArray = function(array, ...argument) {
    
    let newArray = [];

    array.forEach(item => {
        if (!argument.includes(item)) {
            newArray.push(item);
        }
    });

    return newArray;

    // VERSION AVANZADA
    // let newArray = array.filter(elemento => !argument.includes(elemento));
    // console.log("newArray: ", newArray);

    // return newArray;
};

// console.log(removeFromArray([2, 1, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;