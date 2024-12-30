import comp from "/Users/fujuejie/Desktop/MY_ITEM/jeffrey_tool_docs/docs/.vuepress/.temp/pages/document/start.html.vue"
const data = JSON.parse("{\"path\":\"/document/start.html\",\"title\":\"start标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"start标题\",\"description\":\"start描述\"},\"headers\":[],\"git\":{\"updatedTime\":1735531468000,\"contributors\":[{\"name\":\"Jeffrey - 付\",\"username\":\"Jeffrey - 付\",\"email\":\"2025265@qq.com\",\"commits\":1}]},\"filePathRelative\":\"document/start.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
