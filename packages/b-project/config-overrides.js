const {
    override,
    addWebpackPlugin,
    setWebpackPublicPath
} = require("customize-cra");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

// 配置公共路径
const publicPath = 'http://localhost:3001/';


// 模块联邦相关配置
const ModuleFederationConfig = new ModuleFederationPlugin({
    name: 'application_b',
    library: { type: 'var', name: 'application_b' },
    filename: 'remoteEntry.js',
    exposes: {
        './SayHelloFromB': './src/SayHelloFromB',
    },
    remotes: {
        'application_a': 'application_a',
    },
    shared: {
        "react-dom": "^18.2.0",
        react: {
            eager: true,
        },
    },
})

module.exports = {
    webpack: override(
        setWebpackPublicPath(publicPath),
        addWebpackPlugin(ModuleFederationConfig)
    ),
}