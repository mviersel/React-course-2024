import './index.css';
import { useState } from 'react';

export default function App() {
  return (
    <div>
      <Bill />
    </div>
  )
}

function Bill() {
  const [billCount, setBillCount] = useState();
  const [tipOne, setTipOne] = useState();
  const [tipTwo, setTipTwo] = useState();

  function handleBill(bill) {
    setBillCount(bill)
  }

  function handleTipOne() {
    setTipOne()
  }

  function handleTipTwo() {
    setTipTwo()
  }

  return (
    <div>
      <BillInput />
      <PercentageOne />
      <BillOutput />
    </div>
  )

  function BillInput() {
    return (
      <div>
        <p>How much was the bill?</p>
        <input type='number' />
      </div>
    )
  }

  function PercentageOne() {
    return (
      <div>
        <p>How did you like the service?</p>
        <input type='number' />
      </div>
    )
  }

  function BillOutput() {
    return (
      <div>
        <h1>You pay ${billCount} (${tipOne} + ${tipTwo} tip)</h1>

      </div>
    )
  }
}