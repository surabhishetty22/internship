import React from 'react'
import { name, age, phone, address } from './Imp' // Ensure 'Imp' has these exports

export default function Ternary() {
    const Greeting = () => {
        let a = true;
        return a ? <h1>A is True</h1> : <h1>A is False</h1>;
    };

    let b = 10;
    let darkMode = true;

    const Abcd = () => {
        alert("Button Clicked!");
    };

    return (
        <div>
            <button onClick={Abcd}>Heloooo</button>
            <p>This is the ternary operator</p>
            <Greeting />
            
            {b > 10 ? (
                <h1>B is Greater than 10</h1>
            ) : b > 5 ? (
                <h1>B is Greater than 5</h1>
            ) : (
                <h1>B is Less than 5</h1>
            )}

            <p style={{ color: darkMode ? "white" : "black", backgroundColor: darkMode ? "black" : "white" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur voluptatem quam ex facilis dolor,
                eaque magni praesentium rem porro quidem? Illo minus consequuntur optio aut accusamus dolores, earum ad voluptate.
            </p>

            <h1>My name is {name}</h1>
            <h1>My age is {age}</h1>
            <h1>My phone is {phone}</h1>
            <h1>My address is {address}</h1>
        </div>
    );
}