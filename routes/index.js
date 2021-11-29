const { Op } = require('sequelize');
const { Product } = require('../db/models');
var express = require('express')
var router = express.Router()


router.get('/', (req, res) => {
  // Handle Params?
  Product.findAll({
    where: {
      id: {
        [Op.lt]: 6
      }
    }
  })
    .then(data => {
      res.send(data).status(200);
    })
    .catch(err => {
      console.error(err);
      res.send(err).status(500);
    });
});

router.get('/:product_id', (req, res) => {
  Product.findAll({
    where: {
      id: req.params.product_id
    }
  })
    .then(data => {
      res.send(data).status(200);
    })
    .catch(err => {
      console.error(err);
      res.send(err).status(500);
    });
})

module.exports = router;