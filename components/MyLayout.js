import Header from './Header'
import Footer from './Footer'
import '../styles/index.css'
import ReactGA from 'react-ga';
import Head from 'next/head'
export default function Layout(props) {
  return (
    <div className="bg-noobblue-100 text-noobdark-500">
      <Head>
        <title>Nooblify - A Collection of Mini Tech and Design Projects</title>
        <script type="text/javascript" src="/js/crispchat.js"></script>
      </Head>
      <Header />
      <div className="min-h-screen">
      {props.children}
      </div>
      <Footer />
    </div>
  )
}