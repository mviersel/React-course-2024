# Accordion exercise

Ook dit project maakt gebruik van `useState`.

```js
function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
```

Zie hier hoe je een inklapbare component kunt maken. Door middel van de useState wordt gecontroleerd of de card open of dicht is. Deze state zorgt er ook voor dat de card een andere styling mee krijgt al de value _true_ is.

# V2 Een component open tegelijk

```js
function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          text={el.text}
          num={i}
          key={el.title}
        />
      ))}
    </div>
  );
}
```

Hier is de component in gebruik. De `[curOpen, setCurOpen]` zijn voor het bepalen dat er maar een info card tegelijk open mag/kan zijn.

```js
function AccordionItem({ num, title, text, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
```

Hier in de component uitgeschreven. Je kunt zien dat de properties die door worden gegeven gebruikt worden.
