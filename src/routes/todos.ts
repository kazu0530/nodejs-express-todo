import { Router } from "express";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todos";
import { json } from "body-parser";
const router = Router();

router.post("/", createTodo);

router.get("/", getTodos);

router.patch("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;
