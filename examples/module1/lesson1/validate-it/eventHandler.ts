import { formInput, result } from './domElements.ts';
import { validateValue } from './validatorHandler.ts';

export function validateInput(): void {
  const inputValue: number = Number(formInput.value.trim());
  result.innerHTML = validateValue(inputValue);
}

export function clearInput() {
  formInput.value = '';
  result.innerHTML = '';
}