const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
    return {
        entry: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ],
        output: {
            filename: '[name].[hash].js',
            path: path.join(__dirname, '../build/'),
            publicPath: '/',
        },

        module: {
            loaders: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: true,
                    },
                },
                {
                    test: /\.scss$/,
                    loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                query: {
                                    name:'src/[name].[ext]'
                                }
                            }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                query: {
                                    mozjpeg: {
                                        progressive: true,
                                    },
                                    gifsicle: {
                                        interlaced: true,
                                    },
                                    optipng: {
                                        optimizationLevel: 7,
                                    }
                                }
                            }
                        }]
                },
                {
                    test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                    loader : 'file-loader?name=fonts/[name].[ext]'
                },
            ],
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: Infinity,
                filename: '[name].[hash].js',
            }),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, '../src/index.html'),
                filename: 'index.html',
                inject: 'body',
            }),
        ],
    };
};