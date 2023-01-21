import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className='sticky top-0 bg-white z-50 shadow-sm'>
        <Navbar />
      </div>
      <Component {...pageProps} />

    </>
  )
}
