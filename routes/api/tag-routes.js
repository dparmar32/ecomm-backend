const router = require('express').Router();
const {Tag, Product, ProductTag} = require('../../models');

// The `/api/tags` endpoint

/* Find all tags and include their associated products. */
router.get('/', (req, res) => {
    // find all tags
    Tag.findAll({
        // be sure to include its associated Product data
        include: [Product]
    })
        .then((dbTagData) => res.json(dbTagData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
});

/* Find a single tag by its `id` and include the associated Product data. */
router.get('/:id', (req, res) => {
    // find a single tag by its `id`
    Tag.findOne({
        where: {
            id: req.params.id
        },
        // be sure to include its associated Product data
        include: [
            {
                model: Product,
                through: ProductTag,
            }
        ]
    })
        .then((dbTagData) => res.json(dbTagData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
});

/* Create a new tag. */
router.post('/', (req, res) => {
    // create a new tag
    Tag.create({
        tag_name: req.body.tag_name
    })
        .then((dbTagData) => res.json(dbTagData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
});

/* Update a tag's name by its `id` value. */
router.put('/:id', (req, res) => {
    // update a tag's name by its `id` value
    Tag.update({
            tag_name: req.body.tag_name
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbTagData => {
            if (!dbTagData) {
                res.status(404).json({message: 'No such tag found!'});
                return;
            }
            res.json(dbTagData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
});

/* Delete a tag by its id. */
router.delete('/:id', (req, res) => {
    // delete on tag by its `id` value
    Tag.destroy({
        where: {
            id: req.params.id
        }
    })
            .then(dbTagData => {
            if (!dbTagData) {
                res.status(404).json({message: 'No such tag found!'});
                return;
            }
            res.json(dbTagData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;
