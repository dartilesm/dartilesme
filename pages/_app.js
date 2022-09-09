import './index.css'
import PlausibleProvider from 'next-plausible'

function MyApp({ Component, pageProps }) {
    return <PlausibleProvider domain='dartiles.dev'>
        <Component {...pageProps} />
    </PlausibleProvider>
}

export default MyApp
