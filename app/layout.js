import './globals.css'
import { Inter } from 'next/font/google'
import Header from './ui/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GGym',
  description: 'La aplicación para la fácil gestión de tu Gym',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
