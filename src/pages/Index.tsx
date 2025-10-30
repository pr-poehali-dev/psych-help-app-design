import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSlide = Math.round(scrollPosition / windowHeight);
      setActiveSlide(currentSlide);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === index ? 'bg-primary scale-125 shadow-lg' : 'bg-secondary hover:bg-secondary/70'
            }`}
            aria-label={`Слайд ${index + 1}`}
          />
        ))}
      </div>

      <section className="slide-section gradient-deep-purple">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10 animate-slide-up">
          <div className="mb-8 inline-block">
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl">
              <p className="text-primary font-semibold text-sm md:text-base">Курсовой проект</p>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight text-shadow">
            Разработка дизайна<br />
            <span className="text-white/90">мобильного приложения</span><br />
            по психологической помощи
          </h1>
          
          <div className="mt-12 md:mt-16 space-y-3 text-base md:text-lg">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 inline-block">
              <p className="text-white/90">
                <span className="font-semibold text-white">Выполнила:</span> Шумова Д.В.
              </p>
              <p className="text-white/90">
                <span className="font-semibold text-white">Группа:</span> ДС 22-21
              </p>
              <p className="text-white/90 mt-2">
                <span className="font-semibold text-white">Руководитель:</span> Сорочан Ю.В.
              </p>
            </div>
          </div>
          
          <div className="mt-12 md:mt-16">
            <button 
              onClick={() => scrollToSlide(1)}
              className="animate-float bg-white text-primary px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 mx-auto"
            >
              Начать презентацию
              <Icon name="ArrowDown" size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="slide-section bg-gradient-to-br from-white to-purple-50">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="Heart" className="text-primary" size={20} />
              <span className="text-primary font-semibold text-sm">О проекте</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Слушаем и Поддерживаем
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Приложение психологической поддержки для людей с эмоциональными трудностями
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 md:p-8 bg-white border-2 border-primary/20 hover:border-primary/40 transition-all hover-scale shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary to-primary/70 p-4 rounded-2xl shadow-lg">
                  <Icon name="Target" className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">Миссия</h3>
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    Психологически помочь людям с трудностями в жизни, эмоциями и принятием себя
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-white border-2 border-secondary/20 hover:border-secondary/40 transition-all hover-scale shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-secondary to-secondary/70 p-4 rounded-2xl shadow-lg">
                  <Icon name="Users" className="text-primary" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">Аудитория</h3>
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    Люди с эмоциональным дискомфортом, молодежь и студенты, ищущие быструю поддержку
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 md:p-8 bg-gradient-to-br from-purple-100 via-pink-50 to-white border-2 border-primary/20 shadow-xl">
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Icon name="Sparkles" size={24} />
              </div>
              Ключевые потребности пользователей
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
                <Icon name="ShieldCheck" className="text-primary mb-3" size={32} />
                <h4 className="font-semibold text-base mb-1">Анонимность</h4>
                <p className="text-sm text-foreground/70">Конфиденциальность данных</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
                <Icon name="Zap" className="text-primary mb-3" size={32} />
                <h4 className="font-semibold text-base mb-1">Простота</h4>
                <p className="text-sm text-foreground/70">Интуитивный интерфейс</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
                <Icon name="Clock" className="text-primary mb-3" size={32} />
                <h4 className="font-semibold text-base mb-1">Быстрый доступ</h4>
                <p className="text-sm text-foreground/70">К инструментам помощи</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
                <Icon name="TrendingUp" className="text-primary mb-3" size={32} />
                <h4 className="font-semibold text-base mb-1">Динамика</h4>
                <p className="text-sm text-foreground/70">Отслеживание настроения</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="slide-section gradient-peach">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="Palette" className="text-primary" size={20} />
              <span className="text-primary font-semibold text-sm">Дизайн-система</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Цветовые решения
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <Card className="p-6 text-center shadow-xl hover-scale bg-white/90 backdrop-blur-sm border-2 border-primary/10">
              <div className="relative mb-6">
                <div className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-3xl shadow-2xl" style={{ backgroundColor: '#FCDACA' }}></div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                  <Icon name="Heart" className="text-primary" size={20} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Нежный персик</h3>
              <p className="text-2xl md:text-3xl font-mono text-primary mb-2">#FCDACA</p>
              <p className="text-sm text-foreground/70">Теплота и забота</p>
            </Card>

            <Card className="p-6 text-center shadow-xl hover-scale bg-white/90 backdrop-blur-sm border-2 border-primary/20">
              <div className="relative mb-6">
                <div className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-3xl shadow-2xl" style={{ backgroundColor: '#710094' }}></div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                  <Icon name="Shield" className="text-primary" size={20} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Глубокий фиолетовый</h3>
              <p className="text-2xl md:text-3xl font-mono text-primary mb-2">#710094</p>
              <p className="text-sm text-foreground/70">Доверие и стабильность</p>
            </Card>

            <Card className="p-6 text-center shadow-xl hover-scale bg-white/90 backdrop-blur-sm border-2 border-primary/10">
              <div className="relative mb-6">
                <div className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-3xl shadow-2xl" style={{ backgroundColor: '#C1B5F3' }}></div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                  <Icon name="Sparkles" className="text-primary" size={20} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Светлая лаванда</h3>
              <p className="text-2xl md:text-3xl font-mono text-primary mb-2">#C1B5F3</p>
              <p className="text-sm text-foreground/70">Спокойствие и гармония</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 md:p-8 bg-white/90 backdrop-blur-sm shadow-xl border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary text-white p-2 rounded-lg">
                  <Icon name="Type" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-primary">Типографика</h3>
              </div>
              <div className="space-y-6">
                <div className="p-4 bg-gradient-to-r from-purple-50 to-transparent rounded-xl">
                  <p className="text-xs text-foreground/60 mb-2 uppercase tracking-wide">Заголовки</p>
                  <p className="text-3xl md:text-4xl font-bold text-primary" style={{ fontFamily: 'Rubik' }}>Rubik</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-pink-50 to-transparent rounded-xl">
                  <p className="text-xs text-foreground/60 mb-2 uppercase tracking-wide">Основной текст</p>
                  <p className="text-2xl md:text-3xl text-foreground" style={{ fontFamily: 'Krub' }}>Krub</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-white/90 backdrop-blur-sm shadow-xl border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-secondary text-primary p-2 rounded-lg">
                  <Icon name="Eye" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-primary">Психология цвета</h3>
              </div>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
                Палитра создаёт атмосферу безопасности и поддержки.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full mt-1.5" style={{ backgroundColor: '#710094' }}></div>
                  <p className="text-sm text-foreground/70">Фиолетовый — мудрость и понимание</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full mt-1.5" style={{ backgroundColor: '#FCDACA' }}></div>
                  <p className="text-sm text-foreground/70">Персиковый — теплота и человечность</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="slide-section bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-10 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="Smartphone" className="text-primary" size={20} />
              <span className="text-primary font-semibold text-sm">UI/UX Дизайн</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Прототипы приложения
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-white shadow-xl border-2 border-primary/20 overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/files/ed82c750-fb82-4e51-8461-a87508d5429e.jpg" 
                alt="Концепция дизайна" 
                className="w-full rounded-lg mb-4"
              />
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Icon name="Layout" size={16} />
                <span>Общая концепция и элементы</span>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-xl border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary text-white p-2 rounded-lg">
                  <Icon name="Route" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary">Путь пользователя</h3>
              </div>
              <div className="space-y-3">
                {[
                  { icon: 'Waves', text: 'Приветственный экран', color: '#710094' },
                  { icon: 'UserPlus', text: 'Регистрация', color: '#9b5fb8' },
                  { icon: 'Home', text: 'Главная страница', color: '#C1B5F3' },
                  { icon: 'BookOpen', text: 'Дневник настроения', color: '#E5DEFF' },
                  { icon: 'User', text: 'Профиль пользователя', color: '#FCDACA' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-all">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg" style={{ backgroundColor: item.color }}>
                      <Icon name={item.icon as any} className="text-white" size={16} />
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-white shadow-xl border-2 border-primary/20 mb-8">
            <img 
              src="https://cdn.poehali.dev/files/0a8d81e1-abac-4866-bce8-bd6feb6ed905.jpg" 
              alt="Экраны приложения" 
              className="w-full rounded-lg"
            />
          </Card>

          <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 shadow-xl">
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6 text-center">
              Ключевые особенности дизайна
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white p-5 rounded-2xl shadow-lg mb-4 mx-auto w-fit hover-scale">
                  <Icon name="Palette" className="text-primary" size={36} />
                </div>
                <h4 className="font-semibold text-base md:text-lg mb-2">Гармоничные цвета</h4>
                <p className="text-sm text-foreground/70">Успокаивающая палитра</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-5 rounded-2xl shadow-lg mb-4 mx-auto w-fit hover-scale">
                  <Icon name="Minimize2" className="text-primary" size={36} />
                </div>
                <h4 className="font-semibold text-base md:text-lg mb-2">Минимализм</h4>
                <p className="text-sm text-foreground/70">Интуитивный интерфейс</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-5 rounded-2xl shadow-lg mb-4 mx-auto w-fit hover-scale">
                  <Icon name="Smile" className="text-primary" size={36} />
                </div>
                <h4 className="font-semibold text-base md:text-lg mb-2">Эмпатия</h4>
                <p className="text-sm text-foreground/70">Дружелюбный дизайн</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
