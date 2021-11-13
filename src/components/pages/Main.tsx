import { memo, VFC } from 'react'
import { auth } from '../../firebase'
import { useAuthState } from '../../hooks/useAuthState'

import { useLogout } from '../../hooks/useLogout'

const MainMemo: VFC = () => {
  const { logoutAuth } = useLogout()
  const { user } = useAuthState()

  return (
    <div className="flex flex-col space-y-3">
      <div>{user.email}</div>
      <button
        onClick={logoutAuth}
        className="mt-5 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-400 rounded focus:outline-none "
      >
        Logout
      </button>
    </div>
  )
}

export const Main = memo(MainMemo)
