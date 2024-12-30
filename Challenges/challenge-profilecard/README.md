# Challenge 01 - profilecard

In dit project maak ik mijn eerste profilecard met React en een array aan skills.

## Project bekijken

1. Om het project op te starten moet je eers het project downloaden
2. Open de folder en de terminal van de bijbehorende folder.
3. In de terminal type:

Om React te installeren en het project te kunnen draaien.

```npm
    npm i
```

Om het project vervolgens op te kunnen starten.

```npm
    npm start
```

## Versie 1

In versie een is het raamwerk van het project opgezet en gevuld met hardcoded informatie.

- Avatar

```javascript
function Avatar() {
  return (
    <div>
      <img className="avatar" src="./profile.png" alt="img" />
    </div>
  );
}
```

- Intro

```javascript
function Intro() {
  return (
    <div>
      <h1>Martijn van Iersel</h1>
      <p>Dit is een test</p>
    </div>
  );
}
```

- SkillList

```javascript
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skillName="Html+css" backgroundColor="red" emoji="" />
      <Skill skillName="Tiny javascript" backgroundColor="yellow" emoji="" />
      <Skill skillName="React in the making" backgroundColor="blue" emoji="" />
    </div>
  );
}
```

- Skill

```javascript
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
      <span>{props.skillName}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
```

## verssie 2

Versie twee is vrijwel hetzelfde als versie 1, maar dan met meer React/Javascript.

Het grootste gedeelte zit in de `SkillList` en `Skill` componenten. Deze zijn herschreven om te laten werken met een array aan skills.

Uitwerkingen:

- Skilllist component

```javascript
function SkillList() {
  const skillItems = skills;

  return (
    <div className="skill-list">
      {skillItems.map((skill) => (
        <Skill
          skillName={skill.skill}
          backgroundColor={skill.color}
          level={skill.level}
        />
      ))}
    </div>
  );
}
```

- Skill component

```javascript
function Skill({ skillName, backgroundColor, level }) {
  return (
    <div className="skill" style={{ backgroundColor: backgroundColor }}>
      <span>{skillName}</span>
      <span>
        {level === "beginner" && "BB"}
        {level === "intermediate" && "MonkS"}
        {level === "advanced" && "Chad"}
      </span>
    </div>
  );
}
```
