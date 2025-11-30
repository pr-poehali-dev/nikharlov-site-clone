import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Навигация',
      links: [
        { name: 'Главная', path: '/' },
        { name: 'Блог', path: '/blog' },
        { name: 'Обо мне', path: '/about' },
        { name: 'Контакты', path: '/contact' },
      ]
    },
    {
      title: 'Темы',
      links: [
        { name: 'Дизайн', path: '/blog' },
        { name: 'Разработка', path: '/blog' },
        { name: 'UI/UX', path: '/blog' },
        { name: 'Технологии', path: '/blog' },
      ]
    }
  ];

  const socialLinks = [
    { icon: 'Github', url: '#', label: 'GitHub' },
    { icon: 'Twitter', url: '#', label: 'Twitter' },
    { icon: 'Linkedin', url: '#', label: 'LinkedIn' },
    { icon: 'Mail', url: 'mailto:hello@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <Icon name="Sparkles" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MyBlog
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Блог о веб-разработке, дизайне и современных технологиях. 
              Делюсь знаниями и опытом с сообществом.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 bg-muted hover:bg-gradient-to-br hover:from-primary hover:to-accent rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <Icon 
                    name={social.icon as any} 
                    size={20} 
                    className="text-muted-foreground group-hover:text-white transition-colors" 
                  />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map(section => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      <Icon name="ChevronRight" size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} MyBlog. Все права защищены.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
