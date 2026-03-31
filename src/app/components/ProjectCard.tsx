import { Link } from "react-router";
import { Clock } from "lucide-react";
import { Progress } from "../components/ui/progress";
import { Card } from "../components/ui/card";

interface ProjectCardProps {
  id: string;
  title: string;
  author: string;
  image: string;
  goal: number;
  raised: number;
  daysLeft: number;
  category: string;
}

export function ProjectCard({ id, title, author, image, goal, raised, daysLeft, category }: ProjectCardProps) {
  const progress = Math.round((raised / goal) * 100);

  return (
    <Link to={`/project/${id}`}>
      <Card className="group overflow-hidden hover:border-primary transition-all duration-300 h-full flex flex-col">
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">от {author}</p>
          
          <div className="mt-auto space-y-3">
            <Progress value={progress} className="h-2" />
            
            <div className="flex items-center justify-between text-sm">
              <div>
                <div className="font-semibold">{raised.toLocaleString('ru-RU')} ₽</div>
                <div className="text-muted-foreground text-xs">из {goal.toLocaleString('ru-RU')} ₽</div>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{daysLeft} дн.</span>
              </div>
            </div>
            
            <div className="text-primary font-semibold text-sm">
              {progress}% собрано
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
