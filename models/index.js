// const Sequelize = require('sequelize');
// const fs = require('fs');
// const path = require('path');
// const config = require('../config/config').development;
// const db = {};

// const sequelize = new Sequelize(
//   config.database,
//   config.username,
//   config.password,
//   config
// );

// fs.readdirSync(__dirname)
//   .filter(file => file !== 'index.js')
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(model => {
//   if (db[model].associate) db[model].associate(db);
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// module.exports = db;

const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const config = require('../config/config').development;
const db = {};

let sequelize;

try {
  // Try initializing Sequelize
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );

  console.log('✅ Sequelize instance created successfully.');

  // Try reading and initializing all models
  fs.readdirSync(__dirname)
    .filter(file => file !== 'index.js')
    .forEach(file => {
      const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
      console.log(`✅ Loaded model: ${model.name}`);
    });

  // Setup model associations
  Object.keys(db).forEach(model => {
    if (db[model].associate) {
      db[model].associate(db);
      console.log(`🔗 Associated model: ${model}`);
    }
  });

} catch (error) {
  console.error('❌ Error during Sequelize setup:', error);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
