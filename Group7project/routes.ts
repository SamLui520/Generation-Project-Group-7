import express from 'express';
import { Controller } from './controller';
// import {request, response} from 'express'
export function createRoute (controller: Controller) {

    const routes = express.Router();
    
    routes.get('/todolist', controller.getTodoList);
    routes.post('/todolist', controller.postTodoList);
    routes.delete('/todolist/:id', controller.deleteTodoList);
    routes.put('/todolist/:id', controller.putTodoList);
    
    routes.get('/login', controller.getLogin);
    routes.post('/login', controller.postLogin);
    routes.delete('/login/:id', controller.deleteLogin);
    routes.put('/login/:id', controller.putLogin);

    routes.get('/whologin', controller.getWhoLogin);
    routes.put('/whologin/:id', controller.putWhoLogin);
    return routes;
}