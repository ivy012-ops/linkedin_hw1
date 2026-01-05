import { ProfileData } from './types';

export const initialProfileData: ProfileData = {
  name: "Robin Hsu",
  title: "Director | Ex-CIO & HR VP | Leadership & Career Growth Coach",
  location: "Taipei, Taiwan",
  email: "robin.lexus@gmail.com",
  linkedin: "https://www.linkedin.com/in/robin-hsu-2b59a9a5",
  summary: "With over 20 years in the software industry—spanning from global tech conglomerates to high-growth SaaS IPOs—I specialize in solving tech’s toughest challenge: aligning engineering velocity with organizational culture. My career is built on a dual foundation of Technical Depth and Strategic Leadership. I don't just build systems; I build the operational and cultural frameworks that allow technology to scale.",
  experience: [
    {
      id: "1",
      company: "91APP, Inc.",
      title: "Director",
      period: "April 2023 - Present",
      location: "Taiwan",
      description: [
        "Digital Transformation: ERP Implementation, Internal Systems Integration, Technical Solution Assessment.",
        "Enterprise Information System: Responsible for maintaining and delivering reliable systems while driving operational excellence.",
        "Automated product onboarding process with RPA: Achieved 80% cost reduction and 50% efficiency increase.",
        "e-commerce: Offering a stable platform for data exchange enabling integration among logistics, warehousing, and OMS."
      ]
    },
    {
      id: "2",
      company: "EZTABLE",
      title: "Vice President Information Technology and People",
      period: "November 2022 - April 2023",
      location: "Taipei, Taiwan",
      description: [
        "Aligned IT solutions and deliverables with the company's strategic vision.",
        "Created migration strategies to bridge development gaps between existing architecture and future updates.",
        "Responsible for HR strategies: recruitment, performance management, employee relations, and career planning."
      ]
    },
    {
      id: "3",
      company: "EZTABLE",
      title: "Director Of Information Technology",
      period: "March 2021 - November 2022",
      location: "Taipei, Taiwan",
      description: [
        "Led large-scale IT project initiatives to fix technical debt using SRE and System Analysis roles.",
        "Saved AWS annual budget 46% (vs. 2019).",
        "Launched new official website and member App increasing page speed 3x.",
        "Implemented SCRUM from scratch to meet sprint planning goals effective."
      ]
    },
    {
      id: "4",
      company: "Tamkang University",
      title: "Lecturer",
      period: "February 2021 - September 2022",
      location: "Taiwan",
      description: ["Presentation Skills lecturer."]
    },
    {
      id: "5",
      company: "TutorABC",
      title: "Senior R&D Manager",
      period: "December 2014 - December 2020",
      location: "Taiwan",
      description: [
        "In charge of all sales/market-related systems. Managed team including PMs, analysts, engineers, QA.",
        "Revamped customer experience (Journey Mapping) lifting conversion rate 30%+.",
        "Created 'Social-CRM' providing communication tools via LINE/Facebook.",
        "Won Accountability Award."
      ]
    },
    {
      id: "6",
      company: "Wistron ITS",
      title: "Project Manager",
      period: "August 2013 - December 2014",
      location: "Taipei City, Taiwan",
      description: [
        "Expertise in SAP Sales & Distribution applied to Manufacturing and e-Commerce clients.",
        "Led multiple concurrent projects and optimized schedules."
      ]
    },
    {
      id: "7",
      company: "EVERY8D Co., LTD",
      title: "Manager",
      period: "February 2013 - September 2013",
      location: "Taipei City, Taiwan",
      description: ["Managed project management office (PMO) and engineered task dashboards."]
    },
    {
      id: "8",
      company: "Retail System Co., Ltd.",
      title: "R&D Manager/System Analyst",
      period: "June 2006 - February 2013",
      location: "Taipei City, Taiwan",
      description: [
        "Developed comprehensive ERP system catering to supply chain and retail (Breadtalk, BELLAVITA).",
        "Integrated SAP with CRM, EasyCard, and loyalty points systems."
      ]
    }
  ],
  education: [
    {
      school: "Tamkang University",
      degree: "MBA",
      field: "Management Information Systems"
    },
    {
      school: "National Sun Yat-Sen University",
      degree: "EMBA Master Credit Class",
      field: "Human Resource Management"
    }
  ],
  skills: [
    { name: "Scrum / Agile", category: "Leadership", level: 95 },
    { name: "People Management", category: "Leadership", level: 90 },
    { name: "IT Cost Optimization", category: "Leadership", level: 85 },
    { name: "ERP & CRM", category: "Tech", level: 90 },
    { name: "Process Automation (RPA/AI)", category: "Tech", level: 80 },
    { name: "AWS/GCP Strategy", category: "Tech", level: 75 },
    { name: "English", category: "Language", level: 70 },
    { name: "Chinese", category: "Language", level: 100 },
    { name: "PMP", category: "Certification", level: 100 },
    { name: "ITIL v3", category: "Certification", level: 100 }
  ]
};