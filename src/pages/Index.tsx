import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    {
      title: 'КонсультантПлюс',
      description: 'Полная версия системы с актуальными документами и комментариями экспертов',
      icon: 'BookOpen',
      popular: true,
    },
    {
      title: 'Некоммерческие версии',
      description: 'Бесплатный доступ к правовой информации для всех',
      icon: 'Users',
      popular: false,
    },
    {
      title: 'КонсультантПлюс: Технология 3000',
      description: 'Современное решение для работы с документами',
      icon: 'Zap',
      popular: false,
    },
  ];

  const news = [
    {
      date: '15 ноября 2025',
      title: 'Обновление налогового законодательства',
      category: 'Законодательство',
    },
    {
      date: '10 ноября 2025',
      title: 'Новые возможности КонсультантПлюс',
      category: 'Продукты',
    },
    {
      date: '5 ноября 2025',
      title: 'Вебинар по трудовому праву',
      category: 'События',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Scale" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">КонсультантПлюс</h1>
                <p className="text-xs text-muted-foreground">Надежная правовая поддержка</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">
                Продукты
              </a>
              <a href="#free" className="text-sm font-medium hover:text-primary transition-colors">
                Некоммерческие версии
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                О компании
              </a>
              <a href="#news" className="text-sm font-medium hover:text-primary transition-colors">
                Новости
              </a>
              <a href="#jobs" className="text-sm font-medium hover:text-primary transition-colors">
                Вакансии
              </a>
            </nav>

            <div className="hidden lg:flex items-center space-x-3">
              <Button variant="outline" size="sm">
                Пробный доступ
              </Button>
              <Button size="sm">Купить</Button>
            </div>

            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t animate-fade-in">
              <nav className="flex flex-col space-y-3">
                <a href="#products" className="text-sm font-medium hover:text-primary transition-colors py-2">
                  Продукты
                </a>
                <a href="#free" className="text-sm font-medium hover:text-primary transition-colors py-2">
                  Некоммерческие версии
                </a>
                <a href="#about" className="text-sm font-medium hover:text-primary transition-colors py-2">
                  О компании
                </a>
                <a href="#news" className="text-sm font-medium hover:text-primary transition-colors py-2">
                  Новости
                </a>
                <a href="#jobs" className="text-sm font-medium hover:text-primary transition-colors py-2">
                  Вакансии
                </a>
                <div className="flex flex-col space-y-2 pt-2">
                  <Button variant="outline" size="sm">
                    Пробный доступ
                  </Button>
                  <Button size="sm">Купить</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/5 via-accent/30 to-background py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6" variant="secondary">
              <Icon name="Award" size={14} className="mr-1" />
              Лидер рынка правовых систем
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Правовая информация
              <br />
              <span className="text-primary">для вашего успеха</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Более 30 лет мы предоставляем профессиональные инструменты для работы с правовой информацией.
              Доверие миллионов пользователей по всей России.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base">
                <Icon name="Rocket" size={20} className="mr-2" />
                Получить пробный доступ
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-primary/20">
              <div>
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">лет на рынке</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5М+</div>
                <div className="text-sm text-muted-foreground">пользователей</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4" variant="outline">
              <Icon name="Box" size={14} className="mr-1" />
              Наши продукты
            </Badge>
            <h3 className="text-3xl lg:text-5xl font-bold mb-4">
              Выберите решение для вашего бизнеса
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий спектр продуктов для эффективной работы с правовой информацией
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
              >
                {product.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={product.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">{product.description}</CardDescription>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="free" className="py-20 lg:py-28 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <Badge className="mb-4" variant="secondary">
                  <Icon name="Gift" size={14} className="mr-1" />
                  Бесплатно
                </Badge>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Некоммерческие интернет-версии
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Получите бесплатный доступ к актуальной правовой информации в онлайн-режиме.
                  Идеальное решение для граждан и некоммерческих организаций.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Icon name="CheckCircle2" size={24} className="text-primary mr-3 flex-shrink-0" />
                    <span>Актуальная база законодательства РФ</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle2" size={24} className="text-primary mr-3 flex-shrink-0" />
                    <span>Судебная практика и комментарии</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle2" size={24} className="text-primary mr-3 flex-shrink-0" />
                    <span>Доступ с любого устройства 24/7</span>
                  </li>
                </ul>
                <Button size="lg">
                  <Icon name="ExternalLink" size={20} className="mr-2" />
                  Перейти к бесплатной версии
                </Button>
              </div>
              <div className="relative animate-fade-in">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent rounded-3xl p-8 flex items-center justify-center">
                  <Icon name="Globe" size={200} className="text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4" variant="outline">
              <Icon name="Building2" size={14} className="mr-1" />
              О компании
            </Badge>
            <h3 className="text-3xl lg:text-5xl font-bold mb-6">
              Надежный партнер в мире права
            </h3>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Компания «КонсультантПлюс» – ведущий разработчик компьютерных правовых систем в России.
              С 1992 года мы помогаем миллионам специалистов эффективно работать с правовой информацией.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Target" size={32} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Миссия</h4>
                  <p className="text-sm text-muted-foreground">
                    Обеспечить доступ к правовой информации
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="TrendingUp" size={32} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Инновации</h4>
                  <p className="text-sm text-muted-foreground">
                    Постоянное развитие технологий
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" size={32} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Надежность</h4>
                  <p className="text-sm text-muted-foreground">
                    Проверенное качество данных
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="HeartHandshake" size={32} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Поддержка</h4>
                  <p className="text-sm text-muted-foreground">
                    Всегда на связи с клиентами
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4" variant="outline">
              <Icon name="Newspaper" size={14} className="mr-1" />
              Новости
            </Badge>
            <h3 className="text-3xl lg:text-5xl font-bold mb-4">Актуальные события</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Следите за обновлениями законодательства и новостями компании
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {news.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:border-primary/50 cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                      </div>
                      <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <Icon
                      name="ArrowRight"
                      size={20}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Все новости
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="jobs" className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4" variant="outline">
              <Icon name="Briefcase" size={14} className="mr-1" />
              Карьера
            </Badge>
            <h3 className="text-3xl lg:text-5xl font-bold mb-6">Присоединяйтесь к нашей команде</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Мы всегда рады талантливым специалистам, готовым развиваться вместе с нами.
              Посмотрите актуальные вакансии и станьте частью команды профессионалов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Icon name="Search" size={20} className="mr-2" />
                Открытые вакансии
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить резюме
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon name="Scale" size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-bold">КонсультантПлюс</h4>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Надежная правовая поддержка для вашего бизнеса с 1992 года
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Продукты</h5>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    КонсультантПлюс
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    Некоммерческие версии
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    Технология 3000
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    О компании
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    Новости
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    Вакансии
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                    <Icon name="Phone" size={16} className="mr-2" />
                    8 800 555-00-00
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                    <Icon name="Mail" size={16} className="mr-2" />
                    info@consultant.ru
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2025 КонсультантПлюс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
