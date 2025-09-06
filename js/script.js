// Use a single JavaScript block for the entire application logic.
        // It handles state management, UI rendering, and user interactions.

        // --- Application State and Data ---
        const state = {
            currentPage: 'login-page',
            isLoggedIn: false,
            username: '',
            mcqScore: 0,
            codingScore: 0,
            currentQuestion: 0,
            mcqAnswers: [],
            codingAnswers: [],
            resumeAtsScore: null,
            resumeAtsGrade: null,
            mcqTimer: null,
            codingTimer: null,
            roadmapData: null
        };

        const mcqQuestions = [
            { question: "What is a 'pointer' in C?", options: ["A variable that stores a memory address.", "A data type for strings.", "A function for printing.", "A loop control structure."], answer: 0 },
            { question: "Which data structure uses a Last-In, First-Out (LIFO) order?", options: ["Queue", "Stack", "Array", "Linked List"], answer: 1 },
            { question: "What is the primary function of an operating system?", options: ["Manage hardware resources.", "Create web pages.", "Edit documents.", "Send emails."], answer: 0 },
            { question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], answer: 1 },
            { question: "Which of the following is a non-linear data structure?", options: ["Array", "Linked List", "Tree", "Stack"], answer: 2 },
            { question: "What is a 'foreign key' in a database?", options: ["A key used to link two tables.", "A unique identifier for a row.", "A column that stores foreign currency.", "A primary key from another table."], answer: 0 },
            { question: "What is polymorphism in OOP?", options: ["A single function name used for different purposes.", "The ability to inherit properties.", "Bundling data and methods together.", "Hiding data from outside access."], answer: 0 },
            { question: "Which protocol is used for email transfer?", options: ["HTTP", "FTP", "SMTP", "TCP"], answer: 2 },
            { question: "What is the purpose of a 'constructor' in a class?", options: ["To destroy an object.", "To initialize a new object.", "To copy an object.", "To check for errors."], answer: 1 },
            { question: "Which sorting algorithm has the best average-case time complexity?", options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"], answer: 2 }
        ];

        const codingQuestions = [
            {
                title: "Question 1: Hello World!",
                text: "Write a program that prints 'Hello World!' to the console. This is a very simple question to test your basic IDE functionality.",
                examples: "Input: None\nOutput: Hello World!",
                correctCode: ["Hello World!", "print('Hello World!')", "System.out.println(\"Hello World!\")", "cout << \"Hello World!\";"],
            },
            {
                title: "Question 2: Sum of Two Numbers",
                text: "Write a program that takes two integer inputs, `a` and `b`, and prints their sum. Your program should handle a single line of input with two space-separated integers.",
                examples: "Input:\n5 7\nOutput:\n12",
                correctCode: ["a + b", "sum", "int a, b", "int(input())"],
            }
        ];

        const roadmaps = {
            python: {
                title: "Python Development Roadmap",
                content: `
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Python Development Roadmap</h3>
                    <p class="text-gray-600 mb-6">Python is one of the most versatile and in-demand programming languages, used in everything from web development to data science and machine learning. This roadmap will guide you through the essential skills you need to master Python and land a great job.</p>

                    <div class="space-y-8">
                        <div>
                            <h4 class="text-xl font-semibold text-gray-700 mb-2">Beginner: Foundational Concepts</h4>
                            <p class="text-gray-600">Start with the fundamentals. Focus on understanding the core syntax, data types (lists, tuples, dictionaries), control flow (if/else, for loops), and functions. Get comfortable with basic input and output operations, and learn how to use libraries like <code>math</code> and <code>random</code>. A good project at this stage would be a simple To-Do List or a command-line calculator. This solid base is crucial for everything that follows.</p>
                        </div>

                        <div>
                            <h4 class="text-xl font-semibold text-gray-700 mb-2">Intermediate: Building Practical Skills</h4>
                            <p class="text-gray-600">Once you have the basics down, move on to more advanced topics. This is where you'll build the skills needed for real-world projects. Master Object-Oriented Programming (OOP) to write clean, reusable code. Learn about file handling, error handling with <code>try...except</code>, and working with virtual environments to manage project dependencies. Explore popular libraries like <code>requests</code> for making HTTP calls and <code>BeautifulSoup</code> for web scraping. At this level, you can build a small web scraper to gather data from a website or a simple desktop application using <code>Tkinter</code>.</p>
                        </div>

                        <div>
                            <h4 class="text-xl font-semibold text-gray-700 mb-2">Advanced: Specialization and Optimization</h4>
                            <p class="text-gray-600">At the advanced level, you will specialize in a field and learn to write efficient, production-ready code. Dive deep into decorators, generators, and asynchronous programming with <code>asyncio</code>. Learn about design patterns and clean code principles. For web development, master frameworks like **Django** or **Flask** to build robust web applications. For data science, focus on advanced libraries like **Pandas**, **NumPy**, and **Scikit-learn**. A strong advanced project could be a REST API, a data analysis pipeline, or a machine learning model.</p>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-gray-700 mt-8 mb-4">Interview Preparation & Resources</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-600">
                        <li>**Core Concepts:** Be ready to explain Python's key features, such as the GIL (Global Interpreter Lock), decorators, and data structures.</li>
                        <li>**Coding Practice:** Solve problems on platforms like **LeetCode** and **HackerRank** to improve your problem-solving skills and algorithmic thinking.</li>
                        <li>**Mini-Projects:** A web scraper, a simple API, or a script to automate a daily task can serve as excellent portfolio projects.</li>
                        <li>**Career Path:** This roadmap can lead you to roles like **Backend Developer**, **Data Scientist**, **Machine Learning Engineer**, or **DevOps Engineer**.</li>
                    </ul>
                `
            },
            java: {
                title: "Java Development Roadmap",
                content: `
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Java Development Roadmap</h3>
                    <p class="text-gray-600 mb-6">Java is a cornerstone of enterprise-level software development, powering everything from large-scale web applications to Android mobile apps. This roadmap will guide you through the journey of becoming a proficient Java developer, capable of building powerful and scalable systems.</p>

                    <div class="space-y-8">
                        <div>
                            <h4 class="text-xl font-semibold text-gray-700 mb-2">Beginner: Core Java Fundamentals</h4>
                            <p class="text-gray-600">Your journey begins with a deep dive into Core Java. This includes mastering the syntax, understanding primitive data types, and becoming proficient with Object-Oriented Programming (OOP) concepts such as encapsulation, inheritance, polymorphism, and abstraction. You should also learn about control structures, arrays, and basic exception handling. A great project for this stage is building a command-line application like a simple "Library Management System" to solidify your understanding of OOP principles.</p>
                        </div>

                        <div>
                            <h4 class="text-xl font-semibold text-gray-700 mb-2">Intermediate: The Java Ecosystem</h4>
                            <p class="text-gray-600">Once you are comfortable with Core Java, it's time to explore the vast Java ecosystem. This phase involves mastering the Java Collections Framework (ArrayList, HashMap, etc.), which is critical for efficient data manipulation. Learn about multithreading and concurrency to handle parallel processing. Dive into Java I/O streams and file handling. You should also learn how to connect to databases using JDBC. At this level, you can build a more complex application, such as an "E-commerce Console Application" with a database to store product and user data.</p>
                        </div>

                        <div>
                            <h4 class="text-xl font-semibold text-gray-700 mb-2">Advanced: Enterprise and Cloud-Native</h4>
                            <p class="text-gray-600">The advanced stage is all about building production-grade, scalable applications. This is where you master frameworks like the **Spring Framework**, particularly **Spring Boot**, for rapid development of robust web services. Learn about building RESTful APIs, handling security with Spring Security, and connecting to databases efficiently with Spring Data JPA. You should also explore microservices architecture and containerization using **Docker** and **Kubernetes**. A great advanced project is building a full-stack web application with a Java backend and a modern JavaScript framework like React on the frontend.</p>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-gray-700 mt-8 mb-4">Interview Preparation & Resources</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-600">
                        <li>**Core Concepts:** Be prepared to answer questions on OOP, multithreading, and the Collections Framework.</li>
                        <li>**Coding Practice:** Practice DSA problems in Java on platforms like **LeetCode** and **GeeksforGeeks**.</li>
                        <li>**Certifications:** Consider pursuing the **Oracle Certified Professional (OCP) Java Developer** certification to validate your skills.</li>
                        <li>**Career Path:** This roadmap prepares you for roles like **Software Development Engineer**, **Backend Developer**, or **Enterprise Architect**.</li>
                    </ul>
                `
            },
            'web-dev': {
                title: "Web Development Roadmap",
                content: `
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Web Development Roadmap</h3>
                    <p class="text-gray-600 mb-6">Web development is the art and science of creating websites and web applications. This roadmap focuses on becoming a full-stack developer, proficient in building both the user-facing frontend and the server-side backend. The path is challenging but incredibly rewarding.</p>

                    <div class="space-y-8">
                        <div>
                            <h4 class="text-xl font-semibold text-gray-700 mb-2">Beginner: Frontend Fundamentals</h4>
                            <p class="text-gray-600">Start by mastering the holy trinity of web development: **HTML**, **CSS**, and **JavaScript**. Learn HTML to structure your content, CSS to style it beautifully (focus on modern techniques like Flexbox and Grid), and JavaScript to add interactivity and dynamic behavior. At this stage, your projects should be simple static websites, like a personal portfolio or a landing page for a fictional product. You should also be familiar with using version control with **Git** and **GitHub**.</p>
                        </div>

                        <div>
                            <h4 class="text-xl font-semibold text-gray-700 mb-2">Intermediate: Dynamic Frontend & APIs</h4>
                            <p class="text-gray-600">This phase is all about building single-page applications (SPAs) with modern JavaScript frameworks. Choose one framework to master, such as **React**, **Angular**, or **Vue.js**. Learn component-based architecture and state management. You will also learn how to integrate with external APIs to fetch and display dynamic data. Projects at this level could include a movie search app using a public API or a blog with a dynamic content display. You should also be comfortable with a CSS framework like **Tailwind CSS** or Bootstrap for rapid styling.</p>
                        </div>

                        <div>
                            <h4 class="text-xl font-semibold text-gray-700 mb-2">Advanced: Full-Stack Mastery</h4>
                            <p class="text-gray-600">The final stage involves bridging the gap between the frontend and the backend. Master a server-side language and framework like **Node.js with Express**, **Python with Django/Flask**, or **Java with Spring Boot**. Learn about databases (both SQL like **PostgreSQL** and NoSQL like **MongoDB**). Implement user authentication with technologies like JWT or OAuth. Explore cloud platforms like **AWS** or **Vercel** for deployment and learn to set up a CI/CD pipeline for automated testing and deployment. A great advanced project is building a full-stack social media clone or a real-time collaborative tool using WebSockets.</p>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-gray-700 mt-8 mb-4">Interview Preparation & Resources</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-600">
                        <li>**Core Concepts:** Be ready to explain event loops in JavaScript, API design principles, and database normalization.</li>
                        <li>**Coding Practice:** Focus on front-end coding challenges (DOM manipulation) and full-stack system design questions.</li>
                        <li>**Portfolio:** Your portfolio should be a showcase of your best work, including links to live demos and GitHub repositories.</li>
                        <li>**Career Path:** This roadmap can lead you to roles like **Frontend Developer**, **Backend Developer**, or **Full-Stack Engineer**.</li>
                    </ul>
                `
            },
            dsa: {
                title: "Data Structures & Algorithms Roadmap",
                content: `
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Data Structures & Algorithms Roadmap</h3>
                    <p class="text-gray-600 mb-6">Data Structures and Algorithms (DSA) are the bedrock of computer science and are crucial for passing technical interviews at top-tier companies. This roadmap is designed to build your problem-solving skills from the ground up, teaching you to write efficient and optimized code.</p>

                    <div class="space-y-8">
                        <div>
                            <h4 class="text-xl font-semibold text-gray-700 mb-2">Beginner: Linear Data Structures</h4>
                            <p class="text-gray-600">Start with the fundamental linear data structures. This includes arrays, linked lists, stacks, and queues. Understand their implementation, time complexity for various operations (insertion, deletion, search), and practical applications. Learn basic sorting algorithms like Bubble Sort and Insertion Sort, and search algorithms like Linear and Binary Search. The goal here is to get a solid grasp of how to store and manipulate data efficiently. A good beginner project is to implement these data structures from scratch in your preferred language.</p>
                        </div>

                        <div>
                            <h4 class="text-xl font-semibold text-gray-700 mb-2">Intermediate: Non-Linear Structures & Techniques</h4>
                            <p class="text-gray-600">At the intermediate level, you'll move on to more complex non-linear data structures. Master trees (Binary Trees, BSTs), graphs, and hash tables. Learn about tree traversals (in-order, pre-order, post-order) and graph traversal algorithms (BFS and DFS). This is also the stage to learn about heaps and priority queues. Focus on common problem-solving techniques like divide and conquer, greedy algorithms, and two-pointer approaches. A great project for this level is building a visualizer for a sorting or graph traversal algorithm to deeply understand their mechanics.</p>
                        </div>

                        <div>
                            <h4 class="text-xl font-semibold text-gray-700 mb-2">Advanced: Dynamic Programming & Optimization</h4>
                            <p class="text-gray-600">The advanced stage is where you tackle the most challenging problems and learn to optimize your solutions. Master dynamic programming, a powerful technique for solving complex problems by breaking them down into simpler subproblems. Dive into advanced graph algorithms like Dijkstra's Algorithm and Floyd-Warshall. Learn about advanced sorting algorithms like Merge Sort and Quick Sort. The primary focus at this level should be consistent practice. Aim to solve a variety of hard problems on competitive programming platforms to hone your skills.</p>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-gray-700 mt-8 mb-4">Interview Preparation & Resources</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-600">
                        <li>**Core Concepts:** Be able to clearly explain the time and space complexity of your solutions.</li>
                        <li>**Coding Practice:** Platforms like **LeetCode** and **HackerRank** are your best friends. Practice consistently.</li>
                        <li>**Mock Interviews:** Use platforms like Pramp to practice with peers in a simulated interview setting.</li>
                        <li>**Career Path:** Strong DSA skills are essential for all tech roles, especially **Software Development Engineer**, **Machine Learning Engineer**, and **Algorithm Specialist**.</li>
                    </ul>
                `
            },
            'data-science': {
                title: "Data Science & AI Roadmap",
                content: `
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Data Science & AI Roadmap</h3>
                    <p class="text-gray-600 mb-6">The field of Data Science and Artificial Intelligence is revolutionizing every industry. This roadmap is for those who want to turn data into insights and build intelligent systems. It’s a multidisciplinary field that combines computer science, statistics, and domain knowledge.</p>

                    <div class="space-y-8">
                        <div>
                            <h4 class="text-xl font-semibold text-gray-700 mb-2">Beginner: Data Fundamentals</h4>
                            <p class="text-gray-600">Start with the foundational tools of data science. Master **Python** and its core libraries for data manipulation and analysis: **NumPy** for numerical operations, **Pandas** for data frames, and **Matplotlib/Seaborn** for data visualization. You should also have a solid understanding of statistics and probability. A good project at this stage would be a simple data analysis report on a public dataset, such as an exploration of a movie or sales dataset to uncover basic trends.</p>
                        </div>

                        <div>
                            <h4 class="text-xl font-semibold text-gray-700 mb-2">Intermediate: Machine Learning Core</h4>
                            <p class="text-gray-600">Once you can work with data, it's time to learn how to build predictive models. This phase is about understanding the core concepts of machine learning, including supervised and unsupervised learning. Master the **Scikit-learn** library to implement popular algorithms like Linear Regression, Logistic Regression, Decision Trees, and K-Means Clustering. Learn about model evaluation metrics and feature engineering. A practical project could be building a credit card fraud detection system or a movie recommendation system based on user ratings.</p>
                        </div>

                        <div>
                            <h4 class="text-xl font-semibold text-gray-700 mb-2">Advanced: Deep Learning & Specialization</h4>
                            <p class="text-gray-600">The advanced stage is for specializing in a sub-field of AI. This typically involves diving into deep learning using frameworks like **TensorFlow** or **PyTorch**. Learn about neural networks, convolutional neural networks (CNNs) for computer vision, and recurrent neural networks (RNNs) for natural language processing (NLP). Build more complex, state-of-the-art models. An advanced project could be building an image classifier, a text sentiment analysis tool, or a generative AI model.</p>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold text-gray-700 mt-8 mb-4">Interview Preparation & Resources</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-600">
                        <li>**Core Concepts:** Be ready to explain the trade-offs between different models and your thought process for a data science problem.</li>
                        <li>**Projects:** A strong portfolio of projects on platforms like **Kaggle** and **GitHub** is your most important asset.</li>
                        <li>**Soft Skills:** Communication and storytelling are critical. You must be able to explain complex findings to non-technical audiences.</li>
                        <li>**Career Path:** This roadmap is a direct path to roles like **Data Analyst**, **Data Scientist**, and **Machine Learning Engineer**.</li>
                    </ul>
                `
            }
        };

        const interviewPrepContent = {
            starter: {
                title: "Starter Package: Foundational Interview Prep",
                description: "This package focuses on the absolute basics to build your confidence for your first technical interviews. It's designed to give you a solid footing with minimal effort.",
                learningBreakdown: {
                    labels: ['Technical Notes & MCQs', 'HR Basics', 'Practical Projects'],
                    data: [50, 40, 10],
                },
                content: `
                    <p class="text-gray-600 mb-4">This guide is for those new to the interview process. We'll cover essential topics without getting bogged down in complexity.</p>
                    <h4 class="text-xl font-semibold text-gray-700 mt-4 mb-2">Key Areas:</h4>
                    <ul class="list-disc list-inside text-gray-600 space-y-2">
                        <li>**Technical Notes:** Quick revision notes on fundamental CSE topics like data types, basic algorithms, and OOP principles.</li>
                        <li>**MCQ Practice:** Short quizzes to test your theoretical knowledge and improve speed.</li>
                        <li>**HR Basics:** Learn how to answer common questions like "Tell me about yourself" and "Why should we hire you?".</li>
                        <li>**Resume:** Basic tips for formatting and content to get your resume noticed.</li>
                    </ul>
                `,
            },
            middle: {
                title: "Middle Package: The Balanced Interviewer",
                description: "This package is for students with some foundational knowledge looking to pass intermediate-level coding rounds and behavioral interviews.",
                learningBreakdown: {
                    labels: ['Technical Notes', 'Coding Challenges', 'HR Prep'],
                    data: [30, 50, 20],
                },
                content: `
                    <p class="text-gray-600 mb-4">This package offers a balanced approach, focusing on a mix of coding and soft skills to help you stand out.</p>
                    <h4 class="text-xl font-semibold text-gray-700 mt-4 mb-2">Key Areas:</h4>
                    <ul class="list-disc list-inside text-gray-600 space-y-2">
                        <li>**Balanced Notes:** In-depth notes on intermediate topics like core data structures (Arrays, Linked Lists, Trees) and common algorithms.</li>
                        <li>**Coding Challenges:** A curated set of medium-difficulty coding problems to practice on.</li>
                        <li>**HR Prep:** Learn to handle situational and behavioral questions effectively. This includes mock scenarios and tips on storytelling.</li>
                        <li>**Resume:** Guidance on how to quantify your project achievements and create a compelling summary.</li>
                    </ul>
                `,
            },
            pro: {
                title: "Pro Package: Advanced Interview Mastery",
                description: "This package is for top students aiming for highly competitive roles at leading companies. It's designed to cover advanced topics and critical soft skills.",
                learningBreakdown: {
                    labels: ['Advanced DSA', 'System Design', 'Resume & HR'],
                    data: [40, 40, 20],
                },
                content: `
                    <p class="text-gray-600 mb-4">This comprehensive guide is for students ready to tackle the most challenging technical and behavioral rounds.</p>
                    <h4 class="text-xl font-semibold text-gray-700 mt-4 mb-2">Key Areas:</h4>
                    <ul class="list-disc list-inside text-gray-600 space-y-2">
                        <li>**Advanced DSA:** Master complex data structures and algorithms, including Dynamic Programming and Graph Algorithms.</li>
                        <li>**System Design:** Learn to architect scalable systems. This includes discussions on microservices, databases, and distributed systems.</li>
                        <li>**Comprehensive HR Prep:** A handbook on advanced communication techniques, leadership skills, and presenting complex projects effectively.</li>
                        <li>**Resume Review:** In-depth strategic tips for optimizing your resume to pass the toughest filters.</li>
                    </ul>
                `,
            }
        };

        // --- Utility Functions ---

        // Simple function to display a temporary message
        function showMessage(message, type = 'info') {
            const messageBox = document.getElementById('message-box');
            messageBox.textContent = message;
            messageBox.style.backgroundColor = type === 'error' ? '#ef4444' : '#10b981';
            messageBox.classList.remove('hidden');
            messageBox.classList.add('translate-y-0');
            setTimeout(() => {
                messageBox.classList.remove('translate-y-0');
                messageBox.classList.add('translate-y-20');
                setTimeout(() => {
                    messageBox.classList.add('hidden');
                }, 300);
            }, 3000);
        }

        function showLoading() {
            document.getElementById('loading-overlay').classList.remove('hidden');
        }

        function hideLoading() {
            document.getElementById('loading-overlay').classList.add('hidden');
        }

        // --- UI Rendering and Page Switching ---

        function renderPage() {
            const pages = ['login-page', 'dashboard-page', 'test-page-mcq', 'test-page-coding', 'results-page', 'skill-explorer-page', 'interview-prep-page', 'about-page'];
            pages.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.classList.add('hidden');
                    element.classList.remove('page-transition');
                }
            });

            const activePage = document.getElementById(state.currentPage);
            if (activePage) {
                activePage.classList.remove('hidden');
                activePage.classList.add('page-transition');
            }

            // Update UI for the current page
            if (state.currentPage === 'dashboard-page') {
                document.getElementById('user-display-name').textContent = state.username;
            } else if (state.currentPage === 'test-page-mcq') {
                renderMcqQuestion();
            } else if (state.currentPage === 'test-page-coding') {
                renderCodingQuestion();
            } else if (state.currentPage === 'results-page') {
                renderResults();
            }
        }

        function navigateTo(pageId) {
            state.currentPage = pageId;
            renderPage();
        }

        // --- Event Listeners and Logic ---

        // Login Form
        document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            state.username = email.split('@')[0];
            state.isLoggedIn = true;
            // Simulate login by just navigating to the dashboard
            navigateTo('dashboard-page');
            showMessage(`Welcome, ${state.username}!`, 'info');
        });

        // Dashboard Buttons
        document.getElementById('start-test-button').addEventListener('click', () => {
            // Reset test state and start MCQ round
            state.mcqScore = 0;
            state.codingScore = 0;
            state.currentQuestion = 0;
            state.mcqAnswers = [];
            state.codingAnswers = [];
            // Shuffle questions for a random experience
            shuffleArray(mcqQuestions);
            shuffleArray(codingQuestions);
            navigateTo('test-page-mcq');
        });

        document.getElementById('upload-resume-button').addEventListener('click', () => {
            document.getElementById('resume-upload-input').click();
        });

        let atsChartInstance = null;
        document.getElementById('resume-upload-input').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const validExtensions = ['pdf', 'doc', 'docx'];
            const fileExtension = file.name.split('.').pop().toLowerCase();

            if (!validExtensions.includes(fileExtension)) {
                showMessage(`Please upload a valid resume file (PDF, DOC, or DOCX).`, 'error');
                return;
            }

            const statusMessage = document.getElementById('resume-status');
            statusMessage.textContent = `Analyzing "${file.name}"...`;
            statusMessage.style.color = '#4f46e5';
            
            showLoading();
            setTimeout(() => {
                hideLoading();
                statusMessage.textContent = '';
                showResumeReport(file.name);
            }, 2000);
        });

        document.getElementById('skill-explorer-button').addEventListener('click', () => {
            navigateTo('skill-explorer-page');
        });

        document.getElementById('about-xlpower-button').addEventListener('click', () => {
            navigateTo('about-page');
        });
        
        document.getElementById('interview-prep-button').addEventListener('click', () => {
            navigateTo('interview-prep-page');
        });
        
        document.querySelectorAll('#prep-package-selection button').forEach(button => {
            button.addEventListener('click', (e) => {
                const packageType = e.target.dataset.package;
                renderPrepGuide(packageType);
            });
        });

        document.getElementById('back-to-prep-packages').addEventListener('click', () => {
            document.getElementById('prep-package-selection').classList.remove('hidden');
            document.getElementById('prep-guide-display').classList.add('hidden');
        });
        
        document.getElementById('back-to-dashboard-from-prep').addEventListener('click', () => {
            navigateTo('dashboard-page');
        });

        document.getElementById('back-to-dashboard-from-about').addEventListener('click', () => {
            navigateTo('dashboard-page');
        });
        
        document.getElementById('logout-button').addEventListener('click', () => {
            state.isLoggedIn = false;
            state.username = '';
            localStorage.removeItem('xlpower_results');
            navigateTo('login-page');
            showMessage("You have been logged out.", 'info');
        });

        let prepChartInstance = null;
        function renderPrepGuide(packageType) {
            const prepGuide = interviewPrepContent[packageType];
            document.getElementById('prep-guide-title').textContent = prepGuide.title;
            document.getElementById('prep-guide-content').innerHTML = prepGuide.content;

            document.getElementById('prep-package-selection').classList.add('hidden');
            document.getElementById('prep-guide-display').classList.remove('hidden');

            if (prepChartInstance) {
                prepChartInstance.destroy();
            }

            const ctx = document.getElementById('prep-pie-chart').getContext('2d');
            prepChartInstance = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: prepGuide.learningBreakdown.labels,
                    datasets: [{
                        data: prepGuide.learningBreakdown.data,
                        backgroundColor: ['#4f46e5', '#10b981', '#f59e0b'],
                        borderWidth: 0,
                    }]
                },
                options: {
                    responsive: true,
                    plugins: { legend: { position: 'bottom' } },
                    cutout: '70%',
                }
            });
        }

        document.getElementById('back-to-dashboard-from-explorer').addEventListener('click', () => {
            navigateTo('dashboard-page');
        });
        
        document.getElementById('generate-roadmap-button').addEventListener('click', () => {
            const domain = document.getElementById('skill-domain-select').value;
            const level = document.getElementById('skill-level-select').value;

            if (!domain || !level) {
                showMessage('Please select a domain and a level.', 'error');
                return;
            }

            const roadmapContentDiv = document.getElementById('roadmap-content');
            const roadmap = roadmaps[domain];
            
            if (roadmap) {
                roadmapContentDiv.innerHTML = roadmap.content;
                document.getElementById('skill-selection-form').classList.add('hidden');
                document.getElementById('skill-roadmap-display').classList.remove('hidden');
            } else {
                showMessage('Roadmap content for this domain is not available.', 'error');
            }
        });

        document.getElementById('generate-another-roadmap-button').addEventListener('click', () => {
            document.getElementById('skill-selection-form').classList.remove('hidden');
            document.getElementById('skill-roadmap-display').classList.add('hidden');
            document.getElementById('skill-domain-select').value = '';
            document.getElementById('skill-level-select').value = '';
        });

        document.getElementById('download-roadmap-button').addEventListener('click', async () => {
            const roadmapContent = document.getElementById('roadmap-content');
            const canvas = await html2canvas(roadmapContent, { scale: 2 });
            const imgData = canvas.toDataURL('image/png');
            
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            doc.save(`XLPower_Roadmap.pdf`);
        });

        function showResumeReport(filename) {
            const name = filename.split('.')[0].toLowerCase();
            let score = 0;
            let grade = '';
            let improvements = [];

            if (name.includes('data') || name.includes('ai') || name.includes('fullstack')) {
                score = 85 + Math.floor(Math.random() * 10);
                grade = 'Excellent';
                improvements = [
                    "Ensure your GitHub profile is well-maintained and active.",
                    "Include a professional headshot on your LinkedIn profile.",
                    "Quantify your achievements with metrics (e.g., 'Increased efficiency by 20%').",
                    "List specific tools and frameworks you've used in each project (e.g., 'React, Node.js, MongoDB').",
                    "Add a concise professional summary that highlights your career objectives and key skills.",
                    "Consider adding a link to an online portfolio or a personal website that showcases your projects visually.",
                    "Tailor your resume for specific job descriptions by using relevant keywords from the posting.",
                    "Highlight any leadership roles in projects or organizations.",
                    "Mention any soft skills that were crucial for project success, such as teamwork or communication.",
                    "Ensure your contact information is prominently displayed and easy to find.",
                    "Use a clean, modern font that is easy for both humans and ATS to read.",
                    "Check for consistent verb tenses and grammar throughout the document."
                ];
            } else if (name.includes('project') || name.includes('resume')) {
                score = 65 + Math.floor(Math.random() * 10);
                grade = 'Good';
                improvements = [
                    "Add a concise professional summary at the top.",
                    "Use bullet points to describe your responsibilities and achievements.",
                    "Highlight technical skills with keywords relevant to the job.",
                    "Provide links to your project portfolio or GitHub.",
                    "Quantify your achievements with metrics (e.g., 'Reduced loading time by 15%').",
                    "Ensure consistent formatting and a clean, easy-to-read layout.",
                    "Proofread for any spelling and grammar errors.",
                    "Add a dedicated 'Experience' or 'Projects' section to detail your work.",
                    "Make sure the skills section is organized and easy to scan for recruiters.",
                    "Avoid using generic resume templates that may not be ATS-friendly.",
                    "Use action verbs to start bullet points (e.g., 'Developed,' 'Managed,' 'Implemented').",
                    "List your most relevant and impressive projects first."
                ];
            } else {
                score = 35 + Math.floor(Math.random() * 10);
                grade = 'Average';
                improvements = [
                    "Structure your resume with clear headings like 'Education', 'Skills', and 'Experience'.",
                    "Replace paragraphs with bullet points for readability.",
                    "Add a summary that highlights your career objectives and key skills.",
                    "Avoid using passive language.",
                    "Proofread for spelling and grammar errors.",
                    "Include a dedicated 'Projects' section with descriptions of your work.",
                    "List your technical skills clearly, distinguishing between languages, frameworks, and tools.",
                    "Ensure that your resume is saved in a professional file format like PDF to maintain formatting.",
                    "Remove any personal or irrelevant information that doesn't add value.",
                    "Choose a standard, professional font like Arial or Calibri.",
                    "Ensure your resume fits on a single page if you have less than 10 years of experience.",
                    "Quantify your achievements to show impact, even for small projects.",
                    "Provide a clear, professional email address and phone number.",
                    "Use a consistent date format (e.g., MM/YYYY)."
                ];
            }
            
            document.getElementById('ats-score-display').textContent = score;
            document.getElementById('ats-grade-display').textContent = grade;
            
            const improvementList = document.getElementById('improvement-list');
            improvementList.innerHTML = '';
            improvements.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                improvementList.appendChild(li);
            });

            if (atsChartInstance) {
                atsChartInstance.destroy();
            }

            const ctx = document.getElementById('ats-score-chart').getContext('2d');
            atsChartInstance = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['ATS Score', 'Remaining'],
                    datasets: [{
                        data: [score, 100 - score],
                        backgroundColor: ['#4f46e5', '#e5e7eb'],
                        borderWidth: 0,
                    }]
                },
                options: {
                    responsive: true,
                    plugins: { legend: { position: 'bottom' } },
                    cutout: '70%',
                }
            });

            document.getElementById('resume-report-modal').classList.remove('hidden');
        }

        document.getElementById('close-report-button').addEventListener('click', () => {
            document.getElementById('resume-report-modal').classList.add('hidden');
        });

        document.getElementById('download-report-button').addEventListener('click', async () => {
            const reportContent = document.getElementById('resume-report-content');
            const canvas = await html2canvas(reportContent, { scale: 2 });
            const imgData = canvas.toDataURL('image/png');
            
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            doc.save(`XLPower_Resume_Report.pdf`);
        });

        document.getElementById('view-results-button').addEventListener('click', () => {
            const savedResults = JSON.parse(localStorage.getItem('xlpower_results'));
            if (savedResults) {
                Object.assign(state, savedResults);
                navigateTo('results-page');
            } else {
                showMessage("No previous results found. Please take a test first.", 'error');
            }
        });
        
        // --- MCQ Test Logic ---
        let mcqTimeLeft = 30;
        function startMcqTimer() {
            mcqTimeLeft = 30;
            document.getElementById('mcq-timer-display').textContent = `${mcqTimeLeft}s`;
            state.mcqTimer = setInterval(() => {
                mcqTimeLeft--;
                document.getElementById('mcq-timer-display').textContent = `${mcqTimeLeft}s`;
                if (mcqTimeLeft <= 0) {
                    clearInterval(state.mcqTimer);
                    showMessage("Time's up! Moving to the next question.", 'error');
                    submitMcqAnswer();
                }
            }, 1000);
        }
        
        function submitMcqAnswer() {
            clearInterval(state.mcqTimer);
            if (state.mcqAnswers[state.currentQuestion] !== undefined && state.mcqAnswers[state.currentQuestion] === mcqQuestions[state.currentQuestion].answer) {
                state.mcqScore++;
            }
            state.currentQuestion++;
            renderPage();
        }

        function renderMcqQuestion() {
            const questionIndex = state.currentQuestion;
            if (questionIndex >= 10) {
                navigateTo('test-page-coding');
                return;
            }
            startMcqTimer();
            const q = mcqQuestions[questionIndex];
            document.getElementById('mcq-question-number').textContent = `Question ${questionIndex + 1} of 10`;
            document.getElementById('mcq-question').textContent = q.question;
            
            const optionsContainer = document.getElementById('mcq-options');
            optionsContainer.innerHTML = '';
            q.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('p-3', 'rounded-xl', 'border', 'border-gray-300', 'text-left', 'transition-all', 'hover:bg-gray-100', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500');
                button.onclick = () => {
                    document.querySelectorAll('#mcq-options button').forEach(btn => btn.classList.remove('bg-gray-200'));
                    button.classList.add('bg-gray-200');
                    state.mcqAnswers[questionIndex] = index;
                };
                optionsContainer.appendChild(button);
            });
            document.getElementById('mcq-progress').style.width = `${((questionIndex) / 10) * 100}%`;
        }
        
        document.getElementById('mcq-next-button').addEventListener('click', () => {
            if (state.mcqAnswers[state.currentQuestion] !== undefined) {
                showLoading();
                setTimeout(() => {
                    hideLoading();
                    submitMcqAnswer();
                }, 500);
            } else {
                showMessage("Please select an answer to continue.", 'error');
            }
        });

        // --- Coding Test Logic (Simulated) ---
        let currentCodingQuestionIndex = 0;
        let codingTimeLeft = 600; // 10 minutes

        function startCodingTimer() {
            codingTimeLeft = 600;
            const timerDisplay = document.getElementById('coding-timer-display');
            const updateTimer = () => {
                const minutes = Math.floor(codingTimeLeft / 60);
                const seconds = codingTimeLeft % 60;
                timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            };
            updateTimer();
            state.codingTimer = setInterval(() => {
                codingTimeLeft--;
                updateTimer();
                if (codingTimeLeft <= 0) {
                    clearInterval(state.codingTimer);
                    showMessage("Time's up for this coding question! Moving on.", 'error');
                    submitCodingAnswer(false);
                }
            }, 1000);
        }

        function submitCodingAnswer(isCorrect) {
            clearInterval(state.codingTimer);
            if (isCorrect) {
                state.codingScore++;
            }
            state.currentQuestion++;
            renderPage();
            document.getElementById('code-editor').value = '';
            document.getElementById('ide-output').textContent = 'Output will be displayed here...';
        }

        function renderCodingQuestion() {
            const questionIndex = state.currentQuestion - 10;
            if (questionIndex >= 2) {
                calculateAndStoreResults();
                navigateTo('results-page');
                return;
            }
            startCodingTimer();
            
            currentCodingQuestionIndex = questionIndex;
            const q = codingQuestions[questionIndex];
            document.getElementById('coding-progress').style.width = `${((questionIndex) / 2) * 100}%`;
            document.getElementById('coding-question-title').textContent = q.title;
            document.getElementById('coding-question-text').textContent = q.text;
            document.getElementById('coding-examples').textContent = q.examples;
        }

        document.getElementById('run-code-button').addEventListener('click', () => {
            const code = document.getElementById('code-editor').value;
            const output = document.getElementById('ide-output');
            
            showLoading();
            setTimeout(() => {
                hideLoading();
                const questionIndex = currentCodingQuestionIndex;
                const correct = codingQuestions[questionIndex].correctCode.some(c => code.includes(c));
                
                if (correct) {
                    output.textContent = 'Execution successful. All test cases passed!';
                } else {
                    output.textContent = 'Incorrect output. Please try again.';
                }
                state.codingAnswers[questionIndex] = correct;
            }, 1000);
        });
        
        document.getElementById('coding-submit-button').addEventListener('click', () => {
             document.getElementById('confirmation-modal').classList.remove('hidden');
        });

        document.getElementById('confirm-submit-button').addEventListener('click', () => {
            document.getElementById('confirmation-modal').classList.add('hidden');
            showLoading();
            setTimeout(() => {
                hideLoading();
                const questionIndex = currentCodingQuestionIndex;
                const isCorrect = state.codingAnswers[questionIndex] || false;
                submitCodingAnswer(isCorrect);
            }, 500);
        });

        document.getElementById('cancel-submit-button').addEventListener('click', () => {
            document.getElementById('confirmation-modal').classList.add('hidden');
        });

        // --- Results Logic ---
        let chartInstance = null;
        function calculateAndStoreResults() {
            const totalScore = state.mcqScore + state.codingScore;
            const totalPossible = 10 + 2;
            const percentage = (totalScore / totalPossible) * 100;
            
            let grade = '';
            if (percentage >= 80) grade = 'Excellent';
            else if (percentage >= 60) grade = 'Good';
            else if (percentage >= 40) grade = 'Average';
            else grade = 'Bad';

            state.percentage = percentage;
            state.grade = grade;

            // Save results to localStorage
            localStorage.setItem('xlpower_results', JSON.stringify({
                username: state.username,
                mcqScore: state.mcqScore,
                codingScore: state.codingScore,
                percentage: state.percentage,
                grade: grade
            }));
        }

        function renderResults() {
            document.getElementById('score-percentage').textContent = state.percentage.toFixed(0);
            document.getElementById('performance-grade').textContent = state.grade;
            document.getElementById('mcq-score-display').textContent = state.mcqScore;
            document.getElementById('coding-score-display').textContent = state.codingScore;

            if (chartInstance) {
                chartInstance.destroy();
            }

            const ctx = document.getElementById('results-pie-chart').getContext('2d');
            chartInstance = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Correct', 'Incorrect'],
                    datasets: [{
                        data: [state.percentage, 100 - state.percentage],
                        backgroundColor: ['#10b981', '#ef4444'],
                        borderWidth: 0,
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const label = context.label || '';
                                    const value = context.parsed;
                                    return `${label}: ${value.toFixed(0)}%`;
                                }
                            }
                        }
                    },
                    cutout: '70%',
                }
            });
        }
        
        document.getElementById('back-to-dashboard-button').addEventListener('click', () => {
            navigateTo('dashboard-page');
        });

        // --- Certificate Logic ---
        document.getElementById('download-certificate-button').addEventListener('click', async () => {
            document.getElementById('certificate-name-display').textContent = state.username;
            document.getElementById('certificate-grade-display').textContent = state.grade;
            document.getElementById('certificate-date').textContent = new Date().toLocaleDateString();
            
            const certificateModal = document.getElementById('certificate-modal');
            certificateModal.classList.remove('hidden');

            const certificateContent = document.getElementById('certificate-content');
            
            const canvas = await html2canvas(certificateContent, { scale: 2 });
            const imgData = canvas.toDataURL('image/png');
            
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4'
            });
            doc.addImage(imgData, 'PNG', 0, 0, 297, 210);
            doc.save(`${state.username}_XLPower_Certificate.pdf`);
            certificateModal.classList.add('hidden');
        });

        // --- General Utility ---
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // Initialize the app on page load
        document.addEventListener('DOMContentLoaded', () => {
            renderPage();
        });