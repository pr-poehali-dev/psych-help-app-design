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
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeSlide === index ? 'bg-primary scale-125' : 'bg-secondary'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>

      <section className="slide-section gradient-purple">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-8">
            Разработка дизайна мобильного приложения <br />
            по психологической помощи
          </h1>
          <div className="mt-16 space-y-4 text-lg">
            <p className="text-primary/80">
              <span className="font-semibold">Выполнила:</span> Шумова Д.В., Группа ДС 22-21
            </p>
            <p className="text-primary/80">
              <span className="font-semibold">Руководитель:</span> Сорочан Ю.В.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <img 
              src="https://cdn.poehali.dev/files/ed82c750-fb82-4e51-8461-a87508d5429e.jpg" 
              alt="Коллеж предпринимательства" 
              className="w-32 h-32 object-contain opacity-80"
            />
          </div>
        </div>
      </section>

      <section className="slide-section bg-white">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <h2 className="text-5xl font-bold text-primary mb-12 text-center">
            О приложении «Слушаем и Поддерживаем»
          </h2>
          <Card className="p-8 md:p-12 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-secondary shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Heart" className="text-primary" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-3">Миссия приложения</h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      Слушаем и Поддерживаем — это приложение, которое психологически поможет 
                      людям с трудностями в жизни, эмоциями и принятием себя.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Users" className="text-primary" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-3">Целевая группа</h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      Люди, испытывающие эмоциональный дискомфорт, молодые люди и студенты, 
                      ищущие доступную и быструю поддержку.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t-2 border-secondary/30">
              <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
                <Icon name="CheckCircle2" className="text-primary" size={28} />
                Ключевые потребности
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white/60 rounded-lg">
                  <Icon name="ShieldCheck" className="text-primary mt-1" size={24} />
                  <span className="text-lg">Анонимность</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/60 rounded-lg">
                  <Icon name="Zap" className="text-primary mt-1" size={24} />
                  <span className="text-lg">Простота использования</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/60 rounded-lg">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <span className="text-lg">Быстрый доступ к инструментам самопомощи</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/60 rounded-lg">
                  <Icon name="TrendingUp" className="text-primary mt-1" size={24} />
                  <span className="text-lg">Возможность отслеживать динамику настроения</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="slide-section gradient-peach">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <h2 className="text-5xl font-bold text-primary mb-12 text-center">
            Цветовые решения и айдентика
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 text-center shadow-xl hover-scale">
              <div className="w-32 h-32 mx-auto rounded-full mb-6 shadow-lg" style={{ backgroundColor: '#FCDACA' }}></div>
              <h3 className="text-2xl font-semibold mb-2">Нежный персик</h3>
              <p className="text-3xl font-mono text-primary">#FCDACA</p>
              <p className="mt-4 text-foreground/70">Теплота и забота</p>
            </Card>
            
            <Card className="p-8 text-center shadow-xl hover-scale">
              <div className="w-32 h-32 mx-auto rounded-full mb-6 shadow-lg" style={{ backgroundColor: '#710094' }}></div>
              <h3 className="text-2xl font-semibold mb-2">Глубокий фиолетовый</h3>
              <p className="text-3xl font-mono text-primary">#710094</p>
              <p className="mt-4 text-foreground/70">Доверие и стабильность</p>
            </Card>
            
            <Card className="p-8 text-center shadow-xl hover-scale">
              <div className="w-32 h-32 mx-auto rounded-full mb-6 shadow-lg" style={{ backgroundColor: '#C1B5F3' }}></div>
              <h3 className="text-2xl font-semibold mb-2">Светлая лаванда</h3>
              <p className="text-3xl font-mono text-primary">#C1B5F3</p>
              <p className="mt-4 text-foreground/70">Спокойствие и гармония</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-3">
                <Icon name="Type" size={28} />
                Типографика
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Заголовки</p>
                  <p className="text-3xl font-bold" style={{ fontFamily: 'Rubik' }}>Rubik</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Основной текст</p>
                  <p className="text-2xl" style={{ fontFamily: 'Krub' }}>Krub</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-3">
                <Icon name="Target" size={28} />
                Психология цвета
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Палитра создаёт атмосферу безопасности и поддержки. 
                Фиолетовые оттенки символизируют мудрость и понимание, 
                а персиковый добавляет теплоты и человечности.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="slide-section bg-white">
        <div className="max-w-7xl mx-auto animate-fade-in">
          <h2 className="text-5xl font-bold text-primary mb-12 text-center">
            Дизайн приложения и прототипы
          </h2>
          
          <div className="mb-12">
            <Card className="p-8 shadow-xl">
              <img 
                src="https://cdn.poehali.dev/files/ed82c750-fb82-4e51-8461-a87508d5429e.jpg" 
                alt="Общая концепция дизайна" 
                className="w-full rounded-lg"
              />
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 shadow-xl">
              <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-3">
                <Icon name="Route" size={28} />
                Путь пользователя
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Продуман для максимального удобства: от знакомства с приложением 
                до регулярного использования инструментов самопомощи.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Приветственный экран</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Регистрация</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Главная страница</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Дневник настроения</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Профиль пользователя</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-xl">
              <img 
                src="https://cdn.poehali.dev/files/0a8d81e1-abac-4866-bce8-bd6feb6ed905.jpg" 
                alt="Экраны приложения" 
                className="w-full rounded-lg"
              />
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-secondary shadow-xl">
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
              <Icon name="Sparkles" size={28} />
              Ключевые особенности дизайна
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <Icon name="Palette" className="text-primary" size={32} />
                </div>
                <h4 className="font-semibold text-lg mb-2">Гармоничные цвета</h4>
                <p className="text-foreground/70">Успокаивающая палитра для комфортного использования</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <Icon name="Minimize2" className="text-primary" size={32} />
                </div>
                <h4 className="font-semibold text-lg mb-2">Минимализм</h4>
                <p className="text-foreground/70">Интуитивный интерфейс без лишних элементов</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <Icon name="Smile" className="text-primary" size={32} />
                </div>
                <h4 className="font-semibold text-lg mb-2">Эмпатия</h4>
                <p className="text-foreground/70">Дружелюбные иллюстрации и тёплые тона</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
