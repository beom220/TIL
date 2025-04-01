const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://github.com/beom220/TIL/tree/main';
const FILE_URL = 'https://github.com/beom220/TIL/blob/main';
const ROOT_DIR = './';
const ignoreList = ['.idea', 'node_modules', 'README.md', '.git'];
const priorityList = ['Document']; // 우선 순위 폴더 목록

function generateReadme(dir) {
  let content = `# TIL\n\n`;
  let categories = fs.readdirSync(dir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !ignoreList.includes(dirent.name))
    .map(dirent => dirent.name);

  // 우선순위 폴더를 먼저 정렬
  categories.sort((a, b) => {
    const aIndex = priorityList.indexOf(a);
    const bIndex = priorityList.indexOf(b);
    if (aIndex !== -1 && bIndex === -1) return -1;
    if (aIndex === -1 && bIndex !== -1) return 1;
    return a.localeCompare(b);
  });

  categories.forEach(category => {
    const categoryPath = path.join(dir, category);
    content += `> [${category}](${BASE_URL}/${category})\n`;

    const files = fs.readdirSync(categoryPath)
      .filter(file => file.endsWith('.md') && !ignoreList.includes(file));

    files.forEach(file => {
      const fileUrlPath = `${category}/${file}`;
      const fileName = path.basename(file, '.md');
      content += `> - [${fileName}](${FILE_URL}/${encodeURI(fileUrlPath)})\n`;
    });

    content += `\n`;
  });

  fs.writeFileSync(path.join(dir, 'README.md'), content);
  console.log('README.md 생성 완료!');
}
generateReadme(ROOT_DIR, BASE_URL);
