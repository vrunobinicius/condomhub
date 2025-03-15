"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AlertTriangle, Clock, CheckCircle, Calendar, MapPin } from "lucide-react"

export default function OcorrenciasPage() {
  const [formData, setFormData] = useState({
    tipo: "",
    local: "",
    descricao: "",
    arquivo: null,
  })

  const minhasOcorrencias = [
    {
      id: 1,
      tipo: "Barulho Excessivo",
      local: "Apartamento 305",
      data: "15/01/2025",
      hora: "22:30",
      descricao: "Barulho excessivo após as 22h, música alta e vozes.",
      status: "Em análise",
    },
    {
      id: 2,
      tipo: "Vazamento",
      local: "Hall do 2º andar",
      data: "10/01/2025",
      hora: "14:15",
      descricao: "Vazamento de água no teto do hall do 2º andar, próximo ao elevador.",
      status: "Resolvido",
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica para enviar a ocorrência
    console.log(formData)
    alert("Ocorrência registrada com sucesso!")
    setFormData({
      tipo: "",
      local: "",
      descricao: "",
      arquivo: null,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Ocorrências</h1>
        <p className="text-muted-foreground">Registre e acompanhe ocorrências no condomínio.</p>
      </div>

      <Tabs defaultValue="registrar" className="space-y-4">
        <TabsList>
          <TabsTrigger value="registrar" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Registrar</span>
          </TabsTrigger>
          <TabsTrigger value="minhas" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Minhas Ocorrências</span>
          </TabsTrigger>
          <TabsTrigger value="acompanhamento" className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>Acompanhamento</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="registrar">
          <Card>
            <CardHeader>
              <CardTitle>Registrar Nova Ocorrência</CardTitle>
              <CardDescription>Preencha o formulário para registrar uma ocorrência no condomínio</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tipo">Tipo de Ocorrência</Label>
                    <select
                      id="tipo"
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleChange}
                      className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1"
                      required
                    >
                      <option value="">Selecione o tipo</option>
                      <option value="barulho">Barulho Excessivo</option>
                      <option value="vazamento">Vazamento</option>
                      <option value="dano">Dano ao Patrimônio</option>
                      <option value="seguranca">Problema de Segurança</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="local">Local</Label>
                    <Input
                      id="local"
                      name="local"
                      placeholder="Ex: Hall do 2º andar"
                      value={formData.local}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descricao">Descrição</Label>
                  <Textarea
                    id="descricao"
                    name="descricao"
                    placeholder="Descreva detalhadamente a ocorrência"
                    rows={5}
                    value={formData.descricao}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="arquivo">Anexar Foto/Vídeo (opcional)</Label>
                  <Input id="arquivo" type="file" />
                </div>

                <Button type="submit" className="w-full">
                  Registrar Ocorrência
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="minhas">
          <Card>
            <CardHeader>
              <CardTitle>Minhas Ocorrências</CardTitle>
              <CardDescription>Ocorrências registradas por você</CardDescription>
            </CardHeader>
            <CardContent>
              {minhasOcorrencias.length > 0 ? (
                <div className="space-y-4">
                  {minhasOcorrencias.map((ocorrencia) => (
                    <div key={ocorrencia.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{ocorrencia.tipo}</h3>
                        <div
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            ocorrencia.status === "Resolvido"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                          }`}
                        >
                          {ocorrencia.status}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-3 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{ocorrencia.local}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{ocorrencia.data}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{ocorrencia.hora}</span>
                        </div>
                      </div>

                      <p className="mb-4">{ocorrencia.descricao}</p>

                      <div className="flex justify-end">
                        <Button variant="outline" size="sm">
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Você não registrou nenhuma ocorrência.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="acompanhamento">
          <Card>
            <CardHeader>
              <CardTitle>Acompanhamento de Ocorrências</CardTitle>
              <CardDescription>Acompanhe o status das ocorrências registradas</CardDescription>
            </CardHeader>
            <CardContent>
              {minhasOcorrencias.length > 0 ? (
                <div className="space-y-6">
                  {minhasOcorrencias.map((ocorrencia) => (
                    <div key={ocorrencia.id} className="border rounded-lg overflow-hidden">
                      <div className="bg-muted p-4">
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold">
                            Ocorrência #{ocorrencia.id} - {ocorrencia.tipo}
                          </h3>
                          <div
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              ocorrencia.status === "Resolvido"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                            }`}
                          >
                            {ocorrencia.status}
                          </div>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                              <AlertTriangle className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium">Ocorrência Registrada</div>
                              <div className="text-sm text-muted-foreground">
                                {ocorrencia.data} às {ocorrencia.hora}
                              </div>
                              <div className="mt-1">{ocorrencia.descricao}</div>
                            </div>
                          </div>

                          {ocorrencia.status === "Em análise" && (
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white">
                                <Clock className="h-4 w-4" />
                              </div>
                              <div>
                                <div className="font-medium">Em Análise</div>
                                <div className="text-sm text-muted-foreground">16/01/2025 às 09:15</div>
                                <div className="mt-1">Sua ocorrência está sendo analisada pelo síndico.</div>
                              </div>
                            </div>
                          )}

                          {ocorrencia.status === "Resolvido" && (
                            <>
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white">
                                  <Clock className="h-4 w-4" />
                                </div>
                                <div>
                                  <div className="font-medium">Em Análise</div>
                                  <div className="text-sm text-muted-foreground">11/01/2025 às 10:30</div>
                                  <div className="mt-1">Sua ocorrência está sendo analisada pelo síndico.</div>
                                </div>
                              </div>

                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                                  <CheckCircle className="h-4 w-4" />
                                </div>
                                <div>
                                  <div className="font-medium">Resolvido</div>
                                  <div className="text-sm text-muted-foreground">12/01/2025 às 14:45</div>
                                  <div className="mt-1">O problema foi resolvido pela equipe de manutenção.</div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>

                        {ocorrencia.status === "Em análise" && (
                          <div className="mt-4 pt-4 border-t">
                            <div className="text-sm font-medium mb-2">Adicionar comentário</div>
                            <div className="flex gap-2">
                              <Input placeholder="Escreva um comentário..." className="flex-1" />
                              <Button size="sm">Enviar</Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Você não registrou nenhuma ocorrência.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

