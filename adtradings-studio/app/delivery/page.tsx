'use client'

import Image from 'next/image'
import { Snowflake, Package, Truck } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { Kicker } from '@/components/ui/kicker'
import { useLocale } from '@/lib/i18n/language-provider'

const icons = [Snowflake, Package, Truck]

export default function DeliveryPage() {
  const { t } = useLocale()

  return (
    <main>
      <PageHero
        label={t.delivery.hero.kicker}
        title={t.delivery.hero.title}
        intro={t.delivery.hero.subtitle}
        image="/images/delivery.png"
        imageAlt="A delivery van on a Vancouver street at dusk"
      />

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              {t.delivery.whatWeMove.title}
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              {t.delivery.whatWeMove.subtitle}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 rounded-none border border-border bg-background md:grid-cols-3">
            {t.delivery.whatWeMove.items.map((item, i) => {
              const Icon = icons[i]
              return (
                <div
                  key={item.title}
                  className={`px-6 py-10 md:px-8 md:py-12 ${
                    i > 0 ? 'border-t border-border md:border-t-0 md:border-l' : ''
                  }`}
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-muted">
                    <Icon className="size-5 text-accent" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <Kicker className="w-fit">{t.delivery.whyChoose.kicker}</Kicker>
            <h2 className="mt-5 text-balance text-3xl leading-[1.12] font-semibold tracking-tight md:text-4xl">
              {t.delivery.whyChoose.title}
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {t.delivery.whyChoose.body}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/hero-port.png"
              alt="A container ship being loaded at the Port of Vancouver at night"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CtaBand title={t.delivery.cta.title} body={t.delivery.cta.body} cta={t.delivery.cta.button} />
    </main>
  )
}
