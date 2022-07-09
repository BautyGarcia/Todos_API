const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class TodoService{

    async getAll(){
        try{
            const allTodos = await prisma.todo.findMany()
            return allTodos;
        }
        catch (err) {
            console.error(err.message);
        }
    }

    async getById(id){
        try{
            const todo = await prisma.todo.findOne({
                where: {
                    id: id
                }
            })
            return todo;
        }
        catch (err) {
            console.error(err.message);
        }
    }

    async updateTodo(description, id){
        try {
            return prisma.todo.update({
                where: {
                    id: id
                },
                data: {
                    description: description
                }
            })
        } catch (err) {
            console.error(err.message);
        }
    }

    async createTodo(description){
        try{
            const newTodo = await prisma.todo.create({
                data: {
                    description: description
                }
            })
            return newTodo
        } catch (err) {
            console.error(err.message);
        }
    }

    async deleteTodo(id){
        try{
            return prisma.todo.delete({
                where: {
                    id: id
                }
            })
        } catch (err) {
            console.error(err.message);
        }
    }
}

module.exports = new TodoService()