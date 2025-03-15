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
import { FileText, Download, Upload, Calendar, User, Search } from "lucide-react"

export default function DocumentosPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const documentos = {
    atas: [
      { id: 1, nome: "Ata da Assembleia Geral Ordinária", data: "15/12/2024", autor: "Síndico", tamanho: "1.2 MB" },
      {
        id: 2,
        nome: "Ata da Assembleia Extraordinária - Reforma",
        data: "20/10/2024",
        autor: "Síndico",
        tamanho: "850 KB",
      },
      { id: 3, nome: "Ata da Reunião do Conselho", data: "05/09/2024", autor: "Conselho", tamanho: "720 KB" },
    ],
    regulamentos: [
      {
        id: 4,
        nome: "Regulamento Interno do Condomínio",
        data: "01/01/2024",
        autor: "Administração",
        tamanho: "2.5 MB",
      },
      { id: 5, nome: "Regulamento da Piscina", data: "15/11/2023", autor: "Administração", tamanho: "500 KB" },
      { id: 6, nome: "Regulamento do Salão de Festas", data: "15/11/2023", autor: "Administração", tamanho: "450 KB" },
    ],
    contratos: [
      {
        id: 7,
        nome: "Contrato de Prestação de Serviços - Limpeza",
        data: "01/03/2024",
        autor: "Administração",
        tamanho: "1.8 MB",
      },
      {
        id: 8,
        nome: "Contrato de Manutenção - Elevadores",
        data: "10/01/2024",
        autor: "Administração",
        tamanho: "1.5 MB",
      },
      { id: 9, nome: "Contrato de Segurança", data: "05/12/2023", autor: "Administração", tamanho: "1.7 MB" },
    ],
  }

  const filteredDocumentos = (categoria: keyof typeof documentos) => {
    return documentos[categoria].filter(
      (doc) =>
        doc.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.autor.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Documentos</h1>
        <p className="text-muted-foreground">Acesse e gerencie documentos do condomínio.</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar documentos..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              <span>Upload</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload de Documento</DialogTitle>
              <DialogDescription>Faça upload de um novo documento para o sistema.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="nome">Nome do Documento</Label>
                <Input id="nome" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="categoria">Categoria</Label>
                <select
                  id="categoria"
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1"
                >
                  <option value="atas">Atas</option>
                  <option value="regulamentos">Regulamentos</option>
                  <option value="contratos">Contratos</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="arquivo">Arquivo</Label>
                <Input id="arquivo" type="file" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Enviar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="atas" className="space-y-4">
        <TabsList>
          <TabsTrigger value="atas">Atas</TabsTrigger>
          <TabsTrigger value="regulamentos">Regulamentos</TabsTrigger>
          <TabsTrigger value="contratos">Contratos</TabsTrigger>
        </TabsList>

        <TabsContent value="atas">
          <Card>
            <CardHeader>
              <CardTitle>Atas</CardTitle>
              <CardDescription>Atas de assembleias e reuniões do condomínio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredDocumentos("atas").length > 0 ? (
                  filteredDocumentos("atas").map((doc) => (
                    <div
                      key={doc.id}
                      className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg"
                    >
                      <div className="flex items-start gap-3">
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-medium">{doc.nome}</h3>
                          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{doc.data}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{doc.autor}</span>
                            </div>
                            <span>{doc.tamanho}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 md:mt-0 flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Nenhum documento encontrado.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="regulamentos">
          <Card>
            <CardHeader>
              <CardTitle>Regulamentos</CardTitle>
              <CardDescription>Regulamentos internos do condomínio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredDocumentos("regulamentos").length > 0 ? (
                  filteredDocumentos("regulamentos").map((doc) => (
                    <div
                      key={doc.id}
                      className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg"
                    >
                      <div className="flex items-start gap-3">
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-medium">{doc.nome}</h3>
                          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{doc.data}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{doc.autor}</span>
                            </div>
                            <span>{doc.tamanho}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 md:mt-0 flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Nenhum documento encontrado.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contratos">
          <Card>
            <CardHeader>
              <CardTitle>Contratos</CardTitle>
              <CardDescription>Contratos de prestação de serviços</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredDocumentos("contratos").length > 0 ? (
                  filteredDocumentos("contratos").map((doc) => (
                    <div
                      key={doc.id}
                      className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg"
                    >
                      <div className="flex items-start gap-3">
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-medium">{doc.nome}</h3>
                          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{doc.data}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{doc.autor}</span>
                            </div>
                            <span>{doc.tamanho}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 md:mt-0 flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Nenhum documento encontrado.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

