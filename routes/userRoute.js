const express = require("express");
const axios = require("axios");
const User = require("../models/user");

const router = express.Router();

router.post("/fetch-users", async (req, res) => {
  // const transaction = await sequelize.transaction();
  
  try {
    await User.sync();
    const response = await axios.get("https://randomuser.me/api/?results=100");
    const users = response.data.results;

    const userPromises = users.map(async (user) => {
      const result = {
        firstName: user.name.first,
        lastName: user.name.last,
        userName: user.login.username,
        email: user.email,
        password: user.login.password,
        gender: user.gender,
        age: user.dob.age,
        phone: user.phone,
        picture: user.picture.large,
      };
      await User.create(result, /** { transaction } */);
    });

    await Promise.all(userPromises);
    // await transaction.commit();

    res.json({ message: "Users fetched and stored in the database." });
  } catch (error) {
    console.error(error);
    // await transaction.rollback();
    res.status(500).json({ error: "An error occurred while fetching users." });
  }
});

router.delete("/delete-users", async (req, res) => {
  // const transaction = await sequelize.transaction();

  try {
    await User.destroy({ where: {}, /** transaction */ });
    // await transaction.commit();
    res.json({ message: "All users deleted from the database." });
  } catch (error) {
    console.error(error);
    // await transaction.rollback();
    res.status(500).json({ error: "An error occurred while deleting users." });
  }
});

router.get("/user-details", async (req, res) => {
  try {
    let page = req.query.page || 1;
    let gender = req.query.gender;
    let where = {};

    if (gender) where.gender = gender;

    const limit = 10;
    const offset = (page - 1) * limit;

    const { count, rows: results } = await User.findAndCountAll({
      limit,
      offset,
      where,
    });

    const result = {
      currentPage: page,
      pages: Math.ceil(count / limit),
      results,
    };

    res.send(result);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching user details users." });
  }
});

module.exports = { router };
