module.exports = (sequelize, Sequelize) => {
  const Article = sequelize.define("article", {
    id: {
      type: Sequelize.SMALLINT,
      autoIncrement: true,
      primaryKey: true
    },
    titre: {
      type: Sequelize.STRING
    },
    text: {
      type: Sequelize.STRING
    },
    image_link: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.SMALLINT
    }
  });

  return Article;
};