"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const todos = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    todos.push(newTodo);
    res.json({ message: "TODOを作成しました", createdTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: todos });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updateText = req.body.text;
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("対象のTODOが見つかりませんでした。");
    }
    todos[todoIndex] = new todo_1.Todo(todoId, updateText);
    res.json({ message: "更新しました", updateTodo: todos[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("対象のTODOが見つかりませんでした。");
    }
    todos.splice(todoIndex, 1);
    res.json({ message: "todoを削除しました" });
};
exports.deleteTodo = deleteTodo;
