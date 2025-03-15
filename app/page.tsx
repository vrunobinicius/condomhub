import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, MessageSquare, Calendar, FileText, AlertTriangle, UserCheck } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const destaques = [
    {
      id: 1,
      titulo: "Pagamento de condomínio com 5% de desconto",
      categoria: "Pagamentos",
      imagem: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      titulo: "Nova área de lazer disponível para reservas",
      categoria: "Reservas",
      imagem: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      titulo: "Comunicado importante sobre manutenção",
      categoria: "Comunicados",
      imagem: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      titulo: "Atualização do regulamento interno",
      categoria: "Documentos",
      imagem: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      titulo: "Novo sistema de controle de acesso",
      categoria: "Acesso",
      imagem: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      titulo: "Registro de ocorrências agora disponível online",
      categoria: "Ocorrências",
      imagem: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 7,
      titulo: "Assembleia geral marcada para o próximo mês",
      categoria: "Comunicados",
      imagem: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 8,
      titulo: "Novo sistema de chat entre moradores",
      categoria: "Comunicação",
      imagem: "/placeholder.svg?height=200&width=300",
    },
  ]

  const features = [
    {
      title: "Gestão de Pagamentos",
      description: "Visualize boletos, histórico de pagamentos e gere segundas vias.",
      icon: CreditCard,
      href: "/pagamentos",
    },
    {
      title: "Comunicação",
      description: "Chat em tempo real com síndico, portaria e outros moradores.",
      icon: MessageSquare,
      href: "/comunicacao",
    },
    {
      title: "Reservas",
      description: "Reserve áreas comuns como salão de festas e churrasqueira.",
      icon: Calendar,
      href: "/reservas",
    },
    {
      title: "Documentação",
      description: "Acesse atas, regulamentos e outros documentos importantes.",
      icon: FileText,
      href: "/documentos",
    },
    {
      title: "Ocorrências",
      description: "Registre e acompanhe ocorrências no condomínio.",
      icon: AlertTriangle,
      href: "/ocorrencias",
    },
    {
      title: "Controle de Acesso",
      description: "Gerencie visitantes e autorizações de entrada.",
      icon: UserCheck,
      href: "/acesso",
    },
  ]

  return (
    <div className="wrapper">
      <Header />
      <div className="container py-8">
        <div className="frontListingWrapper sectionWrapper latestThumbDesign">
          <div className="sectionWrapper mb-8">
            <div className="sectionTitle trendingPillsTitle">
              <h1 className="text-2xl font-bold">Destaques do CondomHub</h1>
            </div>
          </div>

          <Tabs defaultValue="todos" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="pagamentos">Pagamentos</TabsTrigger>
              <TabsTrigger value="comunicados">Comunicados</TabsTrigger>
              <TabsTrigger value="reservas">Reservas</TabsTrigger>
            </TabsList>

            <TabsContent value="todos">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {destaques.map((destaque) => (
                  <Card key={destaque.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative">
                      <img
                        src={destaque.imagem || "/placeholder.svg"}
                        alt={destaque.titulo}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                        {destaque.categoria}
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">{destaque.titulo}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pagamentos">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {destaques
                  .filter((d) => d.categoria === "Pagamentos")
                  .map((destaque) => (
                    <Card key={destaque.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video relative">
                        <img
                          src={destaque.imagem || "/placeholder.svg"}
                          alt={destaque.titulo}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                          {destaque.categoria}
                        </div>
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">{destaque.titulo}</CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="comunicados">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {destaques
                  .filter((d) => d.categoria === "Comunicados")
                  .map((destaque) => (
                    <Card key={destaque.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video relative">
                        <img
                          src={destaque.imagem || "/placeholder.svg"}
                          alt={destaque.titulo}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                          {destaque.categoria}
                        </div>
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">{destaque.titulo}</CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="reservas">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {destaques
                  .filter((d) => d.categoria === "Reservas")
                  .map((destaque) => (
                    <Card key={destaque.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video relative">
                        <img
                          src={destaque.imagem || "/placeholder.svg"}
                          alt={destaque.titulo}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                          {destaque.categoria}
                        </div>
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">{destaque.titulo}</CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <section className="my-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Funcionalidades do CondomHub</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <feature.icon className="h-6 w-6 text-primary" />
                      <CardTitle>{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={feature.href}>Acessar</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="reset"></div>
      <Footer />
    </div>
  )
}

