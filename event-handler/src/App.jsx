import './App.css'
import * as React from 'react'
import useDebounce from './hooks/useDebounce'

function App() {
  const [input, setInput] = React.useState('')

  const debouncedRequest = useDebounce(() => console.log(input))

  const onChange = (e) => {
    setInput(e.target.value)
    debouncedRequest()
  }

  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  )
}

export default App
