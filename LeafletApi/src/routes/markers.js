const { Router } = require("express");
const { marker } = require("../../db");
const router = Router();
const adressPoints = require("../data2");
const mongoose = require("mongoose");
const Marker = require("../models/MarkerSchema");
const {
  createMarker,
  updateMarker,
} = require("../controllers/MarkerControllers");

// TODO split to controller
router.get("/", async (req, res) => {
  const name = req.query.name;
  try {
    let markersTotal = await Marker.find();
    if (name) {
      let markerName = await markersTotal.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      markerName.length
        ? res.status(200).send(markerName)
        : res.status(404).send("Can't find such marker");
    } else {
      res.status(200).send(markersTotal);
    }
  } catch (error) {
    console.log(error);
  }
});

// TODO split to controller

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Marker.findById(id);
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
  }
});

// ? creo que /all ya no se necesite, este agregaba los por defaults creados al ppio

/*  router.get("/all", async(req,res) => {
    let markersToAdd = adressPoints
    markersToAdd.map((el)=>{
        marker.create({
            name: el[2],
            latitude:el[0],
            longitude:el[1],
            tipo:el[3]
        });
    })
res.status(200).send("datos  default creados con exito")
})  */

router.post("/", async (req, res) => {
  try {
    let { name, latitude, longitude, img, link, tipo } = req.body;
    await createMarker(name, latitude, longitude, img, link, tipo);
    res.status(201).send("Marker creado exitosamente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  let { name, latitude, longitude, img, link, tipo, subtitle} = req.body;
  if (id) {
    try {
      const updatedMarker = updateMarker(
        id,
        name,
        latitude,
        longitude,
        img,
        link,
        tipo,
        subtitle,
      );
      res.status(200).send(updatedMarker);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Marker.findByIdAndDelete(id);
    if (result) {
      res.status(200).send("marker deleted");
    } else {
      res.status(404).send("Can't find such marker");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
