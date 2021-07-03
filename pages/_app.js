import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import '../public/assets/scss/bootstrap.min.css';
import '../public/assets/scss/bootstrap-rtl.min.css';



// import '../public/assets/js/jquery.min.js';
// import '../public/assets/js/popper.min.js';
// import '../public/assets/js/bootstrap.min.js';
// import '../public/assets/js/custom.js';
// import 'swiper/swiper-bundle.css';
// import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';


import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  // const [user, setUser] = useState("");
  // const token = localStorage.getItem("token");
  // let tokenRole = localStorage.getItem("role");

  // useEffect(() => {
  //   if (token) {
  //     const decodedToken = decodeJWT(token);
  //     localStorage.setItem("role", decodedToken.payload.role);
  //     const dateNow = Date.now() / 1000;
  //     if (decodedToken.payload.exp < dateNow) {
  //       localStorage.clear();
  //       signoutService(decodedToken);
  //     } else {
  //       setUser(decodedToken.payload.unique_name);
  //     }
  //   }
  // });


  return <Provider store={store}><ToastContainer /><Component {...pageProps} /></Provider>


}

export default MyApp
