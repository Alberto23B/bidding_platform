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
  return (
    <>
      <div className='field'>
        <label htmlFor='input'>Base:</label>
        <input
          type='number'
          name='base'
          value={inputData.base}
          className='form-input'
          onChange={(e) => handleChange(e)}
          disabled={currentBid != 0}
        />
      </div>
      <div className='field'>
        <label htmlFor='threshold'>Threshold:</label>
        <input
          type='number'
          name='threshold'
          value={inputData.threshold}
          className='form-input'
          onChange={(e) => handleChange(e)}
          disabled={currentBid != 0}
        />
      </div>
      <div className='field'>
        <label htmlFor='minStep'>MinStep:</label>
        <input
          type='number'
          name='minStep'
          value={inputData.minStep}
          className='form-input'
          onChange={(e) => handleChange(e)}
          disabled={currentBid != 0}
        />
      </div>
      <div className='field'>
        <label htmlFor='minStep'>MaxStep:</label>
        <input
          type='number'
          name='maxStep'
          value={inputData.maxStep}
          className='form-input'
          onChange={(e) => handleChange(e)}
          disabled={currentBid != 0}
        />
      </div>
    </>
  );
}
