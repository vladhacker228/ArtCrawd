import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ProjectCard } from "../components/ProjectCard";
import { Palette, Camera, Frame, Brush, Sparkles, Image as ImageIcon } from "lucide-react";

const categories = [
  { name: "Живопись", icon: Palette, id: "painting" },
  { name: "Скульптура", icon: Sparkles, id: "sculpture" },
  { name: "Фотография", icon: Camera, id: "photography" },
  { name: "Графический дизайн", icon: Frame, id: "design" },
  { name: "Иллюстрация", icon: Brush, id: "illustration" },
  { name: "Цифровое искусство", icon: ImageIcon, id: "digital" },
];

const featuredProjects = [
  {
    id: "1",
    title: "Современная живопись: Абстракция и эмоция",
    author: "Анна Соколова",
    image: "https://images.unsplash.com/photo-1740416307504-11b1565d53df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    goal: 500000,
    raised: 387500,
    daysLeft: 12,
    category: "Живопись",
  },
  {
    id: "2",
    title: "Цифровое искусство будущего",
    author: "Дмитрий Волков",
    image: "https://images.unsplash.com/photo-1736175549681-c24c552da1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    goal: 300000,
    raised: 245000,
    daysLeft: 8,
    category: "Цифровое искусство",
  },
  {
    id: "3",
    title: "Скульптуры из переработанных материалов",
    author: "Елена Кузнецова",
    image: "https://images.unsplash.com/photo-1758522277045-d97f748a23fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    goal: 450000,
    raised: 325000,
    daysLeft: 15,
    category: "Скульптура",
  },
  {
    id: "4",
    title: "Фотокнига: Улицы ночного города",
    author: "Игорь Петров",
    image: "https://images.unsplash.com/photo-1765654706297-de1123d8f199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    goal: 200000,
    raised: 156000,
    daysLeft: 20,
    category: "Фотография",
  },
  {
    id: "5",
    title: "Графический роман о времени",
    author: "Мария Иванова",
    image: "https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    goal: 350000,
    raised: 280000,
    daysLeft: 10,
    category: "Графический дизайн",
  },
  {
    id: "6",
    title: "Иллюстрированная детская книга",
    author: "Ольга Смирнова",
    image: "https://images.unsplash.com/photo-1671489692177-f1362c463ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    goal: 250000,
    raised: 215000,
    daysLeft: 18,
    category: "Иллюстрация",
  },
];

export function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1716889033775-b93550f8247b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Поддержите <span className="text-primary">искусство</span> будущего
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              Art-Crowd — платформа для краудфандинга творческих проектов. 
              Помогите талантливым художникам воплотить их идеи в жизнь.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link to="/catalog">
                <Button size="lg" className="text-base md:text-lg px-6 md:px-8 w-full sm:w-auto">
                  Исследовать проекты
                </Button>
              </Link>
              <Link to="/create">
                <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 w-full sm:w-auto">
                  Создать проект
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Категории</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.id}
                  to={`/catalog?category=${category.id}`}
                  className="flex flex-col items-center gap-3 p-6 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all group"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-background/50 group-hover:bg-primary-foreground/10">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium text-center">{category.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Популярные проекты</h2>
            <Link to="/catalog">
              <Button variant="ghost">Смотреть все →</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Готовы начать свой проект?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к сообществу креативных людей и получите поддержку для реализации вашей идеи
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Зарегистрироваться бесплатно
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}