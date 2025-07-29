import { app } from "./app.js";

const server = app;

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("server is running");
});
