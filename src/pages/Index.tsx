import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import UMLDiagram from '@/components/UMLDiagram';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-heading font-bold text-2xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Институт МИР
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'program', 'speakers', 'register', 'uml', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О конференции'}
                  {section === 'program' && 'Программа'}
                  {section === 'speakers' && 'Спикеры'}
                  {section === 'register' && 'Регистрация'}
                  {section === 'uml' && 'UML'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-pulse"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(217, 70, 239, 0.3) 0%, transparent 50%)',
        }}></div>
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Конференция 2025
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Инновации, технологии и будущее образования
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              onClick={() => scrollToSection('register')}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8"
            >
              Зарегистрироваться
            </Button>
            <Button
              onClick={() => scrollToSection('program')}
              size="lg"
              variant="outline"
              className="text-lg px-8"
            >
              Программа
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            О конференции
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: 'Lightbulb', title: 'Инновации', desc: 'Новейшие разработки и технологии в образовании' },
              { icon: 'Users', title: 'Нетворкинг', desc: 'Встречи с экспертами и единомышленниками' },
              { icon: 'Award', title: 'Сертификаты', desc: 'Официальные сертификаты участников' }
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:border-primary transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-white" size={24} />
                  </div>
                  <CardTitle className="font-heading">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Программа конференции
          </h2>
          <div className="space-y-4">
            {[
              { time: '09:00 - 10:00', title: 'Регистрация участников', desc: 'Приветственный кофе' },
              { time: '10:00 - 11:30', title: 'Пленарное заседание', desc: 'Открытие конференции, приветственные речи' },
              { time: '11:30 - 13:00', title: 'Секция 1: Цифровые технологии', desc: 'Доклады и дискуссии' },
              { time: '13:00 - 14:00', title: 'Обед', desc: 'Нетворкинг' },
              { time: '14:00 - 15:30', title: 'Секция 2: Современные методики', desc: 'Мастер-классы и практикумы' },
              { time: '15:30 - 17:00', title: 'Круглый стол', desc: 'Обсуждение итогов и перспектив' }
            ].map((item, i) => (
              <Card key={i} className="hover:border-secondary transition-all duration-300 animate-slide-in" style={{ animationDelay: `${i * 100}ms` }}>
                <CardContent className="flex gap-4 items-start p-6">
                  <div className="min-w-[120px] text-primary font-semibold">{item.time}</div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="speakers" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Спикеры
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Анна Петрова',
                role: 'Директор по инновациям',
                company: 'ТехОбразование',
                image: 'https://cdn.poehali.dev/projects/220fbc87-b838-4ac6-a8d4-72062a9534ef/files/0b08b7a2-acd4-4d53-9ffc-1222c3c6eb8e.jpg'
              },
              {
                name: 'Дмитрий Соколов',
                role: 'CEO',
                company: 'ЦифроваяШкола',
                image: 'https://cdn.poehali.dev/projects/220fbc87-b838-4ac6-a8d4-72062a9534ef/files/6c8ad11d-0a93-4075-b536-a9a7cf472e3a.jpg'
              },
              {
                name: 'Мария Иванова',
                role: 'Руководитель отдела',
                company: 'Институт МИР',
                image: 'https://cdn.poehali.dev/projects/220fbc87-b838-4ac6-a8d4-72062a9534ef/files/6324bcbd-6bb9-4b20-89d2-0aaf4bbd6038.jpg'
              }
            ].map((speaker, i) => (
              <Card key={i} className="overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:scale-105 group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">{speaker.name}</CardTitle>
                  <CardDescription className="text-primary">{speaker.role}</CardDescription>
                  <p className="text-sm text-muted-foreground">{speaker.company}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Регистрация
          </h2>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="font-heading">Зарегистрируйтесь на конференцию</CardTitle>
              <CardDescription>Заполните форму, и мы свяжемся с вами</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Спасибо за регистрацию! Мы свяжемся с вами.'); }}>
                <div>
                  <Label htmlFor="name">Имя и фамилия</Label>
                  <Input id="name" placeholder="Иван Иванов" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" required />
                </div>
                <div>
                  <Label htmlFor="organization">Организация</Label>
                  <Input id="organization" placeholder="Институт МИР" required />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="uml" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <UMLDiagram />
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">г. Самара, ул. ГС Аксаково, 21</p>
                <p className="text-muted-foreground mt-2">Институт МИР</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Icon name="Phone" className="text-secondary" />
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Телефон: +7 (846) 123-45-67</p>
                <p className="text-muted-foreground mt-2">Email: info@mir-samara.ru</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Институт МИР. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;