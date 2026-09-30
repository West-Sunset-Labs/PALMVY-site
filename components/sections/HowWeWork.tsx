import { Card } from "@/components/ui/Card";
import { CtaLink } from "@/components/ui/CtaLink";
import { CONTACT_LINK } from "@/core/data/contact";

export function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Descoberta",
      description:
        "Entendemos profundamente o seu problema, público e objetivos.",
    },
    {
      number: "02",
      title: "Design",
      description: "Criamos designs refinados que resolvem problemas reais.",
    },
    {
      number: "03",
      title: "Desenvolvimento",
      description: "Código limpo, tipado e pronto para escala.",
    },
    {
      number: "04",
      title: "Entrega",
      description: "Seu produto pronto para conquistar o mundo.",
    },
  ];

  return (
    <section
      id="como-trabalhamos"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-soft-gray/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl text-cloud mb-4">
            Como trabalhamos
          </h2>
          <p className="text-lg text-muted">
            Disponíveis para projetos custom que mereçam atenção e qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <Card key={idx} className="p-6">
              <p className="font-mono text-sm text-sunset mb-3">
                {step.number}
              </p>
              <h3 className="text-lg text-cloud mb-2 font-medium">
                {step.title}
              </h3>
              <p className="text-sm text-soft-gray">{step.description}</p>
            </Card>
          ))}
        </div>

        <Card interactive className="p-8 sm:p-12">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl sm:text-3xl text-cloud mb-4">
              Vamos conversar sobre seu projeto?
            </h3>
            <p className="text-soft-gray mb-8">
              Se você tem uma ideia que merece qualidade e execução de
              primeira, vamos conversar.
            </p>
            <CtaLink
              href={CONTACT_LINK.href}
              isExternal={CONTACT_LINK.isExternal}
              variant="primary"
              size="lg"
            >
              Iniciar conversa
            </CtaLink>
          </div>
        </Card>
      </div>
    </section>
  );
}
