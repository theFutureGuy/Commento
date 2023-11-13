import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Toast } from '../../ @components/ui/ui/toast'
import { Toaster } from '@/components/ui/toaster'


const inter = Inter({ subsets:['latin']})

export const metadata = {
  title: 'Commento',
  description: 'A multi user commenting system with Next.js and TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={cn('bg-white text-slate-900 antialiased light',inter.className)}>
      <body className='min-h-screen pt-12 bg-slate-50 antialiased'>
        <Navbar />
        <div className= 'container max-w-7xl mx-auto h-full pt-12'>
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  )
}
