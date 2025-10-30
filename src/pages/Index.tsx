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
        {[0, 1, 2, 3, 4].map((index) => (
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
          
          <div className="mt-12 md:mt-16 flex justify-center">
            <div className="bg-gradient-to-br from-orange-400 to-orange-500 p-6 rounded-2xl shadow-2xl w-32 h-32 flex items-center justify-center">
              <div className="text-white text-5xl font-bold">КП</div>
            </div>
          </div>
          
          <div className="mt-12">
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

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-white shadow-xl border-2 border-primary/20">
              <div className="bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl p-6 mb-4 aspect-[9/16] flex flex-col items-center justify-center">
                <div className="text-6xl mb-4">👋</div>
                <h4 className="font-semibold text-lg text-center mb-2">Добро пожаловать</h4>
                <p className="text-sm text-center text-foreground/70">Загрузочный экран</p>
              </div>
              <div className="text-center text-sm text-foreground/70">Приветственное окно</div>
            </Card>

            <Card className="p-6 bg-white shadow-xl border-2 border-primary/20">
              <div className="bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl p-6 mb-4 aspect-[9/16] flex flex-col items-center justify-center gap-4">
                <Icon name="Heart" size={64} className="text-primary" />
                <h4 className="font-semibold text-lg text-center">Слушаем и Поддерживаем</h4>
                <p className="text-sm text-center text-foreground/70 px-4">
                  Ваш персональный помощник в работе с эмоциями
                </p>
                <div className="flex gap-2 mt-4">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                  <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                </div>
              </div>
              <div className="text-center text-sm text-foreground/70">Приветственное окно</div>
            </Card>

            <Card className="p-6 bg-white shadow-xl border-2 border-primary/20">
              <div className="bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl p-6 mb-4 aspect-[9/16] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-center mb-4">
                    <Icon name="UserPlus" size={48} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg text-center mb-4">Регистрация</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/60 rounded-lg p-3 text-sm">Имя</div>
                  <div className="bg-white/60 rounded-lg p-3 text-sm">Email</div>
                  <div className="bg-white/60 rounded-lg p-3 text-sm">Пароль</div>
                  <div className="bg-primary text-white rounded-lg p-3 text-center font-semibold">
                    Создать аккаунт
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-foreground/70">Регистрация</div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
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
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg" style={{ backgroundColor: item.color }}>
                      <Icon name={item.icon as any} className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                    {idx < 4 && <Icon name="ChevronRight" size={16} className="text-foreground/30" />}
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-xl border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary text-primary p-2 rounded-lg">
                  <Icon name="Layout" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary">Элементы логотипа</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-100 to-pink-50 rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                      <Icon name="Heart" size={36} className="text-white" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-primary">Основной логотип</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="aspect-square rounded-xl flex items-center justify-center" style={{ backgroundColor: '#FCDACA' }}>
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div className="aspect-square rounded-xl flex items-center justify-center" style={{ backgroundColor: '#710094' }}>
                    <Icon name="Sparkles" className="text-white" size={28} />
                  </div>
                  <div className="aspect-square rounded-xl flex items-center justify-center" style={{ backgroundColor: '#C1B5F3' }}>
                    <span className="text-2xl">💜</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

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
                <p className="text-sm text-foreground/70">Успокаивающая палитра для комфортного использования</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-5 rounded-2xl shadow-lg mb-4 mx-auto w-fit hover-scale">
                  <Icon name="Minimize2" className="text-primary" size={36} />
                </div>
                <h4 className="font-semibold text-base md:text-lg mb-2">Минимализм</h4>
                <p className="text-sm text-foreground/70">Интуитивный интерфейс без лишних элементов</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-5 rounded-2xl shadow-lg mb-4 mx-auto w-fit hover-scale">
                  <Icon name="Smile" className="text-primary" size={36} />
                </div>
                <h4 className="font-semibold text-base md:text-lg mb-2">Эмпатия</h4>
                <p className="text-sm text-foreground/70">Дружелюбные иллюстрации и тёплые тона</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="slide-section bg-gradient-to-br from-white via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="Network" className="text-primary" size={20} />
              <span className="text-primary font-semibold text-sm">Mind Map</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Карта ассоциаций
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Структура проекта и связь ключевых элементов
            </p>
          </div>

          <div className="relative min-h-[600px] bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-primary/20 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-primary to-primary/80 text-white px-8 py-6 rounded-3xl shadow-2xl hover-scale mb-12 relative">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    🎯
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-center">
                    Слушаем и Поддерживаем
                  </h3>
                  <p className="text-white/80 text-center mt-2 text-sm">Центральная концепция</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 w-full mb-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
                      <h4 className="text-lg font-bold text-primary">Эмоции</h4>
                    </div>
                    
                    <Card className="p-4 bg-white/90 backdrop-blur-sm border-2 border-purple-200 hover:border-primary transition-all hover-scale">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                          <span className="text-xl">😊</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">Радость</p>
                          <p className="text-xs text-foreground/60">Позитивные переживания</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 bg-white/90 backdrop-blur-sm border-2 border-purple-200 hover:border-primary transition-all hover-scale">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                          <span className="text-xl">😢</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">Грусть</p>
                          <p className="text-xs text-foreground/60">Принятие эмоций</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 bg-white/90 backdrop-blur-sm border-2 border-purple-200 hover:border-primary transition-all hover-scale">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                          <span className="text-xl">😰</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">Тревога</p>
                          <p className="text-xs text-foreground/60">Работа со страхами</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 bg-white/90 backdrop-blur-sm border-2 border-purple-200 hover:border-primary transition-all hover-scale">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                          <span className="text-xl">😠</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">Злость</p>
                          <p className="text-xs text-foreground/60">Экологичное выражение</p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-secondary to-transparent rounded-full"></div>
                      <h4 className="text-lg font-bold text-primary">Инструменты</h4>
                    </div>
                    
                    <Card className="p-4 bg-white/90 backdrop-blur-sm border-2 border-pink-200 hover:border-secondary transition-all hover-scale">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                          <Icon name="BookOpen" className="text-primary" size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">Дневник настроения</p>
                          <p className="text-xs text-foreground/60">Отслеживание эмоций</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 bg-white/90 backdrop-blur-sm border-2 border-pink-200 hover:border-secondary transition-all hover-scale">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/40 flex items-center justify-center">
                          <Icon name="Wind" className="text-primary" size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">Дыхательные практики</p>
                          <p className="text-xs text-foreground/60">Снижение стресса</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 bg-white/90 backdrop-blur-sm border-2 border-pink-200 hover:border-secondary transition-all hover-scale">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                          <Icon name="Headphones" className="text-primary" size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">Медитации</p>
                          <p className="text-xs text-foreground/60">Осознанность</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 bg-white/90 backdrop-blur-sm border-2 border-pink-200 hover:border-secondary transition-all hover-scale">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
                          <Icon name="MessageCircle" className="text-primary" size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">Поддержка психолога</p>
                          <p className="text-xs text-foreground/60">Профессиональная помощь</p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-transparent rounded-full"></div>
                      <h4 className="text-lg font-bold text-primary">Ценности</h4>
                    </div>
                    
                    <Card className="p-4 bg-white/90 backdrop-blur-sm border-2 border-orange-200 hover:border-orange-400 transition-all hover-scale">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                          <Icon name="ShieldCheck" className="text-orange-600" size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">Анонимность</p>
                          <p className="text-xs text-foreground/60">Защита данных</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 bg-white/90 backdrop-blur-sm border-2 border-orange-200 hover:border-orange-400 transition-all hover-scale">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                          <Icon name="Heart" className="text-orange-600" size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">Эмпатия</p>
                          <p className="text-xs text-foreground/60">Понимание и забота</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 bg-white/90 backdrop-blur-sm border-2 border-orange-200 hover:border-orange-400 transition-all hover-scale">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center">
                          <Icon name="Zap" className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">Доступность</p>
                          <p className="text-xs text-foreground/60">24/7 в любой точке</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 bg-white/90 backdrop-blur-sm border-2 border-orange-200 hover:border-orange-400 transition-all hover-scale">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                          <Icon name="TrendingUp" className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">Прогресс</p>
                          <p className="text-xs text-foreground/60">Отслеживание динамики</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                  <Card className="p-6 bg-gradient-to-br from-purple-50 to-white border-2 border-primary/20 hover:border-primary/50 transition-all hover-scale text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                      <Icon name="Users" className="text-white" size={28} />
                    </div>
                    <h5 className="font-bold text-primary mb-2">Целевая аудитория</h5>
                    <p className="text-xs text-foreground/70">Молодежь 18-35 лет с эмоциональными трудностями</p>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-pink-50 to-white border-2 border-primary/20 hover:border-primary/50 transition-all hover-scale text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-lg">
                      <Icon name="Palette" className="text-primary" size={28} />
                    </div>
                    <h5 className="font-bold text-primary mb-2">Дизайн</h5>
                    <p className="text-xs text-foreground/70">Успокаивающие цвета и дружелюбный интерфейс</p>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-orange-50 to-white border-2 border-primary/20 hover:border-primary/50 transition-all hover-scale text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg">
                      <Icon name="Smartphone" className="text-white" size={28} />
                    </div>
                    <h5 className="font-bold text-primary mb-2">Платформа</h5>
                    <p className="text-xs text-foreground/70">Мобильное приложение iOS и Android</p>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-purple-50 to-white border-2 border-primary/20 hover:border-primary/50 transition-all hover-scale text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/70 to-secondary flex items-center justify-center shadow-lg">
                      <Icon name="Target" className="text-white" size={28} />
                    </div>
                    <h5 className="font-bold text-primary mb-2">Миссия</h5>
                    <p className="text-xs text-foreground/70">Сделать психологическую помощь доступной</p>
                  </Card>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 opacity-20">
              <Icon name="Network" className="text-primary" size={120} />
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-2 border-primary/20 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary text-white p-2 rounded-lg">
                  <Icon name="Lightbulb" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary">Ключевые идеи</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                  <p className="text-foreground/80">Эмоции — это нормально, их нужно слышать и принимать</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-1.5"></div>
                  <p className="text-foreground/80">Психологическая помощь должна быть доступной и анонимной</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5"></div>
                  <p className="text-foreground/80">Технологии могут помочь в работе с эмоциональным состоянием</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm border-2 border-primary/20 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary text-primary p-2 rounded-lg">
                  <Icon name="Rocket" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary">Будущее проекта</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                  <p className="text-foreground/80">Интеграция с носимыми устройствами для отслеживания состояния</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-1.5"></div>
                  <p className="text-foreground/80">ИИ-помощник для персонализированных рекомендаций</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5"></div>
                  <p className="text-foreground/80">Сообщество поддержки и групповые сессии</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="slide-section bg-gradient-to-br from-primary via-purple-600 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="text-center animate-slide-up">
            <div className="mb-8 inline-block">
              <div className="w-32 h-32 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover-scale border-4 border-white/30">
                <Icon name="Heart" className="text-white" size={64} />
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Спасибо за внимание!
            </h1>

            <div className="space-y-6 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-2xl md:text-3xl text-white/90 font-medium">
                Готова ответить на ваши вопросы
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-white/80 text-lg">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <Icon name="User" size={20} />
                  <span>Шумова Дарья</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <Icon name="GraduationCap" size={20} />
                  <span>ДС 22-21</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <Icon name="Calendar" size={20} />
                  <span>2025</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover-scale">
                <Icon name="Lightbulb" className="text-white mx-auto mb-3" size={32} />
                <p className="text-white font-semibold text-lg mb-1">Миссия</p>
                <p className="text-white/70 text-sm">Психологическая помощь доступна всем</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover-scale">
                <Icon name="Palette" className="text-white mx-auto mb-3" size={32} />
                <p className="text-white font-semibold text-lg mb-1">Дизайн</p>
                <p className="text-white/70 text-sm">Эмпатия и забота в каждом пикселе</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover-scale">
                <Icon name="Rocket" className="text-white mx-auto mb-3" size={32} />
                <p className="text-white font-semibold text-lg mb-1">Будущее</p>
                <p className="text-white/70 text-sm">Технологии на службе здоровья</p>
              </div>
            </div>

            <div className="mt-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-white/30 shadow-xl">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold border-2 border-white text-sm">
                    💜
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-pink-400 flex items-center justify-center text-white font-bold border-2 border-white text-sm">
                    🌸
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold border-2 border-white text-sm">
                    🧡
                  </div>
                </div>
                <span className="text-white text-xl font-semibold">Слушаем и Поддерживаем</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-white to-secondary"></div>
      </section>
    </div>
  );
};

export default Index;