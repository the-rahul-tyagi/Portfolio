export const portfolioData = {
  personal: {
    name: "Rahul Tyagi",
    role: "Full-Stack Developer & DSA Enthusiast",
    email: "rahultyagiji6398@gmail.com",
    phone: "+91 7456893612",
    linkedin: "https://www.linkedin.com/in/the-rahul-tyagi/",
    github: "https://github.com/the-rahul-tyagi",
    location: "Agra, Uttar Pradesh / Jalandhar, Punjab",
    tagline: "Building scalable full-stack applications and solving complex algorithmic problems.",
    about: "I am a B.Tech Computer Science student at Lovely Professional University with an 8.03 CGPA. I specialize in Full-Stack Web Development (MERN, PHP) and have a strong foundation in algorithmic problem solving with Java and C++. I am passionate about integrating modern AI APIs into practical web applications."
  },
  
  skills: {
    languages: ["C++", "Java", "Python", "PHP", "JavaScript", "HTML/CSS"],
    frameworks: ["React.js", "Express.js", "Tailwind CSS", "Streamlit"],
    tools: ["Node.js", "MySQL", "MongoDB", "Git", "GitHub"],
    softSkills: ["Adaptability", "Time Management", "Team Player"]
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
      duration: "Aug 2023 - Present"
    },
    {
      institution: "New St. Stephens Public School",
      location: "Agra, Uttar Pradesh",
      degree: "Intermediate; PCM",
      score: "Percentage: 78.4%", 
      duration: "Mar 2021 - May 2022" 
    },
    {
      institution: "New St. Stephens Public School",
      location: "Agra, Uttar Pradesh",
      degree: "Matriculation",
      score: "Percentage: 83.4%", 
      duration: "Mar 2019 - May 2020" 
    }
  ],

  achievements: [
    "Solved 100+ problems on LeetCode.",
    "Secured a 5-Star Rating in Java, Python and C++ on HackerRank.",
    "Earned 10+ skill badges on MongoDB Atlas & MongoDB University."
  ],

  certifications: [
    { title: "Node.js Architecture", issuer: "HackerRank" },
    { title: "Python Problem Solving", issuer: "HackerRank" },
    { title: "Cloud Computing - Elite Certification", issuer: "NPTEL (IIT Kharagpur)" },
    { title: "Responsive Web Design", issuer: "freeCodeCamp" },
    { title: "Java Basic", issuer: "HackerRank" },
    { title: "Problem Solving Basic", issuer: "HackerRank" }
  ],

  training: [
    {
      title: "Mastering Java for App Development",
      organization: "LPU HRDC",
      date: "Jun 2025 - Jul 2025",
      project: "Brick Breaker Game",
      techStack: ["Core Java", "Swing/AWT", "OOP"],
      details: "Engineered a real-time game engine utilizing a javax.swing.Timer driven loop (8ms tick rate). Architected a scalable Object-Oriented system and developed custom 2D collision physics using Rectangle bounding box intersections."
    }
  ],

  // =======================================================================
  // NEW CHATBOT DATA SECTION
  // The chatbot component will read these exact strings to answer questions
  // =======================================================================
  chatbotData: {
    greetings: "👋 Hi! I'm Rahul's AI assistant. I can tell you all about his Full-Stack projects, his 8.03 CGPA at LPU, his 5-star HackerRank skills, or how to contact him. What would you like to know?",
    
    about: "Rahul is a Full-Stack Developer and B.Tech CSE student at Lovely Professional University (8.03 CGPA). He builds scalable web applications using the MERN stack and PHP, and he integrates AI like Google Gemini into his projects. He is also highly active in algorithmic problem-solving with Java and C++.",
    
    skills: "Rahul is proficient in Languages: C++, Java, Python, PHP, JavaScript, HTML/CSS. Frameworks: React.js, Express.js, Tailwind CSS. Tools & Databases: Node.js, MySQL, MongoDB, Git, and GitHub. He also has a 5-star rating in Java, Python, and C++ on HackerRank!",
    
    projects: "Rahul has 3 major projects:\n1. 'Volunteer Registration System' (MERN + Gemini API) with a custom waitlist algorithm.\n2. 'UniProjectHub' (PHP/MySQL), a secure collaboration platform.\n3. 'AI Study Buddy Pro' (Python/Streamlit + Gemini 1.5 Pro) for dynamic study guides. Want a link to any of his GitHub repos?",
    
    education: "Rahul is currently pursuing his B.Tech in Computer Science at Lovely Professional University (LPU) in Phagwara, maintaining an 8.03 CGPA. Previously, he completed his Intermediate (PCM) with 78.4% and Matriculation with 83.4% from New St. Stephens Public School in Agra.",
    
    experience_training: "Rahul completed an intensive training program called 'Mastering Java for App Development' at LPU HRDC in mid-2025. During this, he built a complete 2D Brick Breaker game engine from scratch using Core Java, Swing/AWT, and custom collision physics.",
    
    achievements_certs: "Rahul has solved over 100+ problems on LeetCode and holds 5-star ratings in Java, Python, and C++ on HackerRank. He also holds Elite Certification in Cloud Computing from NPTEL (IIT Kharagpur) and various certifications in Node.js, Python, and Web Design from HackerRank and freeCodeCamp.",
    
    contact: "You can email Rahul directly at rahultyagiji6398@gmail.com, or call/WhatsApp him at +91 7456893612. His LinkedIn is linkedin.com/in/the-rahul-tyagi and his GitHub is github.com/the-rahul-tyagi."
  }
};