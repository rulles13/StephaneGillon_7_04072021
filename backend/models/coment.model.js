module.exports = (sequelize, Sequelize) => {
  const Coment = sequelize.define("coment", {
    id: {
      type: Sequelize.SMALLINT,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: Sequelize.STRING
    },
    textComent: {
      type: Sequelize.STRING
    },
    articleId: {
      type: Sequelize.SMALLINT
    }
  });

  return Coment;
};