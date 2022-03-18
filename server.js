const { sequelize } = require("./db");
const { FoodItem } = require("./db");

const express = require("express");
const server = express();
const path = require("path");

server.use("/dist", express.static(path.join(__dirname, "dist")));
server.use("/public", express.static(path.join(__dirname, "public")));
server.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

server.get("/foodItems", async (req, res, next) => {
  try {
    res.send(await FoodItem.findAll());
  } catch (error) {
    next(error);
  }
});

server.post("/foodItems", async (req, res, next) => {
  try {
    res.status(201).send(await FoodItem.create({}));
  } catch (error) {
    next(error);
  }
});

server.delete("/foodItems/:id", async (req, res, next) => {
  try {
    const foodItem = await FoodItem.findByPk(req.params.id);
    await foodItem.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

const start = async () => {
  try {
    await sequelize.sync({ force: true });

    const berries = await FoodItem.create({ name: "berries" });
    const eggs = await FoodItem.create({ name: "eggs" });
    const toast = await FoodItem.create({ name: "toast" });
    const oatmeal = await FoodItem.create({ name: "oatmeal" });
    const cereal = await FoodItem.create({ name: "cereal" });
    const yogurt = await FoodItem.create({ name: "yogurt" });
    const milk = await FoodItem.create({ name: "milk" });
    const orangeJuice = await FoodItem.create({ name: "orange juice" });

    const port = process.env.PORT || 3000;
    server.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
