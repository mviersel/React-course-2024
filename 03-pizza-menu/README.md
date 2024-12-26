# Pizza menu - first react project

To start project: open de terminal and type:

```
npm run start
```

Basics:
Aan het begin van dit project beginnen we met het verwijderen van alle bestanden in de _/srs/_ folder.

## Creëren

In _/src/_ maak een nieuwe file, noem deze `index.js`. In dit bestand import je React en ReactDOM:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
```

Hierna maak je de eerste functie van het project.

```javascript
function App() {
  return <h1>Hello react!</h1>;
}
```

Hierna moet je react nog vertellen op welke plek in de html je iets wil laten zien. Onder de code hierboven schrijf je dit:

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

## Strictmode

Strictmode doet eigenlijk niks meer dan je componenten dubbel checken. Errors zouden hiermee kunnen worden opgevangen.

## Components

## Styling

Wil je styling gaan gebruiken in je project? Dan zijn er meerder opties. De voorkeur gaan uit naar de externe style sheet, ookwel extene css file.

In dit geval moet je eerst javascript nog vertellen dat je dit bestand wil gaan gebruiken. Dat doe je door het bestand te importeren. Dat doe je als volgt:

```javascript
import "./index.css";
```

Natuurlijk moet je de naar en plek van je file veranderen naar die van jezelf.

Hierna kun je de styling gaan gebruiken. Dit doe je door de `className=''` te gebruiken achter je html elemeneten.

## Props

Je geeft de parent component een value mee om aan de child component te geven. Het doorgeven van props is belangrijk, omdat je zo makkelijk hele pagina's zelf hun werk kunnen laten doen.

Om te beginnen heb je een child component nodig de iets met de props moet gaan doen.

```javascript
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}
```

Hier kun je zien dat alle html items nog geen values hebben om mee te beginnen. Ze hebben wel allemaal een placeholder maar geen echte values.

Echte values komen pas als de parent component die doorgeeft.

```javascript
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach and ricotta cheese."
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Finghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      />
    </main>
  );
}
```
Hier kun je zien dat de child component `<Pizza />` twee keer wordt aangeroepen. Ze hebben allemaal de nodige information mee in de vorm van een prop. Deze informatie kan weer worden uitgesplits door middel van javascript.

Deze manier van werken kan maar een kant op. Alleen de parent component kunnen informatie doorgven aan de child components. De informatie die doorgeven is mag achteraf ook niet worden aangepast. Als dat doet wordt nammelijk het hele object aangepast. 