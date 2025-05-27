
const About = () => {
  return (
    <section className="py-20 px-4 bg-slate-800/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a dedicated full-stack developer with 2 years of hands-on experience 
              building scalable web applications. My journey in tech has been driven by 
              curiosity and a passion for solving complex problems through clean, 
              efficient code.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              I specialize in modern web technologies and enjoy working across the entire 
              development stack, from crafting intuitive user interfaces to designing 
              robust backend systems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-slate-700/50 px-4 py-2 rounded-full">
                <span className="text-blue-400 font-semibold">2+ Years Experience</span>
              </div>
              <div className="bg-slate-700/50 px-4 py-2 rounded-full">
                <span className="text-purple-400 font-semibold">10+ Projects</span>
              </div>
              <div className="bg-slate-700/50 px-4 py-2 rounded-full">
                <span className="text-green-400 font-semibold">Full Stack</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=600&fit=crop&crop=faces" 
                alt="Developer workspace" 
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
