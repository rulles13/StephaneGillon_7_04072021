module.exports = (sequelize, Sequelize) => {
  const Coment = sequelize.define("coment", {
    id: {
      type: Sequelize.SMALLINT,
      autoIncrement: true,
      primaryKey: true
    },
    textComent: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.SMALLINT
    },
    articleId: {
      type: Sequelize.SMALLINT
    }
  });

  return Coment;
};