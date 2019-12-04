const router = require('express').Router();
let Author = require('../models/author.model'); 

router.route('/').get((req, res) => {
    Author.find()
      .then(author => res.json(author))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/add').post((req, res) => {
    console.log(req.body)
    const authorId = "DELETE LATER15"
    const authorFirstName = req.body.authorFirstName;
    const authorLastName = req.body.authorLastName; 
    const authorEmail = req.body.authorEmail;
    const authorProfileUrl = "";
    const authorRole = req.body.authorRole; 
    const authorBio = "";
   
    const newAuthor = new Author({
        authorId,
        authorFirstName,
        authorLastName,
        authorEmail,
        authorProfileUrl,
        authorRole,
        authorBio
    });
  
    newAuthor.save()
    .then(() => res.json('Author added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').get((req, res) => {
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
      Author.findById(req.params.id)
        .then(author => {
          author.authorId = req.body.authorId;
          author.authorFirstName = req.body.authorFirstName;
          author.authorLastName = req.body.authorLastName;
          author.auhtorEmail = req.body.authorEmail;
          author.authorProfileUrl = req.body.authorProfileUrl; 
          author.authorRole = req.body.authorRole; 
          author.authorBio = req.body.authorBio; 
    
          author.save()
            .then(() => res.json('Author updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
    });
  
  module.exports = router;




module.exports = router; 