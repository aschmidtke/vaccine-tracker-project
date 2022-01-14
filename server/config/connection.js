const mongoose = require('mongoose');


// what name does the second half need?
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/vaccine-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;