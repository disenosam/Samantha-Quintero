import Link from "next/link"
import { ArrowRight, Instagram, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            SAMANELI
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#proyectos" className="text-sm font-medium hover:text-primary transition-colors">
              Proyectos
            </Link>
            <Link href="/acerca" className="text-sm font-medium hover:text-primary transition-colors">
              Acerca de
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Menú</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Samantha Quintero
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Samaneli | Diseño gráfico con propósito y pasión. Transformando ideas en experiencias visuales
                    impactantes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/#proyectos">
                      Ver proyectos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/acerca">Conoce más</Link>
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 opacity-20 blur-3xl"></div>
                <img
                  src="/placeholder.svg?height=550&width=450"
                  width={550}
                  height={450}
                  alt="Diseño creativo"
                  className="relative mx-auto aspect-[4/5] overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="proyectos" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Portafolio</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mis Proyectos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explora mi trabajo en diferentes áreas del diseño gráfico
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Servicios</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Soluciones creativas para tus necesidades de diseño
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Branding & Identidad</h3>
                      <p className="text-muted-foreground">
                        Creación de identidades visuales memorables que conectan con tu audiencia.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Diseño Editorial</h3>
                      <p className="text-muted-foreground">
                        Publicaciones impresas y digitales con diseños atractivos y funcionales.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Publicidad & Marketing</h3>
                      <p className="text-muted-foreground">
                        Campañas visuales que capturan la atención y comunican tu mensaje.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Diseño Web & UI/UX</h3>
                      <p className="text-muted-foreground">
                        Interfaces digitales intuitivas y estéticamente atractivas.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Modelado 3D</h3>
                      <p className="text-muted-foreground">
                        Creación de visualizaciones tridimensionales para diversos proyectos.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Ilustración</h3>
                      <p className="text-muted-foreground">
                        Ilustraciones personalizadas para complementar tus proyectos.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-3xl space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contacto</h2>
              <p className="text-muted-foreground md:text-xl">Para consultas y colaboraciones, escríbeme a:</p>
              <div className="bg-background rounded-lg p-6 inline-block mx-auto">
                <a
                  href="mailto:thedisenoclub@gmail.com"
                  className="text-xl md:text-2xl font-medium hover:text-primary transition-colors"
                >
                  thedisenoclub@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Samantha Quintero | Samaneli. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:thedisenoclub@gmail.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
