import { StaticImageData } from "next/image"
import iaoPreview from "@/app/images/iao-preview-v2.webp"
import bespokePreview from "@/app/images/bespoke-preview-v2.webp"
import automedicsPreview from "@/app/images/automedics-preview-v2.webp"
import complianceAiPreview from "@/public/assets/compliance-ai-v4.jpg"
import marketResearchPreview from "@/public/assets/market-research-dashboard-v2.jpg"
import cloudFeedbackPreview from "@/public/assets/cloud-feedback-platform-v2.jpg"
import stockForecastingPreview from "@/public/assets/stock-forecasting-v2.png"
import crimeDetectionPreview from "@/public/assets/crime-detection.jpg"
import reactZeroUIPreview from "@/app/images/react-zero-ui-preview.jpg"

import smartAttendancePreview from "@/public/assets/smart-attendance.jpg"

import customerChatbotPreview from "@/public/assets/customer-chatbot.jpg"

// Reusing existing images as placeholders
const images = [reactZeroUIPreview, bespokePreview, automedicsPreview, iaoPreview]

export type ProjectItem = {
    id: string
    title: string
    description: string
    techStack: string
    type: string
    color: string
    image: StaticImageData
    href: string // GitHub link
    dataText: string
}

export const myProjects: ProjectItem[] = [
    {
        id: "smart-attendance",
        title: "Smart Attendance System",
        description: "AI-based face recognition system automating attendance tracking and reducing manual effort by 50% with >80% accuracy.",
        techStack: "Python, CNN, OpenCV",
        type: "Face Recognition",
        color: "#3B06D1",
        image: smartAttendancePreview,
        href: "", // Insert GitHub Link Here
        dataText: "View on GitHub"
    },
    {
        id: "chatbot",
        title: "AI-Powered Customer Support Chatbot",
        description: "Built an intelligent chatbot using BERT for intent classification (90% accuracy) and GPT-based response generation.",
        techStack: "Python, NLP, Transformers, Azure, REST API",
        type: "Conversational AI",
        color: "#024EFC",
        image: customerChatbotPreview,
        href: "", // Insert GitHub Link Here
        dataText: "View on GitHub"
    },
    {
        id: "market-research",
        title: "Automated Market Research Dashboard",
        description: "Automated competitor data aggregation and Power BI visualization, cutting manual reporting effort by 70%.",
        techStack: "Python, BeautifulSoup, Flask, MySQL, Power BI",
        type: "Data Analytics",
        color: "#DA961A",
        image: marketResearchPreview,
        href: "", // Insert GitHub Link Here
        dataText: "View on GitHub"
    },
    {
        id: "compliance-ai",
        title: "ComplianceAI",
        description: "Automated document analysis and regulatory risk scoring using GPT-4o and NLP.",
        techStack: "Python, LangChain, Streamlit, OpenAI API, MongoDB",
        type: "GenAI & NLP",
        color: "#13739C",
        image: complianceAiPreview,
        href: "", // Insert GitHub Link Here
        dataText: "View on GitHub"
    },
    {
        id: "feedback-platform",
        title: "Cloud-Based Feedback Platform",
        description: "Serverless feedback analytics platform with sentiment classification and Power BI dashboards.",
        techStack: "Python, AWS Lambda, Node.js, MongoDB, Scikit-learn",
        type: "Cloud & Analytics",
        color: "#3B06D1",
        image: cloudFeedbackPreview,
        href: "", // Insert GitHub Link Here
        dataText: "View on GitHub"
    },
    {
        id: "stock-forecasting",
        title: "Stock Price Movement Forecasting",
        description: "Hybrid LSTM + Prophet forecasting system integrating news sentiment and multi-source data.",
        techStack: "Python, TensorFlow, Prophet, Scikit-learn, Pandas",
        type: "Financial AI",
        color: "#024EFC",
        image: stockForecastingPreview,
        href: "", // Insert GitHub Link Here
        dataText: "View on GitHub"
    },
    {
        id: "crime-detection",
        title: "AI-Powered Crime Detection System",
        description: "Real-time weapon detection and alert system using YOLOv8 with a React dashboard.",
        techStack: "YOLOv8, Python, Flask, React.js, PyTorch, MongoDB",
        type: "Computer Vision",
        color: "#DA961A",
        image: crimeDetectionPreview,
        href: "", // Insert GitHub Link Here
        dataText: "View on GitHub"
    }
]
