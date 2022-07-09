import '../styles/globals.css'
import 'highlight.js/styles/vs2015.css';
import { ThemeProvider, DefaultTheme } from 'styled-components'
// import GlobalStyle from '../components/Utils/globalstyles'
const theme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}
function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp
