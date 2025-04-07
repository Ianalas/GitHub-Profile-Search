import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Home } from "./components/Home"
import { UserQueryProvider } from "./context/user-query-context"

function App() {


  return (
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />

    <UserQueryProvider>
      <Home />
    </UserQueryProvider>

   </ThemeProvider>
  )
}

export default App
