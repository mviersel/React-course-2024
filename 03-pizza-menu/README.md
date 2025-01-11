## 03-pizza-menu

Dit project is gemaakt met React 5 `npx create-react-app@5` zodat de video goed te volgen is.

<details>
<summary>web-vitals Error</summary>
Als je de web-vitals error krijgt is er iets fout gegaan met de installatie. Open de terminal van je project en voer dit in:

`npm i web-vitals --save-dev`

</details>

### Rendering

In de _public/index.html_ staat `<div id="root"></div>`. Dit is om te zorgen dat de html elementen die gemaakt worden met javascript op de goede plaats in de .html komen te staan.

Als je dan in de _src/index.js_ kijkt zie je `const root = ReactDOM.createRoot(document.getElementById('root'));` staan. Dit is de javascrip code die ervoor zorgt dat het naar de juiste plek wordt gestuurd.

### webserver starten

Open de terminal en type: `npm run start`

### Inhoud aanpassen

Op de _src/App.js_. Hier kun je de standaard items weghalen je nieuwe inhoud plaatsen.

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

## Conditional rendering

Om te zorgen dat er alleen content op de pagina komt als dat nodig is gebruik je conditional rendering. Er wordt eigenlijk een if/else look gebruikt, maar omdat dat niet mag in jsx doen we het op een andere manier.

```javascript
const isOpen = 12;
const isClosed = 22;

{isOpen ? (
 //html component dat wordt weergegeven als de loop waar is.
) : (
  //Html component dat wordt weergegeven als de loop niet waar is.
)}
```

Je zet dus alsnog een if/else statement neer, maar dan anders geformateerd.

Nog een manier om conditional rendering te gebruiken is buitend de jsx. Met die manier gebruik je wel een if statement.

```javascript
if (!isOpen) return <p>We're not open, sorry.</p>;
```

Je kunt namelijk gewoon een tweede _return_ meegeven. Hier zet je dan een _if()_ voor. Je moet wel opletten dat de twee returns natuurlijk niet tegelijk mogelijk kunnen zijn.

Nog een voorbeeld. Om te kijken of een item actief/uitverkocht/bestaand is kun je de if gerbruiken.

```javascript
if (props.pizzaObject.soldOut) return null;
```

Hier wordt aangegeven dat als het _pizzaObject_ uitverkocht is, laat dan niks zien. Dit kan in de het component zitten zodat wanneer het nodig is het pas gecheckt wordt.

## Component tree

Om nog een keer te laten zien hoe het hele programma in elkaar steeks heb ik een component tree gemaakt.

```
|── App
|   |── Header
|   |── Menu
|   |   |── Pizza
|   |── Footer
|   |   |── OrderBtn
```

## Prop destructuring

Om te voorkomen dat je steeds _props_ moet schrijven gaan we het anders aanpakken. Je kunt namelijk dezelfde naam als het object meegeven. Die wordt dan automatisch gepakt als _"prop"_.

Voorbeeld:

```javascript
//Eerder in het programma wordt het component aangeroepen met pizzaObject.
{pizzaData.map(pizza => (<Pizza pizzaObject={pizza} key={pizza.name} />

//Hier wordt pizzaObject ingvuld en daarom hoeft er geen props meer te staan.
function PizzaObject({ pizzaObject }) {
    console.log(pizzaObject);

    if (pizzaObject.soldOut) return null;

    return (
        <li className='pizza'>
            <img src={pizzaObject.photoName} alt={pizzaObject.name} />
            <div>
                <h3>{pizzaObject.name}</h3>
                <p>{pizzaObject.ingredients}</p>
                <span>{pizzaObject.price}</span>
            </div>
        </li>
    );
}
```

Omdat je pizzaObject al aan het meegeven bent hoef je die dus niet nog een keer aan te roepen. Op deze manier kun je voorkomend dat extra aan het typen bent terwijl het ook makkelijker kan.

## React fragment

Een React fragment is een encapsulator die eigenlijk niet bestaat. `<></>` Dit is een voorbeeld van een React fragment. Soms moet je er een _Key_ aan toevoegen en dan schijf je het zo `<React.Fragement></React.Fragement>`.

Het nuttige hiervan is dat je geen `<div></div>` hoeft te gebruiken, maar welk meerdere dingen samen als _return_ kunt gebruiken.

Voorbeeld:

```javascript
 return (
        <main className='menu'>
            <h2>Our menu</h2>

            {numPizzas > 0 ? (
                <React.Fragment>
                    <p>Authentic Italian cuising. 6 creative ddishes to choose from. All from our stone oven, all organic, all delicous.</p>

                    <ul className='pizzas'>
                        {pizzaData.map(pizza => (
                            <Pizza pizzaObject={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </React.Fragment>
            ) : (
                <p>Don't worry, we're working on it.
                </p>
            )
```

## Settings classNames en textNames conditionally

Omdat javascript jsx zo goed samenwerken kun je door middel van javascript mode een class naam veranderen.

Voorbeeld:

```javascript
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
```

Hier is te zien dat, wanneer in javascript mode, je kunt aangeven wat er moet gebeuren met de className. Standaard krijgt hij de class _pizza_ mee. Als de pizza uitverkocht is, dan wordt _sold-out_ class meegegeven. Is het niet zo dan is de extra class leeg.
