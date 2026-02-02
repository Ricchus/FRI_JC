const path = require('path');

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development';

    const config = {
        mode: isDevelopment ? 'development' : 'production',
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx|js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                ['@babel/preset-react', { runtime: 'automatic' }],
                                '@babel/preset-typescript',
                            ],
                        },
                    },
                },
            ],
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            port: 3000,
            open: true,
        },
    };

    if (isDevelopment) {
        config.entry = {
            'demo': './src/index.tsx',
            'demo-init': './src/demo-init.ts',
        };
    } else {
        config.entry = {
            'demo': './src/index.tsx',
        };
    }

    return config;
};


