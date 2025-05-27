import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Code } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-300 mt-6">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">@</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-slate-400">your.email@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">in</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">LinkedIn</p>
                    <p className="text-slate-400">linkedin.com/in/yourprofile</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">GitHub</p>
                    <p className="text-slate-400">github.com/yourusername</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <form className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <Input 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <Input 
                  type="email"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <Textarea 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 min-h-[120px]"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
