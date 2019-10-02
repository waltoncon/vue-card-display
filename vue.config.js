module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-card-display/'
        : '/',
    configureWebpack: config => {
        config.module.rules.find(rule =>
            rule.test.test('.svg')
        ).exclude = /\.svg$/;

        config.module.rules.push({
            test: /\.svg$/,
            use: [{loader: 'html-loader'}]
        })
    }
}
