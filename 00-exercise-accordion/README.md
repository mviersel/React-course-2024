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

Zie hier hoe je een inklapbare component kunt maken. Door middel van de useState wordt gecontroleerd of de card open of dicht is. Deze state zorgt er ook voor dat de card een andere styling mee krijgt al de value *true* is. 