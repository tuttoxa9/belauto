"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface MobileFilterBarProps {
  onFilterChange: (filteredCars: any[]) => void
  allCars: any[]
}

export function MobileFilterBar({ onFilterChange, allCars }: MobileFilterBarProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const quickFilters = [
    { id: "all", label: "Все", count: allCars.length },
    { id: "featured", label: "Рекомендуемые", count: allCars.filter((car) => car.featured).length },
    { id: "bmw", label: "BMW", count: allCars.filter((car) => car.brand === "BMW").length },
    { id: "mercedes", label: "Mercedes", count: allCars.filter((car) => car.brand === "Mercedes-Benz").length },
    { id: "audi", label: "Audi", count: allCars.filter((car) => car.brand === "Audi").length },
    { id: "under50k", label: "До $50k", count: allCars.filter((car) => car.price < 50000).length },
    { id: "2023", label: "2023 год", count: allCars.filter((car) => car.year === 2023).length },
  ]

  const handleFilterClick = (filterId: string) => {
    let filtered = allCars

    if (filterId === "all") {
      setActiveFilters([])
    } else {
      const newActiveFilters = activeFilters.includes(filterId)
        ? activeFilters.filter((f) => f !== filterId)
        : [...activeFilters, filterId]

      setActiveFilters(newActiveFilters)

      if (newActiveFilters.length > 0) {
        filtered = allCars.filter((car) => {
          return newActiveFilters.some((filter) => {
            switch (filter) {
              case "featured":
                return car.featured
              case "bmw":
                return car.brand === "BMW"
              case "mercedes":
                return car.brand === "Mercedes-Benz"
              case "audi":
                return car.brand === "Audi"
              case "under50k":
                return car.price < 50000
              case "2023":
                return car.year === 2023
              default:
                return true
            }
          })
        })
      }
    }

    onFilterChange(filtered)
  }

  return (
    <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
      {quickFilters.map((filter) => (
        <Button
          key={filter.id}
          variant={
            activeFilters.includes(filter.id) || (filter.id === "all" && activeFilters.length === 0)
              ? "default"
              : "outline"
          }
          size="sm"
          onClick={() => handleFilterClick(filter.id)}
          className={`flex-shrink-0 ${
            activeFilters.includes(filter.id) || (filter.id === "all" && activeFilters.length === 0)
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 border-gray-300"
          }`}
        >
          {filter.label}
          <span className="ml-1 text-xs opacity-75">({filter.count})</span>
        </Button>
      ))}
    </div>
  )
}
