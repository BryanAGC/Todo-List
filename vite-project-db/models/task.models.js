const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    descripcion: { type: String },
    status: { type: Boolean, default: false }
});

module.exports = mongoose.model("Task", TaskSchema);
