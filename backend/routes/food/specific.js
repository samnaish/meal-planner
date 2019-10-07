const foodData = require("./food.json");

module.exports = (req, res) => {
    const { id } = req.query;

    const dish = foodData.find((dish) => {
        return dish.id === id;
    });
    
    if (!dish) {
        return res.status(404).json({
            error: "Dish not found."
        });
    }

    return res.json({
        dish
    });
}