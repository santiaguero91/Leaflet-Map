const User = require("../models/UserSchema");


// buscar todos
const getUser = () => {
    const user = User.find();
    return user;
  };

// crear uno

const createUser = async(family_name, email, picture, admin) => {
    let userCreated = await User.create({
            family_name,
            email,
            picture,
            admin
    });
    return userCreated;
  }

// buscar uno y si NO lo encuentra lo crea, si lo encuentra lo modifica??

const updateUser = async (id, family_name, email, picture,admin) => {
  const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      {family_name, email, picture, admin },
      { new: true }
    );
    return updatedUser
};

  module.exports = {
    createUser,getUser,updateUser,
  };
  