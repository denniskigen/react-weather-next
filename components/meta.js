import Head from 'next/head'

export default ({ title, description, image, url }) => (
  <Head>
    {title && <title>{title}</title>}
    {title && <meta property="og:title" content={title} />}
    {title && <meta name="twitter:title" content={title} />}
    {url && <meta name="og:url" content={url} />}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="React Weather" />
    <meta name="twitter:site" content="@dennisforthewin" />
    {description && <meta name="description" content={description} />}
    {description && <meta property="og:description" content={description} />}
    {description && <meta name="twitter:description" content={description} />}
    {image && <meta property="og:image" content={image} />}
    {image && <meta name="twitter:card" content="summary_large_image" />}
    {image && <meta name="twitter:image" content={image} />}
  </Head>
)