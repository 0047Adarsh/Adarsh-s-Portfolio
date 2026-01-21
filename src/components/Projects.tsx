
import { Button } from "@/components/ui/button";
import { Link, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
title: "FromAir ERP - Production Operations Platform",
description: "Designed and implemented custom ERP workflows on top of ERPNext to support end-to-end manufacturing and logistics operations. Owned workflow design, business logic customization, and system integrations used in live production.",
image: "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/ERPNxt.png?updatedAt=1760128484011",
technologies: ["ERPNext", "Frappe", "Python", "Workflow Design","JavaScript", "Cloud Integration"],
liveUrl: "#",
githubUrl: "#",
projectType: "professional",
},
{
      title: "Internal Operations Platform (Zoho Creator)",
      description: "Designed and implemented a custom internal operations platform using Zoho Creator to support invoicing, inventory tracking, and operational reporting. Owned workflow automation, access control, and reporting logic, enabling teams to manage day-to-day operations through a centralized system.",
      image: "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/ERP%20Main%20Page.png",
      technologies: ["Zoho Creator", "Workflow Automation", "Business Logic", "Reporting Systems"],
      liveUrl: "#",
      githubUrl: "#",
      projectType: "professional"
    },
    {
      title: "SalesRadar - Sales Analytics & Reporting Platform",
      description: "Designed and built a sales analytics and reporting platform to aggregate and analyze daily, weekly, and monthly sales data. Owned backend API design, data aggregation logic, and dashboard views, enabling teams to monitor performance trends, customer cohorts, and key business metrics for operational decision-making.",
      image: "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/Salas%20Radar%20Page.png",
      technologies: ["Node.js", "REST APIs", "Data Aggregation", "Analytics Dashboards","Backend Architecture"],
      liveUrl: "https://salesradar.onrender.com/dashboard",
      githubUrl: "#",
      projectType: "professional",
    },
        {
      title: "Skill Lens",
      description: "An AI-powered tool to analyze resumes, identify key skills, and provide personalized insights to help users improve their professional profile.",
      image: "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/SkillLens.png?updatedAt=1760127970067",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "CSS", "OpenAI"],
      liveUrl: "https://skilllens.vercel.app/",
      githubUrl: "https://github.com/0047Adarsh/skilllens",
      projectType: "public",
    }
    ,
    {
      title: "Uravu Labs - Landing Page",
      description: "A visually immersive and responsive marketing website built to showcase Uravu’s products and mission. Focused on clean UI, smooth interactions, and performance across devices. Worked closely with design and product teams to implement layouts, animations, and interactive elements that improved user engagement and brand presence.",
      image: "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/Uravu%20Landing%20Page.png?updatedAt=1750532573725",
      technologies: ["Webflow","JavaScript","Spline","SEO Optimization", "Performance Optimization"],
      liveUrl: "https://www.uravulabs.com",
      githubUrl: "#",
      projectType: "public",
    },
    {
  title: "FromAir – Landing & E-commerce",
  description: "A visually immersive and responsive web platform built to showcase and sell Uravu’s beverage products. Designed and developed a high-conversion landing experience along with an integrated e-commerce flow, focusing on clean UI, smooth interactions, and reliable checkout. Worked closely with design and product teams to implement layouts, animations, and customer journeys that improved engagement and conversion.",
  image: "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/FromAir%20Main%20Page.png",
  technologies: ["Webflow", "JavaScript", "Payment Gateway Integration","SEO Optimization", "Performance Optimization"
],
  liveUrl: "https://www.fromair.club",
  githubUrl: "#",
  projectType: "public",
}
,
    {
      title: "TVI Landing Page",
      description: "An undergoing project to build a responsive landing page.",
      image: "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/TVI%20Landing%20Page.png?updatedAt=1750605911593",
      technologies: ["HTML&CSS", "Express.js", "Postgres", "EJS"],
      liveUrl: "https://the-venture-insight.onrender.com/",
      githubUrl: "#",
      projectType: "public",
    },
    {
  title: "FromAir OMS",
  description: "A comprehensive Order Management System (OMS) designed to optimize the full order lifecycle for a water-from-air enterprise. FromAir OMS automates order intake, and dispatch scheduling while integrating seamlessly with ERPNext. The system is enhanced with a custom-built WhatsApp chatbot that enables customers and delivery partners to place orders, receive live updates, and confirm deliveries in real time.",
  image: "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/oms-app.png?updatedAt=1760128933779",
  technologies: ["NextJS", "JavaScript", "Twilio WhatsApp API", "Postgres"],
  liveUrl: "#",
  githubUrl: "#",
  projectType: "professional",
},

  ];

  return (
    <section className="py-20 px-4 bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-300 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>
        
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-slate-700/50 text-blue-400 px-2 py-1 rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                
                {/* <div className="flex gap-3">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="sm" className="bg-blue-60N0 hover:bg-blue-700 text-white flex-1">
                    <Link className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  </a>
                  <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Code className="w-4 h-4" />
                  </Button>
                </div> */}
                {/* <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center mb-2">
                      <Link className="w-4 h-4 mr-2" />
                      View Case Study
                    </Button>
                  </a> */}
                {project.projectType === "professional" ?
                    <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center">
                      🚫 Private Repo
                    </Button>
                  : (
                <div className="flex gap-3">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center">
                      <Link className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 flex items-center justify-center">
                      <Code className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
