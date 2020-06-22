// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const SRC_PATH = path.join(__dirname, '../src');

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                include: [
                    SRC_PATH
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                include: SRC_PATH
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                   
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
              }
        ]
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        enforceExtension: false
    }
};
