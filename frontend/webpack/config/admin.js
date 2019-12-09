const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = [

    {
        name: "admin",
        mode: "development",
        entry: "./src/admin-index.js",
        // target: "web",
        output: {
            path: __dirname + './../build',
            filename: "admin-build.js"
        },
        devServer: {
            historyApiFallback: true,
            port: 3001
        },
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: "eslint-loader"
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        "css-loader"
                    ]
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader"
                        }
                    ]
                }
            ],
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index2.html"
            }),
        ]
    },

]