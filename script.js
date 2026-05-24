document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. MOBILE MENU TOGGLE
    // ==========================================
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // ==========================================
    // 2. MODAL LOGIC (ENROLL FORM OPEN/CLOSE)
    // ==========================================
    const enrollModal = document.getElementById('enrollModal');
    const enrollTriggers = document.querySelectorAll('.enroll-trigger');
    const enrollModalClose = enrollModal ? enrollModal.querySelector('.modal-close') : null;
    const enrollModalOverlay = enrollModal ? enrollModal.querySelector('.modal-overlay') : null;
    const courseSelect = document.querySelector('select[name="course_interest"]');

    const openEnrollModal = (courseName = "") => {
        if (!enrollModal) return;

        // अगर किसी कोर्स बटन से आ रहे हैं तो उसे ड्रापडाउन में अपने आप सेलेक्ट करें
        if (courseName && courseSelect) {
            let matched = false;
            Array.from(courseSelect.options).forEach(opt => {
                if (courseName.toLowerCase().includes(opt.value.toLowerCase()) || opt.text.toLowerCase().includes(courseName.toLowerCase())) {
                    courseSelect.value = opt.value;
                    matched = true;
                }
            });
            if (!matched) courseSelect.value = "Other";
        }

        enrollModal.classList.remove('hidden');
        setTimeout(() => enrollModal.classList.add('modal-active'), 10);
    };

    const closeEnrollModal = () => {
        if (!enrollModal) return;
        enrollModal.classList.remove('modal-active');
        setTimeout(() => enrollModal.classList.add('hidden'), 300);
    };

    enrollTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // अगर बटन के पास कोर्स का नाम है (जैसे कोर्सेज पेज पर)
            const card = e.target.closest('article, .course-card');
            const courseTitle = card ? card.querySelector('h3')?.innerText : "";
            openEnrollModal(courseTitle);
        });
    });

    if (enrollModalClose) enrollModalClose.addEventListener('click', closeEnrollModal);
    if (enrollModalOverlay) enrollModalOverlay.addEventListener('click', closeEnrollModal);

    // ==========================================
    // 3. COURSE DETAILS POPUP MODAL LOGIC
    // ==========================================
    const courseData = {
        'ai': {
            title: 'Artificial Intelligence & ML',
            duration: '6 Months',
            color: 'bg-blue-600',
            icon: '<i class="fa-solid fa-robot"></i>',
            syllabus: ['Introduction to AI & Python', 'Data Preprocessing & EDA', 'Supervised & Unsupervised Learning', 'Deep Learning & Neural Networks', 'NLP Projects'],
            career: 'Machine Learning Engineer, AI Data Scientist, Research Analyst.'
        },
        'data_science': {
            title: 'Data Science & Analytics',
            duration: '5 Months',
            color: 'bg-blue-700',
            icon: '<i class="fa-solid fa-chart-line"></i>',
            syllabus: ['Python & R Fundamentals', 'Statistics & Probability', 'Data Visualization (Tableau/PowerBI)', 'SQL & Big Data basics'],
            career: 'Data Analyst, Business Intelligence Developer, Data Scientist.'
        },
        'cloud': {
            title: 'Cloud Computing (AWS/Azure)',
            duration: '4 Months',
            color: 'bg-sky-600',
            icon: '<i class="fa-solid fa-cloud"></i>',
            syllabus: ['Cloud Architecture Basics', 'Compute, Storage & Networking', 'IAM & Security Infrastructure', 'DevOps & Scalability'],
            career: 'Cloud Architect, DevOps Engineer, Cloud Administrator.'
        },
        'fullstack': {
            title: 'Full-Stack Web Development',
            duration: '6 Months',
            color: 'bg-indigo-600',
            icon: '<i class="fa-solid fa-code"></i>',
            syllabus: ['HTML5, CSS3 & Tailwind CSS', 'Modern JavaScript (ES6+)', 'React.js Frontend Framework', 'Node.js & Express.js Backend', 'MongoDB & SQL Databases'],
            career: 'Full Stack Developer, Frontend/Backend Engineer, Technical Freelancer.'
        },
        'marketing': {
            title: 'Digital Marketing & SEO',
            duration: '3 Months',
            color: 'bg-purple-600',
            icon: '<i class="fa-solid fa-bullhorn"></i>',
            syllabus: ['SEO (On-page & Off-page)', 'Social Media Marketing (SMM)', 'Google Ads & PPC Integration', 'Analytics & Tracking'],
            career: 'Digital Marketing Specialist, Brand Manager, SEO Consultant.'
        },
        'uiux': {
            title: 'UI/UX Design',
            duration: '3 Months',
            color: 'bg-emerald-600',
            icon: '<i class="fa-solid fa-pen-nib"></i>',
            syllabus: ['Design Principles & Color Systems', 'Wireframing & Prototyping Workflow', 'Figma & Adobe XD Mastery', 'User Research & Personas'],
            career: 'UI/UX Product Designer, Interaction Designer, Usability Analyst.'
        },
        'autocad': {
            title: 'AutoCAD for Civil/Mech',
            duration: '2 Months',
            color: 'bg-red-500',
            icon: '<i class="fa-solid fa-compass-drafting"></i>',
            syllabus: ['AutoCAD Interface & Setting Tools', '2D Technical Drafting', '3D Solid Modeling & Extrusions', 'Isometric Renderings'],
            career: 'CAD Draftsman, Structural Planner, Engineering Assistant.'
        },
        'python': {
            title: 'Python Programming',
            duration: '2 Months',
            color: 'bg-blue-500',
            icon: '<i class="fa-brands fa-python"></i>',
            syllabus: ['Python Core Syntax', 'Data Structures & Logic Flow', 'Object-Oriented Programming (OOP)', 'File Operations & Script Automation'],
            career: 'Backend Python Programmer, Quality Assurance Automation Engineer.'
        },
        'graphic': {
            title: 'Graphic Designing',
            duration: '3 Months',
            color: 'bg-orange-500',
            icon: '<i class="fa-solid fa-bezier-curve"></i>',
            syllabus: ['Adobe Photoshop Creative Suites', 'Illustrator Vector Graphic Layouts', 'CorelDRAW Production Printing setup', 'Branding Design'],
            career: 'Commercial Graphic Designer, Creative Editor, Media Developer.'
        },
        'webdesign': {
            title: 'Web Design Fundamentals',
            duration: '2 Months',
            color: 'bg-cyan-600',
            icon: '<i class="fa-solid fa-display"></i>',
            syllabus: ['HTML5 Semantic Markup', 'CSS3 Layout Structures', 'Tailwind CSS Grid & Flexbox Systems', 'Basic DOM JS Click Events'],
            career: 'Web Interface Creator, Layout Architect, Front-end UI Associate.'
        },
        'tally': {
            title: 'Tally Prime & Accounting',
            duration: '2 Months',
            color: 'bg-emerald-500',
            icon: '<i class="fa-solid fa-file-invoice-dollar"></i>',
            syllabus: ['Double-Entry Accounting principles', 'Voucher Configurations in Tally', 'GST Tracking & Input Claims', 'Balance Sheet Reporting'],
            career: 'Professional Corporate Accountant, GST Operator, Billing Executive.'
        },
        'dca': {
            title: 'Diploma in Computer Applications (DCA)',
            duration: '6 Months',
            color: 'bg-slate-700',
            icon: '<i class="fa-solid fa-desktop"></i>',
            syllabus: ['Operating System Architectures', 'Advanced MS Word & Excel Sheets', 'Internet protocols & Email Setups', 'Basics of Financial Tally'],
            career: 'Data Entry Associate, Office System Manager, Computer Lab Operator.'
        },
        'appdev': {
            title: 'Mobile App Development',
            duration: '5 Months',
            color: 'bg-zinc-700',
            icon: '<i class="fa-solid fa-mobile-screen-button"></i>',
            syllabus: ['Cross-Platform Flutter or React Native frameworks', 'Native Component Layout Structures', 'REST API Endpoint Hooks', 'State Management Integration'],
            career: 'Mobile Native Developer, iOS/Android Applications Specialist.'
        }
    };

    const courseModal = document.getElementById('courseModal');
    const courseModalClose = courseModal ? courseModal.querySelector('.modal-close') : null;
    const courseModalOverlay = courseModal ? courseModal.querySelector('.modal-overlay') : null;

    const cTitle = document.getElementById('courseModalTitle');
    const cDuration = document.getElementById('courseModalDuration');
    const cHeader = document.getElementById('courseModalHeader');
    const cSyllabus = document.getElementById('courseModalSyllabus');
    const cCareer = document.getElementById('courseModalCareer');
    const enrollFromCourseBtn = document.querySelector('.enroll-trigger-from-course');

    const openCourseModal = (courseKey) => {
        const data = courseData[courseKey];
        if (!data || !courseModal) return;

        cTitle.innerText = data.title;
        cDuration.innerText = data.duration;
        cHeader.className = `h-32 flex items-center justify-center text-white text-5xl relative ${data.color}`;
        cHeader.innerHTML = data.icon;

        cSyllabus.innerHTML = '';
        data.syllabus.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            cSyllabus.appendChild(li);
        });
        cCareer.innerText = data.career;

        if (enrollFromCourseBtn) {
            enrollFromCourseBtn.onclick = () => {
                closeCourseModal();
                openEnrollModal(data.title);
            };
        }

        courseModal.classList.remove('hidden');
        setTimeout(() => courseModal.classList.add('modal-active'), 10);
    };

    const closeCourseModal = () => {
        if (!courseModal) return;
        courseModal.classList.remove('modal-active');
        setTimeout(() => courseModal.classList.add('hidden'), 300);
    };

    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const course = e.currentTarget.getAttribute('data-course');
            openCourseModal(course);
        });
    });

    if (courseModalClose) courseModalClose.addEventListener('click', closeCourseModal);
    if (courseModalOverlay) courseModalOverlay.addEventListener('click', closeCourseModal);

    // ==========================================
    // 4. EMAILJS CONFIGURATION & FORM SUBMISSIONS
    // ==========================================

    // !!! यहाँ अपनी असली EmailJS डिटेल्स डालें !!!
    const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";  // अपनी पब्लिक की यहाँ पेस्ट करें
    const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";  // अपना सर्विस ID यहाँ पेस्ट करें
    const ENROLL_TEMPLATE_ID = "YOUR_ENROLL_TEMPLATE_ID"; // एनरोल फॉर्म का टेम्पलेट ID
    const CONTACT_TEMPLATE_ID = "YOUR_CONTACT_TEMPLATE_ID"; // कांटेक्ट फॉर्म का टेम्पलेट ID

    if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }

    // A. ENROLL FORM MODAL SUBMISSION
    const enrollForm = document.getElementById('enrollForm');
    const enrollSubmitBtn = document.getElementById('enrollSubmitBtn');
    const formFeedback = document.getElementById('formFeedback');

    if (enrollForm) {
        enrollForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
                alert("महत्वपूर्ण: कृपया जीमेल पर मैसेज पाने के लिए script.js में अपनी EmailJS Keys भरें!");
                return;
            }

            const originalBtnHTML = enrollSubmitBtn.innerHTML;
            enrollSubmitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin mr-2"></i> Sending...';
            enrollSubmitBtn.disabled = true;

            emailjs.sendForm(EMAILJS_SERVICE_ID, ENROLL_TEMPLATE_ID, this)
                .then(() => {
                    formFeedback.innerText = "सफलतापूर्वक भेजा गया! हमारी टीम आपसे जल्द संपर्क करेगी।";
                    formFeedback.className = "text-xs text-center font-bold text-emerald-600 mt-2";
                    formFeedback.classList.remove('hidden');
                    enrollForm.reset();
                    setTimeout(() => {
                        closeEnrollModal();
                        formFeedback.classList.add('hidden');
                    }, 2500);
                }, (err) => {
                    console.error("EmailJS Error:", err);
                    formFeedback.innerText = "त्रुटि! संदेश नहीं भेजा जा सका। कृपया बाद में प्रयास करें।";
                    formFeedback.className = "text-xs text-center font-bold text-red-500 mt-2";
                    formFeedback.classList.remove('hidden');
                })
                .finally(() => {
                    enrollSubmitBtn.innerHTML = originalBtnHTML;
                    enrollSubmitBtn.disabled = false;
                });
        });
    }

    // B. CONTACT PAGE DIRECT MESSAGE FORM SUBMISSION
    const contactDirectForm = document.getElementById('contactDirectForm');
    const contactSubmitBtn = document.getElementById('contactSubmitBtn');
    const contactFeedback = document.getElementById('contactFeedback');

    if (contactDirectForm) {
        contactDirectForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
                alert("महत्वपूर्ण: कृपया जीमेल पर संदेश पाने के लिए script.js में अपनी EmailJS Keys सेट करें!");
                return;
            }

            const originalBtnHTML = contactSubmitBtn.innerHTML;
            contactSubmitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin mr-2"></i> Sending Message...';
            contactSubmitBtn.disabled = true;

            emailjs.sendForm(EMAILJS_SERVICE_ID, CONTACT_TEMPLATE_ID, this)
                .then(() => {
                    contactFeedback.innerText = "आपका संदेश सीधे डायरेक्टर के जीमेल पर भेज दिया गया है!";
                    contactFeedback.className = "text-sm font-bold text-emerald-600 mt-3 block";
                    contactFeedback.classList.remove('hidden');
                    contactDirectForm.reset();
                    setTimeout(() => contactFeedback.classList.add('hidden'), 5000);
                }, (err) => {
                    console.error("EmailJS Contact Error:", err);
                    contactFeedback.innerText = "Error sending message. Please try directly over phone.";
                    contactFeedback.className = "text-sm font-bold text-red-500 mt-3 block";
                    contactFeedback.classList.remove('hidden');
                })
                .finally(() => {
                    contactSubmitBtn.innerHTML = originalBtnHTML;
                    contactSubmitBtn.disabled = false;
                });
        });
    }

    // ==========================================
    // 5. WHATSAPP CLICK REDIRECT CONTROL
    // ==========================================
    const whatsappTrigger = document.querySelector('.fa-whatsapp')?.parentElement;
    if (whatsappTrigger) {
        whatsappTrigger.addEventListener('click', () => {
            window.open("https://wa.me/918104479959", "_blank");
        });
    }
});

// Canvas particle animation removed to improve performance
// tsParticles initialization disabled. If needed in the future, re-enable with a lightweight configuration.
