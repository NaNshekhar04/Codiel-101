const env = require('./enviroment');
const fs = require('fs');
const path = require('path');

module.exports = (app) =>{

    app.locals.assestPath = function(filePath) {
        
        if (env.name == 'development'){

            return "./"+filePath;
        }

        console.log("filepath="+"/" + JSON.parse(fs.readFileSync(path.join(__dirname,'../public/assets/rev-manifest.json')))[filePath]);
        return "./" + JSON.parse(fs.readFileSync(path.join(__dirname,'../public/assets/rev-manifest.json')))[filePath];


    }

}