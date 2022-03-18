const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/breakfast_foods"
);

const FoodItem = sequelize.define("foodItem", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Meal = sequelize.define("meal", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = {
  sequelize,
  FoodItem,
  Meal,
};
