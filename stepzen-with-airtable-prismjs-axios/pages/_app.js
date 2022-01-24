import '../styles/styles.css'
import '../styles/code.css'

import { UserProvider } from '@auth0/nextjs-auth0'

function App({ Component, pageProps }) {
  return (
    <UserProvider>
      {' '}
      <Component {...pageProps} />{' '}
    </UserProvider>
  )
}

export default App
