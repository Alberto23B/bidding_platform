import { InputData } from '../types/types';

interface InputProps {
  inputData: InputData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentBid: number;
}

export default function FormInputs({
  inputData,
  handleChange,
  currentBid,
}: InputProps) {
  const inputs = [
    { label: 'Base:', htmlFor: 'base', value: inputData.base, name: 'base' },
    {
      label: 'Treshold:',
      htmlFor: 'threshold',
      value: inputData.threshold,
      name: 'threshold',
    },
    {
      label: 'MinStep:',
      htmlFor: 'minStep',
      value: inputData.minStep,
      name: 'minStep',
    },
    {
      label: 'MaxStep:',
      htmlFor: 'maxStep',
      value: inputData.maxStep,
      name: 'maxStep',
    },
  ];

  return (
    <>
      {inputs.map((field, i) => {
        return (
          <div className='field' key={i}>
            <label htmlFor={field.htmlFor}>{field.label}</label>
            <input
              type='number'
              step={0.1}
              id={field.name}
              name={field.name}
              value={field.value}
              className='form-input'
              onChange={(e) => handleChange(e)}
              disabled={currentBid != 0}
            />
          </div>
        );
      })}
    </>
  );
}
