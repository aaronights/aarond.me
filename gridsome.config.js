module.exports = {
  siteName: "aarond.me",
  siteUrl: "https://aarond.me",
  siteDescription: "The blog of Aaron Davies",
  outDir: "docs",
  //icon: "src/favicon.ico",
  transformers: {
    remark: {
      allowed_elements: ['v-carousel-item', 'v-carousel', 'g-link'],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link'
    }
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/pages/blog/*.md",
        typeName: "Post",
        route: '/blog/:year/:month/:day/:slug',
      }
    }
  ]
};