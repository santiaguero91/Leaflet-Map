const mongoose = require('mongoose')

const markerSchema = mongoose.Schema(
    {
          name: {
            type: String,
            required: [false],
          },
          latitude: {
            type: Number,
            required: [false],
          },
          longitude: {
            type: Number,
            required: [false],
          },
          img: {
            type: String,
            required: [false],
          },
          link: {
            type: String,
            required: [false],
          },
          subtitle: {
            type: String,
            required: [false],
          },
          tipo: {
            type: String,
            required: [false],
          },
        },
        {
          timestamps: true,
        }  
)

const Marker = mongoose.model('Marker',markerSchema)

module.exports = Marker;
