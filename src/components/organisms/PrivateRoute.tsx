import { VFC } from 'react'
import { Navigate } from 'react-router'
import { useAuthState } from '../../hooks/useAuthState'

type Props = {
  children: JSX.Element
}
export const PrivateRoute: VFC<Props> = ({ children }) => {
  const { user, isLoading } = useAuthState()
  if (isLoading) return <p>isLoading...</p>
  return user.uid ? children : <Navigate to="/" replace />
}
