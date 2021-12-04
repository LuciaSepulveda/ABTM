import Head from "next/head"

interface Props {
  title: string
  siteTitle: string
  description: string
  tags?: string
}

const NewHead: React.FC<Props> = ({title, siteTitle, description, tags}) => {
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta content={description} name="description" />
      <meta content="website" property="og:type" />
      <meta content={siteTitle} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={siteTitle} property="og:site_name" />
      {tags && <meta content={tags} name="keywords" />}
    </Head>
  )
}

export default NewHead
