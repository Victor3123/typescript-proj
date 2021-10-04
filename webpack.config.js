const path = require('path');

module.exports = {
    target: 'web',
    // mode: 'development',
    mode: 'production',
    entry: './src/index.ts',
    // entry: './src/index.js',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                // include: [path.resolve(__dirname, 'src')],
            },
            // {
            //     test: /\.js$/,
            //     exclude: /(node_modules)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    }
}