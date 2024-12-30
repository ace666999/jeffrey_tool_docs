import comp from "/Users/fujuejie/Desktop/MY_ITEM/jeffrey_tool_docs/docs/.vuepress/.temp/pages/test/test3.html.vue"
const data = JSON.parse("{\"path\":\"/test/test3.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1735531468000,\"contributors\":[{\"name\":\"Jeffrey - 付\",\"username\":\"Jeffrey - 付\",\"email\":\"2025265@qq.com\",\"commits\":1}]},\"filePathRelative\":\"test/test3.md\"}")
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
