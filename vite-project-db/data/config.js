const mongoose = require("mongoose");

const connectDB = async () => {
    const URL = "mongodb://admin:123@localhost:27017/?authSource=admin";
    try {
        await mongoose.connect(URL);
        console.log("Conectado a MongoDB");
    } catch (err) {
        console.error(" No se pudo conectar a la base de datos:", err.message);
        throw err;
    }
};

module.exports = { connectDB };

