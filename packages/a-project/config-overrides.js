const {
    override,
    addWebpackPlugin,
    setWebpackPublicPath
} = require("customize-cra");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

// 配置公共路径
const publicPath = 'http://localhost:3000/';


// 模块联邦相关配置
const ModuleFederationConfig = new ModuleFederationPlugin({
    name: 'application_a',
    library: { type: 'var', name: 'application_a' },
    filename: 'remoteEntry.js',
    exposes: {
        './SayHelloFromA': './src/SayHelloFromA',
    },
    remotes: {
        'application_b': 'application_b',
    },
    shared: {
        "react-dom": "^18.2.0",
        react: {
            eager: true,
        },
    },
})

module.exports = override(
    setWebpackPublicPath(publicPath),
    addWebpackPlugin(ModuleFederationConfig)
)