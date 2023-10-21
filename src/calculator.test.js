import { calculator } from "./calculator";

test('add two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('subtract two numbers', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
});

test('divide two numbers', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
});

test('multiply two numbers', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
});
