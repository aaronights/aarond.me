const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');

//var td = new require('turndown')({headingStyle: 'atx'});
var td = new require('turndown')({
	headingStyle: 'atx',
	blankReplacement(content, node) {
		const types = ['SCRIPT', 'IFRAME'];
		if (types.indexOf(node.nodeName) !== -1) {
			return `\n\n${node.outerHTML}\n\n`;
		} else {
			const output = [];
			node.childNodes.forEach((child) => {
				if (types.indexOf(child.nodeName) !== -1) {
					output.push(child.outerHTML);
				}
			});
			if (output.length) {
				return '\n\n' + output.join('\n\n') + '\n\n';
			} else {
				return node.isBlock ? '\n\n' : '';
			}
		}
	},
});
//td.keep('iframe');
/*td.addRule('keep', {
  filter: ['iframe'],
  replacement: function (content, node) {
    return node.outerHTML;
  }
});*/
/*td.keep([{filter: function (node, options) {
  return (
    options.class === 'video-embed-youtube' &&
    node.nodeName === 'DIV'
  );
}}]);*/

//td.keep(['div']);

//<div class="aligncenter video-embed-youtube"></div>

function frontMatter(meta) {
	return `---
title: ${meta.title}
author: ${meta.author}
date: ${meta.date}${meta.tagstring || ''}
---

`;
	// path: ${meta.path}
	// slug: ${meta.basename}
}

function getPage(inputname) {
	const $ = cheerio.load(fs.readFileSync(inputname));
	var meta = {
		title:
			'"' +
			$('h2.titlelink')
				.html()
				.replace('&apos;', '\'')
				.replace(/\.$/, '') +
			'"',
		date: $("meta[name='live_date']").attr('content'),
		author: 'Aaron Davies',
		basename: $("meta[property='og:url']")
			.attr('content')
			.split('.')[0],
	};
	meta.path = '/blog/' + meta.date + '-' + meta.basename;
	//meta.path = '/blog/' + meta.date.split("-").join("/") + '/' + meta.basename;
	//meta.filename = meta.date + "-" + meta.basename + ".md";
	meta.filename = meta.basename + '.md';
	meta.tags = [];
	$('.articletags a').each(function() {
		var tag = $(this).text();
		if (tag != 'Uncategorized' && tag != 'uncategorized') {
			meta.tags.push(
				tag
					.split(' ')
					.join('-')
					.toLowerCase(),
			);
		}
	});
	if (meta.tags.length > 0) {
		meta.tagstring = '\ntags:';
		meta.tags.forEach((tag) => {
			meta.tagstring += `\n  - ${tag}`;
		});
	}
	var page = td
		.turndown($('.entry').html())
		.trim()
		.replace(/  +/g, ' ');
	['Category: ', 'Tags: '].forEach((line) => {
		if (
			page
				.split(/\r?\n/)
				.pop()
				.startsWith(line)
		) {
			page = page.substring(0, page.lastIndexOf('\n')).trim();
		}
	});
	const paths = [
		/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/oyster\.ignimgs\.com\/wordpress\/write\.ign\.com\/65205\/[0-9]{4}\/[0-9]{2}\//g,
		/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/www\.ign\.com\/blogs\/aaronights\/[0-9]{4}\/[0-9]{2}\//g,
		/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/2\.bp\.blogspot\.com\/-cxaT-LQPxsk\/T4q1SVXc79I\/AAAAAAAAALo\/2Rxsrqydm38\/s1600\//g,
	];
	paths.forEach((path) => {
		page = page.replace(path, '/media/images/blog/');
	});

	const images = {
		'.jpg)\n_$1_\n': /\.jpg\)\n\n(.*?)\n/g,
		'.png)\n_$1_\n': /\.png\)\n\n(.*?)\n/g,
		'.gif)\n_$1_\n': /\.gif\)\n\n(.*?)\n/g,
	};
	for (const image in images) {
		page = page.replace(images[image], image);
	}

	page = page
		.split('<iframe')
		.join('<div class="youtube">\n	<iframe')
		.split('</iframe>')
		.join('</iframe>\n</div>');

	page = page.replace(/\[\!\[(.*?)\]\(\/media\/images\/blog\/(.*?)\)\]\(/g, '[![$1](../../media/images/blog/$2)](');
	page = page.replace(/\(\/media\/images\/blog\/(.*?)\)/g, '(/assets/static/src/media/images/blog/$1)');
	page = page.replace(/\(\.\.\/\.\.\/media\/images\/blog\/(.*?)-[0-9]{2,3}x[0-9]{2,3}\.(.*?)\)/g, '(../../media/images/blog/$1.$2)');

	page = page.replace(
		'franchise got here. [![](../../media/images/blog/Rangers5.jpg)](/assets/static/src/media/images/blog/Rangers5.jpg)Power Rangers',
		'franchise got here.\n\n[![](../../media/images/blog/Rangers5.jpg)](/assets/static/src/media/images/blog/Rangers5.jpg)\n\nPower Rangers',
	);
	page = page.replace('GameMasters2.jpg) The first', 'GameMasters2.jpg)\n\nThe first');
	page = page.replace('MattHazard.jpg)The pitch', 'MattHazard.jpg)\n\nThe pitch');

	captions = {
		')\n\nWhen it comes to constructing hardware $1\n': /\)\n_When it comes to constructing hardware (.*?)_\n/g,
		')\n\nAs some IGN readers $1\n': /\)\n_As some IGN readers (.*?)_\n/g,
	};
	for (const caption in captions) {
		page = page.replace(captions[caption], caption);
	}

	page = page.replace(/\)\n_As some IGN readers (.*?)_\n/g, ')\n\nAs some IGN readers $1\n');

	page = page.replace(/\[\!\[\](.*?)\n_(.*?)_\n/g, '[![$2]$1\n_$2_\n');

	const words = require('./typos.json');
	for (var word in words) {
		//page = page.replace(word, words[word]);
		page = page.split(word).join(words[word]);
	}
	return {
		meta: meta,
		page: page,
	};
}

const directoryPath = path.join(__dirname, 'HTML');
fs.readdir(directoryPath, function(err, files) {
	files.forEach(function(file) {
		var page = getPage(path.join(__dirname, 'HTML', file));
		fs.writeFile(path.join(__dirname, 'pages', 'blog', page.meta.filename), frontMatter(page.meta) + page.page + '\n', function() {});
	});
});
