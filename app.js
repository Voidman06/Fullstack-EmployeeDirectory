import express from "express";
import employees from "./db/employees.js";
const app = express();

app.get("/", (request, response) => {
  response.send("Hello employees!");
});

app.get("/employees", (request, response) => {
  response.send(employees);
});

app.get("/employees/random", (request, response) => {
  const max = employees.length;
  const idRandom = Math.floor(Math.random() * max);

  const employee = employees[idRandom];

  response.status(200).send(employee);
});

app.get("/employees/:id", (request, response) => {
  const { id } = request.params.id;
  const employee = employees.find((e) => e.id === id);
  if (employee) {
    response.status(200).send(employee);
  } else {
    response.status(404).send("There is no employee with that ID.");
  }
});

export default app;
