import { Button } from "@/components/ui/button"
import { Brush, Code, Lightbulb, Monitor, Palette, Shapes } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Sobre mí</h1>
          <p className="text-xl text-muted-foreground">
            Diseñadora gráfica apasionada por crear experiencias visuales impactantes
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <img
              src="/Samaneli.jpeg?height=500&width=400"
              alt="Foto de perfil"
              width={400}
              height={500}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="space-y-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold">Hola, soy Samantha</h2>
            <p className="text-muted-foreground">
              Licenciada en gestión de la comunicación digital (Diseño Gráfico), también conocida como Samaneli, cuento con 2 años de experiencia, he trabajado con
              marcas y pequeños negocios locales para manejar sus redes sociales, crear contenido y soluciones visuales que conectan con las audiencias y
              cumplen objetivos de negocio.
            </p>
            <p className="text-muted-foreground">
              Mi enfoque combina creatividad, planificación, estrategia y atención al detalle para desarrollar diseños que no solo son
              estéticamente atractivos, sino también funcionales y efectivos. Así mismo dar especial atención al cliente.
            </p>
            <div className="flex gap-4 mt-4">
              <Button asChild>
                <a href="mailto:thedisenoclub@gmail.com">Enviar email</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/samantha q-cv.pdf" download>
                  Descargar CV
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Mis habilidades</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Brush className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold">Diseño Gráfico</h3>
              <p className="text-sm text-muted-foreground">Adobe Creative Suite, Figma, Sketch</p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Palette className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold">Branding</h3>
              <p className="text-sm text-muted-foreground">Identidad visual, guías de estilo, estrategia de marca</p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Monitor className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold">Diseño UI/UX</h3>
              <p className="text-sm text-muted-foreground">Wireframing, prototipos, experiencia de usuario</p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Shapes className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold">Modelado 3D</h3>
              <p className="text-sm text-muted-foreground">Blender, Cinema 4D, visualización de productos</p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold">Dirección Creativa</h3>
              <p className="text-sm text-muted-foreground">Conceptualización, dirección de arte, storytelling</p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold">Desarrollo Web</h3>
              <p className="text-sm text-muted-foreground">HTML/CSS, WordPress, nociones de JavaScript</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Experiencia</h2>
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Diseñadora Gráfica Y Gestión De Redes</h3>
                <span className="text-sm text-muted-foreground">2025 - Presente</span>
              </div>
              <p className="text-muted-foreground">Corinthia Petite</p>
              <p className="text-sm">
                Creación de piezas publicitarias, creación de contenido, community manager, administración de CMS, 
                estrategias de redacción y comunicación digital: Mailing, redes, sitio web, etc.
              </p>
               
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Diseñadora De Editorial</h3>
                <span className="text-sm text-muted-foreground">2018 - 2022</span>
              </div>
              <p className="text-muted-foreground">Agencia Creativa XYZ</p>
              <p className="text-sm">
                Desarrollo de identidades de marca, campañas publicitarias y materiales de marketing para clientes de
                diversos sectores.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Diseñadora Gráfica Junior</h3>
                <span className="text-sm text-muted-foreground">2023 - 2024</span>
              </div>
              <p className="text-muted-foreground">Editorial Moderna</p>
              <p className="text-sm">
                Diseño de publicaciones impresas y digitales, maquetación de libros y revistas, creación de material
                promocional.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Educación</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Licenciatura en Diseño Gráfico Digital</h3>
                <span className="text-sm text-muted-foreground">2021 - 2024</span>
              </div>
              <p className="text-muted-foreground">Universidad Autónoma de Durango</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Bootcamp Diseño UX UI</h3>
                <span className="text-sm text-muted-foreground">2025</span>
              </div>
              <p className="text-muted-foreground">Google Coursera</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button asChild size="lg">
            <a href="mailto:thedisenoclub@gmail.com">Trabajemos juntos</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
