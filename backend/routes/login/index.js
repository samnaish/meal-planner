
module.exports = (req, res) => {
    const { username, password } = req.body;

    if (username === "angela" && password === "baking") {
        return res.json({
            result: "Success"
        })
    }

    return res.status(400).json({
        result: "Failure"
    });
}