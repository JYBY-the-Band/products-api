const csv = require('csv-parser');
const fs = require('fs');

const { sequelize, Product } = require('./db/models');

fs.createReadStream('./data/product.csv')
  .pipe(csv())
  .on('data', (row) => {
    Product.create({
      id: row.id,
      name: row.name,
      slogan: row.slogan,
      description: row.description,
      category: row.category,
      default_price: row.default_price
    })
    .then(() => {
      console.log('Inserted product id: ', row.id)
    })
    .catch(err => console.log(err));
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });