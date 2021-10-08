module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.SMALLINT,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    birthdate: {
      type: Sequelize.DATE
    },
    password: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    role: {
      type: Sequelize.STRING
    }
  });

  return User;
};