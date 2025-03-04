import './index.css';
import { useState } from 'react';

export default function App() {
  return (
    <div>
      <TipCalulator />
    </div>
  )
}

function TipCalulator() {
  const [bill, setBill] = useState("");
  const [percentageOne, setPercentageOne] = useState(0);
  const [percentageTwo, setPercentageTwo] = useState(0);

  const tip = bill * ((percentageOne + percentageTwo) / 2 / 100);
  const total = bill + tip;

  function handleReset() {
    setBill("");
    setPercentageOne(0);
    setPercentageTwo(0);
  }

  return <div>
    <BillInput bill={bill} onsSetBill={setBill} />
    <SelectPercentage percentage={percentageOne} onSelect={setPercentageOne}>How did you like the service </SelectPercentage>
    <SelectPercentage percentage={percentageTwo} onSelect={setPercentageTwo}>How did your friend like the service </SelectPercentage>


    {bill > 0 && <>
      <Output bill={bill} tip={tip} total={total} />
      <Reset onReset={handleReset} />
    </>
    }
  </div >
}

function BillInput({ bill, onsSetBill }) {
  return <div>
    <label>How much was the bill? </label>
    <input
      type='text'
      placeholder='Bill value'
      value={bill}
      onChange={(e) => onsSetBill(Number(e.target.value))} />
  </div>
}

function SelectPercentage({ children, percentage, onSelect }) {
  return <div>
    <label>{children}</label>
    <select
      value={percentage}
      onChange={(e) => onSelect(Number(e.target.value))}>
      <option value='0'>Dissatisfied (0%)</option>
      <option value='5'>It was okay (5%)</option>
      <option value='10'>It was good (10%)</option>
      <option value='20'>Absolutely amazing! (20%)</option>
    </select>
  </div>
}

function Output({ bill, tip, total }) {
  return <h3>You pay ${total} (${bill} + ${tip} tip)</h3>
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>
}