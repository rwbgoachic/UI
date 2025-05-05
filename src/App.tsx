import { useState } from 'react'
import './styles/base.css'
import './App.css'
import { Button } from './components/buttons/Button'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1>React + Supabase App</h1>
        <div>
          <Button onClick={() => setCount(count + 1)}>
            Count is: {count}
          </Button>
          <Button variant="secondary" onClick={() => setCount(0)}>
            Reset
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App