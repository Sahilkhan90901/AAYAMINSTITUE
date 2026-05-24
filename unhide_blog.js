const fs = require('fs');

const files = ['index.html', 'courses.html', 'about.html', 'contact.html'];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Desktop Nav
    content = content.replace(/<a href=\"contact.html\" class=\"text-gray-600 hover:text-orange-500 transition\">Contact<\/a>/g, '<a href=\"blog.html\" class=\"text-gray-600 hover:text-orange-500 transition\">Blog</a>\n                <a href=\"contact.html\" class=\"text-gray-600 hover:text-orange-500 transition\">Contact</a>');
    // If contact is active link
    content = content.replace(/<a href=\"contact.html\" class=\"text-orange-500 border-b-2 border-orange-500 pb-1\">Contact<\/a>/g, '<a href=\"blog.html\" class=\"text-gray-600 hover:text-orange-500 transition\">Blog</a>\n                <a href=\"contact.html\" class=\"text-orange-500 border-b-2 border-orange-500 pb-1\">Contact</a>');

    // Mobile Nav
    content = content.replace(/<a href=\"contact.html\" class=\"text-slate-900 transition\">Contact<\/a>/g, '<a href=\"blog.html\" class=\"text-gray-600 hover:text-orange-500 transition\">Blog</a>\n                    <a href=\"contact.html\" class=\"text-slate-900 transition\">Contact</a>');

    fs.writeFileSync(file, content);
});

console.log('Added Blog link back to navigation.');
