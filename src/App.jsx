import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Books from "./components/Books"

export default function App() {
  const [count, setCount] = useState(0)

  return (
      <main>
        <Books />

      </main>
  )
}
