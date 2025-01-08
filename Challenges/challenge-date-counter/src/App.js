// import { useState } from "react";
import { useState } from "react";
import "./index.css";

export default function App() {
  return <div>
    {/* <Counter /> */}
    <NewCounter />
  </div>
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  function handleNextStep() {
    setStep((s) => s + 1);
  }

  function handlePreviousStep() {
    setStep((s) => s - 1);
  }

  function handleNextCount() {
    setCount((s) => s + step);
  }

  function handlePreviousCount() {
    setCount((s) => s - step);
  }

  return (
    <div className="App">
      <p>
        <span>{count === 0
          ? 'Today is '
          : count > 0
            ? `${count} days from today is `
            : `${Math.abscount} days ago was `}
        </span>
        <span>
          {date.toDateString()}
        </span>
      </p>

      <div>
        <button onClick={handlePreviousStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleNextStep}>+</button>
      </div>

      <div>
        <button onClick={handlePreviousCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleNextCount}>+</button>
      </div>

    </div>
  );
}

// Witruimte

function NewCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState();

  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);


  function handleNextCount() {
    setCount((s) => s + step);
  }

  function handlePreviousCount() {
    setCount((s) => s - step);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="App">
      <div>
        <input type="range" min="0" max="10" value={step} onChange={e => setStep(Number(e.target.value))} />
        <span>Step: {step}</span>
      </div>

      <button onClick={handlePreviousCount}>-</button>
      <input type="text" value={count} onChange={e => setCount(Number(e.target.value))} />
      <button onClick={handleNextCount}>+</button>

      <p>
        <span>{count === 0
          ? 'Today is '
          : count > 0
            ? `${count} days from today is `
            : `${Math.abscount} days ago was `}
        </span>
        <span>
          {date.toDateString()}
        </span>
      </p>

      {(count !== 0 || step !== 1) ? <div>
        <button onClick={handleReset}>Reset</button>
      </div> : null}
    </div >
  );
}