import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router'

export const useLogout = () => {
  const navigate = useNavigate()
  const logoutAuth = async () => {
    await signOut(auth)
    navigate('/')
  }
  return { logoutAuth }
}
