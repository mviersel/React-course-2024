<br></br>

# 04 Steps

In dit project ga ik weer een videos volgen van de course.

## Start-up

Zoals de vorige keer begin je met het opschonen van je files. Alles, behalve de `App.js` en `index.js` mag verwijderd worder uit de _src_ folder.

## Static jsx - snippets

```javascript
<div className={`${step >= 1 ? "active" : ""}`}>1</div>
```

```javascript
<p className="message">
  Step {step}: {messages[step - 1]}
</p>
```

```javascript
<button style={{ backgroundColor: '#7950f2', color: '#fff' }}>

```

```javascript

```

```javascript

```

## Handeling events

Door middel van de _onClick={}_ functie kan javascript gebruik maken van andere functies.

Voorbeeld:

```javascript
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={handlePrevious}>
```

Hier wordt de funtion _hanldePrevious_ aangeroepen.

## State

"State is basically data that a component can hold over time." Hiermee wordt dus bedoeld een component zijn eigen data kan vasthouden of onthouden. Het brein van een component.

## Component state

Single local component variable ("Piece of state", "state veriable")

## Most important part

Updating the _state_ triggers react to re-render the component. State is basically a tool. The most powerfull tool a react developer has.

## State veriables met useState

Wanneer je iets wil gaan bouwen met stappen kun je variable state gebruiken. Voorbeeld:

```javascript
const [step, setStep] = useState(1);
```

Het hele ding hiervan is dat je een veriabele hebt, _step_, en een functie om die aan te kunnen passen, _setSetp_.

Hiervoor moet je wel useState gebruiken (en importeren) anders werkt het niet.

```javascript
import { useState } from "react";
```

Dit is de basis als je een veriable state wil gaan gebruiken. _"The useState() is a Hook that allows you to have state variables in functional components. so basically useState is the ability to encapsulate local state in a functional component."_

Let er op dat je nooit die veriable state handmatig aanpast. 1. Dat is bad practice. 2. Je moet het alleen maar doen door middel van de _setFunction_. De veriable wordt beschouwt als een immutable value.

Om er voor te zorgen dat de values altijd up-to-date zijn wil je zo weinig hardcoden. Daarom gebruikt je deze manier om dat te vermijden. Voorbeeld:

```javascript
const [step, setStep] = useState(1);

setStep((s) => +1);
```

Hier pak je de functie _setSetp_ die een value mee krijgt, _step_. In de fuctie geeft je _step_ mee als _s_. Die vervolg je met een arrow function en vertel je dat er _+1_ bij moet.

# Versie 2 - Children

Het maken van components is het makkelijke aan werken met React. Het scheelt zoveel tijd, maar je moet het eerst wel goed opzetten. Hier zijn twee verschillende manier te zien om hetzelfde te bereiken:

```js
<Button
  textColor="fff"
  bgColor="#7950f2"
  onClick={handlePrevious}
  text="Previous"
  emoji="👈"
/>
```

Je kunt alle informatie die die knop moet hebben als props meegeven, maar dan kan je component snel vollopen.

```js
<Button textColor="fff" bgColor="#7950f2" onClick={handleNext}>
  Next<span>👉</span>
</Button>
```

Je kunt ook children gebruiken. Hiermee kun je de text die anders met props mee werd gegeven gewoon als jsx meegeven. zo kun je in dit geval de emoji's aan de kant zetten waar je die wil hebben zonder hiervoor extra props mee te geven.

## Button voorbeeld

```js
<StepMessage step={step}>{messages[step - 1]}</StepMessage>
```

Hier wordt de component aangroepen. De `step` en `children` worden hier meegegeven.

```js
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
```

Deze twee stukjes code zorgen samen voor een werkend bericht. Om de component `function StepMessage({step, children})` twee props meekrijgt kan het bericht zichzelf gewoon invullen. **De children is altijd de text die tussen het beign en het einde van de component zet**.
