const palindromes = function (string) {
    /*  1ra Prueba
    // Ponemos en miniscula la cadena toLowerCase() y usamos el metodo
    // replace() para remover los caracteres no deseados en el (puntos, 
    // comas, espacios,...)
    let re = /[\W_]/g;  // RegExp (Expresiones regulares)
    let lowRegStr = string.toLowerCase().replace(re, '');

    // Utilizamos los metodos de encadenamiento con funcniones integradas
    // - Convierte el string en array => split('')
    // - Revierte el array => reverse()
    // - Convierte el array a string => join('')
    let reverseStr = lowRegStr.split('').reverse().join('');
    console.log(reverseStr);
    return reverseStr === lowRegStr;
    */

    // All valid characters
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // Convert to lowecase, split to array, filter only valid 
    // character, then rejoin as new string
    const cleanedString = string
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');
    
    // Create a new reversed string
    const reversedString = cleanedString.split('').reverse('').join('');

    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
