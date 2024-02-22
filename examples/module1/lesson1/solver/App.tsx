import React, { useState } from 'react';
import { add, subtract, multiply, divide } from './calculator.ts';
import { InputField, CalculatorButton } from './calculatorComponents.tsx';

const App = () => {
  const DEFAULT_VALUE = 0;
  const [firstValue, setFirstValue] = useState<number>(DEFAULT_VALUE);
  const [secondValue, setSecondValue] = useState<number>(DEFAULT_VALUE);
  const [result, setResult] = useState<number | string>(DEFAULT_VALUE);

  const performCalculation = (func: (a: number, b: number) => number) => {
    setResult(func(firstValue, secondValue));
  };

  return (
    <div>
      <div className='grid grid-cols-2 gap-x-4'>
        <InputField value={firstValue} onChange={(e) => setFirstValue(parseFloat(e.target.value))} />
        <InputField value={secondValue} onChange={(e) => setSecondValue(parseFloat(e.target.value))} />
      </div>
      <div className='grid grid-cols-4 gap-x-4 my-4'>
        <CalculatorButton operation='+' onClick={() => performCalculation(add)} />
        <CalculatorButton operation='-' onClick={() => performCalculation(subtract)} />
        <CalculatorButton operation='*' onClick={() => performCalculation(multiply)} />
        <CalculatorButton operation='/' onClick={() => performCalculation(divide)} />
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
