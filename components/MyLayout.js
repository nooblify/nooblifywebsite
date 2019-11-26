import Header from './Header'
import Footer from './Footer'
import '../styles/index.css'


export default function Layout(props) {
  return (
    <div className="bg-noobblue-100">
      <Header />
      <div className="min-h-screen">
      {props.children}
      </div>
      <Footer />
    </div>
  )
}