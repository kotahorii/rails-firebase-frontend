import { Route, Routes } from 'react-router'
import { PrivateRoute } from './components/organsms/PrivateRoute'
import { PublicRoute } from './components/organsms/PublicRoute'
import { Auth } from './components/pages/Auth'
import { Main } from './components/pages/Main'
import { Layout } from './components/templates/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </Layout>
  )
}

export default App
