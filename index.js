const { sequelize } = require('./db/models');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const routes = require('./routes');

sequelize.sync({ force: false });

app.use('/products', routes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log('Listening on port ', port);
})