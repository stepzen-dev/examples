import Link from 'next/link'
import { useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0'

export default function Header(props) {
  const [showNav, setShowNav] = useState('')
  const { user, isLoading } = useUser()

  const toggleSidenav = () => {
    const className = showNav === '' ? 'nav-open' : ''
    setShowNav(className)
  }

  // If a campaign page, use bold secondary button
  let secondaryBtnClass = 'button secondary color11'
  if (props.styleHint == 'page-campaign') secondaryBtnClass = 'button color11'

  if (isLoading || !user) {
    return (
      <header className={'site-header ' + showNav} id="SiteHeader">
        <div className="container">
          <a href="" className="site-header-logo">
            <img src="/images/logo.svg" alt="StepZen" />
          </a>

          <nav className="site-nav">
            <ul className="primary-nav">
              <li>
                <Link href="">Developers</Link>
              </li>
              <li>
                <Link href="">Pricing</Link>
              </li>
              <li>
                <Link href="">Docs</Link>
              </li>
              <li>
                <Link href="">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>

            <ul className="user-nav">
              <li>
                <a href="" className="button color11">
                  <span>Sign Up</span>
                </a>
              </li>
              <li>
                <a href="" className={secondaryBtnClass}>
                  <span>Log In</span>
                </a>
              </li>
            </ul>
          </nav>

          <button data-nav-toggler onClick={toggleSidenav}>
            Toggle Nav
          </button>
        </div>
      </header>
    )
  }
  if (user) {
    return (
      <header className={'site-header ' + showNav} id="SiteHeader">
        <div className="container">
          <a href="/" className="site-header-logo">
            <img src="/images/logo.svg" alt="StepZen" />
          </a>

          <nav className="site-nav">
            <ul className="primary-nav">
              <li>
                <Link href="">Developers</Link>
              </li>
              <li>
                <Link href="">Pricing</Link>
              </li>
              <li>
                <Link href="">Docs</Link>
              </li>
              <li>
                <Link href="">Blog</Link>
              </li>
              <li>
                <Link href="">About</Link>
              </li>
            </ul>

            <ul className="user-nav">
              <li>
                <a href="/account/" className="button color11">
                  <span>My Account</span>
                </a>
              </li>
              <li>
                <a href="/api/auth/logout" className={secondaryBtnClass}>
                  <span>Log Out</span>
                </a>
              </li>
            </ul>
          </nav>

          <button data-nav-toggler onClick={toggleSidenav}>
            Toggle Nav
          </button>
        </div>
      </header>
    )
  }
}
