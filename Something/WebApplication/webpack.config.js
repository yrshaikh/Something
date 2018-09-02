const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin')
module.exports = {
    mode: 'development',
    entry: './wwwroot/js/index.tsx',
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: 'bundle.js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                options: {
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory({
                                style: true
                            })
                        ]
                    })
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default,
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    {
                        loader: 'less-loader', // compiles Less to CSS // for stupid ant design
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            }
        ]
    }
};