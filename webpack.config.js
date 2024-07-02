const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: false,
    mode: "development",
    entry: "./src/index.tsx",
    target: "web",
    devServer: {
        open: true,
        port: 8000,
        historyApiFallback: true,
        allowedHosts: "all",
        hot: true,

    },
    resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-modules-typescript-loader", "css-loader"],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", {"runtime": "automatic"}],
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
            inject: true,
        }),
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "main.[contenthash].js",
        clean: true,
        publicPath: "auto",
    },
};