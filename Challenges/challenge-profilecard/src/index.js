import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA"
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D"
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF"
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33"
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB"
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00"
    }
];

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
    const skillItems = skills;

    return (
        <div className="skill-list">
            {skillItems.map(skill => (
                <Skill skillName={skill.skill} backgroundColor={skill.color} level={skill.level} />
            ))}
        </div>
    );
}

// function Skill(props) {
//     return <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
//         <span>{props.skillName}</span>
//         <span>{props.emoji}</span>
//     </div>
// }

function Skill({ skillName, backgroundColor, level }) {
    return <div className="skill" style={{ backgroundColor: backgroundColor }}>
        <span>{skillName}</span>
        <span>
            {level === 'beginner' && 'BB'}
            {level === 'intermediate' && 'MonkS'}
            {level === 'advanced' && 'Chad'}
        </span>
    </div>
}

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
