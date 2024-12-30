import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'en-US',
    // dest: '/',

    head: [
        ['link', {rel: 'stylesheet', href: '/styles/index.scss'}]
    ],
    title: 'jeffrey_tool',

    description: '我写的第一个工具库',

    theme: defaultTheme({
        logo: 'https://vuejs.press/images/hero.png',
        navbar: [
            {
                text: '指南', prefix: '/document/', children: [
                    {text: '基础配置', link: 'zn', activeMatch: '/zn'},
                    {text: '起步', link: 'start', activeMatch: '/start'},
                ]
            },
            {
                text: '模块', prefix: '/module/',
                children: [
                    {text: '树结构 - Tree', link: 'tree', activeMatch: '/tree'},
                    {text: '数组 - Array', link: 'array', activeMatch: '/array'},
                ]
            },
            {text: '关于', link: '/get-started'},
        ],
        sidebar: {
            '/document/': [
                {
                    text: '指南',
                    children: [
                        {
                            text: '起步',
                            link: 'zn.md',
                        },
                        {
                            text: '开始',
                            link: 'start.md'
                        },
                    ]
                }
            ],
            '/module/': [
                {
                    text: '模块',
                    children: [
                        {
                            text: 'Tree - 树结构',
                            link: 'tree.md',
                        },
                        {
                            text: 'Array - 数组',
                            link: 'array.md',
                        },
                    ]
                }
            ],
        },
    }),

    bundler: viteBundler(),
})
