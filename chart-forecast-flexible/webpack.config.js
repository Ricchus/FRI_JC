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
            alias: {
                '@shared': path.resolve(__dirname, '../shared'),
            },
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
            'chart-forecast-flexible': './src/index.tsx',
            'chart-forecast-flexible-init': './src/chart-forecast-flexible-init.ts',
            'chart-forecast-flexible-init-1': './src/chart-forecast-flexible-init-1.ts',
            'chart-forecast-flexible-init-2': './src/chart-forecast-flexible-init-2.ts',
        };
    } else {
        config.entry = {
            'chart-forecast-flexible': './src/index.tsx',
        };
    }

    return config;
};


