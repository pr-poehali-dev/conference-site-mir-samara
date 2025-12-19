const DatabaseSchema = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-card rounded-lg border-2 border-border">
      <h2 className="text-3xl font-heading font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Примерная база данных для платформы
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Таблица: Users */}
        <div className="bg-primary/5 border-2 border-primary rounded-lg overflow-hidden">
          <div className="bg-primary text-primary-foreground p-3 font-bold text-lg">
            👥 Users (Пользователи)
          </div>
          <div className="p-4 space-y-2 text-sm">
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono text-accent">id</span>
              <span className="text-muted-foreground">INTEGER PK</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">email</span>
              <span className="text-muted-foreground">VARCHAR(255)</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">full_name</span>
              <span className="text-muted-foreground">VARCHAR(255)</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">organization</span>
              <span className="text-muted-foreground">VARCHAR(255)</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">phone</span>
              <span className="text-muted-foreground">VARCHAR(20)</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">role</span>
              <span className="text-muted-foreground">ENUM</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">created_at</span>
              <span className="text-muted-foreground">TIMESTAMP</span>
            </div>
          </div>
        </div>

        {/* Таблица: Conferences */}
        <div className="bg-secondary/5 border-2 border-secondary rounded-lg overflow-hidden">
          <div className="bg-secondary text-secondary-foreground p-3 font-bold text-lg">
            🎤 Conferences (Конференции)
          </div>
          <div className="p-4 space-y-2 text-sm">
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono text-accent">id</span>
              <span className="text-muted-foreground">INTEGER PK</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">title</span>
              <span className="text-muted-foreground">VARCHAR(500)</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">description</span>
              <span className="text-muted-foreground">TEXT</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">start_date</span>
              <span className="text-muted-foreground">DATETIME</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">end_date</span>
              <span className="text-muted-foreground">DATETIME</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">location</span>
              <span className="text-muted-foreground">VARCHAR(500)</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">status</span>
              <span className="text-muted-foreground">ENUM</span>
            </div>
          </div>
        </div>

        {/* Таблица: Speakers */}
        <div className="bg-accent/5 border-2 border-accent rounded-lg overflow-hidden">
          <div className="bg-accent text-accent-foreground p-3 font-bold text-lg">
            🎙️ Speakers (Спикеры)
          </div>
          <div className="p-4 space-y-2 text-sm">
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono text-accent">id</span>
              <span className="text-muted-foreground">INTEGER PK</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">user_id</span>
              <span className="text-muted-foreground">INTEGER FK</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">bio</span>
              <span className="text-muted-foreground">TEXT</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">company</span>
              <span className="text-muted-foreground">VARCHAR(255)</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">position</span>
              <span className="text-muted-foreground">VARCHAR(255)</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">photo_url</span>
              <span className="text-muted-foreground">VARCHAR(500)</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">approved</span>
              <span className="text-muted-foreground">BOOLEAN</span>
            </div>
          </div>
        </div>

        {/* Таблица: Sessions */}
        <div className="bg-primary/5 border-2 border-primary rounded-lg overflow-hidden">
          <div className="bg-primary text-primary-foreground p-3 font-bold text-lg">
            📅 Sessions (Доклады)
          </div>
          <div className="p-4 space-y-2 text-sm">
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono text-accent">id</span>
              <span className="text-muted-foreground">INTEGER PK</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">conference_id</span>
              <span className="text-muted-foreground">INTEGER FK</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">speaker_id</span>
              <span className="text-muted-foreground">INTEGER FK</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">title</span>
              <span className="text-muted-foreground">VARCHAR(500)</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">description</span>
              <span className="text-muted-foreground">TEXT</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">time_slot</span>
              <span className="text-muted-foreground">DATETIME</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">duration</span>
              <span className="text-muted-foreground">INTEGER</span>
            </div>
          </div>
        </div>

        {/* Таблица: Registrations */}
        <div className="bg-secondary/5 border-2 border-secondary rounded-lg overflow-hidden">
          <div className="bg-secondary text-secondary-foreground p-3 font-bold text-lg">
            ✅ Registrations (Регистрации)
          </div>
          <div className="p-4 space-y-2 text-sm">
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono text-accent">id</span>
              <span className="text-muted-foreground">INTEGER PK</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">user_id</span>
              <span className="text-muted-foreground">INTEGER FK</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">conference_id</span>
              <span className="text-muted-foreground">INTEGER FK</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">status</span>
              <span className="text-muted-foreground">ENUM</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">registered_at</span>
              <span className="text-muted-foreground">TIMESTAMP</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">attended</span>
              <span className="text-muted-foreground">BOOLEAN</span>
            </div>
          </div>
        </div>

        {/* Таблица: Materials */}
        <div className="bg-accent/5 border-2 border-accent rounded-lg overflow-hidden">
          <div className="bg-accent text-accent-foreground p-3 font-bold text-lg">
            📄 Materials (Материалы)
          </div>
          <div className="p-4 space-y-2 text-sm">
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono text-accent">id</span>
              <span className="text-muted-foreground">INTEGER PK</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">session_id</span>
              <span className="text-muted-foreground">INTEGER FK</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">title</span>
              <span className="text-muted-foreground">VARCHAR(255)</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">file_url</span>
              <span className="text-muted-foreground">VARCHAR(500)</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">file_type</span>
              <span className="text-muted-foreground">VARCHAR(50)</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="font-mono">uploaded_at</span>
              <span className="text-muted-foreground">TIMESTAMP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Связи между таблицами */}
      <div className="mt-8 p-6 bg-muted/30 rounded-lg border border-border">
        <h3 className="text-xl font-bold mb-4">🔗 Связи между таблицами</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-primary font-bold">→</span>
            <div>
              <span className="font-mono text-accent">Speakers.user_id</span>
              <span className="text-muted-foreground"> → </span>
              <span className="font-mono">Users.id</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary font-bold">→</span>
            <div>
              <span className="font-mono text-accent">Sessions.conference_id</span>
              <span className="text-muted-foreground"> → </span>
              <span className="font-mono">Conferences.id</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary font-bold">→</span>
            <div>
              <span className="font-mono text-accent">Sessions.speaker_id</span>
              <span className="text-muted-foreground"> → </span>
              <span className="font-mono">Speakers.id</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary font-bold">→</span>
            <div>
              <span className="font-mono text-accent">Registrations.user_id</span>
              <span className="text-muted-foreground"> → </span>
              <span className="font-mono">Users.id</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary font-bold">→</span>
            <div>
              <span className="font-mono text-accent">Registrations.conference_id</span>
              <span className="text-muted-foreground"> → </span>
              <span className="font-mono">Conferences.id</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary font-bold">→</span>
            <div>
              <span className="font-mono text-accent">Materials.session_id</span>
              <span className="text-muted-foreground"> → </span>
              <span className="font-mono">Sessions.id</span>
            </div>
          </div>
        </div>
      </div>

      {/* Примечания */}
      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/30">
        <h3 className="font-bold mb-2 flex items-center gap-2">
          <span>💡</span>
          Ключевые особенности
        </h3>
        <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
          <li><span className="font-mono text-accent">PK</span> — Primary Key (первичный ключ)</li>
          <li><span className="font-mono text-accent">FK</span> — Foreign Key (внешний ключ)</li>
          <li><span className="font-mono">ENUM</span> — поля со статусами: visitor/organizer/speaker, draft/active/completed, pending/confirmed/cancelled</li>
          <li><span className="font-mono">TIMESTAMP</span> — автоматическая фиксация времени создания/обновления</li>
        </ul>
      </div>
    </div>
  );
};

export default DatabaseSchema;
