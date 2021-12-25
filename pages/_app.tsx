import '../styles/globals.css'
import type {AppProps} from 'next/app'
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import {Provider} from "react-redux";
import store from "../store";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Provider store={store}>
            <NavBar/>
            <Component {...pageProps} />
            <Footer/>
        </Provider>
    </>
}

export default MyApp
