import Head from 'next/head'

const segmentSnippet = `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
analytics.load("${process.env.SEGMENT_WRITE_KEY}");
analytics.page();
}}();`

export default function Meta({ ...props }) {
  let title = 'StepZen: The Serverless GraphQL Layer for Any Data Source.'
  let description =
    'StepZen - StepZen helps developers connect applications to any data source - whether one or hundreds; SQL, NoSQL, REST, GraphQL, or any combination.'
  let image = 'https://stepzen.com/images/social-share.jpg'
  let slug = 'https://stepzen.com'

  if (props.title) title = props.title
  if (props.description) description = props.description
  if (props.image) image = props.image
  if (props.slug) slug = props.slug

  const newLineRegex = /\r?\n|\r/g
  const doubleSpaceRegex = /  /g
  title = title.replace(newLineRegex, ' ')
  title = title.replace(doubleSpaceRegex, ' ')
  description = description.replace(newLineRegex, ' ')
  description = description.replace(doubleSpaceRegex, ' ')
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={slug} />
      {props.social && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@stepzen_dev" />
        </>
      )}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/favicon/site.webmanifest"></link>
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS Feed for StepZen"
        href="/rss/feed.xml"
      />
      <link
        rel="alternate"
        type="application/rss+atom"
        title="Atom Feed for StepZen"
        href="/rss/atom.xml"
      />
      {props.includeSegment && (
        <>
          <script dangerouslySetInnerHTML={{ __html: segmentSnippet }} />
        </>
      )}
    </Head>
  )
}
