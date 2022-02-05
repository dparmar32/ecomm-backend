const router = require('express').Router();
const {Category, Product} = require('../../models');

// The `/api/categories` endpoint

/* Find all categories and include their associated products. */
router.get('/', (req, res) => {
    // find all categories
    Category.findAll({
        // be sure to include its associated Products
        include: [Product],
    })
        .then((dbCategoryData) => res.json(dbCategoryData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
});

/* Find a category by its id, and return the category and its associated products. */
router.get('/:id', (req, res) => {
    // find one category by its `id` value
    Category.findOne({
        where: {
            id: req.params.id,
        },
        // be sure to include its associated Products
        include: [Product],
    })
        /* Returning the data from the database to the user. */
        .then((dbCategoryData) => res.json(dbCategoryData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
});

/* Create a new category. */
router.post('/', (req, res) => {
    // create a new category
    Category.create({
        category_name: req.body.category_name
    })
        .then((dbCategoryData) => res.json(dbCategoryData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
});

/* Update a category by its `id` value. */
router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Category.update({
        title: req.body.title
    }, {
        where: {
            id: req.params.id
        }
    })
        .then(dbCategoryData => {
                if (!dbCategoryData) {
                    res.status(404).json({message: 'No such category found!'});
                    return;
                }
                res.json(dbCategoryData);
            }
        )
        .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            }
        )
});

/* Delete a category by its `id` value. */
router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Category.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCategoryData => {
                if (!dbCategoryData) {
                    res.status(404).json({message: 'No such category found!'});
                    return;
                }
                res.json(dbCategoryData);
            }
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;
