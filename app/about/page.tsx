import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BottomNavBar } from "@/components/layout/bottom-nav-bar"
import { Star, Shield, Clock, Users, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16 pb-20 md:pb-8">
        {/* Hero Section */}
        <section className="px-4 py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">О БелАвто Центр</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Более 10 лет мы помогаем людям найти автомобиль мечты. Наша миссия — сделать покупку и продажу автомобилей
              максимально простой, честной и выгодной для каждого клиента.
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div>лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1000+</div>
                <div>довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div>проданных авто</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Наши ценности</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Честность</h3>
                <p className="text-gray-600 leading-relaxed">
                  Мы всегда говорим правду о состоянии автомобилей и предоставляем полную информацию о каждой машине.
                  Никаких скрытых дефектов или неприятных сюрпризов.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Качество</h3>
                <p className="text-gray-600 leading-relaxed">
                  Каждый автомобиль проходит тщательную проверку нашими специалистами. Мы работаем только с
                  качественными машинами и проверенными поставщиками.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Забота</h3>
                <p className="text-gray-600 leading-relaxed">
                  Мы искренне заботимся о каждом клиенте и стремимся найти именно тот автомобиль, который подойдет
                  идеально. Ваше удовлетворение — наш приоритет.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Что мы предлагаем</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Покупка автомобиля</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Большой выбор проверенных автомобилей</li>
                      <li>• Помощь в выборе подходящей модели</li>
                      <li>• Организация тест-драйва</li>
                      <li>• Полное юридическое сопровождение</li>
                      <li>• Помощь с оформлением кредита</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Продажа автомобиля</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Быстрая и честная оценка</li>
                      <li>• Выкуп в день обращения</li>
                      <li>• Помощь с оформлением документов</li>
                      <li>• Консультация по всем вопросам</li>
                      <li>• Максимальная цена за ваш автомобиль</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Дополнительные услуги</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Техническая диагностика</li>
                      <li>• Помощь с растаможкой</li>
                      <li>• Страхование автомобиля</li>
                      <li>• Подбор запчастей</li>
                      <li>• Консультации по обслуживанию</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Гарантии</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Юридическая чистота всех сделок</li>
                      <li>• Проверка истории автомобиля</li>
                      <li>• Гарантия на техническое состояние</li>
                      <li>• Возврат в случае скрытых дефектов</li>
                      <li>• Полная прозрачность процесса</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Почему выбирают нас</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Опыт и экспертиза</h3>
                <p className="text-gray-600 leading-relaxed">
                  За 10 лет работы мы накопили огромный опыт в автомобильной сфере. Наши специалисты знают все тонкости
                  рынка и помогут вам принять правильное решение.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Индивидуальный подход</h3>
                <p className="text-gray-600 leading-relaxed">
                  Мы понимаем, что каждый клиент уникален. Поэтому всегда находим персональное решение, учитывая ваши
                  потребности, бюджет и предпочтения.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Прозрачность</h3>
                <p className="text-gray-600 leading-relaxed">
                  Никаких скрытых комиссий или неожиданных доплат. Все условия обговариваются заранее, и вы всегда
                  знаете, за что платите.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Поддержка 24/7</h3>
                <p className="text-gray-600 leading-relaxed">
                  Наши консультанты всегда готовы ответить на ваши вопросы. Мы поддерживаем связь с клиентами даже после
                  завершения сделки.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы найти свой идеальный автомобиль?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Свяжитесь с нами сегодня, и мы поможем вам сделать правильный выбор
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/catalog"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Посмотреть каталог
              </a>
              <a
                href="/contacts"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Связаться с нами
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNavBar />
    </div>
  )
}
