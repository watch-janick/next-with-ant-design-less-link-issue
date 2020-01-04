import Link from 'next/link'
import Layout from '../components/Layout'
import {
  Input,
} from 'antd'

export default () => (
  <Layout>
    <h1>Login</h1>
    <Input />
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </li>
    </ul>
  </Layout>
)
