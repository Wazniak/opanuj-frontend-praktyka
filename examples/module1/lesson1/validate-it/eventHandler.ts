import { input, result } from './domElements.ts';
import { sanitizeInput, validateValue } from './validatorHandler.ts';

export function validateInput() {
  const value = sanitizeInput(input);
  result.innerHTML = validateValue(value);
}

export function clearInput() {
  input.value = '';
  result.innerHTML = '';
}