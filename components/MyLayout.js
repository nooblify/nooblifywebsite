import Header from './Header'
import Footer from './Footer'
import '../styles/index.css'
import Head from 'next/head'

export default function Layout(props) {
  return (
    <html>
      <Head>
      </Head>
      <div className="bg-noobblue-100">
        <Header />
        <div className="min-h-screen">
        {props.children}
        </div>
        <Footer />
      </div>
    </html>
  )
}