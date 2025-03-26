import { motion } from "framer-motion";
import projects from '../constants';

const Projects = () => {
    return (
        <motion.section
          className="p-12 bg-transparent flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        <h2 className="my-20 text-center text-4xl">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 place-items-center">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="w-96 h-full bg-black backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 hover:transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group flex flex-col"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="w-full h-48">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-[#FF3939]/10 text-[#FF3939] px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 text-center">Made by - {project.author}</p>
                  <div className="flex justify-center mt-auto">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-[#FF3939] hover:bg-[#FF6347] text-white px-6 py-3 rounded-lg text-sm transition-all duration-300 group-hover:scale-105">
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      );
}

export default Projects
