// import { useState } from "react";
import { useState } from "react";
import "./index.css";

export default function App() {
  return <div>
    <Counter />
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

  return <div className="App">
    <p>
      <spa>{count === 0
        ? 'Today is '
        : count > 0
          ? `${count} days from today is `
          : `${Math.abscount} days ago was `}
      </spa>
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
}