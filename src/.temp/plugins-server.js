import plugin_gridsome_plugin_flexsearch_6 from "C:\\Users\\aaroN\\aarond.me\\node_modules\\gridsome-plugin-flexsearch\\gridsome.client.js"
import plugin_gridsome_plugin_pwa_9 from "C:\\Users\\aaroN\\aarond.me\\node_modules\\gridsome-plugin-pwa\\gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_flexsearch_6,
    options: {"pathPrefix":"","siteUrl":"https://aarond.me","collections":[{"typeName":"Post","indexName":"Post","fields":["title","excerpt"]}],"searchFields":["title","excerpt"],"chunk":false,"compress":false,"autoFetch":true,"autoSetup":true,"flexsearch":{"profile":"default"}}
  },
  {
    run: plugin_gridsome_plugin_pwa_9,
    options: {"title":"aarond.me","serviceWorkerPath":"\\service-worker.js","manifestPath":"\\manifest.json","statusBarStyle":"default","themeColor":"#e32929","icon":"src/favicon.png","msTileColor":"#666600"}
  }
]
