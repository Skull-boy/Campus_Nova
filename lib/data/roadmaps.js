// Roadmaps organized by year and domain
export const roadmapsByYear = {
    '1st Year': [
        {
            id: 'fy-fundamentals',
            title: 'Programming Fundamentals',
            description: 'Build a strong foundation in programming and computer science basics',
            domain: 'All',
            timeline: 'Semester 1-2',
            milestones: [
                { month: 'Month 1-2', task: 'Learn C/C++ basics, variables, loops, functions', resources: ['GeeksforGeeks', 'CodeChef'] },
                { month: 'Month 3-4', task: 'Master arrays, strings, and pointers', resources: ['HackerRank', 'LeetCode Easy'] },
                { month: 'Month 5-6', task: 'Introduction to Data Structures (Stack, Queue, LinkedList)', resources: ['YouTube - Abdul Bari'] },
                { month: 'Month 7-8', task: 'Start competitive programming, solve 50+ problems', resources: ['Codeforces Div 3'] },
            ],
        },
        {
            id: 'fy-web-intro',
            title: 'Web Development Basics',
            description: 'Start your web development journey with HTML, CSS, and JavaScript',
            domain: 'CSE/IT',
            timeline: 'Semester 2',
            milestones: [
                { month: 'Week 1-2', task: 'Learn HTML5 and semantic markup', resources: ['MDN Web Docs', 'freeCodeCamp'] },
                { month: 'Week 3-4', task: 'Master CSS3, Flexbox, and Grid', resources: ['CSS Tricks', 'Flexbox Froggy'] },
                { month: 'Week 5-7', task: 'JavaScript fundamentals and DOM manipulation', resources: ['JavaScript.info'] },
                { month: 'Week 8', task: 'Build your first portfolio website', resources: ['GitHub Pages'] },
            ],
        },
    ],
    '2nd Year': [
        {
            id: 'sy-dsa',
            title: 'Data Structures & Algorithms Mastery',
            description: 'Deep dive into DSA for placements and competitive programming',
            domain: 'All',
            timeline: 'Full Year',
            milestones: [
                { month: 'Month 1-3', task: 'Trees, Graphs, and their traversals', resources: ['Striver A2Z DSA Sheet'] },
                { month: 'Month 4-6', task: 'Dynamic Programming fundamentals', resources: ['Aditya Verma DP Playlist'] },
                { month: 'Month 7-9', task: 'Advanced algorithms (Greedy, Backtracking)', resources: ['LeetCode Medium/Hard'] },
                { month: 'Month 10-12', task: 'Solve 300+ problems, participate in contests', resources: ['Codeforces, CodeChef'] },
            ],
        },
        {
            id: 'sy-fullstack',
            title: 'Full Stack Development',
            description: 'Become a full stack developer with MERN/MEAN stack',
            domain: 'CSE/IT',
            timeline: 'Full Year',
            milestones: [
                { month: 'Month 1-3', task: 'Master React.js or Angular', resources: ['React Official Docs', 'Udemy'] },
                { month: 'Month 4-6', task: 'Learn Node.js, Express, and REST APIs', resources: ['NodeSchool', 'YouTube'] },
                { month: 'Month 7-9', task: 'Database design with MongoDB/MySQL', resources: ['MongoDB University'] },
                { month: 'Month 10-12', task: 'Build 3 full stack projects', resources: ['Deploy on Vercel/Heroku'] },
            ],
        },
    ],
    '3rd Year': [
        {
            id: 'ty-specialization',
            title: 'Domain Specialization',
            description: 'Choose your specialization: AI/ML, Cloud, Mobile, etc.',
            domain: 'All',
            timeline: 'Semester 1-2',
            milestones: [
                { month: 'Month 1-2', task: 'Research different domains and career paths', resources: ['LinkedIn', 'Medium Articles'] },
                { month: 'Month 3-5', task: 'Take online courses in chosen domain', resources: ['Coursera', 'edX'] },
                { month: 'Month 6-8', task: 'Build 2-3 advanced projects in your domain', resources: ['GitHub', 'Kaggle'] },
                { month: 'Month 9-12', task: 'Contribute to open source, write blogs', resources: ['Dev.to', 'Hashnode'] },
            ],
        },
        {
            id: 'ty-internship',
            title: 'Internship Preparation',
            description: 'Prepare for and secure summer internships',
            domain: 'All',
            timeline: 'Full Year',
            milestones: [
                { month: 'Month 1-3', task: 'Polish resume, LinkedIn, and GitHub', resources: ['Overleaf Resume Templates'] },
                { month: 'Month 4-6', task: 'Practice DSA, solve company-specific questions', resources: ['Interview Bit', 'GFG'] },
                { month: 'Month 7-9', task: 'Apply to 50+ companies, attend career fairs', resources: ['Internshala', 'LinkedIn Jobs'] },
                { month: 'Month 10-12', task: 'Interview prep: mock interviews, case studies', resources: ['Pramp', 'Peers'] },
            ],
        },
    ],
    '4th Year': [
        {
            id: 'fy-placement',
            title: 'Placement Preparation',
            description: 'Final sprint for campus placements',
            domain: 'All',
            timeline: 'Semester 1',
            milestones: [
                { month: 'Month 1-2', task: 'Revise all DSA topics, solve previous year questions', resources: ['Company-wise Problems'] },
                { month: 'Month 3-4', task: 'Practice system design and OOPS concepts', resources: ['System Design Primer'] },
                { month: 'Month 5-6', task: 'Mock interviews, aptitude tests, HR prep', resources: ['PrepInsta', 'Ambitionbox'] },
                { month: 'Month 7-8', task: 'Attend placements, ace interviews!', resources: ['Stay Confident!'] },
            ],
        },
        {
            id: 'fy-higher-studies',
            title: 'Higher Studies Path',
            description: 'Prepare for MS/MBA or competitive exams',
            domain: 'All',
            timeline: 'Full Year',
            milestones: [
                { month: 'Month 1-3', task: 'Decide: GRE/GMAT/GATE? Research universities', resources: ['Yocket', 'GradCafe'] },
                { month: 'Month 4-6', task: 'Prepare for standardized tests', resources: ['Magoosh', 'Manhattan Prep'] },
                { month: 'Month 7-9', task: 'Work on SOP, LORs, application essays', resources: ['r/gradadmissions'] },
                { month: 'Month 10-12', task: 'Apply to universities, prepare for interviews', resources: ['University Portals'] },
            ],
        },
    ],
}

export const yearTabs = ['1st Year', '2nd Year', '3rd Year', '4th Year']
