export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"navbar\":[{\"text\":\"指南\",\"prefix\":\"/document/\",\"children\":[{\"text\":\"基础配置\",\"link\":\"zn\",\"activeMatch\":\"/zn\"},{\"text\":\"起步\",\"link\":\"start\",\"activeMatch\":\"/start\"}]},{\"text\":\"模块\",\"prefix\":\"/module/\",\"children\":[{\"text\":\"树结构 - Tree\",\"link\":\"tree\",\"activeMatch\":\"/tree\"},{\"text\":\"数组 - Array\",\"link\":\"array\",\"activeMatch\":\"/array\"}]},{\"text\":\"关于\",\"link\":\"/get-started\"}],\"sidebar\":{\"/document/\":[{\"text\":\"指南\",\"children\":[{\"text\":\"起步\",\"link\":\"zn.md\"},{\"text\":\"开始\",\"link\":\"start.md\"}]}],\"/module/\":[{\"text\":\"模块\",\"children\":[{\"text\":\"Tree - 树结构\",\"link\":\"tree.md\"},{\"text\":\"Array - 数组\",\"link\":\"array.md\"}]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
