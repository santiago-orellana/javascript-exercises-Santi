const removeFromArray = function(array, ...argument) {
    
    let newArray = array.filter(elemento => !argument.includes(elemento));
    console.log("newArray: ", newArray);

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;