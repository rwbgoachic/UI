import { useState } from 'react'
import './App.css'
import { Button } from './components/buttons/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>React + Supabase App</h1>
      <div>
        <Button onClick={() => setCount(count + 1)}>
          Count is: {count}
        </Button>
        <Button variant="secondary" onClick={() => setCount(0)}>
          Reset
        </Button>
      </div>
    </div>
  )
}

export default App