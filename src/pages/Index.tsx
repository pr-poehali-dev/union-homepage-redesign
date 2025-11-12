import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMainDropdown, setActiveMainDropdown] = useState<string | null>(null);

  const topMenuItems = [
    { title: 'О нас', href: '#' },
    { title: 'Новости', href: '#' },
    { title: 'Мероприятия', href: '#' },
    { title: 'Проекты', href: '#' },
    { title: 'Контакты', href: '#' }
  ];

  const mainMenuItems = [
    {
      title: 'Образование и наука',
      icon: 'GraduationCap',
      color: 'from-blue-500 to-indigo-600',
      items: ['Конференции', 'НОЦ СМТ', 'РПА']
    },
    {
      title: 'Реабилитация',
      subtitle: 'Поддержка и интеграция людей с психическими особенностями',
      icon: 'Heart',
      color: 'from-pink-500 to-rose-600',
      items: ['Интернет магазин другие', 'Фестиваль другие', 'Навигатор помощи', 'Совет НКО', 'Малая полиграфия']
    },
    {
      title: 'Профилактика и просвещение',
      subtitle: 'Медиа проекты',
      icon: 'Lightbulb',
      color: 'from-amber-500 to-orange-600',
      items: ['вМесте', 'Я/Мы психиатр', 'Психология - новая религия', 'Doky-Mental']
    },
    {
      title: 'Проверенные специалисты',
      icon: 'UserCheck',
      color: 'from-emerald-500 to-teal-600',
      items: []
    },
    {
      title: 'Как нас поддержать',
      icon: 'HandHeart',
      color: 'from-purple-500 to-violet-600',
      items: ['Донаты', 'Магазин Другие', 'Малая полиграфия']
    },
    {
      title: 'Волонтерство и развитие сообщества',
      icon: 'Users',
      color: 'from-cyan-500 to-blue-600',
      items: [
        'Волонтерство в психиатрии',
        'Социальное проектирование',
        'Конкурс студенческих социальных проектов «Октябрь - месяц охраны психического здоровья»'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Heart" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Союз охраны</h1>
                <p className="text-sm text-muted-foreground">психического здоровья</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-1 text-sm">
                <a href="tel:+74951234567" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </a>
                <a href="mailto:info@mental-health.ru" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                  <Icon name="Mail" size={16} />
                  <span>info@mental-health.ru</span>
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <a 
                  href="https://t.me/mental_health_russia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <Icon name="Send" size={18} />
                </a>
                <a 
                  href="https://rutube.ru/mental_health" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <Icon name="Video" size={18} />
                </a>
                <a 
                  href="https://vk.com/mental_health_russia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <Icon name="Users" size={18} />
                </a>
              </div>
            </div>
          </div>

          <nav className="py-3 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                {topMenuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Экспертам
              </a>
            </div>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainMenuItems.map((item, index) => (
              <div 
                key={index}
                className="relative group"
                onMouseEnter={() => item.items.length > 0 && setActiveMainDropdown(item.title)}
                onMouseLeave={() => setActiveMainDropdown(null)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full cursor-pointer border-2 border-transparent hover:border-primary/20">
                  <div className={`bg-gradient-to-br ${item.color} p-6 text-white`}>
                    <div className="flex items-start justify-between mb-3">
                      <Icon name={item.icon} size={36} className="opacity-90" />
                      {item.items.length > 0 && (
                        <Icon 
                          name="ChevronDown" 
                          size={20} 
                          className={`transition-transform ${activeMainDropdown === item.title ? 'rotate-180' : ''}`}
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    {item.subtitle && (
                      <p className="text-sm opacity-90">{item.subtitle}</p>
                    )}
                  </div>
                  
                  {item.items.length > 0 && activeMainDropdown === item.title && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-2xl rounded-xl border border-border py-3 z-50 animate-in fade-in slide-in-from-top-2">
                      {item.items.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block px-5 py-3 text-sm text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent hover:text-primary transition-all font-medium"
                        >
                          <Icon name="ArrowRight" size={14} className="inline mr-2 opacity-50" />
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold text-foreground mb-6">
                Союз охраны психического здоровья России
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Мы объединяем специалистов, организации и людей для развития системы охраны психического здоровья в России
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Heart" size={20} className="mr-2" />
                  Поддержать нас
                </Button>
                <Button size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Мы работаем над созданием комплексной системы охраны психического здоровья, объединяя усилия специалистов, 
                организаций и общества для повышения качества жизни людей с психическими особенностями
              </p>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Специалистов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Организаций</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Помогли людям</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">О нас</h4>
              <p className="text-sm text-white/70">
                Союз охраны психического здоровья России
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-white/70">
                <p>+7 (495) 123-45-67</p>
                <p>info@mental-health.ru</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Send" size={18} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Video" size={18} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Users" size={18} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <div className="space-y-2 text-sm text-white/70">
                <a href="#" className="block hover:text-white transition-colors">Устав</a>
                <a href="#" className="block hover:text-white transition-colors">Отчеты</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
            © 2024 Союз охраны психического здоровья России. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
