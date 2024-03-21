const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env)=>{
    return {
        mode:env.mode || 'development',
        entry:path.resolve(__dirname,'src','main.js'),
        output: {
            path: path.resolve(__dirname,'build'),
            filename: '[name].[contenthash].js',
            clean:true,
        },
        plugins:[
            new HtmlWebpackPlugin({template:path.resolve(__dirname,'public','index.html')})
        ],
        module: {
            rules: [
              {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
            ],
        },
        devServer: {           
            port: env.port || 3000,
            open:true
        },
        
    }
}