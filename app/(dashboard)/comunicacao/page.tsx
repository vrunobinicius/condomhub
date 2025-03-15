import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Send, Bell, Users, User } from "lucide-react"

export default function ComunicacaoPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Comunicação</h1>
        <p className="text-muted-foreground">Comunique-se com o síndico, portaria e outros moradores.</p>
      </div>

      <Tabs defaultValue="mensagens" className="space-y-4">
        <TabsList>
          <TabsTrigger value="mensagens" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>Mensagens</span>
          </TabsTrigger>
          <TabsTrigger value="comunicados" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span>Comunicados</span>
          </TabsTrigger>
          <TabsTrigger value="contatos" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Contatos</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mensagens">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle>Chat</CardTitle>
              <CardDescription>Selecione um contato para iniciar uma conversa</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex p-0">
              <div className="w-1/3 border-r h-full overflow-y-auto">
                <div className="p-4">
                  <Input placeholder="Buscar contatos..." className="mb-4" />
                  <div className="space-y-2">
                    {[
                      {
                        id: 1,
                        name: "Síndico",
                        avatar: "/placeholder.svg?height=40&width=40",
                        unread: 2,
                        online: true,
                        lastMessage: "Bom dia! Podemos conversar sobre...",
                      },
                      {
                        id: 2,
                        name: "Portaria",
                        avatar: "/placeholder.svg?height=40&width=40",
                        unread: 0,
                        online: true,
                        lastMessage: "Sua encomenda chegou.",
                      },
                      {
                        id: 3,
                        name: "Maria (Apto 102)",
                        avatar: "/placeholder.svg?height=40&width=40",
                        unread: 0,
                        online: false,
                        lastMessage: "Obrigada pelo aviso!",
                      },
                      {
                        id: 4,
                        name: "Carlos (Apto 305)",
                        avatar: "/placeholder.svg?height=40&width=40",
                        unread: 1,
                        online: false,
                        lastMessage: "Vamos marcar a reunião para...",
                      },
                    ].map((contact) => (
                      <div
                        key={contact.id}
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-accent cursor-pointer"
                      >
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={contact.avatar} alt={contact.name} />
                            <AvatarFallback>{contact.name[0]}</AvatarFallback>
                          </Avatar>
                          {contact.online && (
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <p className="font-medium truncate">{contact.name}</p>
                            {contact.unread > 0 && (
                              <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {contact.unread}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-2/3 flex flex-col h-full">
                <div className="p-4 border-b flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Síndico" />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Síndico</p>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                </div>
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-accent rounded-lg p-3 max-w-[80%]">
                      <p>Bom dia! Podemos conversar sobre a próxima assembleia?</p>
                      <p className="text-xs text-muted-foreground mt-1">09:30</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-accent rounded-lg p-3 max-w-[80%]">
                      <p>Precisamos definir a pauta e a data.</p>
                      <p className="text-xs text-muted-foreground mt-1">09:31</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[80%]">
                      <p>Bom dia! Claro, podemos sim.</p>
                      <p className="text-xs text-primary-foreground/70 mt-1">09:45</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input placeholder="Digite sua mensagem..." className="flex-1" />
                    <Button size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comunicados">
          <Card>
            <CardHeader>
              <CardTitle>Comunicados Oficiais</CardTitle>
              <CardDescription>Comunicados enviados pelo síndico e administração</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  id: 1,
                  title: "Manutenção na Piscina",
                  date: "15/01/2025",
                  content:
                    "Informamos que a piscina ficará fechada nos dias 20 a 25 de janeiro para manutenção e limpeza. Pedimos a compreensão de todos.",
                  author: "Síndico",
                },
                {
                  id: 2,
                  title: "Assembleia Geral Ordinária",
                  date: "10/01/2025",
                  content:
                    "Convocamos todos os moradores para a Assembleia Geral Ordinária que será realizada no dia 05/02/2025 às 19h no salão de festas.",
                  author: "Administração",
                },
                {
                  id: 3,
                  title: "Novo Sistema de Segurança",
                  date: "05/01/2025",
                  content:
                    "Informamos que a partir do dia 01/02/2025 estará em funcionamento o novo sistema de segurança com reconhecimento facial na portaria.",
                  author: "Síndico",
                },
              ].map((comunicado) => (
                <div key={comunicado.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{comunicado.title}</h3>
                    <div className="text-sm text-muted-foreground">{comunicado.date}</div>
                  </div>
                  <p className="mb-4">{comunicado.content}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{comunicado.author}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contatos">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Contatos</CardTitle>
              <CardDescription>Contatos do condomínio e moradores</CardDescription>
            </CardHeader>
            <CardContent>
              <Input placeholder="Buscar contatos..." className="mb-4" />
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Administração</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        id: 1,
                        name: "Síndico - Roberto",
                        avatar: "/placeholder.svg?height=40&width=40",
                        role: "Síndico",
                        phone: "(11) 99999-8888",
                      },
                      {
                        id: 2,
                        name: "Portaria",
                        avatar: "/placeholder.svg?height=40&width=40",
                        role: "Portaria",
                        phone: "(11) 3333-4444",
                      },
                      {
                        id: 3,
                        name: "Administradora",
                        avatar: "/placeholder.svg?height=40&width=40",
                        role: "Administração",
                        phone: "(11) 2222-3333",
                      },
                    ].map((contact) => (
                      <div key={contact.id} className="flex items-center gap-3 p-3 border rounded-md">
                        <Avatar>
                          <AvatarImage src={contact.avatar} alt={contact.name} />
                          <AvatarFallback>{contact.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{contact.name}</p>
                          <p className="text-sm text-muted-foreground">{contact.role}</p>
                          <p className="text-sm">{contact.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Moradores</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        id: 4,
                        name: "Maria Silva",
                        avatar: "/placeholder.svg?height=40&width=40",
                        apt: "Apto 102",
                        phone: "(11) 98765-4321",
                      },
                      {
                        id: 5,
                        name: "Carlos Santos",
                        avatar: "/placeholder.svg?height=40&width=40",
                        apt: "Apto 305",
                        phone: "(11) 91234-5678",
                      },
                      {
                        id: 6,
                        name: "Ana Oliveira",
                        avatar: "/placeholder.svg?height=40&width=40",
                        apt: "Apto 201",
                        phone: "(11) 99876-5432",
                      },
                      {
                        id: 7,
                        name: "Pedro Costa",
                        avatar: "/placeholder.svg?height=40&width=40",
                        apt: "Apto 404",
                        phone: "(11) 95555-6666",
                      },
                    ].map((contact) => (
                      <div key={contact.id} className="flex items-center gap-3 p-3 border rounded-md">
                        <Avatar>
                          <AvatarImage src={contact.avatar} alt={contact.name} />
                          <AvatarFallback>{contact.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{contact.name}</p>
                          <p className="text-sm text-muted-foreground">{contact.apt}</p>
                          <p className="text-sm">{contact.phone}</p>
                        </div>
                      </div>
                    ))}
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

