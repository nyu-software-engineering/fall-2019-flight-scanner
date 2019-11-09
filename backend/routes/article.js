const router = require('express').Router();
let Article = require('../models/article.model'); 
// waiting for the mongoose bit to be added, no axios just yet either

router.route('/').get((req, res) => {
    Article.find()
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const articleTitle = req.body.articleTitle;
    const articleAuthor = req.body.articleAuthor //assumes that the articleAuthors would be in this format {"articleAuthor":["dummy1", "dummy2"]}
    const articleImg  = req.body.articleImg;
    const articleImgAlt  = req.body.articleImgAlt;
    const articleTeaser  = req.body.articleTeaser;
    const articleText  = req.body.articleText;
    const articleCategory  = req.body.articleCategory;
    const articleDate = Date.parse(req.body.articleDate);
    const articleStatus = req.body.duration; //will be sent as string, not bool
    

    const newArticle = new Article({
        articleTitle,
        articleAuthor,
        articleImg,
        articleImgAlt,
        articleTeaser,
        articleText,
        articleCategory,
        articleDate,
        articleStatus,
    });

    newArticle.save()
        .then(() => res.json('Added Article!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) =>{
    Article.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').delete((req, res) =>{
    Article.findByIdAndDelete(req.params.id)
    .then(exercise => res.json('Article Deleted'))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/update/:id').post((req, res) => {
    Article.findById(req.params.id)
    .then(article => {
        article.articleTitle = req.body.articleTitle;
        article.articleAuthor = req.body.articleAuthor //assumes that the articleAuthors would be in this format {"articleAuthor":["dummy1", "dummy2"]}
        article.articleImg  = req.body.articleImg;
        article.articleImgAlt  = req.body.articleImgAlt;
        article.articleTeaser  = req.body.articleTeaser;
        article.articleText  = req.body.articleText;
        article.articleCategory  = req.body.articleCategory;
        article.articleDate = Date.parse(req.body.articleDate);
        article.articleStatus = req.body.duration; //will be sent as string, not bool
    
        article.save()
        .then(() => res.json('Article Updated'))
        .catch(err=> res.status(400).json('Error: '+ err));
    })
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;
