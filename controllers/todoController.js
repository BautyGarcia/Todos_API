const todoService = require('../service/todoService');

class TodoController{
    getAll(){
        return todoService.getAll()
    }

    updateTodo(description, id){
        return todoService.updateTodo(description, id).then(()=>todoService.getById(id))
    }

    getById(id){
        return todoService.getById(id)
    }

    createTodo(description){
        return todoService.createTodo(description)
    }

    deleteTodo(id){
        return todoService.deleteTodo(id)
    }
}

module.exports = new TodoController()