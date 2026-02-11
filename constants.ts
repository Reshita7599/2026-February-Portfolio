
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'scamshield',
    title: 'ScamShield',
    description: 'Intelligent Scam Detection Platform using advanced NLP to identify fraudulent communications across multiple channels.',
    tech: ['Python', 'Scikit-Learn', 'Flask', 'React'],
    link: 'https://github.com/Reshita7599/ScamShield',
    outcome: 'Achieved 94% accuracy in real-time scam detection.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ai-surveillance',
    title: 'AI Park Surveillance',
    description: 'Developed during Infosys Springboard internship, this system uses computer vision to monitor urban parks for safety and crowd management.',
    tech: ['Python', 'OpenCV', 'Deep Learning', 'TensorFlow'],
    link: 'https://github.com/Reshita7599/AI-Surveillance-Parks',
    outcome: 'Successful real-time detection of safety violations with 90%+ precision.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'travel-planner',
    title: 'AI Travel Planner',
    description: 'A comprehensive travel planning assistant deployed on IBM Cloud, utilizing generative AI for personalized itineraries.',
    tech: ['IBM Cloud', 'React', 'Node.js', 'LLM Integration'],
    link: 'https://github.com/Reshita7599/AI-Travel-Planner',
    outcome: 'Successful deployment on IBM Cloud with global accessibility.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'banking-mgmt',
    title: 'Banking Management System',
    description: 'A desktop application for streamlining core banking operations, account handling, and transaction history.',
    tech: ['Python', 'Tkinter', 'SQLite'],
    link: 'https://github.com/Reshita7599/Banking-System',
    outcome: 'Implemented secure account handling for 500+ mock users.',
    image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hackloop-mars',
    title: 'Hackloop Hackathon Project',
    description: 'Mars InSight Lander data analysis focusing on seismic activities and Martian crust composition.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Data Science'],
    link: 'https://github.com/Reshita7599/Hackloop-Martian-Seismic',
    outcome: 'Awarded first place for innovative visualization of seismic noise.',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python', category: 'Language', level: 90, icon: '🐍' },
  { name: 'Java', category: 'Language', level: 85, icon: '☕' },
  { name: 'AWS (EC2, S3, IAM)', category: 'Cloud', level: 80, icon: '☁️' },
  { name: 'IBM Cloud', category: 'Cloud', level: 75, icon: '🏢' },
  { name: 'Data Preprocessing', category: 'AI/ML', level: 85, icon: '📊' },
  { name: 'Supervised Learning', category: 'AI/ML', level: 80, icon: '🧠' },
  { name: 'Git & GitHub', category: 'Tool', level: 90, icon: '🛠️' },
  { name: 'VS Code', category: 'Tool', level: 95, icon: '💻' }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'AI Intern',
    company: 'Infosys Springboard',
    duration: 'June 2024 - Aug 2024',
    details: [
      'Developed an AI Surveillance project for monitoring safety and activities in public parks.',
      'Utilized computer vision techniques and deep learning models for real-time object detection.',
      'Integrated the surveillance system with a notification dashboard for park administrators.',
      'Gained deep insights into AI model lifecycle management and real-world deployment.'
    ]
  },
  {
    role: 'Technical Intern',
    company: 'EduSkills Foundation',
    duration: '2024 - Present',
    details: [
      'Engaged in cloud computing tasks and software deployment workflows.',
      'Collaborated on real-world projects involving scalable architectures.',
      'Completed certifications in AWS and cloud fundamentals.'
    ]
  },
  {
    role: 'Coordinator',
    company: 'Kalakrit Committee',
    duration: '2023 - 2024',
    details: [
      'Led a team of 15 members to organize large-scale university events.',
      'Managed budget, logistics, and stakeholder communication.',
      'Improved cross-departmental coordination efficiency by 20%.'
    ]
  }
];
