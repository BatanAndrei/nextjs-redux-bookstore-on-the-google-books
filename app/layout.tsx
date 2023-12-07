'use client'


import type { Metadata } from 'next';
import Head from "next/head";
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Theheader from '@/components/Theheader/Theheader';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';


export const montserrat = Montserrat({ subsets: ['latin'] })
export const openSans = Open_Sans({ subsets: ['latin'] })


export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <>
            <Head>
                <title>Web Studio</title>
                <meta name="description" content="Project Bookshop Next JS TS" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Batan Andrei" />
                <title>Bookshop Next JS TS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <html lang="en">
                <Provider store={store}>
                    <body>
                        <Theheader />
                        <main className={montserrat.className}>{children}</main>
                    </body>
                </Provider>
            </html>
        </>
    )
}
