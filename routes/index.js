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
  // TODO: also get features
  Product.findAll({
    where: {
      id: req.params.product_id
    },
    include: Feature
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
  // TODO: also get photos and skus
  Style.findAll({
    where: {
      ProductId: req.params.product_id
    },
    include: [Photo, SKU]
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