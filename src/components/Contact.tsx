import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jnnaemezie80@gmail.com',
      href: 'mailto:jnnaemeze80@gmail.com',
      color: 'blue',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234-8144516172',
      href: 'tel:+234-8144516172',
      color: 'green',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Enugu, Nigeria',
      href: '#',
      color: 'purple',
    },
  ];

  return (
    <section
      id="contact"
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
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl">Let's Connect</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            I'm always excited to discuss new opportunities, collaborate on
            projects, or just chat about mobile app development. Let's create
            something amazing together!
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h3 className="flex items-center mb-6 text-2xl font-bold">
                <MessageCircle className="w-6 h-6 mr-3 text-blue-400" />
                Get In Touch
              </h3>
              <p className="mb-8 text-gray-300">
                I'm currently looking for new opportunities and would love to
                hear from you. Whether you have a question, want to collaborate,
                or just want to say hi, I'll do my best to get back to you!
              </p>
            </div>

            <div className="mb-8 space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 group"
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 bg-${info.color}-500/20 rounded-lg flex items-center justify-center group-hover:bg-${info.color}-500/30 transition-colors`}
                  >
                    <info.icon className={`h-6 w-6 text-${info.color}-400`} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-200">{info.label}</p>
                    <a
                      href={info.href}
                      className={`text-gray-400 hover:text-${info.color}-400 transition-colors`}
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 border bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border-blue-500/20"
            >
              <h4 className="mb-3 text-lg font-semibold">Why Work With Me?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-blue-400 rounded-full"></span>
                  Fresh perspective and eagerness to learn
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-green-400 rounded-full"></span>
                  I pay attention to detail and clean code practices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-orange-400 rounded-full"></span>
                  I have a collaborative mindset and possess good communication
                  skills
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-pink-400 rounded-full"></span>
                  I am passionate about creating great user experiences
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-8 border bg-gray-800/50 rounded-xl border-gray-700/50">
              <h3 className="mb-6 text-2xl font-bold">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-300"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-300"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all bg-gray-700 border border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full px-6 py-3 space-x-2 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-blue-800"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-b-2 border-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-8 mt-20 text-center border-t border-gray-800"
        >
          <p className="text-gray-400">
            © 2024 Juliet Nnaemezie. Built with React, Tailwind CSS, and lots of ☕
          </p>
        </motion.div>
      </div>
    </section>
  );
};
