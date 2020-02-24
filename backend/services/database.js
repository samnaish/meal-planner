const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

module.exports = {
    connect: () => {
        const connectionString = process.env.NODE_ENV === 'production' 
            ? `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`
            : `mongodb://${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`

        return mongoose.createConnection(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    },
    loadModel: (connection, name, schema) => {
        return connection.model(name, schema)
    },
    toObjectId: (stringId) => mongoose.Types.ObjectId(stringId)
}