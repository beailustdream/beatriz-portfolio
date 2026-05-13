import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = process.argv[2] || path.resolve('./dist');
const htmlPath = path.join(distDir, 'index.html');
const html = await readFile(htmlPath, 'utf8');

const scriptTagRegex = /<script\s+type="module"[^>]*src="([^"]+)"[^>]*><\/script>/i;
const match = scriptTagRegex.exec(html);
if (!match) {
  throw new Error('Could not find module script tag with src in dist/index.html');
}

const scriptSrc = match[1];
const jsPath = path.resolve(distDir, scriptSrc);
const js = await readFile(jsPath, 'utf8');

const escapedJs = js.replace(/<\/script>/gi, '<\\/script>');
const inlinedScript = `<script type="module">\n${escapedJs}\n</script>`;
const standaloneHtml = html.replace(match[0], () => inlinedScript);

const outputPath = path.join(distDir, 'standalone.html');
await writeFile(outputPath, standaloneHtml, 'utf8');
console.log(`Standalone HTML written to ${outputPath}`);
