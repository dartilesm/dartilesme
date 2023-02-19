import Head from 'next/head';
import App from '../components/App';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { HashRouterProvider } from '../context/hashRouter';

const lightTheme = createTheme({
    type: 'light',
    theme: {}
})

const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {
            background: '#001220',
            textPrimary: '#d0d0d0'
        },
        fonts: {
            spaceGrotesk: "'Space Grotesk', sans-serif"
        },
        sizes: {
            small: '1040px',
            medium: '1200px'
        }
    }
})

export default function Home() {
    return (
        <>
            <Head>
                <title>Diego Artiles - Frontend Developer</title>
                <meta name="title" content="Diego Artiles - Frontend Developer" />
                <meta name="description" content="Soy desarrollador frontend con más de 5 años de experiencia. Me considero una persona proactiva y siempre en busca de crear cosas nuevas." />


                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://dartiles.me/" />
                <meta property="og:title" content="Diego Artiles - Frontend Developer" />
                <meta property="og:description" content="Soy desarrollador frontend con más de 5 años de experiencia. Me considero una persona proactiva y siempre en busca de crear cosas nuevas." />
                <meta property="og:image" content="https://dartiles.me/me-2.webp" />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://dartiles.me/" />
                <meta property="twitter:title" content="Diego Artiles - Frontend Developer" />
                <meta property="twitter:description" content="Soy desarrollador frontend con más de 5 años de experiencia. Me considero una persona proactiva y siempre en busca de crear cosas nuevas." />
                <meta property="twitter:image" content="https://dartiles.me/me-2.webp" />
                <meta charset="utf-8" />
                <link rel="icon" href="/logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />

                <link rel="apple-touch-icon" href="/logo2.png" />

                <link rel="manifest" href="/manifest.json" />
            </Head>

            <main>
                <NextThemesProvider
                    defaultTheme="dark"
                    attribute="class"
                    value={{
                        light: lightTheme.className,
                        dark: darkTheme.className
                    }}
                >
                    <NextUIProvider theme={darkTheme}>
                        <HashRouterProvider>
                            <App />
                        </HashRouterProvider>
                    </NextUIProvider>
                </NextThemesProvider>
            </main>
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: (await import(`../translations/${locale}.json`)).default
        }
    };
}
