import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Страница не найдена</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          К сожалению, запрашиваемая страница не существует или была удалена.
          Вернитесь на главную страницу или воспользуйтесь навигацией.
        </p>
        <Link to="/">
          <Button size="lg">
            <Home className="w-5 h-5 mr-2" />
            На главную
          </Button>
        </Link>
      </div>
    </div>
  );
}
