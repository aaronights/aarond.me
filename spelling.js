import {existsSync, readdirSync, readFileSync} from 'fs';
import MarkdownToText from "markdown-to-text";
const removeMarkdown = MarkdownToText.default;
import {unified} from 'unified';
import retextEnglish from 'retext-english';
// import retextEquality from 'retext-equality';
import retextIndefiniteArticle from 'retext-indefinite-article';
import retextContractions from 'retext-contractions';
import retextDiacritics from 'retext-diacritics';
import retextStringify from 'retext-stringify';
// import retextReadability from 'retext-readability';
import retextRepeatedWords from 'retext-repeated-words';
import retextSentenceSpacing from 'retext-sentence-spacing';
import retextRedundantAcronyms from 'retext-redundant-acronyms';
import retextSpell from 'retext-spell';
// import retextOveruse from 'retext-overuse';
// import retextUsage from 'retext-usage';
import dictionary from 'dictionary-en-gb';
import {reporter} from 'vfile-reporter';

const ignore = readFileSync('./spelling-ignore.txt', 'utf-8').split('\n').filter(Boolean);

/**
 * Get issues with an article
 * @param {string} content
 * @param {string} id
 * @returns {string} Issues
*/
async function getIssues(content) {
	const checks = await unified()
		.use(retextEnglish)
		.use(retextSpell, {normalizeApostrophes: true, dictionary, ignore})
		.use(retextIndefiniteArticle)
		// .use(retextEquality)
		.use(retextRepeatedWords)
		.use(retextRedundantAcronyms)
		// .use(retextOveruse)
		.use(retextContractions, {straight: true})
		.use(retextDiacritics)
		.use(retextSentenceSpacing)
		// .use(retextReadability)
		// .use(retextUsage)
		.use(retextStringify)
		.process(removeMarkdown(content));
	const issues = reporter(checks);
	if (issues !== 'no issues found') {
		console.error(issues);
	}
}

async function checkFile(path) {
	const content = readFileSync(path, 'utf-8');
	console.log('\nChecking:', path, '\n');
	await getIssues(content);
}

const folder = './src/content/blog/';

// Check if there's a command line argument for a specific file

if (process.argv.length > 2) {
	let file = process.argv[2].trim();
	if (!file.endsWith('.md')) file += '.md';
	const path = folder + file;
	if (existsSync(path)) await checkFile(path);
	else console.error('File not found:', path);
} else {
	for (const file of readdirSync(folder)) {
		const path = folder + file;
		await checkFile(path);
	}
}
