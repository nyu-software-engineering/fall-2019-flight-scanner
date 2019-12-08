const WebpackDevServer = require("webpack-dev-server")
const webpack = require("webpack")
const config = require("./webpack-config.js")

const compiler = webpack(config)

const server1 = new WebpackDevServer(compiler.compilers[0], {
    contentBase: __dirname,
    hot: true,
    historyApiFallback: true,
    compress: true,
})

const server2 = new WebpackDevServer(compiler.compilers[1], {
    contentBase: __dirname,
    hot: true,
    historyApiFallback: true,
    compress: true,
})

server1.listen(3000, "localhost", function() {})
server2.listen(3001, "localhost", function() {})