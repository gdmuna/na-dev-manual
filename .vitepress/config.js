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
            { text: '序章', link: '/prologue/before-everything-begins/why-this-manual' },
            { text: 'Web开发', link: '/web/intro/what-is-it' }
        ],
        sidebar: {
            '/prologue/': [
                {
                    text: '谒见厅',
                    items: [
                        { text: '为什么要写这本手册', link: '/prologue/before-everything-begins/why-this-manual' },
                        { text: '电脑系统环境验收清单', link: '/prologue/before-everything-begins/pc-system-env-checklist' },
                        { text: '提问的艺术', link: '/prologue/before-everything-begins/how-to-ask' }
                    ]
                },
                {
                    text: '电脑使用的基本知识',
                    items: [
                        { text: '电脑硬件组成', link: '/prologue/basic-knowledge/pc-hardware-composition' },
                        { text: '操作系统概述', link: '/prologue/basic-knowledge/pc-os-overview' },
                        { text: '电脑桌面的常用功能区域', link: '/prologue/basic-knowledge/pc-desktop-common-area' },
                        { text: '图形界面和命令行', link: '/prologue/basic-knowledge/gui-and-cli' },
                        { text: '文件和目录', link: '/prologue/basic-knowledge/files-and-directories' },
                        { text: '系统环境变量', link: '/prologue/basic-knowledge/system-environment-variables' }
                    ]
                },
                {
                    text: '电脑系统的安装事项',
                    items: [
                        { text: '如何下载系统镜像', link: '/prologue/install-os/how-to-download-system-image' },
                        { text: '使用 Ventoy 制作系统启动盘', link: '/prologue/install-os/use-ventoy-make-bootable-usb-device' },
                        { text: '如何对磁盘进行分区', link: '/prologue/install-os/disk-partition' }
                    ]
                },
                {
                    text: '常用软件的安装方法',
                    items: [
                        { text: 'WinRAR', link: '/prologue/install/winrar' },
                        { text: 'Motrix', link: '/prologue/install/motrix' },
                        { text: 'Office', link: '/prologue/install/office' }
                    ]
                }
            ],
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
