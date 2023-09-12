const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");
const { createUser, getUser, updateUser } = require("../controllers/UserControllers");
const User = require("../models/UserSchema");



router.post("/", async (req, res) => {
  try {
    let { family_name, email, picture, admin } = req.body;
    await createUser(family_name, email, picture, admin);
    res.status(201).send("User creado exitosamente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
    try {
        const all = await getUser();
        res.status(200).send(all);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
  });

  router.put("/:id", async (req, res) => {
    const { id } = req.params;
    let { family_name, email, picture, admin } = req.body;
  if (id) {
    try {
      updateUser(id, family_name, email, picture, admin)
      res.status(200).send("modificacion realizada con exito");
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await User.findByIdAndDelete(id);
    if (result) {
      res.status(200).send("User deleted");
    } else {
      res.status(404).send("Can't find such User");
    }
  } catch (error) {
    console.log(error);
  }
});



module.exports = router;
