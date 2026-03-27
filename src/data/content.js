export const portfolioData = {
  personal: {
    name: "Rahul Tyagi",
    role: "Full-Stack Developer & Software Engineer",
    email: "rahultyagiji6398@gmail.com",
    phone: "+91 7456893612",
    linkedin: "https://www.linkedin.com/in/the-rahul-tyagi/",
    github: "https://github.com/the-rahul-tyagi",
    twitter: "https://x.com/rt_rahultyagi", // Added from the new footer
    location: "Agra, Uttar Pradesh / Phagwara, Punjab",
    tagline: "Building scalable full-stack applications and solving complex algorithmic problems.",
    about: "I am a B.Tech Computer Science student at Lovely Professional University with an 8.03 CGPA. I specialize in Full-Stack Web Development (MERN, PHP) and have a strong foundation in algorithmic problem solving with Java and C++. I am passionate about integrating modern AI APIs into practical web applications and building high-performance systems."
  },
  
  skills: {
    languages: ["C++", "Java", "Python", "PHP", "JavaScript", "HTML5", "CSS3"],
    frameworks: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Streamlit"],
    databases: ["MySQL", "MongoDB", "SQL"],
    tools: ["Git", "GitHub", "Postman", "JWT", "REST APIs"],
    coreConcepts: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Cloud Computing", "Networking", "Generative AI Integration"]
  },

  projects: [
    {
      title: "Volunteer Registration System",
      date: "Nov 2025",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Gemini API"],
      description: [
        "Engineered an automated Node.js/MongoDB FIFO waitlist algorithm, eliminating manual overhead and maximizing event capacity.",
        "Architected a RESTful API with strict JWT-based Role-Based Access Control (RBAC) to secure sensitive admin and volunteer endpoints.",
        "Integrated Google Gemini API to autonomously generate SEO-friendly event descriptions and dynamically match volunteers by skill set."
      ],
      githubLink: "https://github.com/the-rahul-tyagi/volunteer-registration-system-rallypoint" 
    },
    {
      title: "UniProjectHub",
      date: "May 2025",
      techStack: ["PHP", "MySQL", "HTML5", "CSS3", "jQuery", "SQL"],
      description: [
        "Developed a PHP/MySQL collaborative platform enabling cross-university students to securely form teams and showcase portfolios.",
        "Fortified backend security against SQL injection using parameterized queries and implemented secure native PHP password hashing.",
        "Designed a normalized database schema, utilizing complex SQL JOINs to efficiently render dynamic university and project statistics."
      ],
      githubLink: "https://github.com/the-rahul-tyagi/UniProjectHubFinalPrject"
    },
    {
      title: "AI Study Buddy Pro",
      date: "Apr 2025",
      techStack: ["Python", "Streamlit", "Gemini 1.5 Pro", "Pillow"],
      description: [
        "Built a Python/Streamlit educational platform using Gemini 1.5 Pro to dynamically generate personalized study guides and adaptive MCQs.",
        "Implemented a multimodal Tutor Chat using the Pillow library, enabling users to upload images for real-time AI problem resolution.",
        "Engineered a comprehensive gamification system using Streamlit session-state to track study streaks, badges, and live XP leaderboards."
      ],
      githubLink: "https://github.com/the-rahul-tyagi/AI_Study_Buddy_Pro"
    }
  ],

  education: [
    {
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      score: "CGPA: 8.03",
      duration: "Aug 2023 - Present",
      status: "Current"
    },
    {
      institution: "New St. Stephens Public School",
      location: "Agra, Uttar Pradesh",
      degree: "Intermediate (Class XII) - PCM",
      score: "Percentage: 78.4%", 
      duration: "Mar 2021 - May 2022",
      status: "Completed"
    },
    {
      institution: "New St. Stephens Public School",
      location: "Agra, Uttar Pradesh",
      degree: "Matriculation (Class X)",
      score: "Percentage: 83.4%", 
      duration: "Mar 2019 - May 2020",
      status: "Completed"
    }
  ],

  achievements: [
    "Solved 100+ algorithmic problems on LeetCode.",
    "Secured a verified 5-Star Rating in Java, Python, and C++ on HackerRank.",
    "Earned 10+ skill badges on MongoDB Atlas & MongoDB University.",
    "Participated and built innovative solutions in the 'Code Off Duty' Web Hackathon (March 2024)."
  ],

  // Summarized list for general data mapping (Your actual Certifications page renders all 23 items beautifully)
  certifications: [
    { title: "Node.js (Intermediate) & Python (Basic)", issuer: "HackerRank" },
    { title: "Java (Basic) & Problem Solving (Basic)", issuer: "HackerRank" },
    { title: "Cloud Computing - Elite Certification", issuer: "NPTEL (IIT Kharagpur)" },
    { title: "Responsive Web Design", issuer: "freeCodeCamp" },
    { title: "Computer Programming & OOP in C++", issuer: "NeoColab (iamneo)" },
    { title: "Data Structures & Algorithms and Java", issuer: "NeoColab (iamneo)" },
    { title: "Generative AI Apps & Prompt Engineering", issuer: "Infosys Springboard" },
    { title: "7x Networking & Hardware Certifications", issuer: "Coursera (Google, IBM, Univ. of Colorado)" }
  ],

  training: [
    {
      title: "Mastering Java for Application Development",
      organization: "LPU HRDC",
      date: "Jun 2025 - Jul 2025",
      project: "Brick Breaker Game Engine",
      techStack: ["Core Java", "Swing/AWT", "OOPs"],
      details: "Completed a 50-hour intensive program. Engineered a real-time game engine utilizing a javax.swing.Timer driven loop (8ms tick rate). Developed custom 2D collision physics and GUI components."
    },
    {
      title: "Data Structures & Algorithms Summer Training",
      organization: "Lovely Professional University",
      date: "Jun 2025 - Jul 2025",
      project: "FastShow - Movie Booking App",
      techStack: ["DSA", "Time/Space Complexity", "Logic Optimization"],
      details: "Mastered linear and non-linear data structures, sorting/searching algorithms, recursion, and dynamic programming to vastly improve coding efficiency and problem-solving speed."
    }
  ],

  // =======================================================================
  // ULTIMATE CHATBOT DATA SECTION
  // The chatbot will use these robust strings to answer complex queries
  // =======================================================================
  chatbotData: {
    greetings: "👋 Hi! I'm Rahul's AI assistant. I can tell you about his Full-Stack projects (like his Volunteer System), his 8.03 CGPA at LPU, his massive library of 15+ certifications, his HackerRank 5-star ratings, or how to contact him. What would you like to know?",
    
    about: "Rahul is a Full-Stack Developer and B.Tech CSE student at Lovely Professional University (8.03 CGPA). He builds scalable web applications using the MERN stack and PHP, and he loves integrating AI like Google Gemini into his projects. He is also highly active in algorithmic problem-solving with Java and C++.",
    
    skills: "Rahul's core tech stack includes:\n💻 Languages: C++, Java, Python, PHP, JavaScript.\n🚀 Frameworks: React.js, Node.js, Express.js, Tailwind CSS.\n🗄️ Databases: MongoDB, MySQL.\nHe also has a deep understanding of Data Structures, OOP, and Networking, backed by 5-star HackerRank ratings in Java, Python, and C++!",
    
    projects: "Rahul has built several high-impact projects:\n1. 'Volunteer Registration System' (MERN + Gemini API) featuring an automated waitlist algorithm and RBAC.\n2. 'UniProjectHub' (PHP/MySQL), a secure collaboration platform for students.\n3. 'AI Study Buddy Pro' (Python/Streamlit) which uses Gemini 1.5 Pro for dynamic study guides and multimodal image chat.\nWant a link to his GitHub? It's github.com/the-rahul-tyagi",
    
    education: "Rahul is currently pursuing his B.Tech in Computer Science at Lovely Professional University (LPU) in Phagwara, maintaining an 8.03 CGPA. He completed his Intermediate (PCM) with 78.4% and Matriculation with 83.4% from New St. Stephens Public School in Agra.",
    
    experience_training: "Rahul has completed two major rigorous training programs at LPU:\n1. A 50-hour 'Mastering Java' course where he built a 2D Brick Breaker game engine from scratch using Core Java and custom collision physics.\n2. An intensive 'Data Structures & Algorithms' summer training focused on time/space complexity, dynamic programming, and advanced problem-solving.",
    
    achievements_certs: "Rahul's credentials are incredible! He has solved 100+ problems on LeetCode and has 15+ professional certifications. These include HackerRank certs in Node.js, Python, and Java; an Elite Cloud Computing cert from NPTEL; AI & Prompt Engineering from Infosys; and 7 separate Networking/Hardware certs from Coursera (Google, IBM, Univ. of Colorado).",
    
    contact: "It's easy to get in touch with Rahul!\n📧 Email: rahultyagiji6398@gmail.com\n📞 Phone/WA: +91 7456893612\n💼 LinkedIn: linkedin.com/in/the-rahul-tyagi\n🐦 X (Twitter): x.com/rt_rahultyagi\n💻 GitHub: github.com/the-rahul-tyagi"
  }
};