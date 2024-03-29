import '../styles/globals.css'
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/scss/argon-design-system-react.scss?v1.1.0";

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
