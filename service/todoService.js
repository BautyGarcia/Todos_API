const pool = require("../db");

class TodoService{

    async getAll(){
        try{
            const allTodos = await pool.query("SELECT * FROM todo");
            return allTodos.rows;
        }
        catch (err) {
            console.error(err.message);
        }
    }

    async getById(id){
        try{
            const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
            
            if (todo.rowCount > 0){
                return todo.rows[0];
            } else {
                console.error("Index out of range");
            }

        }
        catch (err) {
            console.error(err.message);
        }
    }

    async updateTodo(description, id){
        try {
            return pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
        } catch (err) {
            console.error(err.message);
        }
    }

    async createTodo(description){
        try{
            const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]);
            return newTodo.rows[0];
        } catch (err) {
            console.error(err.message);
        }
    }

    async deleteTodo(id){
        try{
            return pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        } catch (err) {
            console.error(err.message);
        }
    }
}

module.exports = new TodoService()