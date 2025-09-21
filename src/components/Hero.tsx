import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail } from 'lucide-react';
import React from 'react';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 p-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
              <div className="flex items-center justify-center w-full h-full bg-gray-900 rounded-full">
                <span className="text-4xl font-bold text-white">JN</span>
              </div>
            </div>
          </motion.div>

          <h1 className="mb-6 text-4xl font-bold sm:text-6xl lg:text-7xl">
            Hi, I'm
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
              {' '}
              Juliet Nnaemezie
            </span>
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-xl text-gray-300 sm:text-2xl">
            A Mobile App Developer passionate about crafting beautiful ands user
            friendly mobile experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row"
        >
          <button
            onClick={() =>
              document
                .querySelector('#projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center px-8 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 group"
          >
            View My Work
            <ArrowDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
          </button>
          <button
            onClick={() =>
              document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center px-8 py-3 font-semibold text-white transition-colors border-2 border-gray-600 rounded-lg hover:border-gray-500"
          >
            Get In Touch
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://github.com/Pheunixx"
            className="p-2 text-gray-400 transition-colors transform hover:text-white hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:jnnaemezie80@gmail.com"
            className="p-2 text-gray-400 transition-colors transform hover:text-white hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="text-gray-400 transition-colors animate-bounce hover:text-white"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
