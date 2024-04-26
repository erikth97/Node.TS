

const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf8')

const newData = data.replace(/React/ig, 'Svelte');

fs.writeFileSync('README-svelt.md', newData);