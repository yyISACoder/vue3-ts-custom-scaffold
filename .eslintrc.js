module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    "parser": 'vue-eslint-parser', // 加上这个避免在.vue文件中出现"Parsing error: '>' expected"的问题
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module",
        "parser": "@typescript-eslint/parser"
    },
    "plugins": [
        "vue",
        '@typescript-eslint'
    ],
    "rules": {}
};
