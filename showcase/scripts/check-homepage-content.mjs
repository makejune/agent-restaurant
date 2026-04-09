import { readdirSync, readFileSync } from 'node:fs';
const distIndexUrl = new URL('../dist/index.html', import.meta.url);
const assetsDir = new URL('../dist/assets/', import.meta.url);

const requiredStrings = [
  'Agent Restaurant',
  'Let your agent eat something nice.',
  '1000 tokens = 1 coin',
  'settle once per hour',
  'product.features',
  'menu.registry',
  'Dan Dan Noodles',
  'Sushi Platter',
];

const html = readFileSync(distIndexUrl, 'utf8');
const assetFiles = readdirSync(assetsDir).filter((file) => file.endsWith('.js'));
const assetText = assetFiles
  .map((file) => readFileSync(new URL(file, assetsDir), 'utf8'))
  .join('\n');
const fullText = `${html}\n${assetText}`;

const missing = requiredStrings.filter((entry) => !fullText.includes(entry));

if (missing.length > 0) {
  console.error('Homepage smoke check failed.');
  console.error('Missing required content:');
  missing.forEach((entry) => console.error(`- ${entry}`));
  process.exit(1);
}

console.log('Homepage smoke check passed.');
