import { calculator } from './calculator';

describe('calculator', () => {
  test('adds two numbers', () => {
    expect(calculator(2, 3, 'add')).toBe(5);
  });

  test('subtracts two numbers', () => {
    expect(calculator(5, 2, 'subtract')).toBe(3);
  });

  test('multiplies two numbers', () => {
    expect(calculator(3, 4, 'multiply')).toBe(12);
  });

  test('divides two numbers', () => {
    expect(calculator(10, 2, 'divide')).toBe(5);
  });

  test('throws error on division by zero', () => {
    expect(() => calculator(10, 0, 'divide')).toThrow('Division by zero');
  });

  test('throws error on invalid operation', () => {
    // @ts-expect-error for testing invalid input
    expect(() => calculator(10, 5, 'modulo')).toThrow('Invalid operation');
  });
});