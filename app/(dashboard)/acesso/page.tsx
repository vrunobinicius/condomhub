"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { UserCheck, Calendar, Clock, CheckCircle, XCircle, Search, UserPlus } from "lucide-react"

export default function AcessoPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const visitantes = [
    {
      id: 1,
      nome: "Ana Silva",
      documento: "123.456.789-00",
      dataEntrada: "15/01/2025",
      horaEntrada: "14:30",
      horaSaida: "17:45",
      autorizado: true,
    },
    {
      id: 2,
      nome: "Carlos Oliveira",
      documento: "987.654.321-00",
      dataEntrada: "14/01/2025",
      horaEntrada: "10:15",
      horaSaida: "11:30",
      autorizado: true,
    },
    {
      id: 3,
      nome: "Mariana Costa",
      documento: "456.789.123-00",
      dataEntrada: "12/01/2025",
      horaEntrada: "16:00",
      horaSaida: "18:20",
      autorizado: true,
    },
  ]

  const autorizacoes = [
    {
      id: 1,
      nome: "Pedro Santos",
      documento: "111.222.333-44",
      dataInicio: "20/01/2025",
      dataFim: "20/01/2025",
      tipo: "Visita",
      status: "Pendente",
    },
    {
      id: 2,
      nome: "Empresa de Limpeza",
      documento: "CNPJ: 12.345.678/0001-90",
      dataInicio: "25/01/2025",
      dataFim: "25/01/2025",
      tipo: "Prestador de Serviço",
      status: "Aprovada",
    },
    {
      id: 3,
      nome: "Entrega Mercado",
      documento: "Sem documento",
      dataInicio: "18/01/2025",
      dataFim: "18/01/2025",
      tipo: "Entrega",
      status: "Aprovada",
    },
  ]

  const filteredVisitantes = visitantes.filter(
    (v) =>
      v.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.documento.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredAutorizacoes = autorizacoes.filter(
    (a) =>
      a.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.documento.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Controle de Acesso</h1>
        <p className="text-muted-foreground">Gerencie o acesso de visitantes ao condomínio.</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar visitantes ou autorizações..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              <span>Nova Autorização</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nova Autorização de Acesso</DialogTitle>
              <DialogDescription>Preencha os dados para autorizar a entrada de um visitante.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="nome">Nome do Visitante</Label>
                <Input id="nome" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="documento">Documento</Label>
                <Input id="documento" placeholder="RG ou CPF" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="dataInicio">Data Início</Label>
                  <Input id="dataInicio" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dataFim">Data Fim</Label>
                  <Input id="dataFim" type="date" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tipo">Tipo de Visita</Label>
                <select id="tipo" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1">
                  <option value="visita">Visita</option>
                  <option value="prestador">Prestador de Serviço</option>
                  <option value="entrega">Entrega</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="observacoes">Observações</Label>
                <Input id="observacoes" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Autorizar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="visitantes" className="space-y-4">
        <TabsList>
          <TabsTrigger value="visitantes" className="flex items-center gap-2">
            <UserCheck className="h-4 w-4" />
            <span>Visitantes</span>
          </TabsTrigger>
          <TabsTrigger value="autorizacoes" className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>Autorizações</span>
          </TabsTrigger>
          <TabsTrigger value="registros" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Registros</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="visitantes">
          <Card>
            <CardHeader>
              <CardTitle>Visitantes Recentes</CardTitle>
              <CardDescription>Registro de visitantes que entraram no condomínio</CardDescription>
            </CardHeader>
            <CardContent>
              {filteredVisitantes.length > 0 ? (
                <div className="space-y-4">
                  {filteredVisitantes.map((visitante) => (
                    <div
                      key={visitante.id}
                      className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg"
                    >
                      <div>
                        <h3 className="font-medium">{visitante.nome}</h3>
                        <p className="text-sm text-muted-foreground">Documento: {visitante.documento}</p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{visitante.dataEntrada}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>Entrada: {visitante.horaEntrada}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>Saída: {visitante.horaSaida}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mt-4 md:mt-0">
                        {visitante.autorizado ? (
                          <div className="flex items-center gap-1 text-green-500">
                            <CheckCircle className="h-4 w-4" />
                            <span className="font-medium">Autorizado</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-red-500">
                            <XCircle className="h-4 w-4" />
                            <span className="font-medium">Não Autorizado</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Nenhum visitante encontrado.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="autorizacoes">
          <Card>
            <CardHeader>
              <CardTitle>Autorizações de Acesso</CardTitle>
              <CardDescription>Autorizações para entrada de visitantes</CardDescription>
            </CardHeader>
            <CardContent>
              {filteredAutorizacoes.length > 0 ? (
                <div className="space-y-4">
                  {filteredAutorizacoes.map((autorizacao) => (
                    <div
                      key={autorizacao.id}
                      className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg"
                    >
                      <div>
                        <h3 className="font-medium">{autorizacao.nome}</h3>
                        <p className="text-sm text-muted-foreground">Documento: {autorizacao.documento}</p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>De: {autorizacao.dataInicio}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>Até: {autorizacao.dataFim}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <UserCheck className="h-4 w-4 text-muted-foreground" />
                            <span>Tipo: {autorizacao.tipo}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-4 md:mt-0">
                        {autorizacao.status === "Aprovada" ? (
                          <div className="flex items-center gap-1 text-green-500">
                            <CheckCircle className="h-4 w-4" />
                            <span className="font-medium">Aprovada</span>
                          </div>
                        ) : autorizacao.status === "Pendente" ? (
                          <div className="flex items-center gap-1 text-amber-500">
                            <Clock className="h-4 w-4" />
                            <span className="font-medium">Pendente</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-red-500">
                            <XCircle className="h-4 w-4" />
                            <span className="font-medium">Recusada</span>
                          </div>
                        )}

                        <Button variant="outline" size="sm">
                          Detalhes
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Nenhuma autorização encontrada.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="registros">
          <Card>
            <CardHeader>
              <CardTitle>Registros de Acesso</CardTitle>
              <CardDescription>Histórico completo de entradas e saídas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">
                      Hoje
                    </Button>
                    <Button variant="outline" size="sm">
                      Esta Semana
                    </Button>
                    <Button variant="outline" size="sm">
                      Este Mês
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor="data" className="text-sm">
                      Filtrar por data:
                    </Label>
                    <Input id="data" type="date" className="w-auto" />
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-border">
                    <thead className="bg-muted">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                        >
                          Nome
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                        >
                          Tipo
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                        >
                          Data
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                        >
                          Entrada
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                        >
                          Saída
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-background divide-y divide-border">
                      {visitantes.map((visitante) => (
                        <tr key={visitante.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium">{visitante.nome}</div>
                            <div className="text-xs text-muted-foreground">{visitante.documento}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                              Visitante
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{visitante.dataEntrada}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{visitante.horaEntrada}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{visitante.horaSaida}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">Mostrando 1-3 de 3 registros</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Anterior
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      Próximo
                    </Button>
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

