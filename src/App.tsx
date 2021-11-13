import { Route, Routes } from 'react-router'
import { Auth } from './components/pages/Auth'
import { Main } from './components/pages/Main'
import { Layout } from './components/templates/Layout'

function App() {

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
