import UserContext from '../context/UserContext'
import { useContext } from 'react'

function UserInfo() {
  const { userName } = useContext(UserContext)

  return <h1>{userName}</h1>
}

export default UserInfo
