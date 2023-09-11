const mongoose = require("mongoose")

const userScheema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    full_name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    conform_password: {
        type: String,
        require: true
    },

    country_name: {
        type: String,
        require: true
    },

    state_name: {
        type: String,
        require: true
    },

    city_name: {
        type: String,
        require: true
    },

    languages: {
        type: Array,
        require: true
    },

},
    {
        timestamps: true
    }

)
const Users = mongoose.model("user", userScheema);
module.exports = Users