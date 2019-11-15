const router = require('express').Router();
let Article = require('../models/article.model');
// waiting for the mongoose bit to be added, no axios just yet either

router.route('/').get((req, res) => {
    console.log("hi we here");
    Article.find()
        .then(article => res.json(article))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    // const body = req.body; 
    const articleId = req.body.articleId;
    const articleAuthor = req.body.articleAuthor //assumes that the articleAuthors would be in this format {"articleAuthor":["dummy1", "dummy2"]}
    //couldn't get String array to show
    const articleTitle = req.body.articleTitle;
    const articleImg = req.body.articleImg;
    const articleImgDesc = req.body.articleImgDesc;
    const articleTeaser = req.body.articleTeaser;
    const articleText = req.body.articleText;
    const articleCategory = req.body.articleCategory;
    const articleDate = Date.parse(req.body.articleDate);
    const articleStatus = req.body.articleStatus; //will be sent as string, not bool

    // const newArticle = new Article(body); 
    const newArticle = new Article({
        articleId,
        articleAuthor,
        articleTitle,
        articleImg,
        articleImgDesc,
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

router.route('/getByID/:id').get((req, res) => {
    console.log('id route', req)
    Article.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(article => res.json('Article Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Article.findById(req.params.id)
        .then(article => {
            article.articleId = req.body.articleId;
            article.articleTitle = req.body.articleTitle;
            article.articleAuthor = req.body.articleAuthor //assumes that the articleAuthors would be in this format {"articleAuthor":["dummy1", "dummy2"]}
            article.articleImg = req.body.articleImg;
            article.articleImgDesc = req.body.articleImgDesc;
            article.articleTeaser = req.body.articleTeaser;
            article.articleText = req.body.articleText;
            article.articleCategory = req.body.articleCategory;
            article.articleDate = Date.parse(req.body.articleDate);
            article.articleStatus = req.body.articleStatus; //will be sent as string, not bool

            article.save()
                .then(() => res.json('Article Updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


//need to create sub-routes if youre trying to get something by some value

router.route("/getByCategory/:category").get((req, res) => {
    Article.find({'articleCategory':req.params.category})
    .then(article => res.json(article))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route("/getBySlug/:slug").get((req, res) => {
    Article.find({'articleId':req.params.slug})
    .then(article => res.json(article))
    .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = router;
