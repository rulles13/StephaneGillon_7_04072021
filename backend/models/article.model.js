module.exports = (sequelize, Sequelize) => {
  const Article = sequelize.define("article", {
    id: {
      type: Sequelize.SMALLINT,
      autoIncrement: true,
      primaryKey: true
    },
    text: {
      type: Sequelize.STRING
    },
    image_link: {
      type: Sequelize.STRING
    },
    writer: {
      type: Sequelize.SMALLINT
    }
  });

  return Article;
};