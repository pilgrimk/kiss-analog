const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(console.log("Connected to MongoDB"))
        .catch((err) => console.log(err));
}