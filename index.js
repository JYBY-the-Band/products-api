const { sequelize } = require('./db/models');

sequelize.sync({ force: true });