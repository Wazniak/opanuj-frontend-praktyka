export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b !== 0) return a / b;
  else throw new Error('You just tried to divide by 0 ¯\_(ツ)_/¯');
}
