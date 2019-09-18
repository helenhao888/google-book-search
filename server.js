const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

//define middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//serve up static assets
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
} else{

// set static folder
    app.use(express.static('client/public'));
}



//add routes, both API and view
app.use(routes);

mongoose.set("useUnifiedTopology",true);
//connect to mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:heroku_xc2rlgsc@ds229450.mlab.com:29450/heroku_xc2rlgsc",
                  {useNewUrlParser :true});

//start the API server
app.listen(PORT,function(){
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})