import { MAX_VALUE, MIN_VALUE } from './constants.ts';

export function validateValue(value: number) {
  const validators = [isANumber, isEven, isSmallerThen, isGreaterThan];
  return validators.every(v => v(value));
}


const isANumber = (value: number) => !isNaN(value);
const isGreaterThan = (value: number) => value > MIN_VALUE;
const isSmallerThen = (value: number) => value < MAX_VALUE;
const isEven = (value: number) => value % 2 === 0;