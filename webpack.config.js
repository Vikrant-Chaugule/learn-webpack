module.exports = {
    mode: 'none',
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
    },
    module:{
        rules: [{
            test: /\.(png|jpg)$/,
            type: 'asset/resource',
        }]
    }
}