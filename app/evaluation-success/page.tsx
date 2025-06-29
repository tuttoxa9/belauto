import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BottomNavBar } from "@/components/layout/bottom-nav-bar"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, MessageCircle, ArrowRight, Home, Search } from "lucide-react"

export default function EvaluationSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />

      <main className="pt-16 pb-20 md:pb-8">
        <div className="min-h-[80vh] flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            {/* Main Content */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Заявка принята!</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Спасибо за обращение! Мы получили информацию о вашем автомобиле и свяжемся с вами в ближайшее время для
              проведения оценки.
            </p>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Быстрый ответ</h3>
                <p className="text-gray-600 text-sm">Наш специалист свяжется с вами в течение 2 часов</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Удобная связь</h3>
                <p className="text-gray-600 text-sm">Мы свяжемся удобным для вас способом</p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Что дальше?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                    1
                  </div>
                  <p className="text-gray-700">Наш эксперт свяжется с вами для уточнения деталей</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                    2
                  </div>
                  <p className="text-gray-700">Мы назначим удобное время для осмотра автомобиля</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                    3
                  </div>
                  <p className="text-gray-700">Предложим честную цену и поможем с оформлением</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/catalog">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                  <Search className="w-5 h-5 mr-2" />В каталог
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  <Home className="w-5 h-5 mr-2" />
                  На главную
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-200">
              <p className="text-blue-800 mb-2">
                <strong>Есть вопросы?</strong>
              </p>
              <p className="text-blue-700 text-sm">
                Звоните:{" "}
                <a href="tel:+375291234567" className="font-semibold hover:underline">
                  +375 (29) 123-45-67
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNavBar />
    </div>
  )
}
