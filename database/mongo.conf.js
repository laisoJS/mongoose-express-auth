const mongoose = require("mongoose");

module.exports = {
    init: () => {
        mongoose.connect(process.env.MONGO_URI);
        mongoose.Promise = global.Promise;
        mongoose.connection.on("connected", () => {
            console.log("Successfuly connected to mongoDB");
        });
    }
};