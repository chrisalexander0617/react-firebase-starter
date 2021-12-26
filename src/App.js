import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// Core Elements
import Nav from './components/Nav'
import Layout from './components/layouts/Layout'

// Pages
import Home from './components/pages/Home'
import Example from './components/pages/Example'

export default function App(){
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Layout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/example" element={<Example/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}