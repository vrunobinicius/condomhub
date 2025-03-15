import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CreditCard, Download, Send, Clock, CheckCircle, AlertCircle } from "lucide-react"

export default function PagamentosPage() {
  const boletosPendentes = [
    { id: 1, descricao: "Condomínio - Janeiro/2025", valor: 450.0, vencimento: "10/01/2025", status: "pendente" },
    { id: 2, descricao: "Taxa Extra - Reforma Piscina", valor: 150.0, vencimento: "15/01/2025", status: "pendente" },
  ]

  const boletosHistorico = [
    {
      id: 3,
      descricao: "Condomínio - Dezembro/2024",
      valor: 450.0,
      vencimento: "10/12/2024",
      pagamento: "08/12/2024",
      status: "pago",
    },
    {
      id: 4,
      descricao: "Condomínio - Novembro/2024",
      valor: 450.0,
      vencimento: "10/11/2024",
      pagamento: "09/11/2024",
      status: "pago",
    },
    {
      id: 5,
      descricao: "Taxa Extra - Pintura",
      valor: 200.0,
      vencimento: "15/11/2024",
      pagamento: "14/11/2024",
      status: "pago",
    },
    {
      id: 6,
      descricao: "Condomínio - Outubro/2024",
      valor: 450.0,
      vencimento: "10/10/2024",
      pagamento: "12/10/2024",
      status: "pago",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Gestão de Pagamentos</h1>
        <p className="text-muted-foreground">Visualize seus boletos pendentes e histórico de pagamentos.</p>
      </div>

      <Tabs defaultValue="pendentes" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pendentes" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Pendentes</span>
          </TabsTrigger>
          <TabsTrigger value="historico" className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>Histórico</span>
          </TabsTrigger>
          <TabsTrigger value="segunda-via" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            <span>Segunda Via</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pendentes" className="space-y-4">
          {boletosPendentes.length > 0 ? (
            boletosPendentes.map((boleto) => (
              <Card key={boleto.id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">{boleto.descricao}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Send className="h-4 w-4" />
                      <span>Email</span>
                    </Button>
                    <Button variant="default" size="sm">
                      Pagar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Valor</p>
                      <p className="text-lg font-semibold">R$ {boleto.valor.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Vencimento</p>
                      <p className="text-lg font-semibold">{boleto.vencimento}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Status</p>
                      <div className="flex items-center gap-1 text-amber-500">
                        <AlertCircle className="h-4 w-4" />
                        <span className="font-semibold">Pendente</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Sem boletos pendentes</CardTitle>
                <CardDescription>Você não possui boletos pendentes de pagamento.</CardDescription>
              </CardHeader>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="historico" className="space-y-4">
          {boletosHistorico.map((boleto) => (
            <Card key={boleto.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">{boleto.descricao}</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    <span>Recibo</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Valor</p>
                    <p className="text-lg font-semibold">R$ {boleto.valor.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Vencimento</p>
                    <p className="text-lg font-semibold">{boleto.vencimento}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Pagamento</p>
                    <p className="text-lg font-semibold">{boleto.pagamento}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <div className="flex items-center gap-1 text-green-500">
                      <CheckCircle className="h-4 w-4" />
                      <span className="font-semibold">Pago</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="segunda-via">
          <Card>
            <CardHeader>
              <CardTitle>Solicitar Segunda Via</CardTitle>
              <CardDescription>Selecione o período para gerar a segunda via do boleto.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Mês de Referência</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="01/2025">Janeiro/2025</option>
                    <option value="12/2024">Dezembro/2024</option>
                    <option value="11/2024">Novembro/2024</option>
                    <option value="10/2024">Outubro/2024</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tipo de Cobrança</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="condominio">Condomínio</option>
                    <option value="taxa-extra">Taxa Extra</option>
                    <option value="multa">Multa</option>
                  </select>
                </div>
              </div>
              <Button className="w-full">Gerar Segunda Via</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

