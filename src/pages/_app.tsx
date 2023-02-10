import '../styles/globals.css'
import { AppProps } from 'next/app'
import Layout from "../../components/Layout.js"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-slate-200'>
          <Layout>
          <Component {...pageProps} />
          </Layout>    
    </div>

  )
}

export default MyApp
