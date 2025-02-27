import { InputData } from '../types/types';

export default function FormRadioInputs({
  setInputData,
}: {
  setInputData: (update: (prev: InputData) => InputData) => void;
}) {
  return (
    <div className='field'>
      <div>
        <label htmlFor='plusFive'>+5</label>
        <input
          name='step'
          value={5}
          id='plusFive'
          type='radio'
          onClick={() =>
            setInputData((prev: InputData) => ({
              ...prev,
              steps: 5,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor='plusOne'>+1</label>
        <input
          name='step'
          value={1}
          id='plusOne'
          type='radio'
          onClick={() =>
            setInputData((prev: InputData) => ({
              ...prev,
              steps: 1,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor='minusOne'>-1</label>
        <input
          name='step'
          value={-1}
          id='minusOne'
          type='radio'
          onClick={() =>
            setInputData((prev: InputData) => ({
              ...prev,
              steps: -1,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor='minusFive'>-5</label>
        <input
          name='step'
          value={-5}
          id='minusFive'
          type='radio'
          onClick={() =>
            setInputData((prev: InputData) => ({
              ...prev,
              steps: -5,
            }))
          }
        />
      </div>
    </div>
  );
}
