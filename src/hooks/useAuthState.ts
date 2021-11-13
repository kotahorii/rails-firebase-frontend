import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { login, logout, selectUser } from '../features/userSlice'
import { auth } from '../firebase'

export const useAuthState = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (authUser) => {
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
  }, [dispatch])
  return {
    user,
    isLoading,
  }
}
