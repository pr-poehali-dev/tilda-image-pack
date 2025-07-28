import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const menuItems = [
    {
      category: "Закуски",
      items: [
        { name: "Тартар из лосося", description: "С авокадо и лимонным маслом", price: "1,200 ₽" },
        { name: "Устрицы Фин де Клер", description: "6 штук с классическими соусами", price: "2,800 ₽" },
        { name: "Фуа-гра", description: "С грушевым конфи и бриошью", price: "3,200 ₽" }
      ]
    },
    {
      category: "Основные блюда",
      items: [
        { name: "Филе говядины Веллингтон", description: "С трюфельным соусом", price: "4,500 ₽" },
        { name: "Морской окунь", description: "На подушке из ризотто с шафраном", price: "2,900 ₽" },
        { name: "Утиная грудка", description: "С вишневым соусом и гратеном", price: "3,400 ₽" }
      ]
    },
    {
      category: "Десерты",
      items: [
        { name: "Тирамису", description: "Классический рецепт с маскарпоне", price: "890 ₽" },
        { name: "Крем-брюле", description: "С ванилью Мадагаскара", price: "780 ₽" },
        { name: "Шоколадный фондан", description: "С мороженым из белого шоколада", price: "950 ₽" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://cdn.poehali.dev/files/570ec3fb-c249-4a10-bc58-e4d7a72439ac.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-7xl md:text-8xl font-light mb-6 tracking-wide animate-fade-in">
            Le Cygne
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Изысканная кухня в атмосфере элегантности и утонченности
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg bg-primary hover:bg-primary/90 border border-primary">
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать стол
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-foreground">
              <Icon name="Menu" size={20} className="mr-2" />
              Посмотреть меню
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-5xl font-light mb-8 text-foreground">О ресторане</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
              Le Cygne — это место, где кулинарное искусство встречается с безупречным сервисом. 
              Наши шеф-повара создают блюда, которые удивляют и вдохновляют, используя только 
              лучшие ингредиенты со всего мира.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                    <Icon name="ChefHat" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif">Мишленовская кухня</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Блюда высочайшего качества от шеф-повара с многолетним опытом
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                    <Icon name="Wine" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif">Винная карта</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Более 200 позиций лучших вин со всего мира
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif">Безупречный сервис</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Персонализированное обслуживание высочайшего уровня
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-5xl font-light text-center mb-16 text-foreground">Меню</h2>
            <div className="grid lg:grid-cols-3 gap-12">
              {menuItems.map((category, index) => (
                <Card key={index} className="border-0 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="font-serif text-2xl text-primary">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-foreground">{item.name}</h4>
                          <Badge variant="secondary" className="ml-2 shrink-0">
                            {item.price}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="px-8">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать полное меню
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-5xl font-light text-center mb-16 text-foreground">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl flex items-center">
                    <Icon name="MapPin" size={24} className="mr-3 text-primary" />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg">
                    Москва, ул. Петровка, 12<br />
                    ТВК "Петровский Пассаж", 3 этаж
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-2 text-primary" />
                      <span className="text-sm">Ежедневно: 18:00 - 02:00</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Phone" size={16} className="mr-2 text-primary" />
                      <span className="text-sm">+7 (495) 123-45-67</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Бронирование</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Для бронирования столика свяжитесь с нами по телефону или через социальные сети
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Позвонить
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Telegram
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Instagram" size={16} className="mr-2" />
                      Instagram
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="font-serif text-3xl font-light mb-4">Le Cygne</h3>
            <p className="text-background/80 mb-6">
              Изысканная кухня • Элегантная атмосфера • Незабываемые впечатления
            </p>
            <div className="flex justify-center gap-6">
              <Icon name="Instagram" size={24} className="text-background/60 hover:text-background cursor-pointer transition-colors" />
              <Icon name="Facebook" size={24} className="text-background/60 hover:text-background cursor-pointer transition-colors" />
              <Icon name="Phone" size={24} className="text-background/60 hover:text-background cursor-pointer transition-colors" />
            </div>
            <div className="mt-8 pt-8 border-t border-background/20">
              <p className="text-background/60 text-sm">
                © 2024 Le Cygne. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;