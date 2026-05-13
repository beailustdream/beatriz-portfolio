import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const jsPath = path.resolve('./dist/assets/index-C5TyL-Y8.js');
const htmlPath = path.resolve('./dist/index.html');

const js = await readFile(jsPath, 'utf8');
const html = await readFile(htmlPath, 'utf8');

const idx = js.indexOf('replace(se,"$&/")');
console.log('orig idx=', idx);
console.log(js.slice(idx-40, idx+160));

const escaped = js.replace(/<\/script>/gi, '<\\/script>');
const idx2 = escaped.indexOf('replace(se,"$&/")');
console.log('escaped idx=', idx2);
console.log(escaped.slice(idx2-40, idx2+160));

const scriptTagRegex = /<script\s+type="module"[^>]*src="([^"]+)"[^>]*><\/script>/i;
const match = scriptTagRegex.exec(html);
console.log('match0=', match && match[0]);
console.log('src=', match && match[1]);

const standaloneHtml = html.replace(match[0], `<script type="module">\n${escaped}\n</script>`);
const idx3 = standaloneHtml.indexOf('replace(se,"$&/")');
console.log('standalone idx=', idx3);
console.log(standaloneHtml.slice(idx3-40, idx3+160));

await writeFile('dist/debug-standalone.html', standaloneHtml, 'utf8');
console.log('wrote dist/debug-standalone.html');
