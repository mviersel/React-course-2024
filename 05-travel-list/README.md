# Travel list

## Building an array

Omdat het onhandig is en veel werk om een array te definiëren kun je dat gewoon door javascript zelf laten doen.

```javascript
{
  Array.from({ length: 20 }, (_, i) => i + 1);
}
```

De `Array.from` is een standaard functie in javascript die een nieuwe array aanmaakt. Deze functie neemt twee argumenten. `length: 20` geeft in dit geval aan dat de array 20 lang moet worden.

`(_, i) => i + 1` Deze methode geeft aan welke item in de array wat moet worden.

- `_` geeft de huidig item in de array aan. De `_` wordt hier gebruikt als "Ignore".
- `i` is de invullen van het huidig item in de array.

De uiteinde array ziet er als volgt uit: <br>
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

## Controlled element

Omdat normaal gesproken de html een form handeled gaan we dit even veranderen. Het is namelijk veel handiger als de javascript er mee kan werken.

```javascript
<input
  type="text"
  placeholder="Item..."
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  //e = de value van de fuctie
  //target = de text box
  //value = de inhoud van de text box
/>
```

Hierboven staat een input veld dat gebruikt wordt voor een form. De Javascript behandeld de inhoud en past vervolgends de variabele aan die gaat over de uiteindelijke verwerking van het form object (waar alle informatie van de form in staat).

## State vs Props

| State                                        | Column                                            |
| -------------------------------------------- | ------------------------------------------------- |
| Interanal data is owned by a component       | External data is owned by parent component        |
| "Component memory"                           | Similar to function parameters                    |
| Can be updated by the component itself       | Read only                                         |
| Updating state causes component to re-render | Receiving new props causes component to re-render |
| Used to make components interactive          |                                                   |

Voorbeelden:

```javascript
function Question() {
  const [upvotes, setUpvotes] = useState(0);

  return (
    <div>
      {/* ... */}
      <button upvotes={upvotes} bgColor="blue"></button>
    </div>
  );
}
```

`upvotes` is in dit geval een `state`. Dit is makkelijk te herkennen aan de `useStatement()` aan het einde. als de `upvotes` wordt aangepast wordt deze gere-redendered. De `upvotes` van het voorbeeld hieronder wordt daarmee ook aangepast. Dit is een voorbeeld waar de function die "eigenaar" is van de state en de "ontvanger" beide worden geupdate.

```javascript
function Button(upvotes, bgColor) {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      {/* ... */}
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ background: bgColor }}
      >
        {hovered ? "Upvote" : `Done ${upvotes}`}
      </button>
    </div>
  );
}
```

`Props` worden gebruikt door de parent component om de child component aan te passen. Het zijn dus een soort "settings" die de parent component kan aanpassen.  
