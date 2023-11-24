import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Theheader from '@/app/components/Theheader/Theheader';


export const montserrat = Montserrat({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Bookshop Next JS TS',
    description: 'Project Bookshop Next JS TS',
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Theheader />
                <main className={montserrat.className}>{children}</main>
            </body>
        </html>
    )
}
