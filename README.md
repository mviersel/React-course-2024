<br></br>

# Udemy - Masster modern React from beginning

In deze repo komt alles wat ik gemaakt heb tijdens deze [udemy cursus](https://www.udemy.com/course/the-ultimate-react-course/). 



Index:
1. [intro](#1)
2. [dintro](#2)



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
Als je nog meer items in je object hebt staan die minder belangrijk zijn kun die alsnog opslaan door middel van *Rest*. Dat zier er zo uit:
`const [primaryGenre, secundaryGenre, ...otherGenres] = genres;` Hier maakt je een soort extra array met `...otherGenres`. Als je het print staat er ook dat het een array met 3 values is. 

```
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

Je kunt met Spread operator ook de value van een array item aanpassen. Je pakt weer een array en begint met de ...book array die al bestaat. Je vult simpelweg de al bestaande properties in met de nieuwe value erachter.  ` const updatedBook = {...book, publicationDate: "2001-12-19", pages: 1210};` Je vult eigenlijk een tweede property met een value, maar omdat er al eentje bestaat wordt de eerste overschreden met de laatste. 

<details>
<summary>TL;DR</summary>
- Rest: Als alleen de eerste value van een array van belang is, maar je de rest wel mee wilt namen. Dan kun je dat doen met de ...value item. value is de naam van de rest van de array als variabele. <br>
- Spread: Wil je extra items toevoegen of values veranderen doe je met spread. je vult een nieuwe of al bestaande variabele in en geeft deze vervolgends een value mee. 
</details>

### Template literals
```
const summary = `${title} a book`;
``` 
De code hierboven is een template. Doormiddel van de **`backticks`** geef je in de javascript aan dat je een variabele mee wilt nemen met tekst. Het is dus letterlijk een template. Hier is de uitkomst dan ook *The Lord Of The Rings is a book*. "The Lord Of The Rings" is hier ingevuld door de variabele. 

<details>
<summary>TL;DR</summary>
Een zin waar een deel van veranderd kan worden schrijf je met backticks en variabelen.

</details>

### Ternaries indstead of if/else statements
Ternaries ipv if/else statement is gewoon een verkorting van de if/else statement. 
```
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
```
Hier is de te zien dat er wordt gekeken naar de *pages* en of deze meer (>) zijn dan *1000*. Het *?* geeft aan dat het een ternarie is. Als het antwoord op de vraag *pages > 1000* waar is, dan wordt de eeste string gepakt, *"over a thousand"*. Als het antwoord niet waar is dan wordt het tweede antwoord gepakt, *"less than a thousand"*.

Dit is ook handig om te doen voor in zinnen te verwerken.
```
const summary = `${title}, is a book with ${pages} and written by ${author}. Publisched in ${publicationDate.split('-')[0]}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
```
De hasMovieAdaptation kan er voor zorgen dat er *not* in de zin komt staan wanneer er geen verfilming van het boek is. 

### Arrow functions
De nieuwe en snellere manier van het schrijven van en funties is met een arrow functie.

Oude manier:
```
funtion getYear(str) {
    return str.split("-")[0];
}
console.log(getYear(publicationDate));
```

Nieuw manier:
```
const getYear = (str) => str.plit(-)[0];
```
De nieuwe manier is korter en je hoeft geen *return* te schrijven.

Als je meerdere lijnen code hebt met je het alsnog met een return functie doen. Met meerdere lijnen code is de **return** een **Must**.
```
const getYear = (str) => {
    return str.split("-")[0];
}
```

### Short-circuiting and logical operators: &&, ||, ??

#### &&
De *and* (**&&**) operator kijkt naar de eerste value. Als deze *true* is dan gaat er pas gekeken worden naar de tweede value. Als de eerste value false is, dan stop ie meteen en is de value *false*. 

`console.log(hasMovieAdaptation && "This book has a movie.")` Hier geeft de console de string weer als het book een film heeft. Anders is het antwoord false. 

Voorbeeld:
```
console.log('jonas' && 'some string');  'some string'
console.log(0 && 'some string');         fasle
```

Deze operator kijkt ook de de *falsy* values; 0, '', null, undifinded.

#### ||
De *or* operator (**||**) is het tegenovergestelde van de *and* operatator. Deze kijkt of de eerste value *true* is, stopt de loop en stuurt *true* terug. 

Voorbeeld:
```
console.log(true || "some string");      true
console.log(false || "some string");    "some string"

```

```
const spanishTranslation = book.translations.spanish || "not translated";
spanishTranslation;
```
De code hierboven is om te kijken of er een spaanse vertaling van het boek is. Wanneer *spanishTranslation* wordt aangeroepen dan gaat ie kijken of het object een vertaling in het spaans heeft. Als het *true* is dan wordt de vertaling laten zien, bij *false* komt er *not translated* te staan.

#### ??
Deze operator werkt eigenlijk hetzelfde als de *or* operator, maar dan allen bij *null* en *undefinded*. Dus niet bij 0 of een lege string ''.










## 03-pizza-menu
Dit project is gemaakt met React 5 `npx create-react-app@5` zodat de video goed te volgen is.

<details>
<summary>web-vitals Error</summary>
Als je de web-vitals error krijgt is er iets fout gegaan met de installatie. Open de terminal van je project en voer dit in: 

```npm i web-vitals --save-dev```

</details>

### Rendering
In de *public/index.html* staat `<div id="root"></div>`. Dit is om te zorgen dat de html elementen die gemaakt worden met javascript op de goede plaats in de .html komen te staan.

Als je dan in de *src/index.js* kijkt zie je `const root = ReactDOM.createRoot(document.getElementById('root'));` staan. Dit is de javascrip code die ervoor zorgt dat het naar de juiste plek wordt gestuurd.

### webserver starten
Open de terminal en type: `npm run start`

### Inhoud aanpassen
Op de *src/App.js*. Hier kun je de standaard items weghalen je nieuwe inhoud plaatsen.

## 04-fundamentals

