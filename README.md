# Aaron's Blog

## Setup

### Clone the Repository

```bash
git clone https://github.com/aaronights/aarond.me.git
```

### Add dependencies

Install dependencies with npm.

```bash
cd aarond.me
npm i
```

## Editing the Site

### Updating libraries

Occasionally, the libraries used by this site will need to be updated. To do this, run the following command:

```bash
npm update
```

### Add a New Post

To add a new post, create a new markdown file in the `src/content/blog/` directory. The file should be named with the format `title-of-post.md`. The file should have the following format:

```markdown
---
title: "Title of Post"
date: YYYY-MM-DD
---

Content of the post goes here.
```

### Add an Image to a Post

To add an image to a post, place the image in the `src/assets/images/blog/` directory. Then use a relative reference to the image in the post with the following markdown:

```markdown
![Alt Text](../../assets/images/blog/image-name.jpg)
```

### Add or edit a page

Individual pages, like the front page or an About page, are added to the `src/pages` directory. These are usually `.astro` files, and if you want them to show up in your navigation, you will need to add links to them to the `src/components/Header.astro` file.

### Testing your changes

The following command will launch a local copy of the website, using hot reloading so that any changes to the files will automagically cause a refresh of the site if it is opened in a browser.

```bash
npm run dev
```

### Visit the Site

To open the test site, click the URL that is output in the terminal - or visit the following URL in a browser:

[http://localhost:4321/](http://localhost:4321/)

### Testing the Build

This step is not necessary, but to test the building of the site for production locally, run the following command:

```bash
npm run build
```

Files will be output to the `dist/` directory. To serve and view the built site, run the following command:

```bash
npm run preview
```

The website can be opened using the same URL given above for the development server.

## Production

### Push to GitHub

If using VS Code, simply commit your changes and then push them to GitHub. This will trigger a build of the site. Builds will take a few minutes to complete, and can be viewed in the Actions tab of the repository:

[https://github.com/aaronights/aarond.me/actions](https://github.com/aaronights/aarond.me/actions)

### Check the Live Site

Once the build has completed, a refresh of the site will show and changes that were made:

[https://aarond.me/](https://aarond.me/)
