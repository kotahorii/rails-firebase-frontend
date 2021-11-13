import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { login, logout, selectUser } from '../features/userSlice'
import { auth } from '../firebase'

export const useAuthState = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (authUser) => {
      setIsLoading(true)
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email!,
          })
        )
      } else {
        dispatch(logout())
      }
      setIsLoading(false)
    })
    return () => {
      unsub()
    }
  }, [])
  return {
    user,
    isLoading,
  }
}
