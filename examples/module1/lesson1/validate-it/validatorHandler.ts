import { MAX_VALUE, MIN_VALUE } from './constants.ts';

export function sanitizeInput(input) {
  // Verify that:
  // a) input element is not null (so it was found)
  // b) input.value is not empty
  return input && input.value ? Number(input.value.trim()) : 'Input is missing or empty, please try again.';
}

export function validateValue(value) {
  const condition = value > MIN_VALUE && value < MAX_VALUE;
  const successMsg = 'Valid';
  const failureMsg = 'Does not match expected conditions';
  return condition ? successMsg : failureMsg;
}


export function rulesCheck(value) {
  const isNotNullOrUndefined = value !== null && value !== undefined;
  const isANumber = !isNaN(value);
  const isGreaterThan = value > MIN_VALUE;
  const isSmallerThen = value < MAX_VALUE;
  const isEven = value % 2 === 0;
  return isNotNullOrUndefined
    && isANumber
    && isGreaterThan
    && isSmallerThen
    && isEven;
}