/* The router.use() method is used to register a middleware function with an Express application. 
The middleware function is executed for every request that is handled by the application. 
The middleware function is used to register routes with the router. */
const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

/* The router.use() method is used to register a route. 

The first argument is the path of the route. 

The second argument is the route handler. 

The route handler is a function that returns a response to the request. */
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
