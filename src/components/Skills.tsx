import { Code, Briefcase, Wrench, Settings2 } from "lucide-react";

const Skills = () => {
  const frontendSkills = [
    "React", "JavaScript", "HTML5", "CSS3", "Webflow"
  ];
  
  const backendSkills = [
    "Node.js", "Python", "Express.js", "PostgreSQL", "REST APIs"
  ];
  
  const tools = [
    "Git & Github", "AWS", "Vercel", "Postman", "VS Code"
  ];

  const otherSkills = [
    "IoT Device Configuration (EWON, VBox)",
    "ERPNext",
    "Zoho Creator",
    "Microsoft 365 Admin",
    "Automation Scripting"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-8xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core Technical Capabilities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-300 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications and managing tech infrastructure
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
        
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Frontend Development</h3>
            </div>
            <div className="space-y-3">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-slate-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend & Databases */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Backend & Databases</h3>
            </div>
            <div className="space-y-3">
              {backendSkills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-slate-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Utilities */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                <Settings2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">DevOps & Utilities</h3>
            </div>
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-slate-300">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Other Technical Skills */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mr-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Other Technical Skills</h3>
            </div>
            <div className="space-y-3">
              {otherSkills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-slate-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
