// We need to cast it as HTMLinputElement in order to IDE recognize `input.value` property
// Honestly I had to google why IDE was complaining with that.
// Found the answer here https://stackoverflow.com/questions/52325814/why-we-are-using-htmlinputelement-in-typescript
export const formInput = document.getElementById('input') as HTMLInputElement;
export const validateBtn: HTMLElement = document.getElementById('validate-btn');
export const clearBtn: HTMLElement = document.getElementById('clear-btn');
export const result: HTMLElement = document.getElementById('result');