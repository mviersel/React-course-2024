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
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;

    return (
        <main className='menu'>
            <h2>Our menu</h2>

            {numPizzas > 0 ? (
                <React.Fragment>
                    <p>Authentic Italian cuising. 6 creative ddishes to choose from. All from our stone oven, all organic, all delicous.</p>

                    <ul className='pizzas'>
                        {pizzaData.map(pizza => (
                            <Pizza pizzaObject={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </React.Fragment>
            ) : (
                <p>Don't worry, we're working on it.
                </p>
            )

            }

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

// function Pizza(props) {
//     console.log(props);

//     if (props.pizzaObject.soldOut) return null;

//     return (
//         <li className='pizza'>
//             <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
//             <div>
//                 <h3>{props.pizzaObject.name}</h3>
//                 <p>{props.pizzaObject.ingredients}</p>
//                 <span>{props.pizzaObject.price}</span>
//             </div>
//         </li>
//     );
// }

function Pizza({ pizzaObject }) {
    console.log(pizzaObject);

    // if (pizzaObject.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObject.photoName} alt={pizzaObject.name} />
            <div>
                <h3>{pizzaObject.name}</h3>
                <p>{pizzaObject.ingredients}</p>
                <span>{pizzaObject.soldOut ? 'Sold out' : pizzaObject.price}</span>
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

    //Tweede manier van conditional redering
    // if (!isOpen) return (
    //     <p>We're not open, sorry.</p>
    // )

    return (
        <footer className='footer'>
            {isOpen ? (
                <OrderBtn closeHour={closeHour} openHour={openHour} />
            ) : (
                <p>We're not open, sorry.</p>
            )
            }
        </footer >
    );

    function OrderBtn({ closeHour, openHour }) {
        return <div className='order'>
            {isOpen && <p>We're open from {openHour}:00 until {closeHour}:00. Come visit use or order online.</p>}
            <button className='btn'>Order</button>
        </div>
    }

    // if (hour >= openHour && hour <= closeHour) alert("We're currenlty open!");
    // else alert("Sorry we're closed");

    // return <footer className='footer'>{new Date().toLocaleTimeString()}. We're currently open!</footer>
}