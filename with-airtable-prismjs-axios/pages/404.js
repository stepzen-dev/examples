import Layout from '../components/Layout'

export default function Fourohfour() {
  return (
    <Layout>
      <div className="container mt-3 mb-4 text-center">
        <img src="/images/404.svg" alt="404" className="focal-image" />
        <h1 className="mt-2 mb-2">Oops, looks like we lost something!</h1>
        <p>
          <a href="/" className="button secondary">
            <span>Let's go home</span>
          </a>
        </p>
      </div>
    </Layout>
  )
}
