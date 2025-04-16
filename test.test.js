const { calculate } = require('./test');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('calculate function', () => {
    test('adds two numbers', () => {
        expect(calculate(5, 3, '+')).toBe(8);
    });

    test('subtracts two numbers', () => {
        expect(calculate(5, 3, '-')).toBe(2);
    });

    test('multiplies two numbers', () => {
        expect(calculate(5, 3, '*')).toBe(15);
    });

    test('divides two numbers', () => {
        expect(calculate(6, 3, '/')).toBe(2);
    });

    test('returns error for division by zero', () => {
        expect(calculate(6, 0, '/')).toBe('Error: Division by zero');
    });

    test('returns error for invalid operator', () => {
        expect(calculate(5, 3, '%')).toBe('Error: Invalid operator');
    });

    test('handles non-numeric inputs gracefully', () => {
        expect(calculate('a', 3, '+')).toBeNaN();
        expect(calculate(5, 'b', '+')).toBeNaN();
    });
});