# BelAuto - Car Dealership Website

Сайт автосалона с интегрированной отправкой заявок в Telegram.

## Возможности

- 🚗 Каталог автомобилей с фильтрацией
- 📝 Формы заявок с отправкой в Telegram
- 💰 Оценка автомобилей
- 🏪 Продажа автомобилей
- 📱 Адаптивный дизайн
- ⚡ Быстрая загрузка на Vercel

## Технологии

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes
- **Deployment**: Vercel
- **Notifications**: Telegram Bot API

## Деплой на Vercel

### 1. Создание Telegram бота

1. Найдите @BotFather в Telegram
2. Отправьте `/newbot`
3. Следуйте инструкциям для создания бота
4. Скопируйте токен бота

### 2. Получение Chat ID

1. Добавьте бота в чат или получите личный Chat ID
2. Отправьте сообщение боту
3. Перейдите по ссылке: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Найдите `chat.id` в ответе

### 3. Настройка переменных окружения в Vercel

В настройках проекта Vercel добавьте:

```
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

### 4. Деплой

1. Подключите репозиторий к Vercel
2. Выберите фреймворк: Next.js
3. Установите переменные окружения
4. Деплойте проект

## Формы с Telegram интеграцией

### Контактная форма (`/api/telegram/contact`)
- Имя, телефон, email, сообщение
- Информация об автомобиле (если указана)

### Оценка автомобиля (`/api/telegram/evaluation`)
- Марка, модель, год выпуска
- Телефон, Telegram контакт

### Продажа автомобиля (`/api/telegram/sell`)
- Контактная информация
- Полная информация об автомобиле
- VIN номер, пробег, комментарии

## Структура API

```
/api/telegram/
├── contact/route.ts    # Контактная форма
├── evaluation/route.ts # Оценка автомобиля
└── sell/route.ts      # Продажа автомобиля
```

## Локальная разработка

```bash
# Установка зависимостей
bun install

# Запуск dev сервера
bun run dev

# Сборка проекта
bun run build
```

## Переменные окружения

Скопируйте `.env.example` в `.env.local` и заполните:

```bash
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Поддержка

Все формы на сайте автоматически отправляют уведомления в указанный Telegram чат с подробной информацией о заявке.
