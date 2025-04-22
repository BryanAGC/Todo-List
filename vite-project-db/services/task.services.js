const Task = require("../models/task.models");

class TaskService {
    static async getAll() {
        try {
            return await Task.find();
        } catch (err) {
            return { status: 500, message: err.message };
        }
    }

    static async getComplete() {
        try {
            return await Task.find({ status: true });
        } catch (err) {
            return { status: 500, message: err.message };
        }
    }

    static async getUnfinished() {
        try {
            return await Task.find({ status: false });
        } catch (err) {
            return { status: 500, message: err.message };
        }
    }

    static async create(name, descripcion,status=false) {
        try {
            const newTask = new Task({ name, descripcion,status });
            return await newTask.save();
        } catch (err) {
            return { status: 500, message: err.message };
        }
    }

    static async update(id, data) {
        try {
            return await Task.findByIdAndUpdate(id, data, { new: true });
        } catch (err) {
            return { status: 500, message: err.message };
        }
    }

    static async delete(id) {
        try {
            return await Task.findByIdAndDelete(id);
        } catch (err) {
            return { status: 500, message: err.message };
        }
    }
}

module.exports = TaskService;
