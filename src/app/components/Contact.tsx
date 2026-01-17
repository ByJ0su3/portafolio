import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';

interface ContactItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
  isExternal?: boolean;
}

const contacts: ContactItem[] = [
  {
    id: 'phone',
    icon: <Phone className="w-6 h-6" />,
    label: 'Phone',
    value: '(809) 315-3295',
    link: 'tel:+8093153295'
  },
  {
    id: 'email',
    icon: <Mail className="w-6 h-6" />,
    label: 'E-mail',
    value: 'jdom0777cruz@hotmail.com',
    link: 'mailto:jdom0777cruz@hotmail.com'
  }
];

const socials: ContactItem[] = [
  {
    id: 'linkedin',
    icon: <Linkedin className="w-6 h-6" />,
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/josue-manuel-dom%C3%ADnguez-de-la-cruz-/',
    link: 'https://www.linkedin.com/in/josue-manuel-dom%C3%ADnguez-de-la-cruz-/',
    isExternal: true
  },
  {
    id: 'github',
    icon: <Github className="w-6 h-6" />,
    label: 'GitHub',
    value: 'https://github.com/ByJ0su3?tab=repositories',
    link: 'https://github.com/ByJ0su3?tab=repositories',
    isExternal: true
  },
  {
    id: 'instagram',
    icon: <Instagram className="w-6 h-6" />,
    label: 'Instagram',
    value: '@by_j0su3',
    link: 'https://www.instagram.com/by_j0su3/',
    isExternal: true
  }
];

export function Contact() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Efectos de brillo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Contact me</h2>
          <p className="text-gray-400">Do you have a project in mind? Let's talk.</p>
        </div>

        {/* Información de contacto */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {contacts.map((contact) => (
              <a
                key={contact.id}
                href={contact.link}
                className="group relative block"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300" />
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-600/30 transition-colors duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      <p className="text-white">{contact.value}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-white text-center mb-8">Follow me on social media</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target={social.isExternal ? '_blank' : undefined}
                rel={social.isExternal ? 'noopener noreferrer' : undefined}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
                <div className="relative w-16 h-16 rounded-full bg-gray-900/80 backdrop-blur-sm border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:border-purple-400/40 transition-all duration-300">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
