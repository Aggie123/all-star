const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 单独打包生成css
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

function resolve (relatedPath) {
    return path.join(__dirname, relatedPath);
}
module.exports = {
    devServer: {
        hot: true, // 在devServer中增加hot字段
        // contentBase: path.join(__dirname, '/src'),
        // index: 'index.html',
        // publicPath: '/',
        // historyApiFallback: true,
        // historyApiFallback: {
        //   index: 'src/index.html'
        // },
        host: '127.0.0.1',
        port: 7001,
        stats: {
            colors: true
        },
        proxy: {
            '/api/*': {
                target: 'http://127.0.0.1:7000/',
                changeOrigin: true
            }
        }
    },
    entry: ['./src/index.js'],
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
    },
    output: {
        path: resolve('./dist'),
        filename: '[name].js'
    },
    // resolveLoader: {
    //   moduleExtensions: ['-loader']
    // },
    module: {
        rules: [ // 配置加载器
            {
                test: /\.js$/, // 配置要处理的文件格式，一般使用正则表达式匹配
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // 使用的加载器名称
                    options: {
                        // presets: ['@babel/preset-env', '@babel/preset-react']
                        babelrc: false,
                        presets: [
                            // 添加 preset-react
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env'), { modules: false }]
                        ]
                    }
                }
            },
            // {
            //   test: /\.css$/,
            //   use: [
            //     {
            //       loader: 'style-loader',
            //     },
            //     'css-loader'
            //   ]
            // },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            importLoaders: 2 // hot Module Reload，热更新
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: 'url-loader',
                options: {
                    limit: 10000 // 1w字节以下大小的图片会自动转成base64
                }
            }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.min.css',
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: '/src/index.html', // 指定模板路径
            filename: 'index.html',
            inject: true
        })
    ]
    // externals: {
    //   "bizcharts": "BizCharts",
    //   // 以下配置为BizCharts依赖的第三方库，需要同时提供
    //   "react": "React",
    //   "react-dom": "ReactDOM",
    // },

};
