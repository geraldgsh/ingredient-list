const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())

app.get("/ingredients", (req, res) => {
  fetch(
    "https://react-hooks-update-d8f72-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json")
    .then((response) => response.json())
    .then((responseData) => {
      const loadedIngredients = [];
      for (const key in responseData) {
        loadedIngredients.push({
          id: key,
          title: responseData[key].title,
          description: responseData[key].description,
          amount: responseData[key].amount
        });
      }
      res.json(loadedIngredients);
    });
});

app.post("/ingredients", async (req, res) => {
  const ingredient = req?.body;
  fetch(
    "https://react-hooks-update-d8f72-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json",
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
      res.status(201).json(responseData);
    });
});

app.delete('/ingredients/:id', (req, res) => {
  const ingredientId = req?.params?.id;
  fetch(
    `https://react-hooks-update-d8f72-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients/${ingredientId}.json`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((response) => {
      res.json(response);
    }).catch(error => console.log(error));

});

app.put('/ingredients/:id', (req, res) => {
  const ingredientId = req?.params?.id;
  const updatedIngredient = req?.body;
  fetch(
    `https://react-hooks-update-d8f72-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients/${ingredientId}.json`,
    {
      method: 'PUT',
      body: JSON.stringify(updatedIngredient),
      headers: { "Content-Type": "application/json" }
    }
  )
    .then((response) => {
      res.json(response);
    }).catch(error => console.log(error));
});

app.listen(5000, () => console.log("API server is running..."));