import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'БелАвто Центр | Автохаус в Минске',
  description: 'БелАвто Центр - автохаус в Минске. Поставьте свой автомобиль на комиссию или приобретите качественный автомобиль. Честные цены, прозрачные сделки, полное юридическое сопровождение.',
  keywords: 'автохаус минск, поставить авто на комиссию минск, купить автомобиль минск, продать авто минск, беларусь автомобили, автоцентр беларусь, комиссия авто',
  authors: [{ name: 'БелАвто Центр' }],
  creator: 'БелАвто Центр',
  publisher: 'БелАвто Центр',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'ru_BY',
    url: 'https://belauto.vercel.app',
    siteName: 'БелАвто Центр',
    title: 'БелАвто Центр | Автохаус в Минске',
    description: 'Автохаус в Минске. Поставьте авто на комиссию или приобретите качественный автомобиль. Честные цены, прозрачные сделки.',
    images: [
      {
        url: '/images/hero-car.jpg',
        width: 1200,
        height: 630,
        alt: 'БелАвто Центр - автосалон в Минске',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'БелАвто Центр | Продажа и покупка автомобилей в Минске',
    description: 'Надежный автосалон в Минске. Покупка и продажа качественных автомобилей с гарантией.',
    images: ['/images/hero-car.jpg'],
  },
  alternates: {
    canonical: 'https://belauto.vercel.app',
  },
  category: 'automotive',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="BY-HM" />
        <meta name="geo.placename" content="Минск" />
        <meta name="geo.position" content="53.9045;27.5615" />
        <meta name="ICBM" content="53.9045, 27.5615" />
      </head>
      <body>{children}</body>
    </html>
  )
}
