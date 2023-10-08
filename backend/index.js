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

app.listen(5000, () => console.log("API server is running..."));