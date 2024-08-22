import './index.css'
import PlausibleProvider from 'next-plausible'
import { NextIntlProvider } from 'next-intl';

function MyApp({ Component, pageProps }) {
    return <PlausibleProvider domain='dartiles.me'>
        <NextIntlProvider messages={pageProps.messages}>
            <Component {...pageProps} />
        </NextIntlProvider>
    </PlausibleProvider>
}

export default MyApp
