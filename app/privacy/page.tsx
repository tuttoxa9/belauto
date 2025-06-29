import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BottomNavBar } from "@/components/layout/bottom-nav-bar"
import { Shield, Lock, FileText } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16 pb-20 md:pb-8">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Политика конфиденциальности</h1>
            <p className="text-lg text-gray-600">Мы серьезно относимся к защите ваших персональных данных</p>
            <p className="text-sm text-gray-500 mt-2">Последнее обновление: 21 мая 2024 года</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
              <div className="flex items-start space-x-3">
                <Lock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Краткое изложение</h3>
                  <p className="text-blue-800">
                    Мы собираем только необходимую информацию для предоставления наших услуг, не передаем ваши данные
                    третьим лицам без согласия и обеспечиваем их безопасность.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-blue-600" />
                1. Общие положения
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="mb-4">
                  Настоящая Политика конфиденциальности (далее — «Политика») действует в отношении всей информации,
                  которую ООО «БелАвто Центр» (далее — «Компания», «мы») может получить о пользователе во время
                  использования им сайта belavto.by.
                </p>
                <p className="mb-4">
                  Использование сайта означает безоговорочное согласие пользователя с настоящей Политикой и указанными в
                  ней условиями обработки его персональной информации.
                </p>
                <p>В случае несогласия с условиями Политики пользователь должен прекратить использование сайта.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Какую информацию мы собираем</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Персональные данные:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Имя и фамилия</li>
                    <li>Номер телефона</li>
                    <li>Адрес электронной почты</li>
                    <li>Информация об автомобиле (при подаче заявки на продажу)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Техническая информация:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>IP-адрес</li>
                    <li>Тип браузера и операционной системы</li>
                    <li>Страницы, которые вы посещаете на нашем сайте</li>
                    <li>Время и дата посещения</li>
                    <li>Файлы cookie</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Как мы используем информацию</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="mb-4">Мы используем собранную информацию для:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Обработки ваших заявок и запросов</li>
                  <li>Связи с вами по поводу наших услуг</li>
                  <li>Улучшения работы сайта и пользовательского опыта</li>
                  <li>Отправки информации о новых автомобилях и специальных предложениях (только с вашего согласия)</li>
                  <li>Соблюдения правовых требований</li>
                  <li>Защиты от мошенничества и злоупотреблений</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Передача данных третьим лицам</h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <p className="text-red-800 mb-4">
                  <strong>Мы НЕ продаем, НЕ сдаем в аренду и НЕ передаем ваши персональные данные третьим лицам</strong>
                  без вашего явного согласия, за исключением случаев, предусмотренных законодательством.
                </p>
                <p className="text-red-700">
                  Передача данных возможна только в случаях, требуемых законом, или для защиты наших прав и
                  безопасности.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Безопасность данных</h2>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <Lock className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 mb-4">
                      Мы применяем современные технические и организационные меры для защиты ваших данных:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-green-700">
                      <li>SSL-шифрование для передачи данных</li>
                      <li>Ограниченный доступ к персональным данным</li>
                      <li>Регулярное обновление систем безопасности</li>
                      <li>Обучение сотрудников правилам обработки данных</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Ваши права</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-blue-800 mb-4">Вы имеете право:</p>
                <ul className="list-disc list-inside space-y-2 text-blue-700">
                  <li>Получать информацию о том, какие данные мы о вас храним</li>
                  <li>Требовать исправления неточных данных</li>
                  <li>Требовать удаления ваших данных</li>
                  <li>Отозвать согласие на обработку данных</li>
                  <li>Подать жалобу в надзорный орган</li>
                </ul>
                <p className="text-blue-800 mt-4">
                  Для реализации ваших прав обращайтесь по адресу:
                  <a href="mailto:privacy@belavto.by" className="underline ml-1">
                    privacy@belavto.by
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Файлы cookie</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="mb-4">
                  Мы используем файлы cookie для улучшения работы сайта и анализа его использования. Cookie — это
                  небольшие текстовые файлы, которые сохраняются на вашем устройстве.
                </p>
                <p className="mb-4">Типы используемых cookie:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>Необходимые:</strong> обеспечивают базовую функциональность сайта
                  </li>
                  <li>
                    <strong>Аналитические:</strong> помогают понять, как посетители используют сайт
                  </li>
                  <li>
                    <strong>Функциональные:</strong> запоминают ваши предпочтения
                  </li>
                </ul>
                <p className="mt-4">Вы можете управлять cookie через настройки браузера.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Контактная информация</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="mb-4">По вопросам, связанным с обработкой персональных данных, обращайтесь:</p>
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
                    <a href="mailto:privacy@belavto.by" className="text-blue-600">
                      privacy@belavto.by
                    </a>
                  </p>
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
