module.exports = {
    version: '>=0.7.7',
    type: 'library',
    lint: true,
    webpack: {
        output: {
            publicPath: '/navbars/',
        },
    },
    webpackDevServer: {
        historyApiFallback: {
            index: '/navbars/',
        },
    },
    docs: {
        title: 'Navbars 组件库',
        logo: '导航条',
        mode: 'history',
        base: '/navbars/',
    },
};
