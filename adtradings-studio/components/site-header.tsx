'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLocale } from '@/lib/i18n/language-provider'
import { locales, localeLabels } from '@/lib/i18n/dictionaries'

export function SiteHeader() {
  const pathname = usePathname()
  const { locale, setLocale, t } = useLocale()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/delivery', label: t.nav.delivery },
    { href: '/products', label: t.nav.products },
    { href: '/about', label: t.nav.about },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Keep the transparent treatment for image-led pages, but use the compact
  // navy treatment on the white contact page so its navigation remains visible.
  const solidHeader = scrolled || pathname === '/contact'

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex h-16 items-center transition-colors duration-300 ease-out md:h-20',
        solidHeader ? 'bg-primary shadow-[0_2px_16px_rgba(6,31,42,0.25)]' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        {/* Official Asia Direct Tradings crest mark. The badge carries its own
            ivory backdrop and ring, so it reads clearly whether the header is
            transparent over the hero or the solid brand bar. */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Asia Direct Tradings"
            width={44}
            height={44}
            priority
            className="size-9 shrink-0 rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.25)] md:size-11"
          />
          <span className="hidden text-base font-semibold tracking-tight text-primary-foreground sm:inline">
            Asia Direct<span className="text-highlight"> Tradings</span>
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-1 xl:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3.5 py-2 text-sm font-medium tracking-wide transition-colors',
                pathname === link.href
                  ? 'bg-accent text-accent-foreground'
                  : 'text-primary-foreground/90 hover:bg-black/25 hover:text-highlight',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3 xl:ml-2 xl:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                'hidden shrink-0 items-center gap-1.5 border border-primary-foreground/25 bg-black/25 px-2.5 py-1.5 whitespace-nowrap font-mono text-xs font-semibold tracking-wider uppercase text-primary-foreground/90 backdrop-blur-sm transition-colors outline-none hover:border-primary-foreground/40 hover:bg-black/35 hover:text-highlight data-open:border-primary-foreground/40 data-open:bg-black/35 data-open:text-highlight xl:flex',
              )}
            >
              <Globe className="size-3.5" />
              {localeLabels[locale]}
              <ChevronDown className="size-3 opacity-70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={10}
              className="min-w-36 rounded-none border border-primary-foreground/15 bg-primary/90 p-1 text-primary-foreground backdrop-blur-md"
            >
              <DropdownMenuGroup>
                {locales.map((loc) => (
                  <DropdownMenuItem
                    key={loc}
                    onClick={() => setLocale(loc)}
                    className={cn(
                      'rounded-none font-mono text-xs font-semibold tracking-wider uppercase text-primary-foreground/85 focus:bg-primary-foreground/15 focus:text-primary-foreground',
                      locale === loc && 'bg-highlight text-primary focus:bg-highlight focus:text-primary',
                    )}
                  >
                    {localeLabels[loc]}
                    {locale === loc && <Check className="ml-auto size-3.5" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            render={<Link href="/contact" />}
            size="sm"
            className="hidden shrink-0 rounded-none bg-cta text-cta-foreground shadow-[0_2px_14px_rgba(255,122,26,0.45)] hover:bg-cta/90 xl:inline-flex"
          >
            {t.nav.getInTouch}
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'inline-flex size-10 shrink-0 items-center justify-center border-2 transition-colors xl:hidden',
              scrolled
                ? 'border-primary-foreground bg-primary text-primary-foreground hover:bg-highlight hover:text-primary'
                : 'border-primary-foreground/90 bg-primary/20 text-primary-foreground backdrop-blur-sm hover:bg-highlight hover:text-primary',
            )}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="absolute inset-x-0 top-full flex flex-col gap-1 border-t border-primary-foreground/15 bg-primary px-5 pb-6 pt-2 xl:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3 py-3 text-base font-medium',
                pathname === link.href
                  ? 'bg-accent text-accent-foreground'
                  : 'text-primary-foreground/85 hover:bg-black/25 hover:text-highlight',
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-wrap items-center gap-1 border-t border-primary-foreground/15 py-3 font-mono text-xs tracking-wider uppercase">
            {locales.map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => setLocale(loc)}
                aria-pressed={locale === loc}
                className={cn(
                  'px-2 py-1 transition-colors',
                  locale === loc
                    ? 'bg-highlight font-semibold text-primary'
                    : 'border border-primary-foreground/25 text-primary-foreground/80 hover:bg-primary-foreground/15 hover:text-highlight',
                )}
              >
                {localeLabels[loc]}
              </button>
            ))}
          </div>
          <Button
            render={<Link href="/contact" />}
            className="mt-3 w-full rounded-none bg-cta text-cta-foreground shadow-[0_2px_14px_rgba(255,122,26,0.45)] hover:bg-cta/90"
          >
            {t.nav.getInTouch}
          </Button>
        </nav>
      )}
    </header>
  )
}
