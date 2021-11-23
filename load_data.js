const csv = require('csv-parser');
const fs = require('fs');

const db = require('./db/index.js');

fs.createReadStream('./data/product.csv')
  .pipe(csv())
  .on('data', (row) => {
    db.item.create({
      id: parseInt(row.id),
      name: row.name,
      slogan: row.slogan,
      description: row.description,
      category: row.category,
      default_price: parseFloat(row.default_price)
    })
    .then(item => console.log('inserted item: ', item))
    .catch(err => console.error(err));
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });