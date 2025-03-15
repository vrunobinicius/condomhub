"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CalendarIcon, Clock, CheckCircle, CalendarPlus2Icon as CalendarIcon2 } from "lucide-react"

export default function ReservasPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedArea, setSelectedArea] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")

  const areasComuns = [
    {
      id: "salao",
      name: "Salão de Festas",
      image: "/placeholder.svg?height=200&width=300",
      description: "Capacidade para 50 pessoas, com cozinha equipada",
    },
    {
      id: "churrasqueira",
      name: "Churrasqueira",
      image: "/placeholder.svg?height=200&width=300",
      description: "Área com 2 churrasqueiras, mesas e cadeiras",
    },
    {
      id: "quadra",
      name: "Quadra Poliesportiva",
      image: "/placeholder.svg?height=200&width=300",
      description: "Quadra para futebol, basquete e vôlei",
    },
    {
      id: "piscina",
      name: "Piscina",
      image: "/placeholder.svg?height=200&width=300",
      description: "Piscina adulto e infantil com espreguiçadeiras",
    },
  ]

  const minhasReservas = [
    { id: 1, area: "Salão de Festas", data: "15/02/2025", horario: "18:00 - 23:00", status: "confirmada" },
    { id: 2, area: "Churrasqueira", data: "28/01/2025", horario: "12:00 - 17:00", status: "confirmada" },
  ]

  const horarios = ["08:00 - 12:00", "12:00 - 17:00", "18:00 - 23:00"]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Reservas</h1>
        <p className="text-muted-foreground">Reserve áreas comuns do condomínio para seus eventos.</p>
      </div>

      <Tabs defaultValue="areas" className="space-y-4">
        <TabsList>
          <TabsTrigger value="areas" className="flex items-center gap-2">
            <CalendarIcon2 className="h-4 w-4" />
            <span>Áreas Comuns</span>
          </TabsTrigger>
          <TabsTrigger value="minhas" className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>Minhas Reservas</span>
          </TabsTrigger>
          <TabsTrigger value="calendario" className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <span>Calendário</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="areas">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {areasComuns.map((area) => (
              <Card key={area.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img src={area.image || "/placeholder.svg"} alt={area.name} className="object-cover w-full h-full" />
                </div>
                <CardHeader>
                  <CardTitle>{area.name}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" onClick={() => setSelectedArea(area.id)}>
                        Reservar
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Reservar {area.name}</DialogTitle>
                        <DialogDescription>Selecione a data e horário para sua reserva</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="date">Data</Label>
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                            disabled={(date) => {
                              const today = new Date()
                              today.setHours(0, 0, 0, 0)
                              return date < today
                            }}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="time">Horário</Label>
                          <Select onValueChange={setSelectedTime}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o horário" />
                            </SelectTrigger>
                            <SelectContent>
                              {horarios.map((horario) => (
                                <SelectItem key={horario} value={horario}>
                                  {horario}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Confirmar Reserva</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="minhas">
          <Card>
            <CardHeader>
              <CardTitle>Minhas Reservas</CardTitle>
              <CardDescription>Visualize e gerencie suas reservas</CardDescription>
            </CardHeader>
            <CardContent>
              {minhasReservas.length > 0 ? (
                <div className="space-y-4">
                  {minhasReservas.map((reserva) => (
                    <div
                      key={reserva.id}
                      className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg"
                    >
                      <div>
                        <h3 className="font-medium">{reserva.area}</h3>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1 text-sm">
                            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                            <span>{reserva.data}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{reserva.horario}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <div className="flex items-center gap-1 text-green-500">
                          <CheckCircle className="h-4 w-4" />
                          <span className="font-medium">Confirmada</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Cancelar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Você não possui reservas.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendario">
          <Card>
            <CardHeader>
              <CardTitle>Calendário de Reservas</CardTitle>
              <CardDescription>Visualize a disponibilidade das áreas comuns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                </div>
                <div className="md:w-1/2">
                  <h3 className="font-medium mb-4">Reservas para {date?.toLocaleDateString("pt-BR")}</h3>
                  <div className="space-y-4">
                    <div className="p-3 border rounded-md">
                      <h4 className="font-medium">Salão de Festas</h4>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>08:00 - 12:00</span>
                          </div>
                          <span className="text-green-500">Disponível</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>12:00 - 17:00</span>
                          </div>
                          <span className="text-green-500">Disponível</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>18:00 - 23:00</span>
                          </div>
                          <span className="text-red-500">Reservado</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 border rounded-md">
                      <h4 className="font-medium">Churrasqueira</h4>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>08:00 - 12:00</span>
                          </div>
                          <span className="text-green-500">Disponível</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>12:00 - 17:00</span>
                          </div>
                          <span className="text-green-500">Disponível</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>18:00 - 23:00</span>
                          </div>
                          <span className="text-green-500">Disponível</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

