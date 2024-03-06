import { clearBtn, formInput, validateBtn } from './domElements';
import { clearInput, keepInputRange, validateInput } from './eventHandler.ts';

function validator(): void {
  validateBtn.addEventListener('click', validateInput);
  clearBtn.addEventListener('click', clearInput);
  formInput.addEventListener('input', keepInputRange);
}


validator();
