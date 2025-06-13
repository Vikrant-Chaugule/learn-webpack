module.exports = {
    mode: 'none',
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        // publicPath: 'auto' 
        /* by default it's auto which will be dist folder to serve assets, but can be set explicitly
        this is useful when using a CDN or serving files from a different path */
        // publicPath: 'https://cdn.example.com/assets/' // Example CDN path
        
    },
    module:{
        rules: [{
            test: /\.(png|jpg)$/,
            type: 'asset/resource', // webpack generates a separate file for each asset


            /*
                type: 'asset/inline' // webpack inlines the asset as a base64 string in the bundle
                while ultimately increases the bundle size, it can be useful for small assets
            
            */

            /*
                type:'asset' // webpack decides whether to inline or emit the asset based on its size
                by default, assets smaller than 8kb are inlined, larger ones are emitted as separate files

                parser:{
                    dataUrlCondition: {
                        maxSize: 2 * 1024 // 2kilobytes
                        // assets smaller than 2kb will be inlined, larger ones will be emitted as separate files
                    }
                }
            */

            /*
                type: 'asset/source' // webpack emits the asset as a string in the bundle
                this is useful for text files like JSON or CSV, but not for binary files like images
            */
        }]
    }
}