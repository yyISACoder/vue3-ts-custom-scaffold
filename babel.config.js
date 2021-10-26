module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-typescript', // 引用Typescript插件
      {
        allExtensions: true, // 支持所有文件扩展名，否则在vue文件中使用ts会报错
      }
    ]
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3 
      }
    ]
  ]
}