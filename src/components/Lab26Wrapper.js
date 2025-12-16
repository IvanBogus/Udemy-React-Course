import { MemoryRouter } from 'react-router-dom'
import Lab26App from '../labs/lab26'

function Lab26Wrapper() {
  return (
    <MemoryRouter initialEntries={['/']}>
      <Lab26App />
    </MemoryRouter>
  )
}

export default Lab26Wrapper

