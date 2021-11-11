module.exports = (sequelize, Sequelize) => {
  const Coment = sequelize.define("coment", {
    id: {
      type: Sequelize.SMALLINT,
      autoIncrement: true,
      primaryKey: true
    },
    writer: {
      type: Sequelize.STRING
    },
    text: {
      type: Sequelize.STRING
    },
    articleId: {
      type: Sequelize.STRING
    }
  });

  return Coment;
};