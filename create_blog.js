const fs = require('fs');
let index = fs.readFileSync('index.html', 'utf8');

// Extract head
const headMatch = index.match(/<head>[\s\S]*?<\/head>/);
const head = headMatch ? headMatch[0].replace('<title>Aayam Computer Education - Sikar</title>', '<title>Blog - Aayam Computer Education</title>') : '';

// Extract header
const headerMatch = index.match(/<header[\s\S]*?<\/header>/);
let header = headerMatch ? headerMatch[0] : '';
// Make Blog active
header = header.replace(/<a href=\"index.html\" class=\"text-orange-500 border-b-2 border-orange-500 pb-1\">Home<\/a>/g, '<a href=\"index.html\" class=\"text-gray-600 hover:text-orange-500 transition\">Home</a>');
header = header.replace(/<a href=\"blog.html\" class=\"text-gray-600 hover:text-orange-500 transition\">Blog<\/a>/g, '<a href=\"blog.html\" class=\"text-orange-500 border-b-2 border-orange-500 pb-1\">Blog</a>');

// Extract footer
const footerMatch = index.match(/<footer[\s\S]*?<\/footer>/);
const footer = footerMatch ? footerMatch[0] : '';

// Create blog content string
const blogContent = `
    <main class="max-w-7xl mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto">
            <div class="mb-10 text-center">
                <span class="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-600 mb-4 shadow-sm border border-orange-200"><i class="fa-solid fa-pen-nib mr-1.5"></i> Our Blog</span>
                <h1 class="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-6 tracking-tight">Best Computer Education Institute in Sikar – Aayam Computer Education</h1>
                <p class="text-gray-500 font-medium text-sm flex items-center justify-center gap-3"><i class="fa-regular fa-calendar"></i> Published on May 24, 2026 <span class="text-gray-300">|</span> <i class="fa-solid fa-user-pen"></i> By Aayam Faculty</p>
                <div class="w-24 h-1.5 bg-orange-500 mx-auto mt-8 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
            </div>

            <article class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 bg-white p-8 sm:p-12 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 relative overflow-hidden">
                <!-- Decorative element -->
                <div class="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full z-0"></div>
                
                <div class="relative z-10">
                    <p class="text-lg font-medium text-slate-800 leading-relaxed first-letter:text-6xl first-letter:font-black first-letter:text-orange-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                        Are you searching for the best computer education institute in Sikar? Your search ends here! Aayam Computer Education is one of the leading computer training institutes in Sikar, helping students, professionals, and beginners build strong careers through practical and industry-oriented training.
                    </p>

                    <p class="text-md mt-6">Whether you want to learn programming, architecture software, web development, graphic design, or professional computer skills, Aayam Computer Education is the perfect place to start your journey.</p>

                    <div class="my-12 p-1 border-l-4 border-orange-500 bg-orange-50/50 rounded-r-2xl">
                        <h2 class="text-2xl font-bold text-slate-900 mb-0 flex items-center gap-3 px-4 py-2"><i class="fa-solid fa-star text-orange-500"></i> Why Choose Aayam Computer Education?</h2>
                    </div>
                    
                    <div class="space-y-8 pl-0 sm:pl-4">
                        <div>
                            <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 mb-3"><i class="fa-solid fa-user-tie text-orange-500 text-sm bg-orange-100 p-2 rounded-full"></i> Expert Faculty & Professional Trainers</h3>
                            <p class="pl-10 text-gray-600">At Aayam Computer Education, students learn from experienced trainers who focus on practical learning along with strong concepts. Our faculty guides students step by step and helps them gain confidence in real-world skills.</p>
                        </div>

                        <div>
                            <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 mb-3"><i class="fa-solid fa-laptop-code text-orange-500 text-sm bg-orange-100 p-2 rounded-full"></i> Industry-Oriented Courses</h3>
                            <p class="pl-10 text-gray-600 mb-4">We provide training in highly demanded courses such as:</p>
                            
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-10">
                                <div class="bg-white border border-gray-100 p-3 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-3 group"><i class="fa-solid fa-check text-emerald-500 bg-emerald-50 p-1.5 rounded-full group-hover:scale-110 transition"></i> <span class="font-bold text-sm text-slate-800">AutoCAD for Civil / Architects</span></div>
                                <div class="bg-white border border-gray-100 p-3 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-3 group"><i class="fa-solid fa-check text-emerald-500 bg-emerald-50 p-1.5 rounded-full group-hover:scale-110 transition"></i> <span class="font-bold text-sm text-slate-800">3Ds Max & Google SketchUp</span></div>
                                <div class="bg-white border border-gray-100 p-3 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-3 group"><i class="fa-solid fa-check text-emerald-500 bg-emerald-50 p-1.5 rounded-full group-hover:scale-110 transition"></i> <span class="font-bold text-sm text-slate-800">Full Stack Development (MEAN/MERN)</span></div>
                                <div class="bg-white border border-gray-100 p-3 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-3 group"><i class="fa-solid fa-check text-emerald-500 bg-emerald-50 p-1.5 rounded-full group-hover:scale-110 transition"></i> <span class="font-bold text-sm text-slate-800">Android & iOS App Development</span></div>
                                <div class="bg-white border border-gray-100 p-3 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-3 group"><i class="fa-solid fa-check text-emerald-500 bg-emerald-50 p-1.5 rounded-full group-hover:scale-110 transition"></i> <span class="font-bold text-sm text-slate-800">Python, Java, C & C++ Programming</span></div>
                                <div class="bg-white border border-gray-100 p-3 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-3 group"><i class="fa-solid fa-check text-emerald-500 bg-emerald-50 p-1.5 rounded-full group-hover:scale-110 transition"></i> <span class="font-bold text-sm text-slate-800">Graphic Design & Data Analytics</span></div>
                                <div class="bg-white border border-gray-100 p-3 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-3 group"><i class="fa-solid fa-check text-emerald-500 bg-emerald-50 p-1.5 rounded-full group-hover:scale-110 transition"></i> <span class="font-bold text-sm text-slate-800">Digital Marketing & Tally Prime</span></div>
                                <div class="bg-white border border-gray-100 p-3 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-3 group"><i class="fa-solid fa-check text-emerald-500 bg-emerald-50 p-1.5 rounded-full group-hover:scale-110 transition"></i> <span class="font-bold text-sm text-slate-800">Advanced Excel, MS Word, RS-CIT</span></div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 mb-3"><i class="fa-solid fa-briefcase text-orange-500 text-sm bg-orange-100 p-2 rounded-full"></i> Practical Training with Live Projects</h3>
                            <p class="pl-10 text-gray-600">We believe learning becomes powerful when students practice. Students work on practical projects and assignments that help build real skills and industry experience.</p>
                        </div>

                        <div>
                            <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 mb-3"><i class="fa-solid fa-handshake text-orange-500 text-sm bg-orange-100 p-2 rounded-full"></i> Career Guidance & Placement Support</h3>
                            <p class="pl-10 text-gray-600">Aayam Computer Education provides career guidance and support to help students improve their job opportunities and prepare for professional careers.</p>
                        </div>

                        <div>
                            <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 mb-3"><i class="fa-solid fa-clock text-orange-500 text-sm bg-orange-100 p-2 rounded-full"></i> Flexible Timings</h3>
                            <p class="pl-10 text-gray-600">We provide flexible schedules for School students, College students, Working professionals, and Beginners.</p>
                        </div>
                    </div>

                    <div class="my-12 p-1 border-l-4 border-emerald-500 bg-emerald-50/50 rounded-r-2xl">
                        <h2 class="text-2xl font-bold text-slate-900 mb-0 flex items-center gap-3 px-4 py-2"><i class="fa-solid fa-layer-group text-emerald-500"></i> Benefits of Learning at Aayam</h2>
                    </div>
                    
                    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 font-bold text-slate-800 pl-0 sm:pl-4">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-circle-check text-emerald-500 text-lg"></i> Practical hands-on training</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-circle-check text-emerald-500 text-lg"></i> Modern computer labs</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-circle-check text-emerald-500 text-lg"></i> Industry-focused curriculum</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-circle-check text-emerald-500 text-lg"></i> Personalized guidance</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-circle-check text-emerald-500 text-lg"></i> Affordable courses</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-circle-check text-emerald-500 text-lg"></i> Friendly learning environment</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-circle-check text-emerald-500 text-lg"></i> Career support and skill development</li>
                    </ul>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 items-start">
                        <div>
                            <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3"><i class="fa-solid fa-users text-orange-500"></i> Who Can Join?</h2>
                            <p class="text-gray-600 mb-4">Our courses are suitable for:</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-gray-100 text-slate-700 font-bold px-3 py-1.5 rounded-lg text-sm border border-gray-200">School Students</span>
                                <span class="bg-gray-100 text-slate-700 font-bold px-3 py-1.5 rounded-lg text-sm border border-gray-200">College Students</span>
                                <span class="bg-gray-100 text-slate-700 font-bold px-3 py-1.5 rounded-lg text-sm border border-gray-200">BCA / Engineering Students</span>
                                <span class="bg-gray-100 text-slate-700 font-bold px-3 py-1.5 rounded-lg text-sm border border-gray-200">Job Seekers</span>
                                <span class="bg-gray-100 text-slate-700 font-bold px-3 py-1.5 rounded-lg text-sm border border-gray-200">Working Professionals</span>
                                <span class="bg-gray-100 text-slate-700 font-bold px-3 py-1.5 rounded-lg text-sm border border-gray-200">Designers & Developers</span>
                                <span class="bg-orange-50 text-orange-600 font-bold px-3 py-1.5 rounded-lg text-sm border border-orange-200">Anyone interested in IT</span>
                            </div>
                        </div>

                        <div class="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 p-8 rounded-3xl shadow-sm relative overflow-hidden">
                            <i class="fa-solid fa-quote-right absolute -bottom-4 -right-4 text-8xl text-orange-500/10"></i>
                            <h3 class="text-xl font-black text-slate-900 mb-3 relative z-10">Why Aayam is the Best Choice in Sikar?</h3>
                            <p class="text-slate-700 text-sm leading-relaxed relative z-10">Sikar is becoming one of Rajasthan's leading education hubs. Among various institutes, Aayam Computer Education stands out because of its practical approach, quality training, experienced faculty, and student-focused learning system.</p>
                            <p class="text-slate-800 font-bold text-sm mt-3 relative z-10">If you want to build your future with modern computer skills and industry-ready training, Aayam Computer Education is the right choice.</p>
                        </div>
                    </div>

                    <div class="mt-16 text-center max-w-2xl mx-auto">
                        <h2 class="text-2xl font-black text-slate-900 mb-4">Conclusion</h2>
                        <p class="text-gray-600 font-medium">A strong career starts with the right skills and proper guidance. Join Aayam Computer Education and transform your passion into success through practical learning and professional training.</p>
                    </div>

                    <div class="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl mt-12 shadow-2xl shadow-slate-900/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
                        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
                        <div class="relative z-10">
                            <h3 class="text-3xl font-black text-white mb-4">Start Your Journey <span class="text-orange-500">Today!</span></h3>
                            <div class="space-y-3 text-sm font-medium text-gray-300">
                                <p class="flex items-center justify-center sm:justify-start gap-3"><i class="fa-solid fa-phone bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center"></i> Call Now: <span class="text-white font-bold text-base">8104479959</span></p>
                                <p class="flex items-center justify-center sm:justify-start gap-3"><i class="fa-solid fa-envelope bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center"></i> Email: <span class="text-white font-bold">aakashjoshi0001@gmail.com</span></p>
                                <p class="flex items-center justify-center sm:justify-start gap-3"><i class="fa-solid fa-location-dot bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center"></i> Address: <span class="text-white font-bold">J42P+29, Sikar, Rajasthan</span></p>
                            </div>
                        </div>
                        <div class="relative z-10 w-full sm:w-auto">
                            <a href="contact.html" class="block w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl transition shadow-[0_0_20px_rgba(249,115,22,0.4)] text-center text-lg btn-interactive">Contact Us Now</a>
                        </div>
                    </div>

                    <div class="mt-12 pt-6 border-t border-gray-100 flex flex-wrap gap-2 items-center">
                        <span class="text-[10px] text-gray-400 font-bold uppercase tracking-widest bg-gray-50 px-2 py-1 rounded">Tags:</span>
                        <span class="text-[10px] text-gray-500 font-medium bg-white border border-gray-100 px-2 py-1 rounded shadow-sm">Best Computer Institute in Sikar</span>
                        <span class="text-[10px] text-gray-500 font-medium bg-white border border-gray-100 px-2 py-1 rounded shadow-sm">Aayam Computer Education</span>
                        <span class="text-[10px] text-gray-500 font-medium bg-white border border-gray-100 px-2 py-1 rounded shadow-sm">Computer Courses in Sikar</span>
                        <span class="text-[10px] text-gray-500 font-medium bg-white border border-gray-100 px-2 py-1 rounded shadow-sm">AutoCAD Training Sikar</span>
                        <span class="text-[10px] text-gray-500 font-medium bg-white border border-gray-100 px-2 py-1 rounded shadow-sm">Full Stack Development Sikar</span>
                        <span class="text-[10px] text-gray-500 font-medium bg-white border border-gray-100 px-2 py-1 rounded shadow-sm">Python Training Sikar</span>
                        <span class="text-[10px] text-gray-500 font-medium bg-white border border-gray-100 px-2 py-1 rounded shadow-sm">Graphic Design Institute Sikar</span>
                        <span class="text-[10px] text-gray-500 font-medium bg-white border border-gray-100 px-2 py-1 rounded shadow-sm">Digital Marketing Course Sikar</span>
                        <span class="text-[10px] text-gray-500 font-medium bg-white border border-gray-100 px-2 py-1 rounded shadow-sm">Best Computer Coaching in Rajasthan</span>
                    </div>
                </div>
            </article>
        </div>
    </main>
`;

const html = `<!DOCTYPE html>
<html lang="en">
${head}
<body class="bg-slate-50 text-gray-700 font-sans antialiased relative">
${header}
${blogContent}
${footer}
    <!-- Enrollment Modal and Scripts -->
    <script src="js/script.js"></script>
    <script src="script.js"></script>
</body>
</html>`;

fs.writeFileSync('blog.html', html);
console.log('blog.html created successfully.');
