const fs = require('fs');

const files = ['index.html', 'courses.html', 'about.html', 'contact.html'];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Remove from desktop header nav
    content = content.replace(/<a href=\"#\" class=\"(.*?)\">Faculty<\/a>\s*/g, '');
    content = content.replace(/<a href=\"#\" class=\"(.*?)\">Gallery<\/a>\s*/g, '');
    content = content.replace(/<a href=\"#\" class=\"(.*?)\">Blog<\/a>\s*/g, '');

    // In case the classes are different or there are mobile menu links
    content = content.replace(/<a href=\"#\"[^>]*>Faculty<\/a>\s*/g, '');
    content = content.replace(/<a href=\"#\"[^>]*>Gallery<\/a>\s*/g, '');
    content = content.replace(/<a href=\"#\"[^>]*>Blog<\/a>\s*/g, '');

    fs.writeFileSync(file, content);
});

console.log('Removed Faculty, Gallery, and Blog from headers.');
