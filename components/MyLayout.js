import Header from './Header'
import Footer from './Footer'
import '../styles/index.css'
import ReactGA from 'react-ga';
function initializeReactGA() {
  ReactGA.initialize('UA-153866956-1');
  ReactGA.pageview('/homepage');
}
export default function Layout(props) {
  return (
    <html>
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