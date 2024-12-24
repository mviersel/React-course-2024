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
import './index.css'
```
Natuurlijk moet je de naar en plek van je file veranderen naar die van jezelf. 

Hierna kun je de styling gaan gebruiken. Dit doe je door de `className=''` te gebruiken achter je html elemeneten.