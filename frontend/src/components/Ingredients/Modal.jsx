import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Modal.css';
import IngredientCardForm from './IngredientCardForm';

const Modal = React.memo((props) => {
    const {
        isModalOpen, onClose, selectedIngredient, isModal, onUpdateIngredient,
    } = props;
    const {
        id, title, description, amount,
    } = selectedIngredient;
    const [enteredTitle, setEnteredTitle] = useState(title);
    const [enteredDescription, setEnteredDescription] = useState(description);
    const [enteredAmount, setEnteredAmount] = useState(amount);

    const submitHandler = (event) => {
        event.preventDefault();
        onUpdateIngredient({
            id, title: enteredTitle, description: enteredDescription, amount: enteredAmount,
        });
        onClose();
    };

    return (
        <div className={`modal ${isModalOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <IngredientCardForm
                    submitHandler={submitHandler}
                    enteredTitle={enteredTitle}
                    setEnteredTitle={setEnteredTitle}
                    enteredAmount={enteredAmount}
                    setEnteredAmount={setEnteredAmount}
                    enteredDescription={enteredDescription}
                    setEnteredDescription={setEnteredDescription}
                    isModal={isModal}
                    handleClose={onClose}
                />
            </div>
        </div>
    );
});

Modal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    selectedIngredient: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
    })).isRequired,
    isModal: PropTypes.bool.isRequired,
    onUpdateIngredient: PropTypes.func.isRequired,
};

export default Modal;
