module.exports={
    publicPath: process.env.NODE_ENV === 'production'
            ? '/work_copy/'
            : '/'
//     devServer:{
//         host:'localhost',
//         port:8081,
//         proxy:{
//             '/':{
//                 target:'http://official-issue.cker2123.com',
//                 // target:'http://introduce.kk-cai.com/api',
//                 changeOrigin:true,
//                 pathRewrite:{
//                    '^/':""
//                 }
//             }
//         }
//     },
}