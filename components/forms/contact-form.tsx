"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle } from "lucide-react"

interface ContactFormProps {
  carInfo?: string
}

export function ContactForm({ carInfo }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: carInfo ? `Интересует автомобиль: ${carInfo}` : "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", phone: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-green-900 mb-2">Спасибо за обращение!</h3>
        <p className="text-green-700">Мы свяжемся с вами в ближайшее время</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
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

      <div>
        <Label htmlFor="message" className="text-sm font-medium mb-2 block">
          Сообщение
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Расскажите, что вас интересует..."
          rows={4}
          className="bg-white resize-none"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700">
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            Отправляем...
          </>
        ) : (
          <>
            <Phone className="w-4 h-4 mr-2" />
            Отправить заявку
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="/privacy" className="text-blue-600 hover:underline">
          политикой конфиденциальности
        </a>{" "}
        и{" "}
        <a href="/terms" className="text-blue-600 hover:underline">
          условиями использования
        </a>
      </p>
    </form>
  )
}
