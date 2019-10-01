const foodData = require('./food.json');

module.exports = (req, res) => {
    return res.json({
        data: foodData,
        count: foodData.length
    });
}

