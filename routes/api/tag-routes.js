const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// Get all ProductTag
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  ProductTag.findAll()
    .then(dbProductTagData => res.json(dbProductTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get ProductTag by ID
router.get('/:id', (req, res) => {
  ProductTag.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbProductTagData => {
      if (!dbProductTagData) {
        res.status(404).json({ message: 'No ProductTag found with this id' });
        return;
      }
      res.json(dbProductTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // Create ProductTag 
  ProductTag.create({
    product_id: req.body.tag_id,
    
  })
    .then(dbProductTagData => res.json(dbProductTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
    
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  ProductTag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbProductTagData => {
        if (!dbProductTagData[0]) {
          res.status(404).json({ message: 'No ProductTag found with this id' });
          return;
        }
        res.json(dbProductTagData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // delete on tag by its `id` value
  router.delete('/:id', (req, res) => {
    ProductTag.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbProductTagData => {
        if (!dbProductTagData) {
          res.status(404).json({ message: 'No ProductTag found with this id' });
          return;
        }
        res.json(dbProductTagData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;
