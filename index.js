const { sequelize } = require('./models'); // ✅ This imports the sequelize instance

const init = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');

    // 🔧 This line creates tables automatically
    await sequelize.sync({ force: false, alter: true });
    console.log('✅ All tables are synced.');

  } catch (error) {
    console.error('❌ Error during database initialization:', error);
  }
};

init();
