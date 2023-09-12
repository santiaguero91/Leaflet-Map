const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
      family_name: {
            type: String,
            required: [true],
          },
          email: {
            type: String,
            required: [false],
          },
          picture: {
            type: String,
            required: [false],
          },
          admin: {
            type: Boolean,
            required: [true],
          },
        },
        {
          timestamps: true,
        }  
)

const User = mongoose.model('User',userSchema)

module.exports = User;
