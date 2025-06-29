"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SortDropdownProps {
  value: string
  onChange: (value: string) => void
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-40 md:w-48 text-sm">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="newest">Сначала новые</SelectItem>
        <SelectItem value="price-low">Сначала дешевле</SelectItem>
        <SelectItem value="price-high">Сначала дороже</SelectItem>
        <SelectItem value="mileage-low">По пробегу (меньше)</SelectItem>
        <SelectItem value="year-new">По году (новее)</SelectItem>
        <SelectItem value="featured">Рекомендуемые</SelectItem>
      </SelectContent>
    </Select>
  )
}
