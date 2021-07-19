const Purgecss = require('purgecss');
const fs = require('fs');

const purgecss = new Purgecss({
    content: ['build/static/js/*.js'],
    css: ['build/static/css/*.css']
})
const purgecssResult = purgecss.purge();

purgecssResult.forEach((result) => {
    const file = result.file;
    const css = result.css;

    fs.stat(file, (error, originalFileStats) => {
        console.log(originalFileStats);
        fs.writeFileSync(file, css);
        const newFileStats = fs.statSync(file);
        console.log('\x1b[32m', `Purge CSS saved ${Math.round((originalFileStats.size - newFileStats.size) / 1000)}kb on ${file}`);
    });
});