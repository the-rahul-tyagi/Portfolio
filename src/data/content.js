export const portfolioData = {
  personal: {
    name: "Rahul Tyagi", // [cite: 1]
    role: "Full-Stack Developer & UI/UX Enthusiast",
    email: "rahultyagiji6398@gmail.com", // [cite: 12]
    phone: "+91 7456893612", // [cite: 12]
    linkedin: "https://www.linkedin.com/in/the-rahul-tyagi/", // [cite: 2]
    github: "https://github.com/the-rahul-tyagi", // [cite: 2]
    tagline: "Building scalable web applications and seamless user experiences."
  },
  skills: {
    languages: ["C++", "Java", "Python", "PHP", "JavaScript", "HTML/CSS"], // [cite: 9]
    frameworks: ["React.js", "Express.js", "Tailwind CSS"], // [cite: 9]
    tools: ["Node.js", "MySQL", "MongoDB", "Git", "GitHub"], // [cite: 10]
    softSkills: ["Adaptability", "Time Management", "Team Player"] // [cite: 11]
  },
  projects: [
    {
      title: "Volunteer Registration System", // [cite: 13]
      date: "Nov 2025", // [cite: 15]
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"], // [cite: 13]
      description: [
        "Engineered an automated Node.js/MongoDB FIFO waitlist algorithm, eliminating manual overhead and maximizing event capacity.", // [cite: 16]
        "Architected a RESTful API with strict JWT-based Role-Based Access Control (RBAC) to secure sensitive admin and volunteer endpoints.", // [cite: 17]
        "Integrated Google Gemini API to autonomously generate SEO-friendly event descriptions and dynamically match volunteers by skill set." // [cite: 18]
      ],
      githubLink: "#" // Replace with actual URL
    },
    {
      title: "UniProjectHub", // [cite: 19]
      date: "May 2025", // [cite: 20]
      techStack: ["PHP", "MySQL", "HTML5", "CSS3", "jQuery", "SQL"], // [cite: 19]
      description: [
        "Developed a PHP/MySQL collaborative platform enabling cross-university students to securely form teams and showcase portfolios.", // [cite: 21]
        "Fortified backend security against SQL injection using parameterized queries and implemented secure native PHP password hashing.", // [cite: 22]
        "Designed a normalized database schema, utilizing complex SQL JOINs to efficiently render dynamic university and project statistics." // [cite: 23]
      ],
      githubLink: "#"
    },
    {
      title: "AI Study Buddy Pro", // [cite: 24]
      date: "Apr 2025", // [cite: 25]
      techStack: ["Python", "Streamlit", "Google Generative AI"], // [cite: 24]
      description: [
        "Built a Python/Streamlit educational platform using Gemini 1.5 Pro to dynamically generate personalized study guides and adaptive MCQs.", // [cite: 26]
        "Implemented a multimodal Tutor Chat using the Pillow library, enabling users to upload images for real-time AI problem resolution.", // [cite: 27]
        "Engineered a comprehensive gamification system using Streamlit session-state to track study streaks, badges, and live XP leaderboards." // [cite: 28]
      ],
      githubLink: "#"
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
    "Solved 100+ problems on LeetCode", // [cite: 42]
    "Secured a 5 Rating in Java, Python and CPP on HackerRank", // [cite: 43]
    "Earned 10+ skill badges on MongoDB Atlas & MongoDB University" // [cite: 44]
  ],
  certifications: [
    {
      title: "Node.js",
      issuer: "HackerRank",
    },
    {
      title: "Python",
      issuer: "HackerRank",
    },
    {
      title: "Cloud Computing - Elite Certification",
      issuer: "NPTEL (IIT Kharagpur)",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
    }
  ],
  training: [
    {
      title: "Brick Breaker Game", // [cite: 31]
      date: "Jun 2025 - Jul 2025", // [cite: 32]
      details: "Engineered a real-time game engine utilizing a javax.swing.Timer driven loop. Developed custom 2D collision physics using Rectangle bounding box intersections." // [cite: 33, 35]
    }
  ]
};