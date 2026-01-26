export const portfolioData = {
    profileImage: "/images/ProfileImage.jpg", // Add your image to public/images/ProfileImage.jpg
    resumeUrl: "/Resume_of_Sahil_Adhav.pdf", // Add your resume to public/Resume_of_Sahil_Adhav.pdf
    projects: [
        {
            id: 1,
            title: "Anti-Theft Tracking System",
            category: "Product Development",
            images: [
                "/images/projects/project-1/image1.png",
                "/images/projects/project-1/image2.png",
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
            id: 2,
            title: "Supply Chain Optimization Project",
            category: "Operations & Analytics",
            images: [
                "/images/projects/project-2/image1.png",
                "/images/projects/project-2/image2.png",
                "/images/projects/project-2/image3.png"
            ],
            summary: "Optimized a nutritional product manufacturer's production and supply chain by developing a holistic framework integrating demand forecasting, Master Production Scheduling (MPS), and Material Requirements Planning (MRP). The project involved creating tailored forecast models for five distinct product lines to manage varying demand structures and accurately identify material flow timing. By applying capacity planning and ProModel simulation, the study addressed critical operational imbalances and established a sustainable, data-driven planning structure.",
            challenge: "Facing declining profitability after patent expiration, characterized by chronic backorders, high work-in-progress (WIP) levels, and a machinery layout insufficient to meet peak demand.",
            solution: "Developed a multi-layered system implementing advanced forecasting (Combined Theta, STR), optimized Level aggregate plans, and simulation-based scheduling to manage bottlenecks.",
            impact: "Engineered a production system that met all forecasted demand with zero backorders and achieved a 42% reduction in cycle times for critical sub-products through optimized scheduling",
            highlights: [
                "Lean/5S methodology implementation",
                "Data-driven demand forecasting",
                "Process optimization and VSM",
                "Real-time inventory dashboards"
            ],
            techStack: ["Excel", "ProModel", "MRP", "MPS", "Demand Forecasting", "Capacity Planning"],
            projectUrl: "/Supply_Chain_Report.pdf",
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
        "Supply Chain Analyst",
        "Operations Manager",
        "Project Manager"
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
                { name: "Gemba" },
                { name: "Kaizen" },
                { name: "Six Sigma (DMAIC)" },
                { name: "Kanban" },
                { name: "Scrum" },
                { name: "VSM" },
                { name: "SOPs" },
                { name: "Supply Chain Planning" },
                { name: "Sprint Planning" },
                { name: "JIT (just-in-time)" },
                { name: "Data Visualization" },
                { name: "ERP (basics)" },
                { name: "Tableau", icon: "tableau" }
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
                { name: "CSS", icon: "css3" }
            ]
        },
        {
            category: "Database",
            items: [
                { name: "SQL (joins, validation)", icon: "mysql" },
                { name: "R", icon: "r" },
                { name: "Microsoft Excel", icon: "microsoftexcel" },
                { name: "Power BI (basic)", icon: "powerbi" },
                { name: "SharePoint", icon: "sharepoint" }
            ]
        },
        {
            category: "Tools",
            items: [
                { name: "ServiceNow", icon: "servicenow" },
                { name: "GTM", icon: "googletagmanager" },
                { name: "Jira", icon: "jira" },
                { name: "Confluence", icon: "confluence" },
                { name: "VS Code", icon: "visualstudiocode" },
                { name: "Azure", icon: "azure" },
                { name: "Outlook", icon: "microsoftoutlook" }
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
                url: "/Resume_of_Sahil_Adhav.pdf",
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
