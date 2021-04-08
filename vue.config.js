const path = require('path')
module.exports = {
    //设置标签栏logo
    pwa: {
        iconPaths: {
            favicon32: 'zhb_logo.png',
            favicon16: 'zhb_logo.png',
            appleTouchIcon: 'zhb_logo.png',
            maskIcon: 'zhb_logo.png',
            msTileImage: 'zhb_logo.png'
        }
    },
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
}
