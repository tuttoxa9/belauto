"use client"

import { useState } from "react"
import { CarCard } from "./car-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const mockCars = [
  {
    id: "1",
    brand: "BMW",
    model: "X5",
    year: 2023,
    price: 85000,
    mileage: 15000,
    engine: "3.0",
    fuel: "Бензин",
    transmission: "Автомат",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2022,
    price: 65000,
    mileage: 25000,
    engine: "2.0",
    fuel: "Бензин",
    transmission: "Автомат",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    brand: "Audi",
    model: "A6",
    year: 2023,
    price: 75000,
    mileage: 12000,
    engine: "2.5",
    fuel: "Бензин",
    transmission: "Автомат",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    brand: "Volkswagen",
    model: "Passat",
    year: 2021,
    price: 45000,
    mileage: 35000,
    engine: "2.0",
    fuel: "Дизель",
    transmission: "Автомат",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function CarCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3
  const maxIndex = Math.max(0, mockCars.length - itemsPerView)

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="rounded-full shadow-lg bg-transparent"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
      </div>
      <div className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          className="rounded-full shadow-lg bg-transparent"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out md:gap-6 gap-4"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {mockCars.map((car) => (
            <div key={car.id} className="flex-shrink-0 w-full md:w-1/3">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-center space-x-4 mt-6">
        <Button variant="outline" size="sm" onClick={handlePrevious} disabled={currentIndex === 0}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          Назад
        </Button>
        <Button variant="outline" size="sm" onClick={handleNext} disabled={currentIndex === maxIndex}>
          Вперед
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}
