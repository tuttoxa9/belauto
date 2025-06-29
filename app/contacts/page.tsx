import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BottomNavBar } from "@/components/layout/bottom-nav-bar"
import { ContactForm } from "@/components/forms/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16 pb-20 md:pb-8">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Контакты</h1>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Наши контакты</h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Телефон</h3>
                      <a href="tel:+375291234567" className="text-blue-600 hover:text-blue-700">
                        +375 (29) 123-45-67
                      </a>
                      <p className="text-sm text-gray-600">Звонки принимаем ежедневно</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <a href="mailto:info@belavto.by" className="text-blue-600 hover:text-blue-700">
                        info@belavto.by
                      </a>
                      <p className="text-sm text-gray-600">Ответим в течение часа</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Адрес</h3>
                      <p className="text-gray-700">г. Минск, ул. Автомобильная, 15</p>
                      <p className="text-sm text-gray-600">Рядом с метро "Автозаводская"</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Время работы</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>Пн-Пт: 9:00 - 19:00</p>
                        <p>Сб: 10:00 - 17:00</p>
                        <p>Вс: выходной</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Интерактивная карта</p>
                  <p className="text-sm">г. Минск, ул. Автомобильная, 15</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Свяжитесь с нами</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNavBar />
    </div>
  )
}
