<br></br>

# Udemy - Masster modern React from beginning

In deze repo komt alles wat ik gemaakt heb tijdens deze [udemy cursus](https://www.udemy.com/course/the-ultimate-react-course/). 

## 01-pure-react

Je kunt html aanmaken met React door `return React.createElement("header"}`.

## 02-

## 03-pizza-menu
Dit project is gemaakt met React 5 `npx create-react-app@5` zodat de video goed te volgen is.

<details>
<summary>web-vitals Error</summary>
Als je de web-vitals error krijgt is er iets fout gegaan met de installatie. Open de terminal van je project en voer dit in: 

```npm i web-vitals --save-dev```

</details>

## Rendering
In de *public/index.html* staat `<div id="root"></div>`. Dit is om te zorgen dat de html elementen die gemaakt worden met javascript op de goede plaats in de .html komen te staan.

Als je dan in de *src/index.js* kijkt zie je `const root = ReactDOM.createRoot(document.getElementById('root'));` staan. Dit is de javascrip code die ervoor zorgt dat het naar de juiste plek wordt gestuurd.

## webserver starten
Open de terminal en type: `npm run start`

## Inhoud aanpassen
Op de *src/App.js*. Hier kun je de standaard items weghalen je nieuwe inhoud plaatsen.