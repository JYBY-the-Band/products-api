const { Op } = require('sequelize');
const { Product, Feature, Style, RelatedItem, Photo, SKU } = require('../db/models');
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
    },
    include: {
      model: Feature,
      attributes: ['feature', 'value']
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

router.get('/:product_id/styles', (req, res) => {
  Style.findAll({
    where: {
      ProductId: req.params.product_id
    },
    include: [{
      model: Photo,
      attributes: ['photo_url', 'thumbnail_url'],
      separate: true,
    },{
      model: SKU,
      attributes: ['quantity', 'size'],
      separate: true,
    }]
  })
    .then(data => {
      res.send(data).status(200);
    })
    .catch(err => {
      console.error(err);
      res.send(err).status(500);
    });
});

router.get('/:product_id/related', (req, res) => {
  RelatedItem.findAll({
    where: {
      current_product_id: req.params.product_id
    }
  })
    .then(data => {
      let result = [];
      data.forEach(item => {
        result.push(item.related_product_id);
      })
      res.send(result).status(200);
    })
    .catch(err => {
      console.error(err);
      res.send(err).status(500);
    });
})

module.exports = router;