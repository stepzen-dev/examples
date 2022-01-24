import ReactGA from 'react-ga'
import { useEffect } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout({ children, type }) {
  useEffect(() => {
    ReactGA.initialize(process.env.GOOGLE_ANALYTICS_TRACKING_ID)
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  const pageClass = 'page ' + (type || '')

  return (
    <>
      <div id="Page" className={pageClass}>
        <Header styleHint={type} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
