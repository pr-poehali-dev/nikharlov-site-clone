import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const socialLinks = [
    { icon: 'Github', label: 'GitHub', url: '#' },
    { icon: 'Twitter', label: 'Twitter', url: '#' },
    { icon: 'Linkedin', label: 'LinkedIn', url: '#' },
    { icon: 'Mail', label: 'Email', url: 'mailto:hello@example.com' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-12 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Контакты</h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Свяжитесь со мной - буду рад общению!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 animate-slide-in">
              <h2 className="text-2xl font-bold mb-6">Напишите мне</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, чем могу помочь..."
                    rows={5}
                  />
                </div>
                <Button className="w-full gap-2">
                  <Icon name="Send" size={18} />
                  Отправить сообщение
                </Button>
              </form>
            </Card>

            <div className="space-y-6 animate-fade-in">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Найдите меня</h2>
                <div className="space-y-4">
                  {socialLinks.map(link => (
                    <a 
                      key={link.label}
                      href={link.url}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name={link.icon as any} size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">{link.label}</p>
                        <p className="text-sm text-muted-foreground">@myblog</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <h3 className="text-xl font-bold mb-4">Сотрудничество</h3>
                <p className="text-muted-foreground mb-4">
                  Открыт для интересных проектов и коллабораций. 
                  Если у вас есть идея - давайте обсудим!
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="CheckCircle" size={20} />
                  <span className="font-medium">Отвечаю в течение 24 часов</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;