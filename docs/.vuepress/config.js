import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'en-US',
    // dest: '/',

    head: [
        ['link', { rel: 'stylesheet', href: '/styles/index.scss' }]
    ],
    title: 'jeffrey_tool',

    description: 'My first VuePress Site',

    theme: defaultTheme({
        logo: 'https://vuejs.press/images/hero.png',
        navbar: [
            {
                text: '指南', prefix: '/document/', children: [
                    {text: '基础配置', link: 'zn', activeMatch: '/zn'},
                    {text: '起步', link: 'start', activeMatch: '/start'},
                ]
            },
            {text: '测试', link: '/test/test1'},
            {text: '关于', link: '/get-started'},
        ],
        sidebar: {
            '/document/': [
                {
                    text: '指南',
                    children: [
                        {
                            text: '基础配置',
                            link: 'zn.md',
                        },
                        {
                            text: '起步',
                            link: 'start.md'
                        },
                    ]
                }
            ],
        },
    }),

    bundler: viteBundler(),
})
