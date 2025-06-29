"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BottomNavBar } from "@/components/layout/bottom-nav-bar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Car, DollarSign, Clock } from "lucide-react"

export default function SellPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    brand: "",
    model: "",
    year: "",
    mileage: "",
    vin: "",
    comment: "",
  })
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const brands = ["BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Toyota", "Honda", "Mazda", "Другая"]
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/telegram/sell', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send sell form')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error sending sell form:', error)
      alert('Произошла ошибка при отправке заявки. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-16 pb-20 md:pb-8 flex items-center justify-center">
          <div className="max-w-md mx-auto px-4 text-center">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-900 mb-4">Заявка отправлена!</h2>
              <p className="text-green-700 mb-6">
                Мы оценим ваш автомобиль и свяжемся с вами в течение 2 часов с предложением.
              </p>
              <Button onClick={() => (window.location.href = "/")} className="bg-green-600 hover:bg-green-700">
                На главную
              </Button>
            </div>
          </div>
        </main>
        <Footer />
        <BottomNavBar />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16 pb-20 md:pb-8">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Продайте ваш автомобиль выгодно</h1>
            <p className="text-xl text-gray-600 mb-8">Получите честную оценку и быстрое оформление сделки</p>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Быстрая оценка</h3>
                <p className="text-sm text-gray-600">Оценим ваш автомобиль за 30 минут</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Честная цена</h3>
                <p className="text-sm text-gray-600">Предложим максимальную стоимость</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Быстро</h3>
                <p className="text-sm text-gray-600">Оформление за 1 день</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Расскажите о вашем автомобиле</h2>

            {/* Personal Info */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                  Имя *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ваше имя"
                  className="bg-white"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                  Телефон *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+375 (29) 123-45-67"
                  className="bg-white"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-white"
                />
              </div>
            </div>

            {/* Car Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="brand" className="text-sm font-medium mb-2 block">
                  Марка *
                </Label>
                <Select
                  value={formData.brand}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, brand: value }))}
                >
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Выберите марку" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="model" className="text-sm font-medium mb-2 block">
                  Модель *
                </Label>
                <Input
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                  placeholder="Например: X5, C-Class"
                  className="bg-white"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="year" className="text-sm font-medium mb-2 block">
                  Год выпуска *
                </Label>
                <Select
                  value={formData.year}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, year: value }))}
                >
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Выберите год" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="mileage" className="text-sm font-medium mb-2 block">
                  Пробег (км) *
                </Label>
                <Input
                  id="mileage"
                  name="mileage"
                  type="number"
                  value={formData.mileage}
                  onChange={handleChange}
                  required
                  placeholder="150000"
                  className="bg-white"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="vin" className="text-sm font-medium mb-2 block">
                VIN номер (опционально)
              </Label>
              <Input
                id="vin"
                name="vin"
                value={formData.vin}
                onChange={handleChange}
                placeholder="WBAFR9C50DD123456"
                className="bg-white"
              />
            </div>

            <div>
              <Label htmlFor="comment" className="text-sm font-medium mb-2 block">
                Дополнительная информация
              </Label>
              <Textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Расскажите о состоянии автомобиля, комплектации, особенностях..."
                rows={4}
                className="bg-white resize-none"
              />
            </div>

            {/* File Upload */}
            <div>
              <Label className="text-sm font-medium mb-2 block">Фотографии автомобиля</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center bg-white hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Перетащите фотографии сюда или нажмите для выбора</p>
                  <p className="text-sm text-gray-500">Поддерживаются JPG, PNG до 10MB каждая</p>
                </label>
              </div>
              {files.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Выбрано файлов: {files.length}</p>
                  <div className="space-y-1">
                    {files.map((file, index) => (
                      <p key={index} className="text-xs text-gray-500">
                        {file.name}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Отправляем заявку...
                </>
              ) : (
                "Получить оценку автомобиля"
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </div>
      </main>

      <Footer />
      <BottomNavBar />
    </div>
  )
}
