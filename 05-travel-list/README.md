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
