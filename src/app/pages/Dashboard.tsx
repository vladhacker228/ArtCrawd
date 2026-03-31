import { useState } from "react";
import { Link } from "react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { TrendingUp, Eye, Users, Rocket, Heart, Settings } from "lucide-react";

const myProjects = [
  {
    id: "1",
    title: "Современная живопись: Абстракция и эмоция",
    image: "https://images.unsplash.com/photo-1740416307504-11b1565d53df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    goal: 500000,
    raised: 387500,
    backers: 156,
    daysLeft: 12,
    status: "active",
  },
  {
    id: "2",
    title: "Акварельная серия: Природа России",
    image: "https://images.unsplash.com/photo-1734551330916-c02cc559045d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    goal: 180000,
    raised: 180000,
    backers: 89,
    daysLeft: 0,
    status: "completed",
  },
];

const backedProjects = [
  {
    id: "3",
    title: "Цифровое искусство будущего",
    author: "Дмитрий Волков",
    image: "https://images.unsplash.com/photo-1736175549681-c24c552da1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    amount: 5000,
    date: "2026-03-15",
  },
  {
    id: "4",
    title: "Скульптуры из переработанных материалов",
    author: "Елена Кузнецова",
    image: "https://images.unsplash.com/photo-1758522277045-d97f748a23fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    amount: 15000,
    date: "2026-03-10",
  },
];

const viewsData = [
  { name: "Пн", views: 120 },
  { name: "Вт", views: 180 },
  { name: "Ср", views: 250 },
  { name: "Чт", views: 320 },
  { name: "Пт", views: 280 },
  { name: "Сб", views: 420 },
  { name: "Вс", views: 380 },
];

const fundingData = [
  { name: "Нед 1", amount: 50000 },
  { name: "Нед 2", amount: 95000 },
  { name: "Нед 3", amount: 145000 },
  { name: "Нед 4", amount: 230000 },
  { name: "Нед 5", amount: 310000 },
  { name: "Нед 6", amount: 387500 },
];

export function Dashboard() {
  const [userRole, setUserRole] = useState<"creator" | "backer">("creator");
  const user = {
    name: "Анна Соколова",
    email: "anna.sokolova@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* User Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12 sm:w-16 sm:h-16">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>АС</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">{user.name}</h1>
              <p className="text-muted-foreground text-sm sm:text-base">{user.email}</p>
            </div>
          </div>
          <Button variant="outline" className="w-full sm:w-auto">
            <Settings className="w-4 h-4 mr-2" />
            Настройки
          </Button>
        </div>

        {/* Role Switcher */}
        <div className="flex gap-2 mb-8">
          <Button
            variant={userRole === "creator" ? "default" : "outline"}
            onClick={() => setUserRole("creator")}
          >
            <Rocket className="w-4 h-4 mr-2" />
            Мои проекты
          </Button>
          <Button
            variant={userRole === "backer" ? "default" : "outline"}
            onClick={() => setUserRole("backer")}
          >
            <Heart className="w-4 h-4 mr-2" />
            Поддержанные проекты
          </Button>
        </div>

        {/* Creator View */}
        {userRole === "creator" && (
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">387 500 ₽</div>
                    <div className="text-sm text-muted-foreground">Собрано средств</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">245</div>
                    <div className="text-sm text-muted-foreground">Всего спонсоров</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1,950</div>
                    <div className="text-sm text-muted-foreground">Просмотров</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">2</div>
                    <div className="text-sm text-muted-foreground">Активных проекта</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Просмотры за неделю</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={viewsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2d2d35" />
                    <XAxis dataKey="name" stroke="#9a9aa5" />
                    <YAxis stroke="#9a9aa5" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#23232a', 
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="views" fill="#7c3aed" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Динамика сборов</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={fundingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2d2d35" />
                    <XAxis dataKey="name" stroke="#9a9aa5" />
                    <YAxis stroke="#9a9aa5" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#23232a', 
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px'
                      }}
                      formatter={(value: number) => `${value.toLocaleString('ru-RU')} ₽`}
                    />
                    <Line type="monotone" dataKey="amount" stroke="#7c3aed" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>

            {/* My Projects */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Мои проекты</h2>
                <Link to="/create">
                  <Button>
                    <Rocket className="w-4 h-4 mr-2" />
                    Создать проект
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {myProjects.map((project) => {
                  const progress = Math.round((project.raised / project.goal) * 100);
                  return (
                    <Card key={project.id} className="overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-lg flex-1">{project.title}</h3>
                          <Badge variant={project.status === "active" ? "default" : "secondary"}>
                            {project.status === "active" ? "Активен" : "Завершён"}
                          </Badge>
                        </div>
                        <Progress value={progress} className="h-2" />
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="font-semibold">{project.raised.toLocaleString('ru-RU')} ₽</div>
                            <div className="text-muted-foreground text-xs">собрано</div>
                          </div>
                          <div>
                            <div className="font-semibold">{project.backers}</div>
                            <div className="text-muted-foreground text-xs">спонсоров</div>
                          </div>
                          <div>
                            <div className="font-semibold">{project.daysLeft} дн.</div>
                            <div className="text-muted-foreground text-xs">осталось</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Link to={`/project/${project.id}`} className="flex-1">
                            <Button variant="outline" className="w-full">Просмотр</Button>
                          </Link>
                          <Button variant="outline">Редактировать</Button>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Backer View */}
        {userRole === "backer" && (
          <div className="space-y-8">
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20 000 ₽</div>
                  <div className="text-muted-foreground">Всего инвестировано</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">2</div>
                  <div className="text-muted-foreground">Поддержанных проекта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">5</div>
                  <div className="text-muted-foreground">Вознаграждений</div>
                </div>
              </div>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-6">Поддержанные проекты</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {backedProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">от {project.author}</p>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <div>
                          <div className="text-sm text-muted-foreground">Ваш взнос</div>
                          <div className="font-semibold text-primary">{project.amount.toLocaleString('ru-RU')} ₽</div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(project.date).toLocaleDateString('ru-RU')}
                        </div>
                      </div>
                      <Link to={`/project/${project.id}`}>
                        <Button variant="outline" className="w-full">Перейти к проекту</Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}