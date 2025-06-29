"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Car, Phone, MessageCircle } from "lucide-react"

interface CarEvaluationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CarEvaluationModal({ isOpen, onClose }: CarEvaluationModalProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    phone: "+375",
    telegram: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Remove the brands array since we're using manual input now
  // const brands = ["BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Toyota", "Honda", "Mazda", "Другая"]
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 30 }, (_, i) => (currentYear - i).toString())

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Redirect to success page
    router.push("/evaluation-success")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === "year") {
      // Only allow numbers and limit to 4 digits
      const numericValue = value.replace(/\D/g, "").slice(0, 4)
      setFormData((prev) => ({ ...prev, [name]: numericValue }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Car className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Оценка автомобиля</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <p className="text-gray-600 text-sm mb-6">
            Заполните информацию о вашем автомобиле, и мы свяжемся с вами для оценки
          </p>

          {/* Brand */}
          <div>
            <Label htmlFor="brand" className="text-sm font-medium mb-2 block">
              Марка *
            </Label>
            <Input
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
              placeholder="Введите марку автомобиля"
              maxLength={30}
            />
          </div>

          {/* Model */}
          <div>
            <Label htmlFor="model" className="text-sm font-medium mb-2 block">
              Модель *
            </Label>
            <Input id="model" name="model" value={formData.model} onChange={handleChange} required maxLength={30} />
          </div>

          {/* Year */}
          <div>
            <Label htmlFor="year" className="text-sm font-medium mb-2 block">
              Год выпуска *
            </Label>
            <Input
              id="year"
              name="year"
              type="number"
              value={formData.year}
              onChange={handleChange}
              required
              placeholder="2020"
              min="1990"
              max={new Date().getFullYear()}
            />
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
              Номер телефона *
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  let value = e.target.value
                  // Remove all non-digits except +
                  value = value.replace(/[^\d+]/g, "")
                  // Ensure it starts with +375
                  if (!value.startsWith("+375")) {
                    value = "+375" + value.replace(/^\+?375?/, "")
                  }
                  // Limit to +375 + 9 digits
                  if (value.length > 13) {
                    value = value.slice(0, 13)
                  }
                  setFormData((prev) => ({ ...prev, phone: value }))
                }}
                required
                placeholder="+375"
                className="pl-10 pr-10"
                pattern="^\+375\d{9}$"
              />
              {formData.phone.length === 13 && formData.phone.match(/^\+375\d{9}$/) && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Telegram */}
          <div>
            <Label htmlFor="telegram" className="text-sm font-medium mb-2 block">
              Telegram (необязательно)
            </Label>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="telegram"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                placeholder="@username"
                className="pl-10"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 mt-6">
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Отправляем заявку...
              </>
            ) : (
              "Отправить заявку"
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center mt-4">
            Нажимая кнопку, вы соглашаетесь с{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              политикой конфиденциальности
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}
