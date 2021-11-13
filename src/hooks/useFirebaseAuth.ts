import { useState, useCallback, ChangeEvent, FormEvent } from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router'


export const useFirebaseAuth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate()

  const emailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    []
  )
  const passwordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    []
  )
  const resetInput = useCallback(() => {
    setEmail('')
    setPassword('')
  }, [])
  const toggleMode = useCallback(() => setIsLogin(!isLogin), [isLogin])
  const authUser = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (isLogin) {
        try {
          await signInWithEmailAndPassword(auth, email, password)
          navigate('/main')
        } catch (e) {
          alert(e.message)
        }
        resetInput()
      } else {
        try {
          await createUserWithEmailAndPassword(auth, email, password)
          navigate('/main')
        } catch (e) {
          alert(e.message)
        }
        resetInput()
      }
    },
    [email, password, isLogin]
  )
  return {
    email,
    password,
    emailChange,
    passwordChange,
    resetInput,
    isLogin,
    toggleMode,
    authUser,
  }
}
