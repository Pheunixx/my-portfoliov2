import { motion } from 'framer-motion';
import { Code, Globe, Palette, Smartphone } from 'lucide-react';
import React from 'react';

export const About: React.FC = () => {
  const skills = [
    {
      category: 'Mobile Development',
      icon: Smartphone,
      skills: ['Flutter', 'Dart', 'State Management (Provider, Riverpod)'],
      color: 'blue',
    },
    {
      category: 'Design',
      icon: Palette,
      skills: ['Figma', 'Responsive Layouts', 'UI/UX Principles'],
      color: 'purple',
    },
    {
      category: 'Tools',
      icon: Code,
      skills: ['Git & GitHub', 'VS Code', 'Firebase'],
      color: 'green',
    },
    {
      category: 'Learning',
      icon: Globe,
      skills: ['Backend Integration', 'Clean Architecture'],
      color: 'orange',
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
    hidden: { opacity: 0, y: 20 },
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
      id="about"
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
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl">About Me</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            I’m Juliet Nnaemezie — an Electronic & Computer Engineering student
            and aspiring Flutter developer, currently sharpening my skills in
            building clean, functional mobile apps. With one year of focused
            learning and project experience, I’m eager to transform ideas into
            mobile experiences that solve real problems.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-12 mb-20 lg:grid-cols-2"
        >
          <div>
            <h3 className="mb-6 text-2xl font-bold text-blue-400">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                My journey into tech started in the lecture halls of the department of Electronic
                & Computer Engineering, where I was fascinated by how hardware
                and software come together. But it wasn’t enough to just study
                systems, I wanted to create them too.
              </p>
              <p>
                That curiosity pushed me into mobile development, and Flutter
                quickly became my toolkit of choice. Over the past year, I’ve
                gone from building simple layouts to creating functional apps,
                interpreting Figma designs, and experimenting with state
                management. Each project has taught me something new and
                reinforced why I love engineering — solving real problems in
                creative ways.
              </p>
              <p>
                When I’m not coding, I’m exploring design trends and following new
                Flutter updates. Growth and relevance are what drive me.
              </p>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-2xl font-bold text-purple-400">
              What Drives Me
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                For me, mobile development is where creativity meets
                engineering. I care about writing clean, scalable code — but I’m
                equally obsessed with making apps that feel smooth and intuitive
                for users.
              </p>
              <p>
                My goal is to become the kind of developer who bridges the gap
                between design and engineering: turning Figma boards into
                Flutter apps that people genuinely enjoy using. I’m especially
                interested in performance, accessibility, and building apps that
                can scale.
              </p>
              <p>
                I know I’m still early in my journey, but that’s what excites
                me. Every challenge is an opportunity to level up, and I’m
                constantly learning from the developer community, mentors, and
                real-world projects.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-12 text-3xl font-bold text-center">
            Skills & Technologies
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {skills.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 transition-all duration-300 border bg-gray-800/50 rounded-xl hover:bg-gray-800 border-gray-700/50"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-2 rounded-lg bg-${category.color}-500/20 mr-3`}
                  >
                    <category.icon
                      className={`h-6 w-6 text-${category.color}-400`}
                    />
                  </div>
                  <h4 className="text-xl font-semibold">{category.category}</h4>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center text-gray-300">
                      <span className="flex-shrink-0 w-2 h-2 mr-3 bg-blue-400 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="mb-12 text-3xl font-bold text-center">Experience</h3>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500"></div>
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full top-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="p-6 rounded-lg bg-gray-800/50">
                    <h4 className="mb-2 text-xl font-semibold text-blue-400">
                      Flutter Projects & Freelance Work
                    </h4>
                    <p className="mb-2 text-gray-400">2024 - Present</p>
                    <p className="text-gray-300">
                      Built and deployed mobile apps as part of coursework and
                      personal projects. Focused on responsive UI, state
                      management, and integrating APIs with Flutter.
                      Experimented with Firebase for backend features.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 flex items-center justify-center w-8 h-8 bg-purple-500 rounded-full top-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="p-6 rounded-lg bg-gray-800/50">
                    <h4 className="mb-2 text-xl font-semibold text-purple-400">
                      Engineering Coursework & Team Projects
                    </h4>
                    <p className="mb-2 text-gray-400">
                      University of Nigeria, Nsukka • 2021 - Present
                    </p>
                    <p className="text-gray-300">
                      Collaborated with peers on projects combining electronics
                      and software. Gained hands-on experience in system design,
                      problem-solving, and balancing theory with practical
                      implementation.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
