function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => b !== 0 ? a / b : 'Error: Division by zero',
    multiply: (a, b) => a * b,
};

function caesarCipher(str, shift) {
    return str.split('').map(char => {
      if (/[a-zA-Z]/.test(char)) {
        const code = char.charCodeAt(0);
        const base = (char.toLowerCase() === char) ? 97 : 65; // 'a' is 97, 'A' is 65
        return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base);
      }
      return char; // Non-alphabetical characters remain unchanged
    }).join('');
}

function analyzeArray(array) {
    const max = array.reduce((max, current) => {
        return current > max ? current : max;
    }, 0);

    const min = array.reduce((min, current) => {
        return current < min ? current : min;
    });

    const sum = array.reduce((acc, current) => acc + current, 0);
    const average = sum / array.length;

    return {
        average,
        min,
        max,
        length: array.length
    }
}
  

module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray};