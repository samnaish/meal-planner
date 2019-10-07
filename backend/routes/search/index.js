const foodData = require("../food/food.json");

module.exports = (req, res) => {
    const { term } = req.query;
    if (!term) {
        return res.json({
            error: "Please provide a search term."
        })
    }
    const results = foodData.filter((dish) => {
        return dish.name.toLowerCase().includes(term.toLowerCase());
    })
    return res.json({
        results,
        count: results.length
    })
}