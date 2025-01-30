const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./assignment');

describe('Capitalize', () => {
    test('takes a string and returns it with the first character capitalized', () => {
        expect(capitalize('hello')).toBe('Hello');
    });
});

describe('Rerverse String', () => {
    test('takes a string and returns it reversed', () => {
        expect(reverseString('hello')).toBe('olleh');
    });
});

describe('Calculator', () => {
    test('adds two numbers correctly', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test('subtracts two numbers correctly', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });
    
    test('divides two numbers correctly', () => {
        expect(calculator.divide(6, 3)).toBe(2);
    });
    
    test('returns an error when dividing by zero', () => {
        expect(calculator.divide(6, 0)).toBe('Error: Division by zero');
    });
    
    test('multiplies two numbers correctly', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
    });
});

describe('CaesarCipher', () => {
    test('takes a string and a shift factor and returns it with each character shifted', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('takes a string and a shift factor and returns it with each character shifted', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('takes a string and a shift factor and returns it with each character shifted', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });

});

describe('Analyze Array', () => {
    test('takes an array of numbers and returns an object', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    });

});