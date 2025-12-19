const UMLDiagram = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-card rounded-lg border-2 border-border">
      <h2 className="text-3xl font-heading font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        UML: Пользовательское взаимодействие с системой
      </h2>
      
      <svg viewBox="0 0 1200 800" className="w-full h-auto">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="hsl(var(--primary))" />
          </marker>
        </defs>

        {/* Посетитель */}
        <g>
          <ellipse cx="100" cy="60" rx="30" ry="45" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2"/>
          <circle cx="100" cy="40" r="15" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
          <line x1="100" y1="55" x2="100" y2="75" stroke="hsl(var(--primary))" strokeWidth="2"/>
          <line x1="100" y1="65" x2="80" y2="85" stroke="hsl(var(--primary))" strokeWidth="2"/>
          <line x1="100" y1="65" x2="120" y2="85" stroke="hsl(var(--primary))" strokeWidth="2"/>
          <line x1="100" y1="75" x2="80" y2="100" stroke="hsl(var(--primary))" strokeWidth="2"/>
          <line x1="100" y1="75" x2="120" y2="100" stroke="hsl(var(--primary))" strokeWidth="2"/>
          <text x="100" y="125" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="bold">Посетитель</text>
        </g>

        {/* Организатор */}
        <g>
          <ellipse cx="100" cy="350" rx="30" ry="45" fill="hsl(var(--secondary))" opacity="0.2" stroke="hsl(var(--secondary))" strokeWidth="2"/>
          <circle cx="100" cy="330" r="15" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2"/>
          <line x1="100" y1="345" x2="100" y2="365" stroke="hsl(var(--secondary))" strokeWidth="2"/>
          <line x1="100" y1="355" x2="80" y2="375" stroke="hsl(var(--secondary))" strokeWidth="2"/>
          <line x1="100" y1="355" x2="120" y2="375" stroke="hsl(var(--secondary))" strokeWidth="2"/>
          <line x1="100" y1="365" x2="80" y2="390" stroke="hsl(var(--secondary))" strokeWidth="2"/>
          <line x1="100" y1="365" x2="120" y2="390" stroke="hsl(var(--secondary))" strokeWidth="2"/>
          <text x="100" y="415" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="bold">Организатор</text>
        </g>

        {/* Спикер */}
        <g>
          <ellipse cx="100" cy="640" rx="30" ry="45" fill="hsl(var(--accent))" opacity="0.2" stroke="hsl(var(--accent))" strokeWidth="2"/>
          <circle cx="100" cy="620" r="15" fill="none" stroke="hsl(var(--accent))" strokeWidth="2"/>
          <line x1="100" y1="635" x2="100" y2="655" stroke="hsl(var(--accent))" strokeWidth="2"/>
          <line x1="100" y1="645" x2="80" y2="665" stroke="hsl(var(--accent))" strokeWidth="2"/>
          <line x1="100" y1="645" x2="120" y2="665" stroke="hsl(var(--accent))" strokeWidth="2"/>
          <line x1="100" y1="655" x2="80" y2="680" stroke="hsl(var(--accent))" strokeWidth="2"/>
          <line x1="100" y1="655" x2="120" y2="680" stroke="hsl(var(--accent))" strokeWidth="2"/>
          <text x="100" y="705" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="bold">Спикер</text>
        </g>

        {/* Система управления */}
        <rect x="450" y="320" width="300" height="180" rx="10" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="3"/>
        <text x="600" y="355" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="18" fontWeight="bold">Система управления</text>
        <text x="600" y="375" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="18" fontWeight="bold">конференцией</text>
        <line x1="460" y1="390" x2="740" y2="390" stroke="hsl(var(--border))" strokeWidth="2"/>
        
        <text x="470" y="415" fill="hsl(var(--muted-foreground))" fontSize="13">• Регистрация участников</text>
        <text x="470" y="435" fill="hsl(var(--muted-foreground))" fontSize="13">• Управление программой</text>
        <text x="470" y="455" fill="hsl(var(--muted-foreground))" fontSize="13">• Управление спикерами</text>
        <text x="470" y="475" fill="hsl(var(--muted-foreground))" fontSize="13">• Отправка уведомлений</text>

        {/* База данных */}
        <g>
          <ellipse cx="1000" cy="410" rx="100" ry="35" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--primary))" strokeWidth="2"/>
          <ellipse cx="1000" cy="410" rx="100" ry="10" fill="hsl(var(--primary))" opacity="0.3" stroke="hsl(var(--primary))" strokeWidth="2"/>
          <line x1="900" y1="410" x2="900" y2="440" stroke="hsl(var(--primary))" strokeWidth="2"/>
          <line x1="1100" y1="410" x2="1100" y2="440" stroke="hsl(var(--primary))" strokeWidth="2"/>
          <ellipse cx="1000" cy="440" rx="100" ry="10" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
          <text x="1000" y="485" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="bold">База данных</text>
        </g>

        {/* Стрелки от посетителя */}
        <line x1="150" y1="80" x2="430" y2="360" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
        <text x="250" y="200" fill="hsl(var(--primary))" fontSize="12" fontWeight="500">Просмотр программы</text>
        
        <line x1="150" y1="100" x2="420" y2="400" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
        <text x="250" y="260" fill="hsl(var(--primary))" fontSize="12" fontWeight="500">Регистрация</text>

        {/* Стрелки от организатора */}
        <line x1="150" y1="360" x2="440" y2="380" stroke="hsl(var(--secondary))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
        <text x="250" y="355" fill="hsl(var(--secondary))" fontSize="12" fontWeight="500">Создание мероприятия</text>
        
        <line x1="150" y1="380" x2="440" y2="420" stroke="hsl(var(--secondary))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
        <text x="250" y="415" fill="hsl(var(--secondary))" fontSize="12" fontWeight="500">Управление программой</text>
        
        <line x1="150" y1="400" x2="440" y2="460" stroke="hsl(var(--secondary))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
        <text x="250" y="445" fill="hsl(var(--secondary))" fontSize="12" fontWeight="500">Модерация участников</text>

        {/* Стрелки от спикера */}
        <line x1="150" y1="640" x2="430" y2="470" stroke="hsl(var(--accent))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
        <text x="250" y="570" fill="hsl(var(--accent))" fontSize="12" fontWeight="500">Подача заявки</text>
        
        <line x1="150" y1="660" x2="420" y2="490" stroke="hsl(var(--accent))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
        <text x="250" y="600" fill="hsl(var(--accent))" fontSize="12" fontWeight="500">Загрузка материалов</text>

        {/* Стрелки к базе данных */}
        <line x1="750" y1="390" x2="890" y2="405" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
        <text x="800" y="380" fill="hsl(var(--primary))" fontSize="12" fontWeight="500">Сохранение данных</text>
        
        <line x1="900" y1="425" x2="760" y2="440" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
        <text x="800" y="450" fill="hsl(var(--primary))" fontSize="12" fontWeight="500">Получение данных</text>

        {/* Границы системы */}
        <rect x="20" y="20" width="1160" height="750" rx="15" fill="none" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="10,5"/>
        <text x="40" y="55" fill="hsl(var(--muted-foreground))" fontSize="16" fontWeight="bold">Система конференции "Институт МИР"</text>
      </svg>

      <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm">
        <div className="p-4 bg-primary/10 rounded-lg border border-primary">
          <h3 className="font-bold mb-2 text-primary">Посетитель</h3>
          <p className="text-muted-foreground">Просматривает программу и регистрируется на мероприятие</p>
        </div>
        <div className="p-4 bg-secondary/10 rounded-lg border border-secondary">
          <h3 className="font-bold mb-2 text-secondary">Организатор</h3>
          <p className="text-muted-foreground">Создает и управляет конференцией, модерирует участников</p>
        </div>
        <div className="p-4 bg-accent/10 rounded-lg border border-accent">
          <h3 className="font-bold mb-2 text-accent">Спикер</h3>
          <p className="text-muted-foreground">Подает заявку на выступление и загружает материалы</p>
        </div>
      </div>
    </div>
  );
};

export default UMLDiagram;
