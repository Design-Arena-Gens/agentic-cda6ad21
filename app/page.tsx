import Image from "next/image";

const highlights = [
  {
    title: "Experiencia 360°",
    description:
      "Asesoría integral desde el estudio de mercado hasta la firma final, con transparencia absoluta."
  },
  {
    title: "Curaduría selecta",
    description:
      "Propiedades verificadas, fotografías profesionales y staging virtual para maximizar el atractivo."
  },
  {
    title: "Estrategia digital",
    description:
      "Campañas segmentadas en tiempo real y reportes interactivos para compradores y vendedores."
  }
];

const contact = [
  { label: "Llámanos", value: "55 3600 3600" },
  { label: "Escríbenos", value: "contacto@eje360.mx" },
  { label: "Visítanos", value: "eje360.mx" }
];

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4 text-emerald-300"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SparkIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5 text-brand-200" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3l1.6 4.8L18 9.5l-4.4 1.7L12 16l-1.6-4.8L6 9.5l4.4-1.7L12 3z"
      fill="currentColor"
      opacity="0.35"
    />
    <path
      d="M12 5.5l1 3 3.2 1.2-3.2 1.2-1 3-1-3-3.2-1.2L11 8.5l1-3z"
      fill="currentColor"
    />
  </svg>
);

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16 sm:px-12">
      <div className="relative flex w-full max-w-[1100px] flex-col items-center gap-16 md:flex-row md:items-stretch">
        <div className="absolute inset-x-10 top-16 hidden h-64 rounded-3xl bg-brand-500/20 blur-3xl md:block" />

        <aside className="relative hidden w-full max-w-[260px] flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 shadow-xl glass md:flex">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <SparkIcon />
              <span className="font-display text-brand-100 text-lg uppercase tracking-[0.3em]">
                Eje 360
              </span>
            </div>
            <p className="text-base text-white/70">
              Clientes recomendando clientes. 94% de satisfacción y procesos certificados ISO 9001.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <span className="text-xs uppercase tracking-wide text-white/50">Proyectos recientes</span>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-white">Áurea Residencial</p>
                <p className="text-xs text-white/60">CDMX · 18 unidades vendidas en 45 días</p>
              </div>
              <div>
                <p className="font-semibold text-white">Horizonte 360</p>
                <p className="text-xs text-white/60">Querétaro · Torre empresarial colocada al 92%</p>
              </div>
            </div>
          </div>
        </aside>

        <section className="relative w-full overflow-hidden rounded-[48px] bg-flyer-gradient shadow-flyer ring-1 ring-white/15">
          <div className="absolute inset-0">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-400/40 blur-3xl" />
            <div className="absolute -right-16 bottom-24 h-80 w-80 rounded-full bg-sky-400/30 blur-3xl" />
            <div className="absolute inset-[48px] rounded-[36px] border border-white/10" />
            <div className="scribble-mask absolute inset-20 bg-accent-grid opacity-60" />
          </div>

          <div className="relative grid min-h-[720px] grid-cols-1 gap-12 px-10 py-12 sm:px-14 md:grid-cols-[1.05fr_0.95fr] md:py-16">
            <header className="flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/eje360-logo.svg"
                      alt="Logo Eje 360"
                      width={82}
                      height={82}
                      className="h-14 w-14 rounded-full border border-white/20 bg-white/10 p-3"
                    />
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-white/60">Real Estate Studio</p>
                      <p className="font-display text-2xl text-white">Eje 360</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.25em] text-white/60">
                    Confianza
                  </span>
                </div>

                <div className="space-y-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-emerald-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    Compra o vende
                  </span>
                  <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl">
                    Conecta con compradores reales <br className="hidden sm:block" />
                    y vende tu inmueble hasta 2x más rápido.
                  </h1>
                  <p className="max-w-xl text-base text-white/80 sm:text-lg">
                    Diseñamos experiencias comerciales personalizadas que generan confianza inmediata.
                    Nuestro equipo integra data, storytelling y recorridos inmersivos para crear relaciones
                    únicas entre personas y espacios.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  <CheckIcon />
                  <span>Evaluación gratuita en 72h</span>
                </div>
                <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  <CheckIcon />
                  <span>Red de inversiones premium</span>
                </div>
              </div>
            </header>

            <div className="flex flex-col justify-between gap-12 rounded-[32px] border border-white/15 bg-white/5 p-8 glass">
              <div className="space-y-6">
                <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/20 bg-white/10">
                      <Image
                        src="/flyer-condo.jpg"
                        alt="Propiedad destacada Eje 360"
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">Portafolio Premium</p>
                      <p className="text-xs text-white/60">Penthouse con roof garden · Preventa</p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-5">
                  {highlights.map((item) => (
                    <li key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="font-display text-lg text-white">{item.title}</p>
                      <p className="mt-2 text-sm text-white/70">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-emerald-300/30 bg-emerald-400/15 p-6 text-white">
                <span className="text-xs uppercase tracking-[0.3em] text-emerald-100">
                  Agenda tu sesión
                </span>
                <p className="mt-3 font-display text-2xl">
                  Diagnóstico inmobiliario gratuito con nuestro equipo estratégico.
                </p>
                <div className="mt-6 grid gap-3 text-sm text-white/80 sm:grid-cols-3">
                  {contact.map((item) => (
                    <div key={item.label}>
                      <p className="text-xs uppercase tracking-wide text-white/60">{item.label}</p>
                      <p className="font-medium text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="relative hidden w-full max-w-[220px] rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 shadow-xl glass md:flex md:flex-col md:justify-between">
          <div>
            <p className="font-display text-lg text-white">360° Lab</p>
            <p className="mt-2">
              Innovamos con tours virtuales, staging digital y analítica en vivo para tu propiedad.
            </p>
          </div>
          <div className="space-y-4 text-xs uppercase tracking-[0.25em] text-white/50">
            <p>Brokerage</p>
            <p>Branding</p>
            <p>Marketing</p>
            <p>Arquitectura</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
