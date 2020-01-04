import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <h1>Register</h1>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </li>
    </ul>
  </Layout>
)
