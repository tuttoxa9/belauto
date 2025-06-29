"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { X, Shield } from "lucide-react"

interface PrivacyModalProps {
  isOpen: boolean
  onClose: () => void
  onAccept: () => void
}

export function PrivacyModal({ isOpen, onClose, onAccept }: PrivacyModalProps) {
  const [isAccepted, setIsAccepted] = useState(false)

  if (!isOpen) return null

  const handleAccept = () => {
    if (isAccepted) {
      onAccept()
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Согласие на обработку данных</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          <div className="space-y-4 text-sm text-gray-700">
            <p>
              Для предоставления наших услуг нам необходимо обработать ваши персональные данные. Мы гарантируем их
              конфиденциальность и безопасность.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Какие данные мы собираем:</h3>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>Имя и контактная информация</li>
                <li>Информация об автомобиле (при необходимости)</li>
                <li>Техническая информация о посещении сайта</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">Как мы используем данные:</h3>
              <ul className="list-disc list-inside space-y-1 text-green-800">
                <li>Для связи с вами по вашим запросам</li>
                <li>Для предоставления наших услуг</li>
                <li>Для улучшения работы сайта</li>
              </ul>
            </div>

            <p>
              Подробную информацию вы можете найти в нашей{" "}
              <a href="/privacy" target="_blank" className="text-blue-600 hover:underline" rel="noreferrer">
                Политике конфиденциальности
              </a>
              .
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox id="privacy-accept" checked={isAccepted} onCheckedChange={setIsAccepted} />
            <label htmlFor="privacy-accept" className="text-sm text-gray-700 leading-relaxed">
              Я согласен(а) на обработку моих персональных данных в соответствии с{" "}
              <a href="/privacy" target="_blank" className="text-blue-600 hover:underline" rel="noreferrer">
                Политикой конфиденциальности
              </a>{" "}
              и{" "}
              <a href="/terms" target="_blank" className="text-blue-600 hover:underline" rel="noreferrer">
                Условиями использования
              </a>
            </label>
          </div>

          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Отмена
            </Button>
            <Button onClick={handleAccept} disabled={!isAccepted} className="flex-1 bg-blue-600 hover:bg-blue-700">
              Принимаю
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
