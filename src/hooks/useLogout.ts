import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../app/hooks'

export const useLogout = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const logoutAuth = async () => {
    await signOut(auth)
    navigate('/')
  }
  return { logoutAuth }
}
