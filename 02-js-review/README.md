<br></br>

# Udemy - Masster modern React from beginning

In deze repo komt alles wat ik gemaakt heb tijdens deze [udemy cursus](https://www.udemy.com/course/the-ultimate-react-course/).

Index:

- [Udemy - Masster modern React from beginning](#udemy---masster-modern-react-from-beginning)
  - [01-pure-react](#01-pure-react)
  - [02-js-review](#02-js-review)
    - [Javascript deconstructing](#javascript-deconstructing)
    - [Desctructuring met array's](#desctructuring-met-arrays)
    - [Rest/spread operator](#restspread-operator)
      - [Rest operator](#rest-operator)
      - [Spread operator](#spread-operator)
    - [Template literals](#template-literals)
    - [Ternaries indstead of if/else statements](#ternaries-indstead-of-ifelse-statements)
    - [Arrow functions](#arrow-functions)
    - [Short-circuiting and logical operators: \&\&, ||, ??](#short-circuiting-and-logical-operators---)
      - [And \&\&](#and-)
      - [Or ||](#or-)
      - [Or ??](#or--1)
    - [Optional chaining](#optional-chaining)
    - [The array map method](#the-array-map-method)
      - [map](#map)
      - [filter](#filter)
      - [reduce](#reduce)
    - [What is an Accumulator?](#what-is-an-accumulator)
    - [Using an Accumulator with `reduce()`](#using-an-accumulator-with-reduce)
      - [Explanation:](#explanation)
      - [Example Breakdown:](#example-breakdown)
      - [Another Example: Building an Object](#another-example-building-an-object)
      - [Key Points:](#key-points)
    - [The array sort method](#the-array-sort-method)
      - [Immutable arrays](#immutable-arrays)
        - [Add](#add)
        - [Delete](#delete)
        - [Update](#update)
      - [Asynchronous Javascript: promises](#asynchronous-javascript-promises)
      - [async/await](#asyncawait)
  - [03-pizza-menu](#03-pizza-menu)
    - [Rendering](#rendering)
    - [webserver starten](#webserver-starten)
    - [Inhoud aanpassen](#inhoud-aanpassen)
  - [04-fundamentals](#04-fundamentals)

<details>
<summary>Extra</summary>
Als je javascript gaat gebruiken, installeer dan de Quokka plugin. Deze laat meteen zien wat de javascript code doet en of er dus errors zijn. Let op! Je moet deze elke keer herstarten als je het project heb afgesloten.
</details>

## 01-pure-react

Je kunt html aanmaken met React door `return React.createElement("header"}`.

## 02-js-review

### Javascript deconstructing

Als je meerdere variabelen wilt gebruiken en ophalen door middel van een functie kun je dat doen met bijv. een const.
`const {title, author} = book;`

Hiermee geef je ook meteen aan dat je als je om een book vraagt je de title en de author te zien krijgt.

Het Desctructure gedeelte hiervan is dat je doormiddel van .title de titel van een entity kunt weergeven. Het wordt dan `book.title`. Deze haalt ie dan op uit de database.

### Desctructuring met array's

Als je geen variabelen wilt aanmaken met we wel een array met de informatie van een object dan doe je dat zo. `const [primaryGenre, secundaryGenre] = genres;` Wat je hier meer doet is aangeven dat de eerste twee items uit de catergorie genres van het object in de "variabelen" van de array worden gezet.

`const [firstElement, secondElement] = genres; This picks the first and second element from the object.`

### Rest/spread operator

#### Rest operator

Als je nog meer items in je object hebt staan die minder belangrijk zijn kun die alsnog opslaan door middel van _Rest_. Dat zier er zo uit:
`const [primaryGenre, secundaryGenre, ...otherGenres] = genres;` Hier maakt je een soort extra array met `...otherGenres`. Als je het print staat er ook dat het een array met 3 values is.

```javascript
<!-- Value 1 -->
    ["primaryGenre"
<!-- Value 2 -->
    ,"secundaryGenre"
<!-- Value 3 -->
    , ["otherGenres", "otherGenres", "otherGenres"]]
```

<sup>Tip van Jonas: Weet dat je de ...otherGenres alleen achteraan de array kunt gebruiken. Het zou niet logisch zijn als je die in het midden zou zetten.</sup>

#### Spread operator

Waar je met de Rest operator de rest vanzelf laat aanvullen doe je het met de spread operator zelf.

De syntax ziet er ongeveer het zelfde uit, maar dan andersom. De code komt er dan zo uit te zien:
`const newGenres = [...genres, 'epic fantasy']` De ...genres geeft aan dat je een array pakt en gewoon als tekst neerzet. Door er nog een items tussen ,'' achter zetten kan deze worden toegevoegd aan het rijtje voordat de array wordt gemaakt.

Dit kun je ook omdraaien om de nieuwe value aan het begin te zetten.
`const newGenres = ['epic fantasy', ...genres]`

Je kunt met Spread operator ook de value van een array item aanpassen. Je pakt weer een array en begint met de ...book array die al bestaat. Je vult simpelweg de al bestaande properties in met de nieuwe value erachter. ` const updatedBook = {...book, publicationDate: "2001-12-19", pages: 1210};` Je vult eigenlijk een tweede property met een value, maar omdat er al eentje bestaat wordt de eerste overschreden met de laatste.

<details>
<summary>TL;DR</summary>
- Rest: Als alleen de eerste value van een array van belang is, maar je de rest wel mee wilt namen. Dan kun je dat doen met de ...value item. value is de naam van de rest van de array als variabele. <br>
- Spread: Wil je extra items toevoegen of values veranderen doe je met spread. je vult een nieuwe of al bestaande variabele in en geeft deze vervolgends een value mee. 
</details>

### Template literals

```javascript
const summary = `${title} a book`;
```

De code hierboven is een template. Doormiddel van de **`backticks`** geef je in de javascript aan dat je een variabele mee wilt nemen met tekst. Het is dus letterlijk een template. Hier is de uitkomst dan ook _The Lord Of The Rings is a book_. "The Lord Of The Rings" is hier ingevuld door de variabele.

<details>
<summary>TL;DR</summary>
Een zin waar een deel van veranderd kan worden schrijf je met backticks en variabelen.

</details>

### Ternaries indstead of if/else statements

Ternaries ipv if/else statement is gewoon een verkorting van de if/else statement.

```javascript
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
```

Hier is de te zien dat er wordt gekeken naar de _pages_ en of deze meer (>) zijn dan _1000_. Het _?_ geeft aan dat het een ternarie is. Als het antwoord op de vraag _pages > 1000_ waar is, dan wordt de eeste string gepakt, _"over a thousand"_. Als het antwoord niet waar is dan wordt het tweede antwoord gepakt, _"less than a thousand"_.

Dit is ook handig om te doen voor in zinnen te verwerken.

```javascript
const summary = `${title}, is a book with ${pages} and written by ${author}. Publisched in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
```

De hasMovieAdaptation kan er voor zorgen dat er _not_ in de zin komt staan wanneer er geen verfilming van het boek is.

### Arrow functions

De nieuwe en snellere manier van het schrijven van en funties is met een arrow functie.

Oude manier:

```javascript
funtion getYear(str) {
    return str.split("-")[0];
}
console.log(getYear(publicationDate));
```

Nieuw manier:

```javascript
const getYear = (str) => str.plit(-)[0];
```

De nieuwe manier is korter en je hoeft geen _return_ te schrijven.

Als je meerdere lijnen code hebt met je het alsnog met een return functie doen. Met meerdere lijnen code is de **return** een **Must**.

```javascript
const getYear = (str) => {
  return str.split("-")[0];
};
```

### Short-circuiting and logical operators: &&, ||, ??

#### And &&

De _and_ (**&&**) operator kijkt naar de eerste value. Als deze _true_ is dan gaat er pas gekeken worden naar de tweede value. Als de eerste value false is, dan stop ie meteen en is de value _false_.

`console.log(hasMovieAdaptation && "This book has a movie.")` Hier geeft de console de string weer als het book een film heeft. Anders is het antwoord false.

Voorbeeld:

```
console.log('jonas' && 'some string');  'some string'
console.log(0 && 'some string');         fasle
```

Deze operator kijkt ook de de _falsy_ values; 0, '', null, undifinded.

#### Or ||

De _or_ operator (**||**) is het tegenovergestelde van de _and_ operatator. Deze kijkt of de eerste value _true_ is, stopt de loop en stuurt _true_ terug.

Voorbeeld:

```javascript
console.log(true || "some string"); //true
console.log(false || "some string"); //"some string"
```

```javascript
const spanishTranslation = book.translations.spanish || "not translated";
spanishTranslation;
```

De code hierboven is om te kijken of er een spaanse vertaling van het boek is. Wanneer _spanishTranslation_ wordt aangeroepen dan gaat ie kijken of het object een vertaling in het spaans heeft. Als het _true_ is dan wordt de vertaling laten zien, bij _false_ komt er _not translated_ te staan.

#### Or ??

Deze operator werkt eigenlijk hetzelfde als de _or_ operator, maar dan allen bij _null_ en _undefinded_. Dus niet bij 0 of een lege string ''.

### Optional chaining

Bij optional chaining vraag je aan javascript om alleen te kijken naar de value al het niet _undefined_ is.
`const librarything = book.reviews.librarything?.reviewsCount;` Het _?_ geeft hier aan dat het om optional chaining gaat.

### The array map method

Hiermee pak je originele array en past deze aan. Je kunt de originel array dus heel laten en een vervanging maken.

#### map

Met de .map funtion kun je een bestaande array pakken en die items in een nieuwe array zetten.
`const x = [1, 2, 3, 4, 5].map((el) => el * 2);`

`const titles = books.map((book) => book.title);`
Hierboven is te zien dat er een array van _books_ wordt opgehaald. Elk item in die array bestaat uit de _title_ van een book. De array aan titles wordt als laatste in de _titles_ array geplaatst.

```javascript
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
```

Je kunt het natuurlijk ook doen met meerdere attributen. Dat ziet er dan zo uit. En in plaats van het gebruiken van een return, plaats je extra () om hetgenen wat je wil returnen.

#### filter

Met deze funtie kun je een array filteren op basis van eigenschappen.

`const longBooks = books.filter((book) => book.pages > 500);`
Hier kun je zien dat er gekeken wordt naar het aantal pagina's. Wanneer een boek meer dan 500 pagina's heeft wordt het toegevoegd aan de _longBooks_ array.

```javascript
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
```

Dit kun je blijven doen door middel van meer *.filter*s neer te zetten.

`const adventureBooks = books.filter((book) => book.genres.includes('adventure'));`
Wil je sorteren of een eigenschap er in zit. Dan kan dat door middel van de _.includes()_. Hier kun je in aan geven wat de reden moet zijn.

#### reduce

Met de _reduce_ method kun je de array makkelijk filteren zodat er maar eentje over blijft.

```javascript
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
```

Hier is te zien dat je met de _acc_ een soort optelsom kunt maken. Dit is niet alleen voor getallen, maar ook voor items in een array.

<details>
<summary>Uitleg over acc van chatgpt</summary>
Great! It sounds like you're working with an **accumulator**, which is often used in functions like `reduce()` to accumulate a result based on an array's elements. Let me walk you through the general concept and how it's used in JavaScript.

### What is an Accumulator?

An **accumulator** is a variable that "accumulates" values over iterations, usually inside a loop or a higher-order function like `reduce()`. It is typically used to maintain a running total or combined result as you process each element of an array.

### Using an Accumulator with `reduce()`

The `reduce()` method is a powerful array method in JavaScript that allows you to accumulate a value based on an array's elements. Here's how it works:

```javascript
const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // The initial value of the accumulator is 0

console.log(sum); // Outputs: 15
```

#### Explanation:

- `arr.reduce()` accepts a callback function as the first argument. This callback is called on each element of the array.
- The callback function has two parameters:
  1. `accumulator`: This is the value that accumulates the result.
  2. `currentValue`: This is the current element of the array being processed.
- The second argument to `reduce()` is the **initial value** of the accumulator (`0` in this case). If not provided, the first element of the array is used as the initial accumulator value.

#### Example Breakdown:

- On the first call: `accumulator = 0`, `currentValue = 1` → returns `1`.
- On the second call: `accumulator = 1`, `currentValue = 2` → returns `3`.
- On the third call: `accumulator = 3`, `currentValue = 3` → returns `6`.
- On the fourth call: `accumulator = 6`, `currentValue = 4` → returns `10`.
- On the fifth call: `accumulator = 10`, `currentValue = 5` → returns `15`.

So, by the end of the array, the accumulator holds the sum of all the elements.

#### Another Example: Building an Object

You can also use the accumulator to build more complex data structures, such as objects or even arrays.

```javascript
const arr = ["apple", "banana", "orange"];

const fruitObject = arr.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = currentValue.length;
  return accumulator;
}, {}); // Initial value is an empty object

console.log(fruitObject);
// Outputs: { apple: 5, banana: 6, orange: 6 }
```

Here:

- The accumulator starts as an empty object `{}`.
- For each fruit in the array, we add a key-value pair to the accumulator, where the key is the fruit name and the value is the length of the fruit name.

#### Key Points:

- The **accumulator** stores the result that is built up over time as `reduce()` iterates through the array.
- It can be used for many purposes: summing numbers, concatenating strings, building objects, etc.
- The second argument to `reduce()` provides the starting value for the accumulator (e.g., `0`, `{}`, `[]`, etc.).

If you have a specific example you're struggling with or want further clarification on, feel free to share it, and I'll help guide you through it!

</details>

### The array sort method

Het sorteren van een array ook handig zijn. Daar helpt de _.sort_ methode mee.

```javascript
const numbers = [3, 7, 1, 9, 6];
const sorted = numbers.sort((a, b) => a - b);
sorted; //[ 1, 3, 6, 7, 9 ]
```

Hier loop javascript door de array heen om te kijken naar de values. _(a, b)_ geven aan dat het altijd om de eerste en tweede items gaan. Als er een _negative_ terug komt dan worden de cijfers omgedraaid en "gecorteerd". Er wordt namelijk gekeken of _b_ van _a_ afgehaald kan worden. Als dat niet zo is krijg je een _false_ output.

Het bijzondere van de _.sort_ methode is dat de originele array ook aangepast wordt. Het is dus anders dan de vorige methodes. Er wordt geen nieuwe versie gemaakt van de array, maar de array wordt echt aangepast.

Om dit te verkomen kun je _.slice_ toevoegen aan je code.

```javascript
const numbers = [3, 7, 1, 9, 6];
const sorted = numbers.slice().sort((a, b) => a - b);
sorted;     //[ 1, 3, 6, 7, 9 ]
numbers:    //[ 3, 7, 6, 7, 9 ]
```

#### Immutable arrays

In javascript is het heel belangrijk dat je niet gaat rommelen met bestaande arrays. Daarom moet je weten hoe je items toevoegd, verwijderd en update.

##### Add

```javascript
const newBook = {
  id: 6,
  title: "Harry potter aand the chamber of secretes",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
```

##### Delete

```javascript
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
```

##### Update

```javascript
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
```

#### Asynchronous Javascript: promises

Met promises maak je eigenlijk een belofte, duhhh. Dit is handig om te gebruiken met bijvoorbeeld een API.

```javascript
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json));
```

Dit is een voorbeeld van een promise method. Javascript voert deze code ook pas later uit dan de Javascript die in het bestand zelf staan. Om de simpele reden dat het ophalen van een API tijd kost. Meer tijd dan simpele Javascript uitvoeren die al in het bestand staat.

#### async/await

Het handige van _async/await_ is dat Javascript niet verder gaat met de rest van de code voordat de promise klaar is.

```Javascript
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}
```

De betere versie ziet er dan op deze manier uit. De _async_ geeft aan.
De _res = await fetch("")_ geeft aan dat de variabele _res_ straks de values van de _fetch("")_ opslaat.
Daarna stop je de _res (response)_ in _data_ in de vorm van een _.json()_ bestand.
Als laatste wordt het resultaat laten zien in de console door de variabele _data_ te loggen.

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

## 04-fundamentals
