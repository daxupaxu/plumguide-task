import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { theme } from '../utils/theme';
import Footer from './Footer';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
`;

type Props = {
  children: React.ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>{title || 'Plum Guide'}</title>
    </Head>
    <Header />
    <GlobalStyle />
    {children}
    <Footer />
  </ThemeProvider>
);

export default Layout;
