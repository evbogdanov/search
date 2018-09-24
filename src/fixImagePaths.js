// The command `npm run build` sets absolute paths for images in .css files
// (e.g. `/img/search.svg`). That's not what GitHub Pages expect. Let's fix it!

const fs = require('fs');

const cssDir = './build/static/css/';

const fixImagePath = (filePath) => {
  const fileContent = fs.readFileSync(filePath);
  const regex = new RegExp('/img/', 'g');
  const fixedContent = fileContent.toString().replace(regex, '../../img/');
  fs.writeFileSync(filePath, fixedContent);
};

const main = () => {
  const files = fs.readdirSync(cssDir);
  for (const file of files) {
    if (file.indexOf('.css') === -1) {
      continue;
    }
    fixImagePath(`${cssDir}${file}`);
  }
};

main();
