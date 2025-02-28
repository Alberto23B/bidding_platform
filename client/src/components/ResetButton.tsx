export default function ResetButton({
  handleReset,
  handleClear,
}: {
  handleReset: () => void;
  handleClear: () => void;
}) {
  return (
    <div className='buttons-container'>
      <button type='reset' className='button' onClick={handleReset}>
        Reset
      </button>
      <button type='reset' className='button' onClick={handleClear}>
        Clear Fields
      </button>
    </div>
  );
}
