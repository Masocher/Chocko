// components
import Layout from "./../components/layout"

// redux
import store from "../redux/store"
import { Provider } from "react-redux"

// styles
import './../../public/styles/main.css'

// react-toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer toastStyle={{ color: "#000" }} />
      </Layout>
    </Provider>
  )
}

export default MyApp