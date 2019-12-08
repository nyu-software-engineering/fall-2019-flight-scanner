const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = [

    {
        "mode": "development",
        "entry": "./src/index.js",
        "target": "node",
        "output": {
            "path": __dirname + '/build',
            "filename": "reader-build.js"
        },
        "module": {
            "rules": [
                {
                    "enforce": "pre",
                    "test": /\.(js|jsx)$/,
                    "exclude": /node_modules/,
                    "use": "eslint-loader"
                },
                {
                    "test": /\.(js|jsx)$/,
                    "exclude": /node_modules/,
                    "use": {
                        "loader": "babel-loader",
                        "options": {
                            "presets": ["@babel/preset-env", "@babel/preset-react"]
                        }
                    }
                }, 
                {
                    "test": /\.css$/,
                    "use": [
                        "style-loader",
                        "css-loader"
                    ]
                }, 
                {
                    "test": /\.html$/,
                    "use": [
                      {
                        "loader": "html-loader"
                      }
                    ]
                  }
            ], 
        }, 
        "plugins": [
            new HtmlWebPackPlugin({
              "template": "./src/index.html",
              "filename": "./index.html"
            })
          ]
    }

]