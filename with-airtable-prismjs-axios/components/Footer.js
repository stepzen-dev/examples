import TwitterIcon from '../public/images/social/twitter.svg'
import GitHubIcon from '../public/images/social/github.svg'
import DiscordIcon from '../public/images/social/discord.svg'
import RSSIcon from '../public/images/social/rss.svg'

import NinjaIcon from '../public/images/icons/ninja-alt.svg'

import { useUser } from '@auth0/nextjs-auth0'

export default function Footer() {
  const { user } = useUser()

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <a href="/" className="site-footer-logo">
            <img src="/images/logo-white.svg" alt="StepZen" />
          </a>
          <ul className="primary-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/developers/">Developers</a>
            </li>
            <li>
              <a href="/docs">Docs</a>
            </li>
            <li>
              <a href="/blog/">Blog</a>
            </li>
            <li>
              <a href="/about/">About</a>
            </li>
            <li>
              <a href="/stories/">Dev Stories</a>
            </li>
            <li>
              <a href="/press/">Press</a>
            </li>
          </ul>
          {!user && (
            <ul className="user-nav">
              <li>
                <a href="/signup/" className="button color11">
                  <span>Sign Up</span>
                </a>
              </li>
              <li>
                <a href="/api/auth/login" className="button secondary color12">
                  <span>Log In</span>
                </a>
              </li>
            </ul>
          )}
          {user && (
            <ul className="user-nav">
              <li>
                <a href="/account/" className="button color11">
                  <span>My Account</span>
                </a>
              </li>
              <li>
                <a href="/api/auth/logout" className="button secondary color12">
                  <span>Log Out</span>
                </a>
              </li>
            </ul>
          )}

          <ul className="social-nav">
            <li>
              <a
                href="https://discord.gg/9k2VdPn2FR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on Discord"
              >
                <DiscordIcon className="icon medium discord" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/steprz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="StepZen on GitHub"
              >
                <GitHubIcon className="icon medium" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/stepzen_dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on Twitter"
              >
                <TwitterIcon className="icon medium" />
              </a>
            </li>
            <li>
              <a
                href="/rss/feed.xml"
                target="_blank"
                aria-label="Follow via RSS"
              >
                <RSSIcon className="icon medium" />
              </a>
            </li>
          </ul>

          <div className="site-footer-promo">
            <a
              href="/stickers"
              className="button secondary color12 stickers-cta"
            >
              <span>
                <NinjaIcon className="icon" />
                Get Stickers!
              </span>
            </a>
          </div>

          <ul className="aux-nav">
            <li>
              <a href="/privacy">Privacy</a>
            </li>
            <li>
              <a href="/cookies">Cookies</a>
            </li>
          </ul>

          <small className="site-footer-legal">
            Copyright &copy; 2021 StepZen, Inc.
          </small>
        </div>
      </footer>
      <script
        charSet="utf-8"
        type="text/javascript"
        src="//js.hsforms.net/forms/shell.js"
      ></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>
    </>
  )
}
