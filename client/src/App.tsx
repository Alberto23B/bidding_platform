import { useState } from 'react';
import './App.css';
import getBid from './lib/getBid';

interface InputData {
  base: number;
  minStep: number;
  maxStep: number;
  threshold: number;
  steps: number;
}

const url = 'http://localhost:5050';

function App() {
  const [inputData, setInputData] = useState<InputData>({
    base: 5000,
    minStep: 500,
    maxStep: 1000,
    threshold: 2000,
    steps: 0,
  });
  const [currentBid, setCurrentBid] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue = value.replace(/[^0-9]/g, '');
    setInputData((prev) => ({
      ...prev,
      [name]: Number(newValue),
    }));
  };

  const handleReset = () => {
    setInputData({
      base: 0,
      minStep: 0,
      maxStep: 0,
      threshold: 0,
      steps: 0,
    });
    setCurrentBid(0);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await getBid(url, inputData);

    setInputData((prev) => ({
      ...prev,
      base: response.result,
    }));
    setCurrentBid(response.result);
  };

  return (
    <>
      <h1>Bidding Platform</h1>
      <form onSubmit={handleSubmit} className='form'>
        <div className='field'>
          <label htmlFor='input'>Base:</label>
          <input
            inputMode='numeric'
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
            inputMode='numeric'
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
            inputMode='numeric'
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
            inputMode='numeric'
            name='maxStep'
            value={inputData.maxStep}
            className='form-input'
            onChange={(e) => handleChange(e)}
            disabled={currentBid != 0}
          />
        </div>

        <div className='field'>
          <div>
            <label htmlFor='plusFive'>+5</label>
            <input
              name='step'
              value={5}
              id='plusFive'
              type='radio'
              onClick={() =>
                setInputData((prev) => ({
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
                setInputData((prev) => ({
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
                setInputData((prev) => ({
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
                setInputData((prev) => ({
                  ...prev,
                  steps: -5,
                }))
              }
            />
          </div>
        </div>
        <div className='buttons-container'>
          <button type='submit' className='button'>
            Place bid
          </button>
          <button type='reset' className='button' onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
      <div className='current-container'>
        <h3>Current Bid:</h3>
        <p className='current'>{currentBid} €</p>
      </div>
    </>
  );
}

export default App;
