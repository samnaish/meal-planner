const mongoose = require('mongoose');

module.exports = {
    connect: () => {
        return mongoose.createConnection(`mongodb://${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    },
    loadModel: (connection, name, schema) => {
        return connection.model(name, schema)
    }
}