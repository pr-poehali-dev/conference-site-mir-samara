import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Material {
  type: 'presentation' | 'video' | 'article';
  title: string;
  url: string;
}

interface SpeakerProfileProps {
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  materials: Material[];
}

export default function SpeakerProfile({ name, role, company, image, bio, materials }: SpeakerProfileProps) {
  const getMaterialIcon = (type: string) => {
    switch (type) {
      case 'presentation':
        return 'FileText';
      case 'video':
        return 'Video';
      case 'article':
        return 'BookOpen';
      default:
        return 'File';
    }
  };

  return (
    <Card className="overflow-hidden border-2 hover:border-accent transition-all duration-300">
      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2 aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-3 p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-heading">{name}</CardTitle>
            <CardDescription className="text-lg">
              {role} · {company}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 space-y-6">
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Биография</h4>
              <p className="text-foreground leading-relaxed">{bio}</p>
            </div>
            
            {materials.length > 0 && (
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Материалы</h4>
                <div className="space-y-2">
                  {materials.map((material, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      className="w-full justify-start gap-3 h-auto py-3"
                      onClick={() => window.open(material.url, '_blank')}
                    >
                      <Icon name={getMaterialIcon(material.type)} size={20} />
                      <span className="text-left flex-1">{material.title}</span>
                      <Icon name="ExternalLink" size={16} className="text-muted-foreground" />
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
