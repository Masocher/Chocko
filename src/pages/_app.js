// components
import Layout from "./../components/layout"

// redux
import store from "../redux/store"
import { Provider } from "react-redux"

// styles
import './../../public/styles/main.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp