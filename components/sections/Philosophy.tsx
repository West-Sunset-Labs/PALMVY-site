import { Card } from "@/components/ui/Card";
import { philosophyPillars } from "@/core/data/products";

export function Philosophy() {
  return (
    <section
      id="filosofia"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-soft-gray/10 bg-pacific-deep"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl text-cloud mb-4">
            Como pensamos
          </h2>
          <p className="text-lg text-muted">
            Nossos princípios norteiam cada decisão, desde o design até o
            código que roda nos seus telefones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {philosophyPillars.map((pillar, idx) => (
            <Card key={idx} interactive className="p-8">
              <div className="w-8 h-1 bg-sunset mb-6" />
              <h3 className="text-xl text-cloud mb-3 font-medium">
                {pillar.title}
              </h3>
              <p className="text-soft-gray leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
