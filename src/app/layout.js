import Footer from '@/components/Footer'
import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'RUL GMBH',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
      <main>
        {children}
      </main>
      <Footer />
      </body>
    </html>
  )
}
