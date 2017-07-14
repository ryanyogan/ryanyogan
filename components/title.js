// Components
import Head from 'next/head'

const suffix = 'Ryan Yogan'

export default ({ value }) => (
  <Head>
    <title>{value ? `${value} - ${suffix}` : suffix}</title>
  </Head>
)