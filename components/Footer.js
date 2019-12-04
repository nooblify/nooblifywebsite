import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faFire } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
    <div>
      <div className="block text-center mx-auto pb-10">
        <p className="text-noobdark-300 font-light font-heading">Made with <i className="text-noobpink-500"><FontAwesomeIcon icon={faHeart} /> and <FontAwesomeIcon icon={faFire} /></i> by <a className="hover:text-gray-900 text-noobpink-500 font-bold hover:underline" href="https://github.com/trannguyenhb">Tran Nguyen</a></p>
    </div>
    </div>
  );
  
  export default Footer;