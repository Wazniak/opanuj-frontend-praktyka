import { formInput, result } from './domElements.ts';
import { validateValue } from './validatorHandler.ts';
import { MAX_VALUE, MIN_VALUE } from './constants.ts';

export function validateInput(): void {
  const successMsg = 'Valid number provided';
  const failureMsg = 'Does not match expected conditions';
  const inputValue: number = Number(formInput.value.trim());
  result.innerHTML = validateValue(inputValue) ? successMsg : failureMsg;
}

export function clearInput() {
  formInput.value = '';
  result.innerHTML = '';
}

export function keepInputRange() {
  if (formInput) {
    formInput.min = MIN_VALUE.toString();
    formInput.max = MAX_VALUE.toString();
    formInput.placeholder = `Enter an EVEN number between ${MIN_VALUE} and ${MAX_VALUE} (not including)`;
  }
}