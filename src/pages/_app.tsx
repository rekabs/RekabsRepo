import '../styles/globals.css'
import { AppProps } from 'next/app'
import Layout from "../../components/Layout.js"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
