"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BottomNavBar } from "@/components/layout/bottom-nav-bar"
import { CarGallery } from "@/components/car/car-gallery"
import { ContactForm } from "@/components/forms/contact-form"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Gauge, Fuel, Settings, Calendar, MapPin, User } from "lucide-react"

// Mock data - in real app this would come from API
const mockCar = {
  id: "1",
  brand: "BMW",
  model: "X5",
  year: 2023,
  price: 85000,
  mileage: 15000,
  engine: "3.0",
  fuel: "Бензин",
  transmission: "Автомат",
  bodyType: "Кроссовер",
  drive: "Полный",
  color: "Черный",
  vin: "WBAFR9C50DD123456",
  location: "Минск",
  seller: "БелАвто Центр",
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  description: `Продается BMW X5 2023 года в отличном состоянии. Автомобиль находится в идеальном техническом состоянии, регулярно проходил ТО у официального дилера. 

Комплектация включает:
• Панорамная крыша
• Кожаный салон
• Система навигации
• Камера заднего вида
• Парковочные датчики
• Климат-контроль
• Подогрев сидений

Все документы в порядке, готов к продаже. Возможен обмен, рассмотрим ваши варианты.`,
  specifications: {
    "Основные характеристики": {
      Марка: "BMW",
      Модель: "X5",
      "Год выпуска": "2023",
      Пробег: "15 000 км",
      Состояние: "Отличное",
    },
    "Двигатель и трансмиссия": {
      "Объем двигателя": "3.0 л",
      "Тип топлива": "Бензин",
      "Коробка передач": "Автоматическая",
      Привод: "Полный",
      Мощность: "340 л.с.",
    },
    Кузов: {
      "Тип кузова": "Кроссовер",
      Цвет: "Черный",
      "Количество дверей": "5",
      "Количество мест": "5",
    },
    Дополнительно: {
      VIN: "WBAFR9C50DD123456",
      Растаможен: "Да",
      "Участие в ДТП": "Нет",
      "Количество владельцев": "1",
    },
  },
}

export default function CarPage({ params }: { params: { id: string } }) {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16 pb-20 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Gallery */}
            <div>
              <CarGallery images={mockCar.images} />
            </div>

            {/* Info */}
            <div className="space-y-6">
              {/* Title and Price */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {mockCar.brand} {mockCar.model}, {mockCar.year}
                </h1>
                <div className="text-4xl font-bold text-blue-600 mb-4">${mockCar.price.toLocaleString()}</div>
                <div className="flex items-center text-gray-600 space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{mockCar.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{mockCar.seller}</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex space-x-3">
                <Button onClick={scrollToForm} className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Получить консультацию
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Написать
                </Button>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-2">
                  <Gauge className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-600">Пробег</div>
                    <div className="font-semibold">{mockCar.mileage.toLocaleString()} км</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-600">Двигатель</div>
                    <div className="font-semibold">{mockCar.engine}л</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Fuel className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-600">Топливо</div>
                    <div className="font-semibold">{mockCar.fuel}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-600">КПП</div>
                    <div className="font-semibold">{mockCar.transmission}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Specifications */}
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Все характеристики</h2>
              <div className="space-y-6">
                {Object.entries(mockCar.specifications).map(([category, specs]) => (
                  <div key={category} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">{category}</h3>
                    <div className="space-y-3">
                      {Object.entries(specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600">{key}</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Описание</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{mockCar.description}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Заинтересовались? Свяжитесь с нами!</h2>
            <div className="max-w-2xl mx-auto">
              <ContactForm carInfo={`${mockCar.brand} ${mockCar.model} ${mockCar.year}`} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNavBar />
    </div>
  )
}
