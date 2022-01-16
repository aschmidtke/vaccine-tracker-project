const mongoose = require('mongoose');


// what name does the second half need?
console.log("MONGOD_URI TESTING: ",process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/vaccine-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;