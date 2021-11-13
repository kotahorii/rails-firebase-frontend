import { Route, Routes } from 'react-router'
import { PrivateRoute } from './components/organisms/PrivateRoute'
import { PublicRoute } from './components/organisms/PublicRoute'
import { Auth } from './components/pages/Auth'
import { Main } from './components/pages/Main'
import { Layout } from './components/templates/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/main"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PublicRoute>
              <Auth />
            </PublicRoute>
          }
        />
      </Routes>
    </Layout>
  )
}

export default App
