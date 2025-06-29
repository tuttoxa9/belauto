import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BottomNavBar } from "@/components/layout/bottom-nav-bar"
import { FileText, CheckCircle, XCircle } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16 pb-20 md:pb-8">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Условия использования</h1>
            <p className="text-lg text-gray-600">Правила и условия использования сайта БелАвто Центр</p>
            <p className="text-sm text-gray-500 mt-2">Последнее обновление: 21 мая 2024 года</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Общие положения</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="mb-4">
                  Настоящие Условия использования (далее — «Условия») регулируют отношения между ООО «БелАвто Центр»
                  (далее — «Компания», «мы») и пользователями сайта belavto.by (далее — «Сайт», «Сервис»).
                </p>
                <p className="mb-4">
                  Сайт предоставляет информационные услуги в сфере купли-продажи автомобилей, включая размещение
                  объявлений, консультации и сопутствующие услуги.
                </p>
                <p>Использование Сайта означает полное согласие с настоящими Условиями.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Определения</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <dl className="space-y-4">
                  <div>
                    <dt className="font-semibold text-gray-900">Пользователь</dt>
                    <dd className="text-gray-700">Любое лицо, использующее Сайт</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">Контент</dt>
                    <dd className="text-gray-700">Любая информация, размещенная на Сайте</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">Услуги</dt>
                    <dd className="text-gray-700">Все сервисы, предоставляемые через Сайт</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">Заявка</dt>
                    <dd className="text-gray-700">Запрос пользователя на получение услуг</dd>
                  </div>
                </dl>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Права и обязанности пользователя</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Вы можете:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-green-700">
                    <li>Просматривать информацию об автомобилях</li>
                    <li>Подавать заявки на консультацию</li>
                    <li>Размещать заявки на продажу автомобиля</li>
                    <li>Связываться с нашими специалистами</li>
                    <li>Использовать все функции Сайта</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                    <XCircle className="w-5 h-5 mr-2" />
                    Запрещается:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-red-700">
                    <li>Предоставлять ложную информацию</li>
                    <li>Нарушать работу Сайта</li>
                    <li>Использовать Сайт в незаконных целях</li>
                    <li>Копировать контент без разрешения</li>
                    <li>Размещать спам или вредоносный контент</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Обязанности пользователя:</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-700">
                  <li>Предоставлять достоверную информацию</li>
                  <li>Соблюдать законодательство Республики Беларусь</li>
                  <li>Не нарушать права третьих лиц</li>
                  <li>Уведомлять об обнаруженных нарушениях</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Наши услуги</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Мы предоставляем:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Информацию об автомобилях в наличии</li>
                    <li>Консультации по выбору автомобиля</li>
                    <li>Услуги по оценке автомобилей</li>
                    <li>Помощь в оформлении документов</li>
                    <li>Юридическое сопровождение сделок</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">Важно знать:</h3>
                  <ul className="list-disc list-inside space-y-2 text-yellow-800">
                    <li>Все цены указаны в долларах США и носят информационный характер</li>
                    <li>Окончательная стоимость определяется при личном осмотре</li>
                    <li>Мы оставляем за собой право изменять цены без предварительного уведомления</li>
                    <li>Наличие автомобилей уточняйте по телефону</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Ответственность</h2>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-3">Ограничение ответственности:</h3>
                  <ul className="list-disc list-inside space-y-2 text-red-700">
                    <li>Мы не несем ответственности за технические сбои</li>
                    <li>Не гарантируем бесперебойную работу Сайта</li>
                    <li>Не отвечаем за действия третьих лиц</li>
                    <li>Информация на Сайте носит справочный характер</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Наша ответственность:</h3>
                  <p className="text-blue-700 mb-3">
                    Мы обязуемся предоставлять качественные услуги и достоверную информацию в рамках наших возможностей.
                  </p>
                  <p className="text-blue-700">
                    Максимальная сумма нашей ответственности не может превышать стоимость оказанных услуг.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Интеллектуальная собственность</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="mb-4">
                  Все материалы Сайта (тексты, изображения, логотипы, дизайн) являются интеллектуальной собственностью
                  Компании или используются с разрешения правообладателей.
                </p>
                <p className="mb-4">
                  Запрещается копирование, распространение или иное использование материалов без письменного согласия
                  Компании.
                </p>
                <p>
                  Нарушение авторских прав влечет ответственность в соответствии с законодательством Республики
                  Беларусь.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Конфиденциальность</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-blue-800 mb-4">
                  Обработка персональных данных осуществляется в соответствии с нашей
                  <a href="/privacy" className="underline ml-1">
                    Политикой конфиденциальности
                  </a>
                  .
                </p>
                <p className="text-blue-700">
                  Используя Сайт, вы соглашаетесь с условиями обработки ваших персональных данных.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Разрешение споров</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="mb-4">
                  Все споры решаются путем переговоров. При невозможности достижения соглашения споры рассматриваются в
                  судах Республики Беларусь.
                </p>
                <p>Настоящие Условия регулируются законодательством Республики Беларусь.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Контактная информация</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="mb-4">По всем вопросам, связанным с использованием Сайта, обращайтесь:</p>
                <div className="space-y-2">
                  <p>
                    <strong>ООО «БелАвто Центр»</strong>
                  </p>
                  <p>Адрес: г. Минск, ул. Автомобильная, 15</p>
                  <p>
                    Телефон:{" "}
                    <a href="tel:+375291234567" className="text-blue-600">
                      +375 (29) 123-45-67
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:info@belavto.by" className="text-blue-600">
                      info@belavto.by
                    </a>
                  </p>
                  <p>Время работы: Пн-Пт 9:00-19:00, Сб 10:00-17:00</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNavBar />
    </div>
  )
}
