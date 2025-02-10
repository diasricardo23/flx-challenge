import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Next.js Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}