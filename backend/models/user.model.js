module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    email: {
      type: Sequelize.STRING
    },
    motdepasse: {
      type: Sequelize.STRING
    },
    
  });

  return User;
};