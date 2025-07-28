import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const projects = [
    {
      title: "API Management System",
      description: "Система управления API с мониторингом производительности и автоматическим масштабированием",
      tech: ["Node.js", "Express", "MongoDB"],
      image: "/img/db31e4f5-3049-441a-a783-7c689c0dad2d.jpg"
    },
    {
      title: "Data Analytics Platform",
      description: "Платформа для анализа больших данных с визуализацией и машинным обучением",
      tech: ["Python", "FastAPI", "PostgreSQL"],
      image: "/img/d554a101-5e2a-45e9-b234-458f1f36eb2a.jpg"
    },
    {
      title: "Microservices Architecture",
      description: "Архитектура микросервисов с использованием контейнеризации и оркестрации",
      tech: ["Docker", "Kubernetes", "Redis"],
      image: "/img/949c5439-4da2-4cfe-968d-5f405450f3a9.jpg"
    }
  ];

  const skills = [
    { name: "Node.js", icon: "Server", level: "Expert" },
    { name: "Python", icon: "Code", level: "Expert" },
    { name: "Databases", icon: "Database", level: "Advanced" },
    { name: "Docker", icon: "Container", level: "Advanced" },
    { name: "API Design", icon: "Zap", level: "Expert" },
    { name: "Cloud Services", icon: "Cloud", level: "Advanced" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 tracking-tight">
            Backend
            <span className="block text-muted-foreground">Developer</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Создаю надёжные и масштабируемые серверные решения. Специализируюсь на Node.js, Python и архитектуре баз данных.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Icon name="Mail" size={20} className="mr-2" />
              Связаться
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Icon name="Download" size={20} className="mr-2" />
              Резюме
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Технологии</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full transition-colors hover:bg-primary/20">
                      <Icon name={skill.icon} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto">
                      {skill.level}
                    </Badge>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Проекты</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Готов к сотрудничеству</h2>
            <p className="text-muted-foreground mb-8">
              Если у вас есть интересный проект или нужна помощь с backend-разработкой, буду рад обсудить детали.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Telegram
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Icon name="Github" size={20} className="mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Icon name="Linkedin" size={20} className="mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;