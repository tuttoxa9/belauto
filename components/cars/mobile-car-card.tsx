import Link from "next/link"
import { GaugeIcon, FuelIcon, SettingsIcon, CalendarIcon, HeartIcon } from "@/components/icons/custom-icons"
import { Button } from "@/components/ui/button"

interface Car {
  id: string
  brand: string
  model: string
  year: number
  price: number
  mileage: number
  engine: string
  fuel: string
  transmission: string
  image: string
  featured?: boolean
}

interface MobileCarCardProps {
  car: Car
}

export function MobileCarCard({ car }: MobileCarCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat("ru-RU").format(mileage) + " км"
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="flex">
        {/* Image */}
        <div className="relative w-32 h-32 flex-shrink-0">
          <img
            src={car.image || "/placeholder.svg"}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-full object-cover"
          />
          {car.featured && (
            <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">ТОП</div>
          )}
          <Button variant="ghost" size="sm" className="absolute top-2 right-2 w-8 h-8 p-0 bg-white/80 hover:bg-white">
            <HeartIcon className="w-4 h-4 text-gray-600" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                {car.brand} {car.model}
              </h3>
              <p className="text-xs text-gray-500">{car.year} год</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-blue-600">{formatPrice(car.price)}</div>
            </div>
          </div>

          {/* Characteristics */}
          <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-gray-600">
            <div className="flex items-center space-x-1">
              <GaugeIcon className="w-3 h-3 text-gray-400" />
              <span>{formatMileage(car.mileage)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <CalendarIcon className="w-3 h-3 text-gray-400" />
              <span>{car.engine}л</span>
            </div>
            <div className="flex items-center space-x-1">
              <FuelIcon className="w-3 h-3 text-gray-400" />
              <span>{car.fuel}</span>
            </div>
            <div className="flex items-center space-x-1">
              <SettingsIcon className="w-3 h-3 text-gray-400" />
              <span>{car.transmission}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-2">
            <Link href={`/car/${car.id}`} className="flex-1">
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-xs">
                Подробнее
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="px-3 bg-transparent">
              <PhoneIcon className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Add PhoneIcon import at the top
import { PhoneIcon } from "@/components/icons/custom-icons"
