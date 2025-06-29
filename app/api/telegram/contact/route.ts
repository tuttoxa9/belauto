import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, message, carInfo } = body

    // Получаем переменные окружения
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      return NextResponse.json(
        { error: 'Telegram configuration missing' },
        { status: 500 }
      )
    }

    // Формируем сообщение
    let text = `🔔 *Новая заявка с сайта BelAuto*\n\n`
    text += `👤 *Имя:* ${name}\n`
    text += `📞 *Телефон:* ${phone}\n`
    if (email) text += `📧 *Email:* ${email}\n`
    if (carInfo) text += `🚗 *Автомобиль:* ${carInfo}\n`
    if (message) text += `💬 *Сообщение:* ${message}\n`
    text += `\n⏰ *Время:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Minsk' })}`

    // Отправляем в Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'Markdown',
      }),
    })

    if (!telegramResponse.ok) {
      throw new Error('Failed to send message to Telegram')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Telegram API error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
