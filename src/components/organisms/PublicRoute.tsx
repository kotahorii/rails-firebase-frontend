import { VFC } from 'react'
import { Navigate, Route } from 'react-router'
import { useAuthState } from '../../hooks/useAuthState'

type Props = {
  children: JSX.Element
}
export const PublicRoute: VFC<Props> = ({ children }) => {
  const { user, isLoading } = useAuthState()
  if (isLoading) return <p>isLoading...</p>
  return !user.uid ? children : <Navigate to="/main" replace />
}
