import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'UI/UX Design', 
    'Tailwind CSS', 'Web Performance', 'Accessibility'
  ];

  const achievements = [
    { icon: 'Award', title: 'Более 50 проектов', description: 'Успешно завершенных' },
    { icon: 'Users', title: '1000+ читателей', description: 'Ежемесячно' },
    { icon: 'BookOpen', title: '6 лет опыта', description: 'В веб-разработке' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-12 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Обо мне</h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Разработчик, дизайнер и энтузиаст веб-технологий
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row gap-8 items-start animate-fade-in">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary p-1">
                  <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                    <Icon name="User" size={120} className="text-primary" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 space-y-4">
              <h2 className="text-3xl font-bold">Привет! 👋</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Я веб-разработчик и дизайнер с большой страстью к созданию красивых и функциональных интерфейсов. 
                В своем блоге я делюсь опытом, знаниями и инсайтами из мира веб-разработки.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мой фокус - создание доступных, производительных и визуально привлекательных веб-приложений. 
                Я верю, что хороший код и отличный дизайн идут рука об руку.
              </p>
            </div>
          </div>

          <div className="animate-slide-in">
            <h2 className="text-3xl font-bold mb-6">Навыки и технологии</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="text-base px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title} 
                className="p-6 text-center hover:shadow-lg transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                  <Icon name={achievement.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Моя миссия</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Делать веб-разработку доступной и понятной для всех. Через свой блог я стремлюсь помочь начинающим разработчикам 
              освоить современные технологии и создавать качественные продукты. Каждая статья - это мой вклад в развитие 
              сообщества и обмен знаниями.
            </p>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;