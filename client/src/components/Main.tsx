import CurrentBid from './CurrentBid';
import Form from './Form';
import { useState } from 'react';

export default function Main() {
  const [currentBid, setCurrentBid] = useState<number>(0);

  return (
    <>
      <Form currentBid={currentBid} setCurrentBid={setCurrentBid} />
      <CurrentBid value={currentBid} />
    </>
  );
}
