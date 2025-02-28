import { useState } from 'react';
import getBid from '../lib/getBid';
import { InputData } from '../types/types';
import FormRadioInputs from './FormRadioInputs';
import FormButtons from './FormButtons';
import FormInputs from './FormInputs';
import checkForZero from '../lib/checkForZero';

const initialInputState = {
  base: 0,
  minStep: 0,
  maxStep: 0,
  threshold: 0,
  steps: 0,
};

const url = 'http://localhost:5050';

export default function Form({
  currentBid,
  setCurrentBid,
}: {
  currentBid: number;
  setCurrentBid: (value: number) => void;
}) {
  const [inputData, setInputData] = useState<InputData>(initialInputState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputData((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!checkForZero(inputData)) {
      alert('Base, MinStep and MaxStep must be more than 0');
      return;
    }

    const response =
      currentBid === 0
        ? await getBid(url, inputData)
        : await getBid(url, { ...inputData, base: currentBid });

    setCurrentBid(response.result);

    if (response.limitReached) {
      alert("Limit reached: base can't be 0 or below");
    }
  };

  const handleReset = () => {
    setInputData(initialInputState);
    setCurrentBid(0);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <FormInputs
        handleChange={handleChange}
        inputData={inputData}
        currentBid={currentBid}
      />
      <FormRadioInputs setInputData={setInputData} />
      <FormButtons handleReset={handleReset} />
    </form>
  );
}
