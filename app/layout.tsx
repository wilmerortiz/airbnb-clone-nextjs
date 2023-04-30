import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from '@/app/components/navbar/Navbar'
import ClientOnly from '@/app/components/ClientOnly'
import RegisterModal from '@/app/components/modals/RegisterModal'
import RentModal from '@/app/components/modals/RentModal'
import SearchModal from '@/app/components/modals/SearchModal'

import ToasterProvider from '@/app/providers/ToasterProvider'
import LoginModal from '@/app/components/modals/LoginModal'
import getCurrentUser from '@/app/actions/getCurrentUser'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>{children}</div>
      </body>
    </html>
  )
}
