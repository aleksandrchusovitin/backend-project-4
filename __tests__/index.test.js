import { test, expect } from '@jest/globals';
import myPow from '../src/index.js';

test('test1', () => {
  expect(myPow(3, 3)).toBe(27);
});
