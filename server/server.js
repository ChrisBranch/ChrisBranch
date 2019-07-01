//BASE SETUP
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const article_route = require('./routes/articles.js')

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/admin', {useNewUrlParser: true});

const Article = mongoose.model('Article', { name: String });

//const article = new Article({ name: 'FirstEntry' });
//article.save().then(() => console.log('Article saved successfully.'));

const bodyParser = require('body-parser');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();  // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here
//Routes that end with /articles found at ./api/articles
router.route('/articles')
    .post(function(req, res) {
        var article = new Article()
        Article.name = req.body.name

        //save the article and check for err
        article.save(function(err) {
            if (err)
                res.send(err)
            res.json({ message : 'Article created!'})
        })
    })
    // get all the articles (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        Article.find(function(err, articles) {
            if (err)
                res.send(err)

            res.json(articles)
        })
    })
// on routes that end in /articles/:article_id
router.route('/articles/:article_id')

    // get the article with that id (accessed at GET http://localhost:8080/api/articles/:article_id)
    .get(function(req, res) {
        Article.findById(req.params.article_id, function(err, article) {
            if (err)
                res.send(err)
            res.json(article)
        })
    })
    //Update the article with an article_id (accessed at PUT http://localhost:8080/api/articles/:article_id) 
    .put(function(req, res) {

        // use our article model to find the article we want
        Article.findById(req.params.article_id, function(err, article) {

            if (err)
                res.send(err);

            article.name = req.body.name;  // update the articles info

            // save the article
            article.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Article updated!' });
            })

        })
    })


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);