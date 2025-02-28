import { InputData } from '../types/types';

export default function FormRadioInputs({
  setInputData,
}: {
  setInputData: (update: (prev: InputData) => InputData) => void;
}) {
  const inputs = [
    {
      label: '+5',
      htmlFor: 'plusFive',
      value: 5,
      id: 'plusFive',
      onClick: () =>
        setInputData((prev: InputData) => ({
          ...prev,
          steps: 5,
        })),
    },
    {
      label: '+1',
      htmlFor: 'plusOne',
      value: 1,
      id: 'plusOne',
      onClick: () =>
        setInputData((prev: InputData) => ({
          ...prev,
          steps: 1,
        })),
    },
    {
      label: '-1',
      htmlFor: 'minusOne',
      value: -1,
      id: 'minusOne',
      onClick: () =>
        setInputData((prev: InputData) => ({
          ...prev,
          steps: -1,
        })),
    },
    {
      label: '+5',
      htmlFor: 'minusFive',
      value: -5,
      id: 'minusFive',
      onClick: () =>
        setInputData((prev: InputData) => ({
          ...prev,
          steps: -5,
        })),
    },
  ];

  return (
    <div className='field'>
      {inputs.map((field, i) => {
        return (
          <div key={i}>
            <label htmlFor={field.htmlFor}>{field.label}</label>
            <input
              value={field.value}
              name='step'
              id={field.id}
              type='radio'
              onClick={field.onClick}
            />
          </div>
        );
      })}
    </div>
  );
}
