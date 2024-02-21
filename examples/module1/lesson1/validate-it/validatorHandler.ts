import { MAX_VALUE, MIN_VALUE } from './constants.ts';

export function validateValue(value: number) {
  const successMsg = 'Valid number provided';
  const failureMsg = 'Does not match expected conditions';
  return rulesChecker(value) ? successMsg : failureMsg;
}

export function rulesChecker(value: number) {
  const isANumber = !isNaN(value);
  const isGreaterThan = value > MIN_VALUE;
  const isSmallerThen = value < MAX_VALUE;
  const isEven = value % 2 === 0;
  return isANumber
    && isGreaterThan
    && isSmallerThen
    && isEven;
}