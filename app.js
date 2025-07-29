import express from "express";
import { func } from "./controller/controller.js";

const app = new express();

app.use(express.json());

app.post("/api/bfhl", func);
app.get("/api/chk", func);
export { app };
