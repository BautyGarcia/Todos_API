require('dotenv').config()
const express = require('express');
const app = express();
const todoController = require('./controllers/todoController');



const PORT = process.env.PORT || 5000;

app.use(express.json()); 

//ROUTES

app.post("/todos", async (req, res) => {
    const { description } = req.body;
    const newTodo = await todoController.createTodo(description);
    res.json(newTodo);
});

app.get("/todos", async (req, res) => {
    const todos = await todoController.getAll();
    res.json(todos);
});

app.get("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const todo = await todoController.getById(id);
    res.json(todo);
});

app.put("/todos/:id", async (req, res) => {
    const { description } = req.body;
    const { id } = req.params;
    const response = await todoController.updateTodo(description, id);
    res.json(response);
});

app.delete("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const response = await todoController.deleteTodo(id);
    res.json(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});
