import { Link } from '../routes'

import {
  Form,
} from 'antd'

export default () => (
  <>
    <h1>Login</h1>
    <Form>
      <p>Test</p>
    </Form>
    <Link route="user-register">
      <a>Register</a>
    </Link>
  </>
)
