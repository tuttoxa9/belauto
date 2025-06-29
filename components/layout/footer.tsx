import Link from "next/link"
import { PhoneIcon, EmailIcon, LocationIcon, ClockIcon } from "@/components/icons/custom-icons"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">БА</span>
              </div>
              <span className="font-bold text-xl">БелАвто Центр</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Надежный партнер в мире автомобилей. Качество, честность и профессионализм — наши главные принципы.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/catalog" className="text-gray-400 hover:text-white transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-gray-400 hover:text-white transition-colors">
                  Продать авто
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Условия использования
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4 text-blue-400" />
                <a href="tel:+375291234567" className="text-gray-400 hover:text-white transition-colors">
                  +375 (29) 123-45-67
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <EmailIcon className="w-4 h-4 text-blue-400" />
                <a href="mailto:info@belavto.by" className="text-gray-400 hover:text-white transition-colors">
                  info@belavto.by
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <LocationIcon className="w-4 h-4 text-blue-400 mt-0.5" />
                <span className="text-gray-400">г. Минск, ул. Автомобильная, 15</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-semibold mb-4">Время работы</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <ClockIcon className="w-4 h-4 text-blue-400" />
                <span>Пн-Пт: 9:00 - 19:00</span>
              </li>
              <li className="ml-6">Сб: 10:00 - 17:00</li>
              <li className="ml-6">Вс: выходной</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} БелАвто Центр. Все права защищены.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
