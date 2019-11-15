const router = require('express').Router();
let Category = require('../models/category.model'); 
// waiting for the mongoose bit to be added, no axios just yet either

router.route('/').get((req, res) => {
    Category.find()
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    // const body = req.body;  
    const categoryName = req.body.categoryName;
    
    // const newArticle = new Article(body); 
    const newCategory = new Category({
        categoryName: categoryName
    });

    newCategory.save()
        .then(() => res.json('Added Category!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//updated to return categories in lowercase
router.route('/getAllCategories').get((req, res) => {
    Category.distinct('categoryName')
    .then(category => res.json(category.toLocaleString().toLowerCase().split(',')))
    .catch(err => res.status(400).json('Error : '+err));
});

router.route('/:id').get((req, res) =>{
    Category.findById(req.params.id)
    .then(category => res.json(category))
    .catch(err => res.status(400).json('Error: '+ err));
});


module.exports = router;