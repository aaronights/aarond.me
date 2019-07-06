# Aaron's Blog

## Setup

### Install [Gridsome](https://gridsome.org/)

These commands will install the Gridsome CLI, and install the Gridsome files to the blog folder.

```bash
npm install --global @gridsome/cli
gridsome create aarond.me
```

### Add dependencies

There are a few extra NPM packages needed for Gridsome, and for the conversion of the blog's original HTML files to Markdown.

```bash
cd aarond.me
npm i --dev @gridsome/source-filesystem @gridsome/transformer-remark webpack-node-externals cheerio localtunnel turndown vuetify
```

### Generate MD files from HTML

This script will convert all the HTML files scraped from the old blog to Markdown files, along with Front Matter metadata.

```bash
node ./src/HTMLToMD.js
```

## Development

### Run the Site

This will launch a local copy of the website, using hot reloading so that any changes to the files will automagically cause a refresh of the site if it is opened in a browser.

```bash
npm run dev
```

### Visit the Site

[http://localhost:8080/](http://localhost:8080/)

### Explore GraphQL Data

Like Gatsby, Gridsome uses GraphQL in Development to expose page data to the frontend.

[http://localhost:8080/___explore](http://localhost:8080/___explore)

## Production

### Build Static Files

This command will create a set of static website files in the "dist" directory.

```bash
npm run build
```

### Push to GitHub

Once the new files are pushed to the website with the command below, the new site will be live.

```bash
git push
```

### Check the Live Site

[https://aarond.me/](https://aarond.me/)

## Helpful Pages

- [https://alligator.io/vuejs/gridsome-blog/](https://alligator.io/vuejs/gridsome-blog/)
- [https://alligator.io/vuejs/gridsome-list-posts/](https://alligator.io/vuejs/gridsome-list-posts/)
- [https://lobotuerto.com/blog/quickstart-guide-for-a-new-gridsome-project/](https://lobotuerto.com/blog/quickstart-guide-for-a-new-gridsome-project/)

## Hacks

In node_modules/@gridsome/transformer-remark/index.js, after the following code:

```js
  extendNodeType () {
    return {
      content: {
        type: GraphQLString,
        resolve: node => this._nodeToHTML(node)
      },
```

Add this:

```js
      excerpt: {
        type: GraphQLString,
        resolve: node => {
          let pos = (node.content.indexOf('<!-- more -->') + 1 || node.content.indexOf('\n\n') + 1 || node.content.indexOf('\r\n\r\n') + 1);
          return this._nodeToHTML({...node, content: node.content.slice(0, pos).replace(/!\[(.*?)\]\((.*?)\)/g, '')});
        }
      },
      image: {
        type: GraphQLString,
        resolve: node => {
          let image = node.content.match(/!\[(?:.*?)\]\((.*?)\)/);
          return (image ? image[1] : null);
        }
      },
```