const c1 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\Users\\aaroN\\aarond.me\\src\\templates\\Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-list-vue" */ "C:\\Users\\aaroN\\aarond.me\\src\\pages\\list.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "C:\\Users\\aaroN\\aarond.me\\src\\pages\\blog.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\aaroN\\aarond.me\\node_modules\\gridsome\\app\\pages\\404.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\aaroN\\aarond.me\\src\\pages\\index.vue")

export default [
  {
    path: "/blog/:year/:month/:day/:title/",
    component: c1
  },
  {
    path: "/list/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
