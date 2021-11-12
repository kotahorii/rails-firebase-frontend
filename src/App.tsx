import { Route, Routes } from 'react-router'
import { Auth } from './components/pages/Auth'
import { Main } from './components/pages/Main'
import { Layout } from './components/templates/Layout'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { useAppSelector } from './app/hooks'
import { auth } from './firebase'

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!auth.currentUser?.uid) {
      navigate('/')
    }
  }, [])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Layout>
  )
}

export default App
