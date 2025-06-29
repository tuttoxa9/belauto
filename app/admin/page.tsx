"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, MessageSquare, ImageIcon, Plus, Edit, Trash2, Eye } from "lucide-react"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ username: "", password: "" })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple auth check - in real app this would be proper authentication
    if (credentials.username === "admin" && credentials.password === "admin") {
      setIsAuthenticated(true)
    } else {
      alert("Неверные данные для входа")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Вход в админ-панель</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Логин</Label>
                <Input
                  id="username"
                  value={credentials.username}
                  onChange={(e) => setCredentials((prev) => ({ ...prev, username: e.target.value }))}
                  placeholder="admin"
                />
              </div>
              <div>
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
                  placeholder="admin"
                />
              </div>
              <Button type="submit" className="w-full">
                Войти
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Панель администратора</h1>
            <Button variant="outline" onClick={() => setIsAuthenticated(false)}>
              Выйти
            </Button>
          </div>

          <Tabs defaultValue="cars" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="cars" className="flex items-center space-x-2">
                <Car className="w-4 h-4" />
                <span>Автомобили</span>
              </TabsTrigger>
              <TabsTrigger value="stories" className="flex items-center space-x-2">
                <ImageIcon className="w-4 h-4" />
                <span>Истории</span>
              </TabsTrigger>
              <TabsTrigger value="requests" className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>Заявки</span>
              </TabsTrigger>
            </TabsList>

            {/* Cars Management */}
            <TabsContent value="cars">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Управление автомобилями</CardTitle>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Добавить авто
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src="/placeholder.svg?height=60&width=80"
                            alt="Car"
                            className="w-20 h-15 object-cover rounded"
                          />
                          <div>
                            <h3 className="font-semibold">BMW X5 2023</h3>
                            <p className="text-sm text-gray-600">$85,000 • 15,000 км</p>
                            <Badge variant="secondary">Активно</Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Stories Management */}
            <TabsContent value="stories">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Управление историями</CardTitle>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Добавить историю
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="border border-gray-200 rounded-lg p-4">
                        <img
                          src="/placeholder.svg?height=120&width=120"
                          alt="Story"
                          className="w-full aspect-square object-cover rounded-lg mb-3"
                        />
                        <h3 className="font-medium mb-2">Новое поступление</h3>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Активна</Badge>
                          <div className="flex space-x-1">
                            <Button variant="outline" size="sm">
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Requests Management */}
            <TabsContent value="requests">
              <Card>
                <CardHeader>
                  <CardTitle>Заявки с сайта</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: 1,
                        name: "Иван Петров",
                        phone: "+375291234567",
                        type: "Консультация",
                        car: "BMW X5 2023",
                        status: "Новая",
                      },
                      {
                        id: 2,
                        name: "Мария Сидорова",
                        phone: "+375291234568",
                        type: "Продажа авто",
                        car: "Toyota Camry 2020",
                        status: "В работе",
                      },
                      {
                        id: 3,
                        name: "Алексей Иванов",
                        phone: "+375291234569",
                        type: "Консультация",
                        car: "Mercedes C-Class",
                        status: "Закрыта",
                      },
                    ].map((request) => (
                      <div
                        key={request.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                      >
                        <div>
                          <h3 className="font-semibold">{request.name}</h3>
                          <p className="text-sm text-gray-600">{request.phone}</p>
                          <p className="text-sm text-gray-600">
                            {request.type} • {request.car}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge
                            variant={
                              request.status === "Новая"
                                ? "default"
                                : request.status === "В работе"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {request.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            Подробнее
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
