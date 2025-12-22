import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface Recording {
  id: string;
  title: string;
  speaker: string;
  date: string;
  duration: string;
  views: number;
  thumbnail: string;
  videoUrl: string;
  presentationUrl: string;
}

const recordings: Recording[] = [
  {
    id: '1',
    title: 'Искусственный интеллект в образовании',
    speaker: 'Анна Петрова',
    date: '15 марта 2024',
    duration: '45 мин',
    views: 1247,
    thumbnail: 'https://cdn.poehali.dev/projects/220fbc87-b838-4ac6-a8d4-72062a9534ef/files/0b08b7a2-acd4-4d53-9ffc-1222c3c6eb8e.jpg',
    videoUrl: '#',
    presentationUrl: '#'
  },
  {
    id: '2',
    title: 'Геймификация учебного процесса',
    speaker: 'Дмитрий Соколов',
    date: '15 марта 2024',
    duration: '38 мин',
    views: 892,
    thumbnail: 'https://cdn.poehali.dev/projects/220fbc87-b838-4ac6-a8d4-72062a9534ef/files/6c8ad11d-0a93-4075-b536-a9a7cf472e3a.jpg',
    videoUrl: '#',
    presentationUrl: '#'
  },
  {
    id: '3',
    title: 'Инклюзивные технологии',
    speaker: 'Мария Иванова',
    date: '15 марта 2024',
    duration: '52 мин',
    views: 1053,
    thumbnail: 'https://cdn.poehali.dev/projects/220fbc87-b838-4ac6-a8d4-72062a9534ef/files/6324bcbd-6bb9-4b20-89d2-0aaf4bbd6038.jpg',
    videoUrl: '#',
    presentationUrl: '#'
  },
  {
    id: '4',
    title: 'Онлайн-обучение: лучшие практики',
    speaker: 'Анна Петрова',
    date: '15 марта 2024',
    duration: '41 мин',
    views: 756,
    thumbnail: 'https://cdn.poehali.dev/projects/220fbc87-b838-4ac6-a8d4-72062a9534ef/files/0b08b7a2-acd4-4d53-9ffc-1222c3c6eb8e.jpg',
    videoUrl: '#',
    presentationUrl: '#'
  }
];

export default function MaterialsArchive() {
  const [filter, setFilter] = useState<'all' | 'recent' | 'popular'>('all');

  const getSortedRecordings = () => {
    if (filter === 'popular') {
      return [...recordings].sort((a, b) => b.views - a.views);
    }
    return recordings;
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Архив материалов
        </h2>
        <p className="text-muted-foreground text-lg">Записи выступлений и презентации доступны для изучения</p>
      </div>

      <div className="flex justify-center gap-3 mb-8">
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
        >
          Все материалы
        </Button>
        <Button
          variant={filter === 'recent' ? 'default' : 'outline'}
          onClick={() => setFilter('recent')}
        >
          Недавние
        </Button>
        <Button
          variant={filter === 'popular' ? 'default' : 'outline'}
          onClick={() => setFilter('popular')}
        >
          Популярные
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {getSortedRecordings().map((recording) => (
          <Card key={recording.id} className="overflow-hidden border-2 hover:border-primary transition-all duration-300 group">
            <div className="aspect-video relative overflow-hidden bg-muted">
              <img
                src={recording.thumbnail}
                alt={recording.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button size="lg" className="rounded-full w-16 h-16">
                  <Icon name="Play" size={24} />
                </Button>
              </div>
              <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                {recording.duration}
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-xl font-heading line-clamp-2">{recording.title}</CardTitle>
              <CardDescription className="flex items-center justify-between">
                <span>{recording.speaker}</span>
                <span className="flex items-center gap-1">
                  <Icon name="Eye" size={14} />
                  {recording.views}
                </span>
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Calendar" size={16} />
                <span>{recording.date}</span>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="default" 
                  className="flex-1"
                  onClick={() => window.open(recording.videoUrl, '_blank')}
                >
                  <Icon name="Video" size={18} />
                  Смотреть запись
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.open(recording.presentationUrl, '_blank')}
                >
                  <Icon name="FileText" size={18} />
                  Презентация
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center pt-6">
        <Button variant="outline" size="lg">
          <Icon name="Download" size={18} />
          Скачать все материалы
        </Button>
      </div>
    </div>
  );
}
