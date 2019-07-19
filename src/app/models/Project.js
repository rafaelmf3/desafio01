import Sequelize, { Model } from "sequelize";

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        tasks: Sequelize.ARRAY(Sequelize.TEXT)
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default Project;
