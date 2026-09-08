const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\Alejandro\\Desktop\\WebDeProgramadores\\index.html', 'utf8');
const match = html.match(/<script[^>]*>([\s\S]*?)<\/script>/);
if (!match) {
    console.log('No script tag found');
    process.exit(1);
}
const js = match[1].replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g, '');
try {
    new Function(js);
    console.log('JS syntax OK');
} catch (e) {
    console.log('JS syntax error:', e.message);
}
