import Head from 'next/head';
import 'normalize.css'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
import { SectionProvider } from '../contexts/SectionContext';

const theme = {
	colors: {
		fnWhite: '#FFF',
		fnOrange: '#FF8000',
		fnGrayLighter: '#D3D3D3',
		fnGrayLight: '#333333',
		fnGrayDarker: '#232323',
	},
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<SectionProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Head>
					<title>O Pirulla PRECISA da sua ajuda! | Canal do Pirulla</title>
					<meta name="description" content="Mais do que nunca, o Pirulla precisa da sua ajuda!" />
					<meta name="robots" content="index, follow" />
					<meta name="author" content="Mages.dev, contato@mages.dev" />
				</Head>
				<Component {...pageProps} />
			</ThemeProvider>
		</SectionProvider>
  );
}

export default MyApp;
