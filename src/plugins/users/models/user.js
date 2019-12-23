const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static init(sequelize) {
    // const sequelize = server.plugins.users.sequelize;
    return super.init({
      firstName: { type: Sequelize.STRING, allowNull: false },
      lastName: { type: Sequelize.STRING },
    },
      { sequelize }
    );
  }
}

// module.exports = User;

exports.init = (server) => {
  debugger;
  User.init(server.plugins.users.sequelize);
}
exports.default = User;
