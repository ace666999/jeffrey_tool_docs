export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/fujuejie/Desktop/MY_ITEM/jeffrey_tool_docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/fujuejie/Desktop/MY_ITEM/jeffrey_tool_docs/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/document/start.html", { loader: () => import(/* webpackChunkName: "document_start.html" */"/Users/fujuejie/Desktop/MY_ITEM/jeffrey_tool_docs/docs/.vuepress/.temp/pages/document/start.html.js"), meta: {"title":"start标题"} }],
  ["/document/zn.html", { loader: () => import(/* webpackChunkName: "document_zn.html" */"/Users/fujuejie/Desktop/MY_ITEM/jeffrey_tool_docs/docs/.vuepress/.temp/pages/document/zn.html.js"), meta: {"title":"index标题"} }],
  ["/test/test1.html", { loader: () => import(/* webpackChunkName: "test_test1.html" */"/Users/fujuejie/Desktop/MY_ITEM/jeffrey_tool_docs/docs/.vuepress/.temp/pages/test/test1.html.js"), meta: {"title":""} }],
  ["/test/test2.html", { loader: () => import(/* webpackChunkName: "test_test2.html" */"/Users/fujuejie/Desktop/MY_ITEM/jeffrey_tool_docs/docs/.vuepress/.temp/pages/test/test2.html.js"), meta: {"title":""} }],
  ["/test/test3.html", { loader: () => import(/* webpackChunkName: "test_test3.html" */"/Users/fujuejie/Desktop/MY_ITEM/jeffrey_tool_docs/docs/.vuepress/.temp/pages/test/test3.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/fujuejie/Desktop/MY_ITEM/jeffrey_tool_docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
