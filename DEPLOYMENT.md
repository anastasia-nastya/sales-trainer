# Деплой тренажёра на Vercel

## 🚀 Быстрый старт (2 минуты)

### 1. Подготовка

```bash
# Убедитесь, что все изменения сохранены
cd /Users/anastasia/projects/sales-trainer
git add .
git commit -m "Prepare for Vercel deployment"
```

### 2. Деплой на Vercel

#### Вариант A: Через GitHub (рекомендуется)

1. **Создайте репозиторий на GitHub**:
   ```bash
   gh repo create sales-trainer --public --source=.
   ```

2. **Откройте [vercel.com](https://vercel.com)**

3. **Нажмите "Add New Project"** → "Import Git Repository"

4. **Выберите ваш репозиторий** `sales-trainer`

5. **Настройте проект**:
   - Framework Preset: **Next.js** (определится автоматически)
   - Root Directory: `.` (корневая директория)
   - Build Command: `npm run build` (автоматически)

6. **Добавьте переменные окружения** (Environment Variables):
   ```
   Name: ANTHROPIC_API_KEY
   Value: ваш_ключ_от_anthropic
   ```
   > ⚠️ Необязательно - без ключа будет использоваться mock AI

7. **Нажмите "Deploy"** → подождите 1-2 минуты

8. **Готово!** 🎉 
   - Получите ссылку вида: `https://sales-trainer.vercel.app`
   - Делитесь ссылкой с коллегами!

#### Вариант B: Через Vercel CLI

```bash
# Установите Vercel CLI
npm i -g vercel

# Войдите в Vercel
vercel login

# Задеплойте проект
vercel

# Следуйте инструкциям в терминале
```

## 🔧 Настройка переменных окружения

### Vercel Dashboard:

1. Откройте ваш проект на [vercel.com](https://vercel.com)
2. Settings → Environment Variables
3. Добавьте:
   ```
   ANTHROPIC_API_KEY = ваш_ключ
   ```

### Получение API ключа Claude:

1. Перейдите на [console.anthropic.com](https://console.anthropic.com/)
2. Создайте аккаунт или войдите
3. Раздел API Keys → Create Key
4. Скопируйте ключ
5. Добавьте в Vercel Environment Variables

> ⚠️ **Без API ключа** тренажёр будет использовать mock AI (тестовый режим)

## 🌐 Доменное имя (опционально)

### Собственный домен:

1. Vercel Dashboard → Settings → Domains
2. Добавьте ваш домен: `trainer.yourcompany.com`
3. Настройте DNS записи по инструкциям Vercel

### Бесплатный домен Vercel:

Автоматически: `https://sales-trainer.vercel.app` или подобный

## 📱 Проверка деплоя

После деплоя проверьте:

1. **Главная страница**: `https://your-domain.vercel.app`
2. **Сценарии**: `/scenarios`
3. **Ресурсы**: `/resources`
4. **Тренировка**: выберите сценарий → начните тренировку

## 🔒 Безопасность

- ✅ API ключ хранится в переменных окружения (не в коде)
- ✅ HTTPS автоматически
- ✅ Бесплатный SSL сертификат
- ✅ Защита от DDoS

## 💰 Стоимость

- **Vercel Hobby**: Бесплатно
  - 100GB bandwidth/месяц
  - Неограниченные деплои
  - Автоматический HTTPS
  - Достаточно для тренажёра

## 🐛 Troubleshooting

### Ошибка сборки:

```bash
# Локально проверьте сборку
npm run build
```

### API не работает:

1. Проверьте переменные окружения в Vercel Dashboard
2. Убедитесь, что ANTHROPIC_API_KEY добавлен
3. Проверьте Logs в Vercel Dashboard

### TTS не работает:

- Проверьте браузер (Chrome/Safari/Edge)
- Убедитесь, что микрофон разрешён
- Проверьте консоль браузера на ошибки

## 📊 Мониторинг

Vercel Dashboard показывает:

- ✅ Количество запросов
- ✅ Время ответа
- ✅ Ошибки
- ✅ Логи
- ✅ Аналитика

## 🔄 Обновление

После внесения изменений:

```bash
git add .
git commit -m "Описание изменений"
git push
```

Vercel автоматически задеплоит обновления! 🚀

---

## Ссылка для коллег

После деплоя поделитесь ссылкой:

```
🎯 Тренажёр менеджеров по продажам ITSM 365
🔗 https://your-domain.vercel.app

Доступно:
• Сценарии тренировок
• Полезные материалы
• AI-диалоги с голосом
```

---

Для вопросов: support@vercel.com или documentation [vercel.com](https://vercel.com/docs)