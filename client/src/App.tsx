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
    base: 0,
    minStep: 0,
    maxStep: 0,
    threshold: 0,
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
          <label htmlFor='threshold'>Threshold:</label>
          <input
            inputMode='numeric'
            name='threshold'
            value={inputData.threshold}
            onChange={(e) => handleChange(e)}
            disabled={currentBid != 0}
          />
        </div>
        <div className='field'></div>
        <label htmlFor='minStep'>MinStep:</label>
        <input
          inputMode='numeric'
          name='minStep'
          value={inputData.minStep}
          onChange={(e) => handleChange(e)}
          disabled={currentBid != 0}
        />
        <div className='field'>
          <label htmlFor='minStep'>MaxStep:</label>
          <input
            inputMode='numeric'
            name='maxStep'
            value={inputData.maxStep}
            onChange={(e) => handleChange(e)}
            disabled={currentBid != 0}
          />
        </div>
        <div className='field'>
          <label htmlFor='input'>Enter the first bid:</label>
          <input
            inputMode='numeric'
            name='base'
            value={inputData.base}
            onChange={(e) => handleChange(e)}
            disabled={currentBid != 0}
          />
        </div>

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
        <div>
          <button type='submit'>Place bid</button>
          <button type='reset' onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
      <div>
        <h2>Current Bid:</h2>
        <p>{currentBid}</p>
      </div>
    </>
  );
}

export default App;
