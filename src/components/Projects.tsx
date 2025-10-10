
import { Button } from "@/components/ui/button";
import { Link, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
  title: "FromAir ERP",
  description: "A customized ERPNext-based platform built to automate and scale the operations of a water-from-air manufacturing company. FromAir ERP manages the complete lifecycle - production, bottle filling, warehouse logistics, and customer returns through deeply integrated workflows. The system extends ERPNext with intelligent routing via Google Maps API, and real-time machine runtime analytics for production insights.",
  image: "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/ERPNxt.png?updatedAt=1760128484011",
  technologies: ["ERPNext", "Frappe Framework", "Python", "JavaScript", "MariaDB", "Google Maps API"],
  liveUrl: "#",
  githubUrl: "#"
},
        {
      title: "Skill Lens",
      description: "An AI-powered tool to analyze resumes, identify key skills, and provide personalized insights to help users improve their professional profile.",
      image: "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/SkillLens.png?updatedAt=1760127970067",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "CSS", "OpenAI"],
      liveUrl: "https://skilllens.vercel.app/",
      githubUrl: "https://github.com/0047Adarsh/skilllens"
    }
    ,
    {
      title: "Custom ERP on Zoho Creator",
      description: "Designed and developed a fully customized ERP for internal operations including client invoicing, inventory tracking and more. Integrated workflow automations, reports, and user access control using Deluge scripting and Zoho Creator tools.",
      image: "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/ERP%20Main%20Page.png",
      technologies: ["Zoho Creator", "Deluge Script", "Workflow Automation", "Custom Reports"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Salesradar",
      description: "SalesRadar is a powerful analytic tool designed to track and visualize sales performance. It organizes daily, weekly, and monthly data into easy-to-understand cohort views. With support for filters, it enables businesses to monitor customer health, identify trends, and make data-driven decisions.",
      image: "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/Salas%20Radar%20Page.png",
      technologies: ["Express.js", "REST APi", "EJS", "Charting"],
      liveUrl: "https://salesradar.onrender.com/dashboard",
      githubUrl: "#"
    },
    {
      title: "Uravu Labs Landing Page",
      description: "A visually immersive and responsive landing page built using Webflow. Designed for a sustainability-focused startup to communicate their mission and product offerings effectively.",
      image: "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/Uravu%20Landing%20Page.png?updatedAt=1750532573725",
      technologies: ["Webflow","JavaScript","Spline"],
      liveUrl: "https://www.uravulabs.com",
      githubUrl: "#"
    },
    {
      title: "TVI Landing Page",
      description: "An undergoing project to build a responsive landing page.",
      image: "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/TVI%20Landing%20Page.png?updatedAt=1750605911593",
      technologies: ["HTML&CSS", "Express.js", "Postgres", "EJS"],
      liveUrl: "https://the-venture-insight.onrender.com/",
      githubUrl: "#"
    },
    {
  title: "FromAir OMS",
  description: "A comprehensive Order Management System (OMS) designed to optimize the full order lifecycle for a water-from-air enterprise. FromAir OMS automates order intake, and dispatch scheduling while integrating seamlessly with ERPNext. The system is enhanced with a custom-built WhatsApp chatbot that enables customers and delivery partners to place orders, receive live updates, and confirm deliveries in real time.",
  image: "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/oms-app.png?updatedAt=1760128933779",
  technologies: ["NextJS", "JavaScript", "Twilio WhatsApp API", "Postgres"],
  liveUrl: "#",
  githubUrl: "#"
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
