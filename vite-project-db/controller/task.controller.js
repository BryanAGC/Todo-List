const TaskService = require("../services/task.services");

class TaskController {
    static async getAll(req, res) {
        try {
            const response = await TaskService.getAll();
            if (response.status) {
                return res.status(response.status).json({ message: response.message });
            }
            return res.json(response);
        } catch (error) {
            res.status(500).json({ message: "Error fetching tasks" });
        }
    }

    static async getComplete(req, res) {
        try {
            const response = await TaskService.getComplete();
            res.json(response);
        } catch (error) {
            res.status(500).json({ message: "Error fetching completed tasks" });
        }
    }

    static async getUnfinished(req, res) {  
        try {
            const response = await TaskService.getUnfinished();
            res.json(response);
        } catch (error) {
            res.status(500).json({ message: "Error fetching unfinished tasks" });
        }
    }

    static async create(req, res) {
        try {
            const { name, descripcion, status } = req.body; // Agregar status
            const response = await TaskService.create(name, descripcion, status); // Pasarlo al servicio
            res.json(response);
        } catch (error) {
            res.status(500).json({ message: "Error creating task" });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { name, descripcion, status } = req.body;
            const response = await TaskService.update(id, { name, descripcion, status });
            res.json(response);
        } catch (error) {
            res.status(500).json({ message: "Error updating task" });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const response = await TaskService.delete(id);
            res.json(response);
        } catch (error) {
            res.status(500).json({ message: "Error deleting task" });
        }
    }
}

module.exports = TaskController;
