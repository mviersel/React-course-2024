# date counter

In deze challenge maak ik een date counter doormiddel van useState().

`UseState()` wordt gebruikt om variabelen aan te passen die op een andere manier niet aangepast mogen worden.

## Versie 1

![date-counter-v1](./README-files/date-counter-v1.png)

Versie 1 heeft de eerste manier op de date counter aan te passen. Deze versie is opgebouwd uit twee counters. Een step counter die bepaald hoe groot de stap is die per keer wordt gemaakt en de counter zelf. Deze gaan door middel van de stap het aantal veranderen.

Om te beginnen heb je natuurlijk `useState()` nodig.

```js
function Counter() {
const [count, setCount] = useState(0);
const [step, setStep] = useState(1);
```

En dan nog functions die de states kunnen aanpassen.

```js
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
```

De app ziet er als volgt uit:

```js

return (

  <div className="App">
```

Een return fuctie die jsx terug geeft en een hoofd div.

```js
<p>
  <span>
    {count === 0
      ? "Today is "
      : count > 0
      ? `${count} days from today is `
      : `${Math.abscount} days ago was `}
  </span>
  <span>{date.toDateString()}</span>
</p>
```

Een div die de ingegeven datum weergeeft.

```js
<div>
  <button onClick={handlePreviousStep}>-</button>
  <span>Step: {step}</span>
  <button onClick={handleNextStep}>+</button>
</div>
```

Een set buttons waar je de step mee kunt aangeven.

```js
    <div>
      <button onClick={handlePreviousCount}>-</button>
      <span>Count: {count}</span>
      <button onClick={handleNextCount}>+</button>
    </div>

  </div>
);
```

Nog een set buttons die door middel van de step het aantal kunnen aanpassen.

## Versie 2

![date-counter-v1](./README-files/date-counter-v2.png)

Met versie twee was het de bedoeling hetzelfde te doen maar dan met een slider.

De app is weer opgebouwd uit verschillende stukken:

```js
function NewCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState();
```

Het maken van de functie met dezelfde `useState()`.

```js
const date = new Date("june 21 2027");
date.setDate(date.getDate() + count);
```

Het program een datum laten pakken in een variable zetten.

```js
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
```

Een extra functie toevoegen om de teller te resetten.

```js
return (
<div className="App">
<div>
<input
type="range"
min="0"
max="10"
value={step}
onChange={(e) => setStep(Number(e.target.value))}
/>
<span>Step: {step}</span>
</div>

      <button onClick={handlePreviousCount}>-</button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={handleNextCount}>+</button>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abscount} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
    );
}
```

De jsx hierboven heeft een slider en input veld waar je dezelfde values kunt aanpassen als bij v1. Het doel van v2 is dat je op verschillende manieren hetzelfde kunt bereiken met `useState()`.
