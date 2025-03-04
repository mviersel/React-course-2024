# start folder met project om mee te beginnen vanaf 0

## Dit project is gemaakt in - stappen:

React project aanmaken. Hier wordt versie 5 gebruiken, omdat dat met de cursus wordt gebruikt.
`npx create-react-app@5 .` / `npx create-react-app@5.1`

Om te zorgen dat er geen error komt voor de webvitals is ook deze command nog gebruikt:
`npm i web-vitals --save-dev`

## Bestanden aanpassen voor een frisse start

in _/src/_ staan "teveel" bestanden die niet altijd nodig zijn. Daarom gaan we opschonen.

Bestanden die weg mogen:

- App.css
- app.test.js
- logo.svg
- reportWebVitals.js
- setupTests.js

### Let op

Je past nu bestanden aan die geimporteerd worden. Deze moet je aanpassen in `App.js` en `index.js`.

_/src/App.js_:

```js
import "./index.css";

function App() {}

export default App;
```

_/src/index.js_:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

##
