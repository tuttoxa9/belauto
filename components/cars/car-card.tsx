import Link from "next/link"
import { Gauge, Fuel, Settings, Calendar } from "lucide-react"

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
}

interface CarCardProps {
  car: Car
}

export function CarCard({ car }: CarCardProps) {
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
    <Link href={`/car/${car.id}`}>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={car.image || "/placeholder.svg"}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <h3 className="font-semibold text-lg text-gray-900 mb-2">
            {car.brand} {car.model}, {car.year}
          </h3>

          {/* Characteristics */}
          <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Gauge className="w-4 h-4 text-gray-400" />
              <span>{formatMileage(car.mileage)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>{car.engine}л</span>
            </div>
            <div className="flex items-center space-x-2">
              <Fuel className="w-4 h-4 text-gray-400" />
              <span>{car.fuel}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Settings className="w-4 h-4 text-gray-400" />
              <span>{car.transmission}</span>
            </div>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-blue-600">{formatPrice(car.price)}</div>
        </div>
      </div>
    </Link>
  )
}
