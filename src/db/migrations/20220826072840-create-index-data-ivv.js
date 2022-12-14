module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IndexDataIVVs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.STRING,
      },
      open: {
        type: Sequelize.INTEGER,
      },
      high: {
        type: Sequelize.INTEGER,
      },
      low: {
        type: Sequelize.INTEGER,
      },
      close: {
        type: Sequelize.INTEGER,
      },
      volume: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('IndexDataIVVs');
  },
};
