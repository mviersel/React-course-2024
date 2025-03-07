# Eat n Split

Deze applicatie is om te bij te houden van wie je nog geld krijgt en van wie jij nog geld krijgt.

## Add friend

### Button

Om een nieuwe vriend toe te voegen aan de lijst heb je een button nodig. Deze button komt nog vaker terug bij het maken van deze app dus is hier een component van gemaakt.

```js
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
```

De Button krijgt 2 props mee.

- _children_, is de tekst die in de button komt te staan.
- _onClick_, dit is de funtie die aangeroepen wordt als je op de knop drukt.

Op de app wordt de knop aangeroepen als component met de invulling die is meegegeven.

```js
<Button onClick={handleShowAddFriend}>
  {showAddFriend ? "Close" : "Add friend"}
</Button>
```

Om te kunnen zien welke tekst er moeten worden weergegeven gebruik je state.

```js
const [showAddFriend, setShowAddFriend] = useState(false);
```

De properties _children_ en _onClick_ krijgen vanuit hier hun invulling mee.

- _children_, krijgt een _if statement_ waar gekeken wordt welke tekst de knop moet weergeven. "Close", wanneer het venster open staat en "Add friend" als het venster nog geopend moet worden. De _children_ properties worden meegegeven tussen de `<Button></Button>` tags. Alles wat er tussen de tags staat wordt als _children_ meegegeven.
- _onClick_, geeft aan dat de functie _handleShowAddFriend_ wordt aangeroepen. **Belangrijk** hier is dat de `onClick` niet meteen kan worden uitgevoerd omdat het een component is. De `onClick` wordt dus als property meegegeven aan het component dat wel html/javascript kan uitvoeren.

### Adding friend

Om een vriend toe te voegen aan je lijst moet je eerste een "form" invullen. Dit krijg je te zien als je de _Add friend_ knop hebt gebruikt.

```js
return (
  <form className="form-add-friend" onSubmit={handleSubmit}>
    <label>🧑‍🤝‍🧑Friend name</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

    <label>Image URL</label>
    <input
      type="text"
      value={image}
      onChange={(e) => setIamge(e.target.value)}
    />

    <Button>Add</Button>
  </form>
);
```

Het form is verdeeld in 2 velden. Je kunt de naam en afbeeldings link invullen van je vriend. De `<label />` zijn de benamingen van de invulvelden. De `<input />` kun je invullen naar wat je ook wil. Het is daarom heel belangrijk dat je de `value={}` en `onChange={}` goed invuldt. Deze heb je nodig bij het opslaan van je invulling.

```js
onChange={(e) => setIamge(e.target.value)}
```

De `onChange` geeft aan dat wat je ingevuld hebt ook in de "backend" veranderd moet worden. _`e`_ is in dit geval de inhoud die je hebt ingevult in de velden.

Nadat je de _form_ hebt ingevuld wordt deze toegevoegd een aan nieuwe array. Wanneer je op de _Add_ button drukt triggert de form `handleSubmit`. De tekst die je hebt ingevuld worden dan automatisch in een object gezet dat in de array komt.

```js
function handleSubmit(e) {
  e.preventDefault();

  if (!name || !image) return;

  const id = crypto.randomUUID();
  const newFriend = {
    id,
    name,
    image: `${image}?=${id}`,
    balance: 0,
  };

  onAddFriend(newFriend);

  setName("");
  setIamge("https://i.pravatar.cc/48");
}
```

De _form_ komt binnen als _`e`_.

`e.preventDefault();` is om te zorgen dat de pagina niet refreshed als je de form inleverd. Dat zou standaard moeten gebeuren, maar dat zet je hiermee dus "uit".

Alle informatie uit _`e`_ wordt in `newFriend` toegepast in de gedefinieerde properties. De `id` wordt random gegenereed door door de `randomUUID` functie. `name` heb je zelf ingevuld. `image` pakt de url die ingevuld is vult deze vervolgends aan met de `id` om een unieke afbeelding te krijgen. `balance` wordt op de achtergrond op 0 gezet, omdat je aan het begin natuurlijk gelijk staat met elkaar.
