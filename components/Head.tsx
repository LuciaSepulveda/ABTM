import Head from "next/head"

interface Props {
  title: string
  siteTitle: string
  description: string
}

const NewHead: React.FC<Props> = ({title, siteTitle, description}) => {
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta content={description} name="description" />
      <meta content="website" property="og:type" />
      <meta content={siteTitle} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={siteTitle} property="og:site_name" />
    </Head>
  )
}

export default NewHead
