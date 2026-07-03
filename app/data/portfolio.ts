export const portfolioData = {
    profileImage: "/images/ProfileImage.jpg", // Add your image to public/images/ProfileImage.jpg
    resumeUrl: "https://drive.google.com/file/d/117bXu0bI0lZyFGVzSTPkunNHjJVR05kb/view?usp=share_link", // Add your resume to public/Resume_of_Sahil_Adhav.pdf
    projects: [
        {
            id: 4,
            title: "AI Beginner Gym Plan Generator",
            category: "AI Product & Development",
            images: [
                "/images/projects/project-4/image1.png",
                "/images/projects/project-4/image2.png",
                "/images/projects/project-4/image3.png"
            ],
            summary: "Built and shipped a live, AI-powered web app that turns three simple questions (goal, weekly availability, experience level) into a safe, encouraging beginner starting plan, with built-in guardrails against extreme diet or overtraining advice.",
            challenge: "Gym beginners often quit early — they don't know how to start, overdo it, get sore, and stop. Existing apps overwhelm rather than gently onboard them.",
            solution: "Built and shipped a live, AI-powered web app that turns three simple questions (goal, weekly availability, experience level) into a safe, encouraging beginner starting plan, with built-in guardrails against extreme diet or overtraining advice.",
            impact: "Shipped end-to-end from prototype to production; diagnosed and fixed a real production failure by re-architecting the AI integration from a vendor gateway to a direct API call with securely managed environment variables, then redesigned the interface using a safe Git feature-branch workflow.",
            highlights: [],
            techStack: ["React", "TypeScript", "Claude Code", "Google Gemini API", "Vercel", "Git", "Lovable"],
            demoUrl: "https://workout-form-pro.vercel.app",
            githubUrl: "https://github.com/sahiladhav/workout-form-pro"
        },
        {
            id: 1,
            title: "Anti-Theft Tracking System",
            category: "Product Development",
            images: [
                "/images/projects/project-1/image1.png",
                "/images/projects/project-1/image2-workflow.png",
                "/images/projects/project-1/image3.png"
            ],
            summary: "A low-cost, compact IoT security solution designed for real-time asset monitoring and the protection of vulnerable individuals like children or the mentally challenged. It integrates a microcontroller with GSM and GPS/GNSS modules to transmit location coordinates via SMS, which are then visualized on a custom Google Maps web interface. The device is engineered in a portable wearable form factor, bridging hardware-level sensing with cloud-based visualization for immediate oversight.",
            challenge: "Existing tracking solutions are often prohibitively expensive, possess limited coverage areas, or involve complex operations that are not tailored for specialized caregiver needs.",
            solution: "Engineered a compact system using the ATmega328P microcontroller and A7672 SoC to deliver high-precision tracking and automated alerts via cellular and satellite networks.",
            impact: "Successfully verified tracking performance across various ranges up to 13km, providing a reliable safety tool that reduces the risk of loss for assets and individuals.",
            highlights: [
                "End-to-end product lifecycle management",
                "Low-cost design under budget constraints",
                "Real-time GPS tracking implementation",
                "Battery-efficient power management"
            ],
            techStack: ["C++", "Arduino", "Microcontrollers", "IoT", "GPS", "Google Maps API", "SMS Protocol"],
            githubUrl: "https://github.com/sahiladhav/Anti-Theft-Tracking-Device",
        },

        {
            id: 3,
            title: "Predictive Analysis of Bike-Sharing Demand",
            category: "Data Analytics",
            images: [
                "/images/projects/project-3/image1.png",
                "/images/projects/project-3/image2.png",
                "/images/projects/project-3/image3.png"
            ],
            summary: "Conducted an end-to-end data analysis of the UCI Bike Sharing dataset to uncover environmental and seasonal drivers of urban mobility demand. By leveraging statistical modeling and visualization, the project provides stakeholders with actionable insights for fleet optimization and maintenance scheduling. The study highlights how temperature and seasonality dictate service utilization, enabling data-driven operational decisions.",
            challenge: "Deciphering the non-linear impact of weather variables on bike rental volume to predict demand surges and lulls.",
            solution: "Implemented a multiple linear regression framework combined with extensive EDA and correlation mapping to quantify predictive features.",
            impact: "Demonstrated that temperature is the most critical driver of demand while revealing a significant organic growth trend in the service.",
            highlights: [
                "End-to-end workflow automation",
                "Scalable Python framework design",
                "Automated reporting and VSM",
                "Cross-functional impact"
            ],
            techStack: ["Python", "Pandas", "Numpy", "Matplotlib", "Statistical Modeling", "Linear Regression"],
            githubUrl: "https://github.com/sahiladhav/Data-Analysis-EDA-Hypothesis-and-Linear-Regression-"
        }
    ],
    targetedRoles: [
        "Product Manager",
        "Product Marketing Manager"
    ],
    about: {
        bio: "Hello, I am Sahil Adhav. I am an Engineering Management, M.S. candidate at San José State University, with a background in Electronics and Telecommunication. I specialize in bridging the gap between technical engineering and business operations through data-driven process optimization and lean methodologies. With experience in cross-functional program analysis and product-focused projects, I am passionate about building efficient systems and scalable products.",
        education: [
            {
                year: "2025 - Present",
                degree: "M.S. in Engineering Management",
                school: "San José State University",
                description: "Specializing in Process Optimization and Lean Methodologies."
            },
            {
                year: "2019 - 2023",
                degree: "B.E. in Electronics & Telecommunication",
                school: "Savitribai Phule Pune University",
                description: "Foundation in technical engineering principles."
            }
        ],
        experience: [
            {
                year: "2023 - 2025",
                role: "Programmer Analyst",
                company: "Cognizant",
                description: "Resolved high-frequency technical cases by applying root-cause analysis and user feedback to enhance application performance."
            },
            {
                year: "2021 - 2022",
                role: "Omni Sports Leader",
                company: "Decathlon Sports",
                description: "Managed end-to-end retail operations and inventory optimization to drive results during high-traffic Q4 cycles."
            }
        ]
    },
    skills: [
        {
            category: "Processes",
            items: [
                { name: "Lean/5S" },
                { name: "Six Sigma (DMAIC)" },
                { name: "Kaizen" },
                { name: "VSM" },
                { name: "Kanban" },
                { name: "Supply Chain Planning" },
                { name: "SOPs" }
            ]
        },
        {
            category: "Product",
            items: [
                { name: "PRDs" },
                { name: "User Stories & Epics" },
                { name: "Funnel & Conversion Analysis" },
                { name: "A/B Test Design" },
                { name: "Success Metrics & Instrumentation" },
                { name: "Roadmapping" },
                { name: "Stakeholder Alignment" },
                { name: "Go-to-Market (GTM)" },
                { name: "Competitive Analysis" }
            ]
        },
        {
            category: "Programming",
            items: [
                { name: "Python", icon: "python" },
                { name: "C#/.NET", icon: "dotnet" },
                { name: "Angular", icon: "angular" },
                { name: "TypeScript", icon: "typescript" },
                { name: "C++", icon: "cplusplus" },
                { name: "HTML", icon: "html5" },
                { name: "CSS", icon: "/logos/css.png" }
            ]
        },
        {
            category: "Database",
            items: [
                { name: "SQL (joins, validation)", icon: "mysql" },
                { name: "R", icon: "r" },
                { name: "Microsoft Excel", icon: "/logos/excel.png" },
                { name: "Power BI (basic)", icon: "/logos/powerbi.png" },
                { name: "SharePoint", icon: "/logos/sharepoint.png" }
            ]
        },
        {
            category: "Tools",
            items: [
                { name: "ServiceNow" },
                { name: "GTM", icon: "googletagmanager" },
                { name: "Jira", icon: "jira" },
                { name: "Confluence", icon: "confluence" },
                { name: "VS Code" },
                { name: "Azure" },
                { name: "Outlook" }
            ]
        }
    ],
    contact: {
        email: "sahilvadhav@gmail.com",
        web3formsKey: "1395bb2a-0067-401c-8925-c10823831478", // Get yours from https://web3forms.com/
        //phone: "+1 (408) 555-0123", // Placeholder
        socialLinks: [
            {
                platform: "LinkedIn",
                url: "https://www.linkedin.com/in/sahil-adhav/",
            },
            {
                platform: "GitHub",
                url: "https://github.com/sahiladhav",
            },
            {
                platform: "X",
                url: "https://x.com/SahilAdhav8", // Paste your X link here
            },
            {
                platform: "Resume",
                url: "https://drive.google.com/file/d/117bXu0bI0lZyFGVzSTPkunNHjJVR05kb/view?usp=share_link",
            }
        ]
    },
    interests: {
        sports: [
            { name: "Football (Soccer)", icon: "⚽", image: "/images/interests/sports/football.png" },
            { name: "Formula 1", icon: "🏎️", image: "/images/interests/sports/f1.png" },
            { name: "Tennis", icon: "🎾", image: "/images/interests/sports/tennis.png" },
            { name: "Cricket", icon: "🏏", image: "/images/interests/sports/cricket.png" }
        ],
        media: [
            { title: "Zindagi Na Milegi Dobara", type: "Movie", image: "/images/interests/media/znmd.png" },
            { title: "Goodfellas", type: "Movie", image: "/images/interests/media/goodfellas.png" },
            { title: "Breaking Bad", type: "Series", image: "/images/interests/media/breaking-bad.png" },
            { title: "Better Call Saul", type: "Series", image: "/images/interests/media/better-call-saul.jpg" }
        ]
    }
};
