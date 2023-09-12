const Marker = require("../models/MarkerSchema");

const getMarkers = () => {
  const user = Marker.find();
  return user;
};

const createMarker = async (name, latitude, longitude, img, link, tipo) => {
  let MarkerCreated = await Marker.create({
    name,
    latitude,
    longitude,
    img,
    link,
    tipo,
  });
  return MarkerCreated;
};

const updateMarker = async (id, name, latitude, longitude, img, link, tipo) => {
    const updatedMarker = await Marker.findOneAndUpdate(
        { _id: id },
        { name, latitude, longitude, img, link, tipo },
        { new: true }
      );
      console.log("parte 2");
      return updatedMarker
};



module.exports = {
  createMarker,
  getMarkers,updateMarker,
};
