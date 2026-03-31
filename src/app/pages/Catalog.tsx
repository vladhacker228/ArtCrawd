import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Slider } from "../components/ui/slider";
import { Checkbox } from "../components/ui/checkbox";
import { SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";

const allProjects = [
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
  {
    id: "7",
    title: "Акварельная серия: Природа России",
    author: "Павел Морозов",
    image: "https://images.unsplash.com/photo-1734551330916-c02cc559045d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    goal: 180000,
    raised: 145000,
    daysLeft: 14,
    category: "Живопись",
  },
  {
    id: "8",
    title: "Керамические инсталляции",
    author: "Светлана Белова",
    image: "https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    goal: 400000,
    raised: 320000,
    daysLeft: 9,
    category: "Скульптура",
  },
  {
    id: "9",
    title: "Урбанистическая фотография",
    author: "Алексей Новиков",
    image: "https://images.unsplash.com/photo-1696695101117-f9a2d250412b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    goal: 220000,
    raised: 185000,
    daysLeft: 16,
    category: "Фотография",
  },
];

const categories = [
  "Живопись",
  "Скульптура",
  "Фотография",
  "Графический дизайн",
  "Иллюстрация",
  "Цифровое искусство",
];

export function Catalog() {
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState<string[]>([]);

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Категория</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedCategories([...selectedCategories, category]);
                  } else {
                    setSelectedCategories(selectedCategories.filter((c) => c !== category));
                  }
                }}
              />
              <label
                htmlFor={category}
                className="text-sm cursor-pointer"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Статус проекта</h3>
        <div className="space-y-3">
          {["Активные", "Завершенные", "Успешные"].map((status) => (
            <div key={status} className="flex items-center space-x-2">
              <Checkbox
                id={status}
                checked={statusFilter.includes(status)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setStatusFilter([...statusFilter, status]);
                  } else {
                    setStatusFilter(statusFilter.filter((s) => s !== status));
                  }
                }}
              />
              <label htmlFor={status} className="text-sm cursor-pointer">
                {status}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Цель финансирования</h3>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={1000000}
            step={10000}
            className="my-4"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{priceRange[0].toLocaleString('ru-RU')} ₽</span>
            <span>{priceRange[1].toLocaleString('ru-RU')} ₽</span>
          </div>
        </div>
      </div>

      <Button 
        variant="outline" 
        className="w-full"
        onClick={() => {
          setSelectedCategories([]);
          setStatusFilter([]);
          setPriceRange([0, 1000000]);
        }}
      >
        Сбросить фильтры
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Каталог проектов</h1>
          <p className="text-muted-foreground">
            Найдено проектов: {allProjects.length}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24 bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Фильтры</h2>
              <FilterPanel />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Button & Sort */}
            <div className="flex items-center gap-4 mb-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Фильтры
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Фильтры</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterPanel />
                  </div>
                </SheetContent>
              </Sheet>

              <div className="flex items-center gap-2 ml-auto">
                <Label htmlFor="sort" className="text-sm text-muted-foreground">
                  Сортировка:
                </Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sort" className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Популярные</SelectItem>
                    <SelectItem value="new">Новые</SelectItem>
                    <SelectItem value="ending">Скоро завершатся</SelectItem>
                    <SelectItem value="funded">По сумме сбора</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {allProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
