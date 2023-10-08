import React from 'react';
import PropTypes from 'prop-types';
import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientCardForm = props => {
    const {
        submitHandler,
        enteredTitle,
        setEnteredTitle,
        enteredAmount,
        enteredDescription,
        setEnteredDescription,
        setEnteredAmount,
        isModal,
        handleClose
    } = props;
    return (
        <section className="ingredient-form">
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <label htmlFor="title">Name</label>
                        <input
                            type="text"
                            id="title"
                            value={enteredTitle}
                            onChange={(event) => {
                                const newATitle = event.target.value;
                                setEnteredTitle(newATitle);
                            }}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="title">Description</label>
                        <input
                            type="text"
                            id="title"
                            value={enteredDescription}
                            onChange={(event) => {
                                const newDescription = event.target.value;
                                setEnteredDescription(newDescription);
                            }}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            value={enteredAmount}
                            onChange={(event) => {
                                const newAmount = event.target.value;
                                setEnteredAmount(newAmount);
                            }}
                        />
                    </div>
                    <div className="ingredient-form_actions">
                        {isModal ? <button type="submit">Save</button> : <button type="submit">Add Ingredient</button>}
                        {isModal ? <button onClick={handleClose}>Cancel</button> : ''}
                    </div>
                </form>
            </Card>
        </section>
    )
}

IngredientCardForm.propTypes = {
    submitHandler: PropTypes.func.isRequired,
    enteredTitle: PropTypes.string.isRequired,
    setEnteredTitle: PropTypes.string.isRequired,
    enteredAmount: PropTypes.number.isRequired,
    enteredDescription: PropTypes.string.isRequired,
    setEnteredDescription: PropTypes.func.isRequired,
    setEnteredAmount: PropTypes.func.isRequired,
    isModal: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default IngredientCardForm