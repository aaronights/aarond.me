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

### Testing your changes

The following command will launch a local copy of the website, using hot reloading so that any changes to the files will automagically cause a refresh of the site if it is opened in a browser.

```bash
npm run dev
```

### Visit the Site

To open the test site, click the URL that is output in the terminal - or visit the following URL in a browser:

[http://localhost:4321/](http://localhost:4321/)

## Production

### Push to GitHub

If using VS Code, simply commit your changes and then push them to GitHub. This will trigger a build of the site.

### Check the Live Site

[https://aarond.me/](https://aarond.me/)
