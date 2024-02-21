import { clearBtn, validateBtn} from './domElements';
import { clearInput, validateInput } from './eventHandler.ts';

function validator() {
  validateBtn.addEventListener('click', validateInput);

  clearBtn.addEventListener('click', clearInput);
}

validator();
