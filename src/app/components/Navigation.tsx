import { Link, useNavigate } from "react-router";
import { Search, Menu, User, LogIn } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";

export function Navigation() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const NavLinks = () => (
    <>
      <Link to="/catalog" className="text-foreground hover:text-primary transition-colors">
        Каталог
      </Link>
      <Link to="/create" className="text-foreground hover:text-primary transition-colors">
        Создать проект
      </Link>
      <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors">
        Мои проекты
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Логотип */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">AC</span>
            </div>
            <span className="text-xl font-semibold hidden md:block">Art-Crowd</span>
          </Link>

          {/* Поиск (скрыт на мобильных) */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск проектов, категорий, авторов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-input-background border-border"
              />
            </div>
          </form>

          {/* Навигация (скрыта на мобильных) */}
          <div className="hidden lg:flex items-center gap-6">
            <NavLinks />
          </div>

          {/* Кнопки авторизации */}
          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <Link to="/dashboard">
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/login" className="hidden md:block">
                  <Button variant="ghost">
                    <LogIn className="w-4 h-4 mr-2" />
                    Войти
                  </Button>
                </Link>
                <Link to="/register" className="hidden md:block">
                  <Button>Регистрация</Button>
                </Link>
              </>
            )}

            {/* Мобильное меню */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-8">
                  <form onSubmit={handleSearch} className="w-full">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Поиск..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </form>
                  <div className="flex flex-col gap-4">
                    <NavLinks />
                  </div>
                  {!isLoggedIn && (
                    <div className="flex flex-col gap-2 mt-4">
                      <Link to="/login">
                        <Button variant="ghost" className="w-full">
                          Войти
                        </Button>
                      </Link>
                      <Link to="/register">
                        <Button className="w-full">Регистрация</Button>
                      </Link>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
