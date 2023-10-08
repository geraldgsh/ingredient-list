import React, { useState } from "react";
import IngredientCardForm from './IngredientCardForm';

const IngredientForm = React.memo((props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        props?.onAddIngredient({ title: enteredTitle, description: enteredDescription, amount: enteredAmount });
    };

    return (
        <IngredientCardForm
            submitHandler={submitHandler}
            enteredTitle={enteredTitle}
            setEnteredTitle={setEnteredTitle}
            enteredDescription={enteredDescription}
            setEnteredDescription={setEnteredDescription}
            enteredAmount={enteredAmount}
            setEnteredAmount={setEnteredAmount}
        />
    );
});

export default IngredientForm