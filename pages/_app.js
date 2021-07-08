import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import Layout from '../component/layout/Layout';
import { useRouter } from 'next/dist/client/router';
import 'react-toastify/dist/ReactToastify.css';
import '../public/assets/scss/bootstrap.min.css';
import '../public/assets/scss/bootstrap-rtl.min.css';
import '../styles/globals.css'
// Import Swiper styles
import 'swiper/swiper.scss';


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  // console.log(`router`, router)
  const Layout
    = Component.Layout ? Component.Layout : Component.Layout;


  return <Provider store={store}><ToastContainer /><Layout><Component {...pageProps} /></Layout></Provider>


}

export default MyApp













// test token
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
  // if (router.pathname.startsWith("/TakhfifComponent")) {
  //   return <Layout> <Provider store={store}><ToastContainer /><Component {...pageProps} /></Provider> </Layout> 

  // }