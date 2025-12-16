import { useState, useEffect } from 'react'

function ReducerViewer() {
  const [code, setCode] = useState('')

  useEffect(() => {
    fetch('/28-reducer/reducer.js')
      .then(res => res.text())
      .then(text => setCode(text))
      .catch(err => setCode('Error loading reducer code'))
  }, [])

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1rem' }}>Lab 28: Reducer</h1>
      <pre style={{ 
        background: '#f5f5f5', 
        padding: '1.5rem', 
        borderRadius: '8px', 
        overflow: 'auto',
        border: '1px solid #ddd'
      }}>
        <code>{code || 'Loading...'}</code>
      </pre>
      <p style={{ marginTop: '1rem', color: '#666' }}>
        This is a pure JavaScript reducer function. Open the browser console to see the output when this code runs.
      </p>
    </div>
  )
}

export default ReducerViewer

