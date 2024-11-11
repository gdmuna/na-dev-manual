// ESLint 配置 - 代码规范检查
module.exports = {
    extends: [
        'plugin:vue/vue3-recommended', // 强制执行 Vue 社区的主流规则，以确保一致性
        'plugin:prettier/recommended' // 关闭所有不必要或可能与 Prettier 冲突的规则，仅启用检测潜在错误的规则
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    }
};
