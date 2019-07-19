

var HtmlWebpackPlugin = require('html-webpack-plugin')
var extractTextWebpackPlugin=require('extract-text-webpack-plugin')
var webpack=require('webpack')
module.exports = {
    entry:{
         app:'./src/app.js',
         index:'./src/index.js',
         bootstrap:'bootstrap-loader'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.min.js'
    },
    devServer:{
        contentBase:__dirname+'/dist',
        compress:true,
        port:9000
    },
    module:{
        rules:[
            {
                test:/\.css$/,

                //use:['style-loader','css-loader']
                use:extractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader']
                })
                
            },
            {
                test:/\.(ttf|eot)$/,
                use:{
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]'
                    }
                }
            },
            {
                test:/\.(woff2?|svg)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:10000,
                        name:'[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'My demo App',
            filename:'home.html',
            template:__dirname + '/src/index.html',
            chunks:['app','bootstrap'],
            hash:true,
            minify:{
                collapseBooleanAttributes:true,
                collapseWhitespace:true
            }
        }),
        new HtmlWebpackPlugin({
            title:'My about page',
            filename:'about.html',
            template:__dirname + '/src/about.html',
            excludeChunks:['app'],
            minify:{
                collapseBooleanAttributes:true,
                collapseWhitespace:true
            }
        }),
        new extractTextWebpackPlugin({
            filename:'mystyles.css'
        }),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery'
        })
    ]
}