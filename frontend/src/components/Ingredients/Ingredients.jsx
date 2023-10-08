import React, { useState, useEffect } from "react";

import Modal from './Modal';
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";

const Ingredients = () => {
    const [userIngredients, setUserIngredients] = useState([]);
    const [selectedIngredient, setSelectedIngredient] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getIngredients = () => {
        fetch(
            "http://localhost:5000/ingredients"
        )
            .then((response) => response.json())
            .then((responseData) => {
                const loadedIngredients = [];
                for (const key in responseData) {
                    loadedIngredients.push({
                        id: responseData[key].id,
                        title: responseData[key].title,
                        description: responseData[key].description,
                        amount: responseData[key].amount
                    });
                }
                setUserIngredients(loadedIngredients);
            });
    }

    useEffect(() => {
        getIngredients();
    }, []);

    const addIngredientHandler = (ingredient) => {
        fetch(
            "http://localhost:5000/ingredients",
            {
                method: "POST",
                body: JSON.stringify(ingredient),
                headers: { "Content-Type": "application/json" }
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                setUserIngredients((prevIngredients) => [
                    ...prevIngredients,
                    { id: responseData.name, ...ingredient }
                ]);
            });
    };

    const removeIngredientHandler = (ingredientId) => {
        fetch(
            `http://localhost:5000/ingredients/${ingredientId}`,
            {
                method: "DELETE"
            }
        ).then((response) => {
            setUserIngredients((prevIngredients) =>
                prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
            );
        });
    };

    const openModalHandler = (ig) => {
        setSelectedIngredient(ig);
        setIsModalOpen(true);
    }

    const closeModelHandler = () => {
        setIsModalOpen(false);
    }

    const updateHandler = (ingredient) => {
        const { id, title, description, amount } = ingredient;
        const updatedIngredient = { title, description, amount };
        fetch(
            `http://localhost:5000/ingredients/${id}`,
            {
                method: "PUT",
                body: JSON.stringify(updatedIngredient),
                headers: { "Content-Type": "application/json" }
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                getIngredients();
            });
    }

    return (
        <div className="App">
            <IngredientForm onAddIngredient={addIngredientHandler} />
            <section>
                <IngredientList
                    ingredients={userIngredients}
                    onRemoveItem={removeIngredientHandler}
                    onOpenModal={openModalHandler}
                />
            </section>
            {isModalOpen &&
                <Modal
                    isModal
                    isModalOpen
                    onUpdateIngredient={updateHandler}
                    onClose={closeModelHandler}
                    selectedIngredient={selectedIngredient}
                />
            }
        </div>
    );
};

export default Ingredients