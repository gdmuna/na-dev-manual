import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: '小白开发入门手册',
    description: 'A Site of How to Use Campus Web in GDMU.',
    head: [['link', { rel: 'icon', href: '/logo.svg' }]],
    base: '/',
    cleanUrls: true,
    ignoreDeadLinks: true,
    appearance: true,
    lastUpdated: true,
    vite: {
        server: {
            host: '0.0.0.0',
            port: 8081,
            open: true
        }
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.svg',
        nav: [
            { text: '主页', link: '/' },
            { text: 'Web开发', link: '/web/intro/what-is-it' }
        ],
        sidebar: {
            '/web/': [
                {
                    text: '简介',
                    items: [
                        { text: '什么是 Web 开发', link: '/web/intro/what-is-it' },
                        { text: '技术路线', link: '/web/intro/roadmap' }
                    ]
                },
                {
                    text: '前置准备',
                    items: [{ text: '配置 Node.js 多环境管理工具', link: '/web/prepare/multiple-env' }]
                }
            ]
        },
        aside: true,
        outline: {
            level: 'deep',
            label: '目录'
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/gdmuna/na-dev-manual' }],
        editLink: {
            pattern: 'https://github.com/gdmuna/na-dev-manual'
        },
        search: {
            provider: 'local'
        },
        externalLinkIcon: true
    },
    sitemap: {
        hostname: 'https://dev-manual.gdmuna.com/'
    }
});
