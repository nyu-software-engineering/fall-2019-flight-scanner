const router = require('express').Router();
const jwt = require('jsonwebtoken');
let Author = require('../models/author.model');

router.route('/').get((req, res) => {
  Author.find()
    .then(author => res.json(author))
    .catch(err => res.status(400).json('Error: ' + err));
});

  router.route('/add').post((req, res) => {
    console.log(req.body)
    const authorFirstName = req.body.authorFirstName;
    const authorLastName = req.body.authorLastName; 
    const authorEmail = req.body.authorEmail;
    const authorProfileUrl = "";
    const authorRole = req.body.authorRole; 
    const authorBio = "";
    const authorAccess = req.body.authorAccess;
   
    const newAuthor = new Author({
        authorFirstName,
        authorLastName,
        authorEmail,
        authorProfileUrl,
        authorRole,
        authorBio,
        authorAccess
    });
  
    newAuthor.save()
    .then(() => res.json('Author added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').get((req, res) => {
      console.log(req.params.id);
      Author.findById(req.params.id)
        .then(author => res.json(author))
        .catch(err => res.status(400).json('Error: ' + err));
    });

    router.route('/:id').delete((req, res) => {
      Author.findByIdAndDelete(req.params.id)
        .then(() => res.json('Author deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
    });
    
    router.route('/update/:id').post((req, res) => {
      console.log(req.body);
      Author.findById(req.params.id)
        .then(author => {
          author.authorFirstName = req.body.authorFirstName;
          author.authorLastName = req.body.authorLastName;
          author.auhtorEmail = req.body.authorEmail;
          author.authorProfileUrl = req.body.authorProfileUrl; 
          author.authorRole = req.body.authorRole; 
          author.authorBio = req.body.authorBio; 
          author.authorAccess = req.body.authorAccess;

          author.save()
            .then(() => res.json('Author updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
    });
    
router.route('/validate').post((req, res) => {

  let payload = {
    userEmail: req.body.email,
    authToken: req.body.token
  }

  Author.findOne({authorEmail: req.body.email})
  .then(author => {
    console.log(author)
    const token = jwt.sign(payload, process.env.JWT_SECRET)
    res.status(200).json({
      authToken: token,
      author: author
    })
  })
  .catch(e => {
    console.log("error ", e)
    res.status(404).json("Error "+e)
  })

});


module.exports = router;