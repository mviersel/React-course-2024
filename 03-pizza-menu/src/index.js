import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

function Header() {
    // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" }; 
    // return <h1 style={style}>Fast React Pizza co.</h1>
    // return <h1 >Fast React Pizza co.</h1>

    return <header className='header'>
        <h1>Fast React Pizza Co.</h1>
    </header>
}

function Menu() {
    return (
        <main className='menu'>
            <h2>Our menu</h2>

            <ul className='pizzas'>
                {pizzaData.map(pizza => (
                    <Pizza pizzaObject={pizza} key={pizza.name} />
                ))}
            </ul>

            {/* <Pizza
                name='Pizza Spinaci'
                ingredients='Tomato, mozarella, spinach and ricotta cheese.'
                photoName='pizzas/spinaci.jpg'
                price={10} />

            <Pizza
                name='Pizza Finghi'
                ingredients='Tomato, mushrooms'
                price={12}
                photoName='pizzas/funghi.jpg'
            /> */}
        </main>
    );
}

function Pizza(props) {
    console.log(props);

    return (
        <li className='pizza'>
            <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
            <div>
                <h3>{props.pizzaObject.name}</h3>
                <p>{props.pizzaObject.ingredients}</p>
                <span>{props.pizzaObject.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    console.log(hour);
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if (hour >= openHour && hour <= closeHour) alert("We're currenlty open!");
    // else alert("Sorry we're closed");

    return <footer className='footer'>{new Date().toLocaleTimeString()}. We're currently open!</footer>
}