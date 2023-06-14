import type { AppProps } from 'next/app'

import localFont from 'next/font/local'

const quicksand = localFont({ src: '../assets/fonts/QUICKSAND/Quicksand-Regular.ttf' })

import '../../public/global.css';
import { CartProvider } from '@/context/cart';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={quicksand.className}>
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    </main>
  )
}
