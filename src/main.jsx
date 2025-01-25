import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './style/globalStyle.js'
import Home from './pages/Home.jsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './style/theme.js'
import '@fontsource/poppins/400.css'; // Importa a versão regular (400)
import '@fontsource/poppins/600.css'; // Importa a versão semibold (600)
import '@fontsource/poppins/700.css'; // Importa a versão bold (700)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Home/>
      <GlobalStyle/>
    </ThemeProvider>
  </StrictMode>,
)
