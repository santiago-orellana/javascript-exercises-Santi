const repeatString = function(string, num) {
    
    if (num < 0) {
        return 'ERROR';
    }

    let stringRepeat = '';
    let i = 0;
    while (i < num) {
        stringRepeat += string;
        i++;
    }
    return stringRepeat;
};

// Do not edit below this line
module.exports = repeatString;
