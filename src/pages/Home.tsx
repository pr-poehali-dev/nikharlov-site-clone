import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';

const Home = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/2d2ccb43-b717-44c9-b3c9-01b7154d4599/files/494a16cc-0d94-49d1-8592-33e763218f04.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Добро пожаловать в мой блог
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Делюсь знаниями о веб-разработке, дизайне и современных технологиях
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Link to="/blog">
                <Button size="lg" className="gap-2 text-lg">
                  Читать блог
                  <Icon name="ArrowRight" size={20} />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="gap-2 text-lg">
                  Обо мне
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Последние статьи</h2>
              <p className="text-muted-foreground text-lg">Свежие материалы и идеи</p>
            </div>
            <Link to="/blog">
              <Button variant="ghost" className="gap-2">
                Все статьи
                <Icon name="ArrowRight" size={18} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-white/90">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>

                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={16} />
                    <span>{new Date(post.date).toLocaleDateString('ru-RU')}</span>
                  </div>
                  <Link to={`/post/${post.id}`}>
                    <Button variant="ghost" size="sm" className="gap-2">
                      Читать
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-all animate-scale-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                  <Icon name="BookOpen" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{blogPosts.length}+</h3>
                <p className="text-muted-foreground">Статей в блоге</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">1000+</h3>
                <p className="text-muted-foreground">Читателей</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center">
                  <Icon name="TrendingUp" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-muted-foreground">Тем освещено</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;