import express, { NextFunction, Request, Response } from "express";
import { Pool } from "pg";
import config from "./config/config";
import initDB, { pool } from "./config/Db";
import logger from "./Middleware/Logger/Logger";
import { userRoutes } from "./Modules/User/user.route";
import { todoRoutes } from "./Modules/Todo/todo.route";

const app = express();
const port = config.port;

//* Parser
app.use(express.json());
// app.use(express.urlencoded());

initDB();

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello Next Level Developer!");
});

// * CRUD Users

app.use("/users", userRoutes);

// app.post("/users", );
// app.get("/users", );
// app.get("/users/:id", );
// app.put("/users/:id",);
// app.delete("/users/:id", );

//* Todos CRUD

app.use('/todos', todoRoutes)
// app.post("/todos", );
// app.get("/todos",);

//* Not Found Route
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
