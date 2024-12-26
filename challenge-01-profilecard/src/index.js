import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList />
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Avatar() {
    return <div>
        <img className="avatar" src="./profile.png" alt="img" />
    </div>
}

function Intro() {
    return <div>
        <h1>Martijn van Iersel</h1>
        <p>Dit is een test</p>
    </div>
}

function SkillList() {
    return <div className="skill-list">
        <Skill skillName='Html+css' backgroundColor='red' emoji='' />
        <Skill skillName='Tiny javascript' backgroundColor='yellow' emoji='' />
        <Skill skillName='React in the making' backgroundColor='blue' emoji='' />
    </div>
}

function Skill(props) {
    return <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
        <span>{props.skillName}</span>
        <span>{props.emoji}</span>
    </div>
}






root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
