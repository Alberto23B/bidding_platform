export default function FormButtons({
  handleReset,
}: {
  handleReset: () => void;
}) {
  return (
    <div className='buttons-container'>
      <button type='submit' className='button'>
        Place bid
      </button>
      <button type='reset' className='button' onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
