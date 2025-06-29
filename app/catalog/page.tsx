"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BottomNavBar } from "@/components/layout/bottom-nav-bar"
import { MobileFilterBar } from "@/components/catalog/mobile-filter-bar"
import { MobileCarCard } from "@/components/cars/mobile-car-card"
import { FilterPanel } from "@/components/catalog/filter-panel"
import { SortDropdown } from "@/components/catalog/sort-dropdown"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon, FilterIcon } from "@/components/icons/custom-icons"

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
    featured: true,
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
    featured: false,
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
    featured: true,
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
    featured: false,
  },
  {
    id: "5",
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    price: 55000,
    mileage: 20000,
    engine: "2.5",
    fuel: "Бензин",
    transmission: "Автомат",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: "6",
    brand: "Honda",
    model: "Accord",
    year: 2021,
    price: 48000,
    mileage: 30000,
    engine: "2.0",
    fuel: "Бензин",
    transmission: "Автомат",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
]

export default function CatalogPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState("newest")
  const [filteredCars, setFilteredCars] = useState(mockCars)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-16 pb-20 md:pb-8">
        {/* Mobile Header */}
        <div className="md:hidden sticky top-16 z-40 bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center space-x-3 mb-3">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Поиск автомобилей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-50 border-gray-200"
              />
            </div>
            <Button variant="outline" size="sm" onClick={() => setIsFilterOpen(true)} className="px-3 bg-transparent">
              <FilterIcon className="w-4 h-4" />
            </Button>
          </div>
          <MobileFilterBar onFilterChange={setFilteredCars} allCars={mockCars} />
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Каталог автомобилей</h1>
            <div className="flex items-center space-x-4">
              <SortDropdown value={sortBy} onChange={setSortBy} />
              <Button variant="outline" className="bg-transparent" onClick={() => setIsFilterOpen(true)}>
                <FilterIcon className="w-4 h-4 mr-2" />
                Фильтры
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8">
            {/* Desktop Filter Panel */}
            <div className="hidden md:block w-80 flex-shrink-0">
              <FilterPanel onFilterChange={setFilteredCars} allCars={mockCars} />
            </div>

            {/* Cars Grid */}
            <div className="flex-1">
              {/* Mobile Results Header */}
              <div className="md:hidden flex items-center justify-between mb-4">
                <p className="text-sm text-gray-600">Найдено {filteredCars.length} автомобилей</p>
                <SortDropdown value={sortBy} onChange={setSortBy} />
              </div>

              {/* Mobile Cars List */}
              <div className="md:hidden space-y-4">
                {filteredCars.map((car) => (
                  <MobileCarCard key={car.id} car={car} />
                ))}
              </div>

              {/* Desktop Cars Grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <div
                    key={car.id}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={car.image || "/placeholder.svg"}
                        alt={`${car.brand} ${car.model}`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        {car.brand} {car.model}, {car.year}
                      </h3>
                      <div className="text-2xl font-bold text-blue-600 mb-4">${car.price.toLocaleString()}</div>
                      <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                        <div>{car.mileage.toLocaleString()} км</div>
                        <div>{car.engine}л</div>
                        <div>{car.fuel}</div>
                        <div>{car.transmission}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredCars.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SearchIcon className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-lg mb-2">По вашим критериям автомобили не найдены</p>
                  <p className="text-gray-400">Попробуйте изменить параметры поиска</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filter Modal */}
        {isFilterOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="bg-white h-full overflow-y-auto">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                <h2 className="text-lg font-semibold">Фильтры</h2>
                <Button variant="ghost" onClick={() => setIsFilterOpen(false)}>
                  Применить
                </Button>
              </div>
              <div className="p-4">
                <FilterPanel onFilterChange={setFilteredCars} allCars={mockCars} />
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <BottomNavBar />
    </div>
  )
}
