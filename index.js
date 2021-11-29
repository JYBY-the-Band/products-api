const { sequelize } = require('./db/models');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
const port = 3000;
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(cors());

const routes = require('./routes');

sequelize.sync({ force: false });

app.use('/products', routes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log('Listening on port ', port);
})