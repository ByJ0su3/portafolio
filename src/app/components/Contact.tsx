import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Instagram, MessageCircle, Send, MapPin, ExternalLink } from 'lucide-react';

interface ContactItem {
  id: string;
  icon: React.ElementType;
  label: string;
  value: string;
  link?: string;
  isExternal?: boolean;
}

const contacts: ContactItem[] = [
  {
    id: 'phone',
    icon: Phone,
    label: 'Phone',
    value: '(809) 315-3295',
    link: 'tel:+8093153295',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    value: 'jdom0777cruz@gmail.com',
    link: 'mailto:jdom0777cruz@gmail.com',
  },
  {
    id: 'location',
    icon: MapPin,
    label: 'Location',
    value: 'Dominican Republic',
  },
];

const socials: (ContactItem & { icon: React.ElementType })[] = [
  {
    id: 'linkedin',
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/josue-manuel-domínguez',
    link: 'https://www.linkedin.com/in/josue-manuel-dom%C3%ADnguez-de-la-cruz-/',
    isExternal: true,
  },
  {
    id: 'github',
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ByJ0su3',
    link: 'https://github.com/ByJ0su3?tab=repositories',
    isExternal: true,
  },
  {
    id: 'instagram',
    icon: Instagram,
    label: 'Instagram',
    value: '@by_j0su3',
    link: 'https://www.instagram.com/by_j0su3/',
    isExternal: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* Unified background */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[80px]" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-purple-500/15 bg-purple-500/5 text-purple-300 text-sm mb-6">
            <MessageCircle className="w-4 h-4" />
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind, an opportunity to discuss, or just want to
            say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div className="lg:col-span-2 space-y-4" variants={itemVariants}>
            {contacts.map((contact) => {
              const Icon = contact.icon;
              const content = (
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-300" />
                  <div className="relative flex items-center gap-4 bg-gray-900/40 border border-purple-500/10 rounded-xl p-4 hover:border-purple-500/25 transition-all duration-300 hover:bg-gray-900/60">
                    <div className="w-12 h-12 rounded-xl bg-purple-600/15 flex items-center justify-center text-purple-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">{contact.label}</p>
                      <p className="text-white text-sm font-medium">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </div>
              );

              if (contact.link) {
                return (
                  <a
                    key={contact.id}
                    href={contact.link}
                    target={contact.isExternal ? '_blank' : undefined}
                    rel={contact.isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                );
              }
              return <div key={contact.id}>{content}</div>;
            })}

            {/* Social links with labels */}
            <div className="pt-4">
              <p className="text-gray-500 text-sm mb-4">Follow me</p>
              <div className="space-y-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/15 to-transparent rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-300" />
                      <div className="relative flex items-center gap-4 bg-gray-900/30 border border-purple-500/8 rounded-xl p-3.5 hover:border-purple-500/20 transition-all duration-200">
                        <div className="w-10 h-10 rounded-lg bg-purple-600/12 flex items-center justify-center text-purple-400 shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-medium truncate">
                            {social.label}
                          </p>
                          <p className="text-gray-600 text-xs truncate">
                            {social.value}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-600 shrink-0" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-3 group relative"
            variants={itemVariants}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-purple-400/10 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
            <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-500/15">
              <h3 className="text-xl font-semibold text-white mb-6">
                Send me a message
              </h3>

              <form
                action="https://formsubmit.co/jdom0777cruz@gmail.com"
                method="POST"
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-gray-400 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-gray-400 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/25 active:scale-[0.98]"
                >
                  <Send className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
