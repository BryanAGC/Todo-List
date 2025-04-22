const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/task.routes");
const { connectDB } = require("./data/config");
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", taskRoutes);

async function startServer() {
    try {
        await connectDB(); // Espera la conexión antes de iniciar el servidor
        app.listen(PORT, () => {
            console.log("Server running on http://localhost:" + PORT);
        });
    } catch (error) {
        console.error("No se pudo conectar a la base de datos:", error);
    }
}

startServer();
