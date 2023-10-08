import React from 'react'

import "./IngredientList.css";

const IngredientList = (props) => {
    return (
        <section className="ingredient-list">
            <h2>Loaded Ingredients</h2>
            <ul>
                {props.ingredients.map((ig) => (
                    <li key={ig.id}>
                        <span className="span-align">{ig.title}</span>
                        <button className="button-update" onClick={props.onOpenModal?.bind(this, ig)}>Update</button>
                        <button className="button-delete" onClick={props.onRemoveItem?.bind(this, ig.id)}>Delete</button>
                        <span className="span-align">{ig.amount}x</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default IngredientList