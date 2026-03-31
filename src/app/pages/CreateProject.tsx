import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Card } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { ChevronLeft, ChevronRight, Upload, Plus, Trash2 } from "lucide-react";

interface RewardTier {
  id: string;
  amount: string;
  title: string;
  description: string;
  quantity: string;
}

const categories = [
  "Живопись",
  "Скульптура",
  "Фотография",
  "Графический дизайн",
  "Иллюстрация",
  "Цифровое искусство",
  "Музыка",
  "Видео и кино",
  "Литература",
];

export function CreateProject() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    shortDescription: "",
    description: "",
    goal: "",
    duration: "30",
    images: [] as string[],
  });

  const [rewards, setRewards] = useState<RewardTier[]>([
    { id: "1", amount: "", title: "", description: "", quantity: "" },
  ]);

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // Mock submission
    console.log("Project data:", { formData, rewards });
    navigate("/dashboard");
  };

  const addReward = () => {
    setRewards([
      ...rewards,
      { id: Date.now().toString(), amount: "", title: "", description: "", quantity: "" },
    ]);
  };

  const removeReward = (id: string) => {
    setRewards(rewards.filter((r) => r.id !== id));
  };

  const updateReward = (id: string, field: keyof RewardTier, value: string) => {
    setRewards(rewards.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  };

  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Создать проект</h1>
          <p className="text-muted-foreground">
            Заполните информацию о вашем проекте и начните собирать средства
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Шаг {step} из {totalSteps}</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-between mb-8">
          {["Основное", "Описание", "Медиа", "Вознаграждения"].map((label, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 ${index + 1 <= step ? "text-primary" : "text-muted-foreground"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index + 1 <= step ? "bg-primary text-primary-foreground" : "bg-secondary"
                }`}
              >
                {index + 1}
              </div>
              <span className="hidden md:block text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>

        <Card className="p-8">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="title">Название проекта *</Label>
                <Input
                  id="title"
                  placeholder="Введите название вашего проекта"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="category">Категория *</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                  <SelectTrigger id="category" className="mt-2">
                    <SelectValue placeholder="Выберите категорию" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="shortDescription">Краткое описание *</Label>
                <Textarea
                  id="shortDescription"
                  placeholder="Опишите ваш проект в нескольких предложениях (максимум 200 символов)"
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  className="mt-2"
                  rows={3}
                  maxLength={200}
                />
                <div className="text-xs text-muted-foreground mt-1">
                  {formData.shortDescription.length}/200
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="goal">Цель финансирования (₽) *</Label>
                  <Input
                    id="goal"
                    type="number"
                    placeholder="500000"
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="duration">Продолжительность (дней) *</Label>
                  <Select value={formData.duration} onValueChange={(value) => setFormData({ ...formData, duration: value })}>
                    <SelectTrigger id="duration" className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 дней</SelectItem>
                      <SelectItem value="30">30 дней</SelectItem>
                      <SelectItem value="45">45 дней</SelectItem>
                      <SelectItem value="60">60 дней</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Description */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="description">Подробное описание проекта *</Label>
                <Textarea
                  id="description"
                  placeholder="Расскажите подробно о вашем проекте: цели, и��еи, планы использования средств..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="mt-2"
                  rows={15}
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Используйте детальное описание для привлечения спонсоров. Объясните, почему ваш проект важен,
                  как будут использованы средства, и что получат спонсоры.
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Media */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <Label>Изображения проекта *</Label>
                <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm font-medium mb-1">Загрузите изображения</p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG до 5MB. Рекомендуется минимум 3 изображения
                  </p>
                  <Button variant="outline" className="mt-4">
                    Выбрать файлы
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-video bg-secondary rounded-lg border border-border" />
                ))}
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Советы по изображениям:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Используйте качественные фотографии вашей работы</li>
                  <li>• Первое изображение будет главным на странице проекта</li>
                  <li>• Покажите процесс создания и готовые результаты</li>
                  <li>• Избегайте размытых или темных фотографий</li>
                </ul>
              </div>
            </div>
          )}

          {/* Step 4: Rewards */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Уровни вознаграждений</h3>
                <p className="text-sm text-muted-foreground">
                  Создайте уровни поддержки с разными вознаграждениями для ваших спонсоров
                </p>
              </div>

              {rewards.map((reward, index) => (
                <Card key={reward.id} className="p-6 relative">
                  {rewards.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4"
                      onClick={() => removeReward(reward.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`amount-${reward.id}`}>Сумма поддержки (₽)</Label>
                        <Input
                          id={`amount-${reward.id}`}
                          type="number"
                          placeholder="1000"
                          value={reward.amount}
                          onChange={(e) => updateReward(reward.id, "amount", e.target.value)}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`quantity-${reward.id}`}>Количество доступных</Label>
                        <Input
                          id={`quantity-${reward.id}`}
                          type="number"
                          placeholder="50"
                          value={reward.quantity}
                          onChange={(e) => updateReward(reward.id, "quantity", e.target.value)}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor={`title-${reward.id}`}>Название награды</Label>
                      <Input
                        id={`title-${reward.id}`}
                        placeholder="Цифровое спасибо"
                        value={reward.title}
                        onChange={(e) => updateReward(reward.id, "title", e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor={`description-${reward.id}`}>Описание награды</Label>
                      <Textarea
                        id={`description-${reward.id}`}
                        placeholder="Опишите, что получит спонсор за эту сумму"
                        value={reward.description}
                        onChange={(e) => updateReward(reward.id, "description", e.target.value)}
                        className="mt-2"
                        rows={3}
                      />
                    </div>
                  </div>
                </Card>
              ))}

              <Button variant="outline" className="w-full" onClick={addReward}>
                <Plus className="w-4 h-4 mr-2" />
                Добавить уровень вознаграждения
              </Button>
            </div>
          )}
        </Card>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8">
          <Button variant="outline" onClick={handlePrev} disabled={step === 1}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>

          {step < totalSteps ? (
            <Button onClick={handleNext}>
              Далее
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleSubmit}>Опубликовать проект</Button>
          )}
        </div>
      </div>
    </div>
  );
}
