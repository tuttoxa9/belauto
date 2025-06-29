"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"

interface FilterPanelProps {
  onFilterChange: (filteredCars: any[]) => void
  allCars: any[]
}

export function FilterPanel({ onFilterChange, allCars }: FilterPanelProps) {
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    priceRange: [0, 100000],
    yearRange: [2015, 2024],
    bodyTypes: [] as string[],
  })

  const brands = [...new Set(allCars.map((car) => car.brand))].sort()
  const models = filters.brand
    ? [...new Set(allCars.filter((car) => car.brand === filters.brand).map((car) => car.model))].sort()
    : []

  const bodyTypes = ["Седан", "Хэтчбек", "Универсал", "Кроссовер", "Внедорожник"]

  useEffect(() => {
    const filtered = allCars.filter((car) => {
      const matchesBrand = !filters.brand || car.brand === filters.brand
      const matchesModel = !filters.model || car.model === filters.model
      const matchesPrice = car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1]
      const matchesYear = car.year >= filters.yearRange[0] && car.year <= filters.yearRange[1]

      return matchesBrand && matchesModel && matchesPrice && matchesYear
    })

    onFilterChange(filtered)
  }, [filters, allCars, onFilterChange])

  const handleBrandChange = (brand: string) => {
    setFilters((prev) => ({ ...prev, brand, model: "" }))
  }

  const handleModelChange = (model: string) => {
    setFilters((prev) => ({ ...prev, model }))
  }

  const handleBodyTypeChange = (bodyType: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      bodyTypes: checked ? [...prev.bodyTypes, bodyType] : prev.bodyTypes.filter((type) => type !== bodyType),
    }))
  }

  const resetFilters = () => {
    setFilters({
      brand: "",
      model: "",
      priceRange: [0, 100000],
      yearRange: [2015, 2024],
      bodyTypes: [],
    })
  }

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold mb-4 md:mb-6">Фильтры</h3>

      <div className="space-y-4 md:space-y-6">
        {/* Brand */}
        <div>
          <Label className="text-sm font-medium mb-2 block">Марка</Label>
          <Select value={filters.brand} onValueChange={handleBrandChange}>
            <SelectTrigger className="text-sm">
              <SelectValue placeholder="Выберите марку" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все марки</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Model */}
        <div>
          <Label className="text-sm font-medium mb-2 block">Модель</Label>
          <Select value={filters.model} onValueChange={handleModelChange} disabled={!filters.brand}>
            <SelectTrigger className="text-sm">
              <SelectValue placeholder="Выберите модель" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все модели</SelectItem>
              {models.map((model) => (
                <SelectItem key={model} value={model}>
                  {model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div>
          <Label className="text-sm font-medium mb-2 block">
            Цена: ${filters.priceRange[0].toLocaleString()} - ${filters.priceRange[1].toLocaleString()}
          </Label>
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, priceRange: value }))}
            max={100000}
            min={0}
            step={5000}
            className="mt-2"
          />
        </div>

        {/* Year Range */}
        <div>
          <Label className="text-sm font-medium mb-2 block">
            Год: {filters.yearRange[0]} - {filters.yearRange[1]}
          </Label>
          <Slider
            value={filters.yearRange}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, yearRange: value }))}
            max={2024}
            min={2015}
            step={1}
            className="mt-2"
          />
        </div>

        {/* Body Types */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Тип кузова</Label>
          <div className="space-y-2 md:space-y-3">
            {bodyTypes.map((bodyType) => (
              <div key={bodyType} className="flex items-center space-x-2">
                <Checkbox
                  id={bodyType}
                  checked={filters.bodyTypes.includes(bodyType)}
                  onCheckedChange={(checked) => handleBodyTypeChange(bodyType, checked as boolean)}
                />
                <Label htmlFor={bodyType} className="text-sm">
                  {bodyType}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-gray-200 space-y-3">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm">Применить</Button>
          <Button variant="outline" className="w-full bg-transparent text-sm" onClick={resetFilters}>
            Сбросить
          </Button>
        </div>
      </div>
    </div>
  )
}
