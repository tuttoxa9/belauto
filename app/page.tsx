"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BottomNavBar } from "@/components/layout/bottom-nav-bar"
import { StoryReel } from "@/components/stories/story-reel"
import { CarCarousel } from "@/components/cars/car-carousel"
import { CarEvaluationModal } from "@/components/modals/car-evaluation-modal"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, StarIcon, ShieldIcon, ClockIcon } from "@/components/icons/custom-icons"

export default function HomePage() {
  const [isEvaluationModalOpen, setIsEvaluationModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16">
        {/* Hero Section with Car Background */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/hero-car.jpg')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Найди свой
              <span className="block text-yellow-400 drop-shadow-lg">идеальный автомобиль</span>
              надежным способом
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 drop-shadow-md">
              Качественные автомобили с проверенной историей и полным юридическим сопровождением
            </p>
            <Link href="/catalog">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                Посмотреть каталог
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              className="relative block w-full h-20 md:h-32"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="fill-white"
              ></path>
            </svg>
          </div>
        </section>

        {/* Stories Section */}
        <section className="px-4 py-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Свежие поступления и новости</h2>
            <StoryReel />
          </div>
        </section>

        {/* Featured Cars Section with Wave */}
        <section className="relative bg-gray-50">
          {/* Top Wave Divider */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg
              className="relative block w-full h-16 md:h-24"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="fill-white"
              ></path>
            </svg>
          </div>

          <div className="px-4 py-16 pt-24">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Специальные предложения</h2>
              <CarCarousel />
              <div className="text-center mt-8">
                <Link href="/catalog">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Смотреть весь каталог
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Wave Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              className="relative block w-full h-16 md:h-24"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="fill-white"
              ></path>
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section className="px-4 py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">БелАвто Центр — ваш надежный партнер</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Более 10 лет мы помогаем клиентам найти идеальный автомобиль. Гарантируем честные цены, прозрачные сделки
              и полное юридическое сопровождение.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <StarIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Качество</h3>
                <p className="text-gray-600 text-sm">Все автомобили проходят тщательную проверку</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <ShieldIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Гарантия</h3>
                <p className="text-gray-600 text-sm">Юридическая чистота каждой сделки</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <ClockIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Скорость</h3>
                <p className="text-gray-600 text-sm">Быстрое оформление документов</p>
              </div>
            </div>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Узнать больше
              </Button>
            </Link>
          </div>
        </section>

        {/* Sell Car CTA with Wave */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          {/* Top Wave Divider */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg
              className="relative block w-full h-16 md:h-24"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="fill-white"
              ></path>
            </svg>
          </div>

          <div className="px-4 py-16 pt-24">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Хотите продать свой автомобиль?</h2>
              <p className="text-xl mb-8 text-blue-100">Предложим лучшую цену и возьмем все заботы на себя</p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => setIsEvaluationModalOpen(true)}
              >
                Оценить авто
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNavBar />

      {/* Car Evaluation Modal */}
      <CarEvaluationModal isOpen={isEvaluationModalOpen} onClose={() => setIsEvaluationModalOpen(false)} />
    </div>
  )
}
