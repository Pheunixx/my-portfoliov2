import { motion } from 'framer-motion';
import React from 'react';
import MupImg from '../assets/MUP.png';
import TaskImg from '../assets/tasky.png';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'ChitChat',
      description:
        'A real time chat application builtt with flutter  and firebase.',
      image:
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Flutter', 'Dart', 'Firebase', ' Cloud Firesttore'],
      githubUrl: 'https://github.com/pheunixx/chitchat.git',
      featured: true,
    },
    {
      title: 'Tasky',
      description:
        'Tasky is a task management app designed to help users organize and prioritize their daily tasks efficiently.Currently in its early stage, this project ia a personal learning ground for integrating REST APIs and managing dynamic data in flutter. clean weather application that displays current conditions and forecasts.',
      image: TaskImg,
      tech: ['Dart', 'Flutter', 'REST API'],
      githubUrl: 'https://github.com/pheunixx/tasky.git',
      featured: true,
    },
    {
      title: 'MusterUP',
      description:
        'This is a UI implementation project. The primary focus so far has been translating figma designs into flutter components, ennsuring responsiveness and smooth interactions. Backend integration is planned for the next development phase.',
      image: MupImg,
      tech: ['Flutter', 'Dart', 'Figma'],
      githubUrl: 'https://github.com/pheunixx/MuPClone.git',
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="projects"
      className="px-4 py-20 border-t border-gray-800 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl">My Projects</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            A collection of projects that showcase my growth as a developer and
            my passion for creating functional, beautiful web applications.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="mb-8 text-2xl font-bold text-center text-blue-400">
            Featured Projects
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="overflow-hidden transition-all duration-300 border bg-gray-800/50 rounded-xl hover:bg-gray-800 group border-gray-700/50"
                >
                  <div className="relative overflow-hidden">
                    {/* <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110"
                    /> */}
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:opacity-100" />
                    <div className="absolute transition-opacity duration-300 opacity-0 top-4 right-4 group-hover:opacity-100">
                      <span className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="mb-3 text-xl font-bold transition-colors group-hover:text-blue-400">
                      {project.title}
                    </h4>
                    <p className="mb-4 text-gray-300">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm text-blue-300 rounded-full bg-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* <div className="flex items-center justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-medium text-blue-400 transition-colors hover:text-blue-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-medium text-gray-400 transition-colors hover:text-gray-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </div> */}
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="overflow-hidden transition-all duration-300 border bg-gray-800/50 rounded-xl hover:bg-gray-800 group border-gray-700/50"
                >
                  {/* <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-40 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-gray-900/60 to-transparent group-hover:opacity-100" />
                  </div> */}

                  <div className="p-5">
                    <h4 className="mb-2 text-lg font-bold transition-colors group-hover:text-blue-400">
                      {project.title}
                    </h4>
                    <p className="mb-3 text-sm text-gray-300 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs text-purple-300 rounded-full bg-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs text-gray-400 rounded-full bg-gray-600/50">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    {/* 
                    <div className="flex items-center justify-between">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-400 transition-colors hover:text-blue-300"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-gray-400 transition-colors hover:text-gray-300"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </div> */}
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
