import { readFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('./dist');
const htmlPath = path.join(distDir, 'index.html');
const html = await readFile(htmlPath, 'utf8');
const scriptTagRegex = /<script\s+type="module"[^>]*src="([^"]+)"[^>]*><\/script>/i;
const match = scriptTagRegex.exec(html);
if (!match) throw new Error('No matching script tag');
const jsPath = path.resolve(distDir, match[1]);
const js = await readFile(jsPath, 'utf8');
const escapedJs = js.replace(/<\/script>/gi, '<\\/script>');
console.log('matched script src:', match[1]);
console.log('script tag match[0] length:', match[0].length);
console.log('js contains </script>:', js.includes('</script>'));
console.log('escapedJs contains </script>:', escapedJs.includes('</script>'));
console.log('escapedJs contains <\\/script>:', escapedJs.includes('<\\/script>'));
const originalIdx = js.indexOf('replace(se,"$&/")');
const escapedIdx = escapedJs.indexOf('replace(se,"$&/")');
console.log('original bundle index:', originalIdx);
console.log('escaped bundle index:', escapedIdx);
if (originalIdx !== -1) {
  console.log('original bundle snippet:', js.slice(originalIdx-40, originalIdx+80));
}
if (escapedIdx !== -1) {
  console.log('escaped bundle snippet:', escapedJs.slice(escapedIdx-40, escapedIdx+80));
}

const output = html.replace(match[0], `<script type="module">\n${escapedJs}\n</script>`);
const idx = output.indexOf('replace(se,"$&/")');
console.log('standalone index of original snippet:', idx);
const badStr = 'replace(se,"<script type="module" crossorigin src="./assets/index-C5TyL-Y8.js"></script>/")';
const badIdx = output.indexOf(badStr);
console.log('standalone index of bad snippet:', badIdx);
if (badIdx !== -1) {
  console.log('bad slice:');
  const slice = output.slice(badIdx-80, badIdx+badStr.length+80);
  console.log(slice);
  console.log('bad slice as JSON:', JSON.stringify(slice));
  console.log('char codes:', Array.from(slice.slice(0, 160)).map(c => c.charCodeAt(0)).join(','));
} else {
  console.log('bad snippet not found in output');
}
