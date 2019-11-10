module.exports = {
    doesUserExist: (username, password) => {
        // const user = await database.find({ username, password });
        if (username === "angela" && password === "baking") {
            return {
                first_name: 'Angela',
                age: 24
            };
        }
    }
}