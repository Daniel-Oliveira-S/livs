import './globals.css'
import type { Metadata } from 'next'
import { Inter,Roboto } from 'next/font/google'

const roboto = Roboto({ 
  weight: ['400', '500'],
  subsets: ['latin-ext'],
 })

export const metadata: Metadata = {
  title: 'LIV Capital',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
