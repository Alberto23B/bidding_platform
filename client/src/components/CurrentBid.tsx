export default function CurrentBid({ value }: { value: number }) {
  return (
    <div className='current-container'>
      <h3>Current Bid:</h3>
      <p className='current'>{value} €</p>
    </div>
  );
}
