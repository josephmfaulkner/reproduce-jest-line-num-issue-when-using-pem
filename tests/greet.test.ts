import { hello } from '../src/greet';

describe('hello', () => {
  it('greets with message', () => {
    expect(hello('TypeScript')).toBe('Greetings from the TypeScript compiler');
  });
});

describe('test throws error', () => {
    it('throws an error', () => {
      expect(2 + 2).toBe(5);
    });
});