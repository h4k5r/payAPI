import '../styles/globals.css'
import type {AppProps} from 'next/app'
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
    </>
}

export default MyApp
