import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface SessionStat {
  title: string;
  onlineParticipants: number;
  offlineParticipants: number;
  rating: number;
  popularity: 'high' | 'medium' | 'low';
}

const sessions: SessionStat[] = [
  {
    title: 'Секция 1: Цифровые технологии в образовании',
    onlineParticipants: 342,
    offlineParticipants: 125,
    rating: 4.8,
    popularity: 'high'
  },
  {
    title: 'Секция 2: Современные методики',
    onlineParticipants: 287,
    offlineParticipants: 98,
    rating: 4.6,
    popularity: 'high'
  },
  {
    title: 'Круглый стол: Обсуждение итогов',
    onlineParticipants: 156,
    offlineParticipants: 87,
    rating: 4.4,
    popularity: 'medium'
  },
  {
    title: 'Мастер-класс: Интерактивные методы обучения',
    onlineParticipants: 198,
    offlineParticipants: 65,
    rating: 4.7,
    popularity: 'medium'
  }
];

export default function SessionStats() {
  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case 'high':
        return 'text-green-600 bg-green-100 dark:bg-green-950';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-950';
      case 'low':
        return 'text-gray-600 bg-gray-100 dark:bg-gray-800';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const totalOnline = sessions.reduce((sum, s) => sum + s.onlineParticipants, 0);
  const totalOffline = sessions.reduce((sum, s) => sum + s.offlineParticipants, 0);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
          Статистика конференции
        </h2>
        <p className="text-muted-foreground text-lg">Обратная связь и популярность секций</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="border-2 border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Icon name="Users" size={18} />
              Онлайн участников
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary">{totalOnline}</div>
          </CardContent>
        </Card>

        <Card className="border-2 border-secondary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Icon name="MapPin" size={18} />
              Оффлайн участников
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-secondary">{totalOffline}</div>
          </CardContent>
        </Card>

        <Card className="border-2 border-accent/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Icon name="TrendingUp" size={18} />
              Всего участников
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-accent">{totalOnline + totalOffline}</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {sessions.map((session, idx) => (
          <Card key={idx} className="hover:border-primary transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <h3 className="font-semibold text-lg flex-1">{session.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPopularityColor(session.popularity)}`}>
                      {session.popularity === 'high' ? 'Высокая популярность' : 
                       session.popularity === 'medium' ? 'Средняя популярность' : 'Низкая популярность'}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Monitor" size={16} />
                      <span>Онлайн: <strong className="text-foreground">{session.onlineParticipants}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={16} />
                      <span>Оффлайн: <strong className="text-foreground">{session.offlineParticipants}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Star" size={16} className="fill-yellow-500 text-yellow-500" />
                      <span>Рейтинг: <strong className="text-foreground">{session.rating}</strong>/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
