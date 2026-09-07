import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delivery — Asia Direct Tradings LTD.',
  description:
    'Local commercial delivery across Metro Vancouver — frozen and chilled goods, large and oversized items, and scheduled B2B routes.',
}

export default function DeliveryLayout({ children }: { children: React.ReactNode }) {
  return children
}
