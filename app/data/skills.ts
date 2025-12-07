export type SkillCategory = {
    category: string
    skills: string[]
}

export const mySkills: SkillCategory[] = [
    {
        category: "Programming Languages",
        skills: ["Python", "C/C++", "Java", "JavaScript", "R"]
    },
    {
        category: "Machine Learning, AI & NLP",
        skills: [
            "Machine Learning", "Deep Learning", "Generative AI (LLMs/GPT)",
            "Hugging Face Transformers", "LangChain", "RNNs", "YOLOv8",
            "Computer Vision", "Ultralytics", "TorchVision"
        ]
    },
    {
        category: "Data Science & Analytics",
        skills: [
            "Pandas", "NumPy", "PySpark", "Scikit-learn",
            "Matplotlib", "Seaborn", "Tableau", "Power BI", "Google Analytics"
        ]
    },
    {
        category: "Frameworks & Libraries",
        skills: [
            "TensorFlow", "PyTorch", "OpenCV", "Flask", "Django",
            "Streamlit", "React.js", "Bootstrap", "Swing", "Tkinter"
        ]
    },
    {
        category: "Web & Application Development",
        skills: [
            "HTML5", "CSS3", "Node.js", "REST API Integration",
            "Responsive UI Design", "PHP"
        ]
    },
    {
        category: "Databases & Cloud",
        skills: [
            "MySQL", "PostgreSQL", "MongoDB", "Oracle",
            "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)",
            "SQL Query Optimization", "Relational Database Design"
        ]
    },
    {
        category: "DevOps & Tools",
        skills: [
            "Git", "GitHub", "Docker", "CI/CD Pipelines",
            "Postman", "Jupyter Notebook", "Linux", "VS Code"
        ]
    },
    {
        category: "Software Engineering Concepts",
        skills: [
            "OOP", "Data Structures & Algorithms",
            "Agile Methodologies", "SDLC", "Unit Testing"
        ]
    }
]
