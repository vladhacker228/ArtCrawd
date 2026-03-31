import { useParams, Link } from "react-router";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Calendar, Heart, Share2, Users, TrendingUp } from "lucide-react";
import { useState } from "react";

const projectData = {
  id: "1",
  title: "Современная живопись: Абстракция и эмоция",
  author: "Анна Соколова",
  authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
  category: "Живопись",
  images: [
    "https://images.unsplash.com/photo-1740416307504-11b1565d53df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1736175549681-c24c552da1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1758522277045-d97f748a23fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  ],
  goal: 500000,
  raised: 387500,
  backers: 156,
  daysLeft: 12,
  description: `
    Добро пожаловать в мир абстрактной живописи! Этот проект направлен на создание серии из 20 крупноформатных картин, исследующих связь между цветом, формой и человеческими эмоциями.
    
    ## О проекте
    
    В течение последних трех лет я разрабатывала уникальную технику многослойной живописи, которая позволяет создавать работы с невероятной глубиной и текстурой. Собранные средства пойдут на:
    
    - Аренду студии на 6 месяцев
    - Закупку профессиональных материалов (холсты, краски, инструменты)
    - Организацию персональной выставки
    - Печать каталога работ
    
    ## Почему это важно
    
    Современное искусство играет ключевую роль в культурном развитии общества. Эта серия работ будет представлена на выставках в России и за рубежом, позволяя зрителям по-новому взглянуть на абстракционизм.
  `,
  updates: [
    {
      id: 1,
      date: "2026-03-20",
      title: "Первые три работы завершены!",
      content: "Рада поделиться с вами первыми результатами. Три картины из серии уже готовы и превзошли мои ожидания!",
    },
    {
      id: 2,
      date: "2026-03-15",
      title: "Достигли 75% от цели!",
      content: "Огромное спасибо всем спонсорам! Ваша поддержка вдохновляет меня продолжать работу над проектом.",
    },
  ],
  rewards: [
    {
      id: 1,
      amount: 1000,
      title: "Цифровое спасибо",
      description: "Персональное благодарственное письмо + цифровой каталог работ",
      available: 50,
      backers: 45,
    },
    {
      id: 2,
      amount: 5000,
      title: "Принт работы",
      description: "Высококачественный принт одной из работ серии (A3) + предыдущие награды",
      available: 30,
      backers: 18,
    },
    {
      id: 3,
      amount: 15000,
      title: "Оригинальный эскиз",
      description: "Подписанный автором эскиз к одной из работ + принт + цифровой каталог",
      available: 15,
      backers: 8,
    },
    {
      id: 4,
      amount: 50000,
      title: "Малоформатная работа",
      description: "Оригинальная работа масляными красками 40x50см + все предыдущие награды",
      available: 5,
      backers: 2,
    },
  ],
  recentBackers: [
    { name: "Дмитрий М.", amount: 5000, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry" },
    { name: "Елена К.", amount: 15000, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena" },
    { name: "Игорь П.", amount: 1000, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Igor" },
    { name: "Мария И.", amount: 5000, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria" },
  ],
};

export function ProjectDetail() {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const progress = Math.round((projectData.raised / projectData.goal) * 100);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Главная</Link>
          {" / "}
          <Link to="/catalog" className="hover:text-primary">Каталог</Link>
          {" / "}
          <span className="text-foreground">{projectData.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Image Gallery */}
            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img
                  src={projectData.images[currentImage]}
                  alt={projectData.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {projectData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      currentImage === index ? "border-primary" : "border-transparent hover:border-border"
                    }`}
                  >
                    <img src={image} alt={`Preview ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Title and Author */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <Badge className="mb-2">{projectData.category}</Badge>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{projectData.title}</h1>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={projectData.authorAvatar} />
                      <AvatarFallback>АС</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{projectData.author}</p>
                      <p className="text-sm text-muted-foreground">Автор проекта</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? "fill-primary text-primary" : ""}`} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="updates">Обновления ({projectData.updates.length})</TabsTrigger>
                <TabsTrigger value="comments">Комментарии</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-6">
                <div className="prose prose-invert max-w-none">
                  {projectData.description.split('\n').map((paragraph, index) => {
                    if (paragraph.trim().startsWith('##')) {
                      return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('##', '').trim()}</h2>;
                    }
                    if (paragraph.trim().startsWith('-')) {
                      return <li key={index} className="ml-6">{paragraph.replace('-', '').trim()}</li>;
                    }
                    return paragraph.trim() ? <p key={index} className="mb-4">{paragraph}</p> : null;
                  })}
                </div>
              </TabsContent>
              <TabsContent value="updates" className="mt-6 space-y-6">
                {projectData.updates.map((update) => (
                  <Card key={update.id} className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(update.date).toLocaleDateString('ru-RU')}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{update.title}</h3>
                    <p>{update.content}</p>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="comments" className="mt-6">
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground">Комментарии появятся после поддержки проекта</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Funding Progress */}
              <Card className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {projectData.raised.toLocaleString('ru-RU')} ₽
                    </div>
                    <div className="text-muted-foreground">
                      из {projectData.goal.toLocaleString('ru-RU')} ₽
                    </div>
                  </div>

                  <Progress value={progress} className="h-3" />

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                      <div className="text-2xl font-bold">{progress}%</div>
                      <div className="text-sm text-muted-foreground">профинансировано</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{projectData.backers}</div>
                      <div className="text-sm text-muted-foreground">спонсоров</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                    <span>Осталось {projectData.daysLeft} дней</span>
                  </div>

                  <Button className="w-full" size="lg">
                    Поддержать проект
                  </Button>
                </div>
              </Card>

              {/* Rewards */}
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Уровни поддержки</h3>
                <div className="space-y-4">
                  {projectData.rewards.map((reward) => (
                    <Card key={reward.id} className="p-4 border-2 hover:border-primary transition-all cursor-pointer">
                      <div className="font-bold text-primary mb-2">
                        {reward.amount.toLocaleString('ru-RU')} ₽
                      </div>
                      <h4 className="font-semibold mb-2">{reward.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{reward.description}</p>
                      <div className="text-xs text-muted-foreground">
                        {reward.available - reward.backers} из {reward.available} доступно
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>

              {/* Recent Backers */}
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Последние спонсоры
                </h3>
                <div className="space-y-3">
                  {projectData.recentBackers.map((backer, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={backer.avatar} />
                          <AvatarFallback>{backer.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{backer.name}</span>
                      </div>
                      <span className="text-sm text-primary font-medium">
                        {backer.amount.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}