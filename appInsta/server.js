var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

//CONFIGURE APP
//tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

//set the view engine to ejs
app.set('view engine', 'ejs');

//configure instagram app with your access token
ig.use({
    access_token: '2204497560.1677ed0.59add565fb0d470c9c690dc47',
});

//SET ROUTES
// home page route - our profile's images
app.get('/', function(req, res){

    ig.user_self_media_recent(function(err, medias,pagination,remaining,limit){

    res.render('pages/index',{grams: medias});
    });
});




app.listen(8080);
console.log('App started, look at http://localhost:8080/');