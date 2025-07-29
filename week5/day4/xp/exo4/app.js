import { TodoList } from "./todo.js";

const todos = new TodoList();
todos.add("Buy milk");
todos.add("Do homework");
todos.complete(0);
todos.list();
