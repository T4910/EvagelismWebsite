// import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './component/navbar'
import Footer from './component/footer'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Landmark University Evangelism Group',
  description: '...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
