import React, { useEffect, useState } from 'react'

const [loading, setLoading] = useState(false)
const sum = (a, b) => {
  setLoading(!loading)
  if (typeof (a) === 'number' && typeof (a) === 'number') return a + b
  return null
}

useEffect(() => {
  if (loading) {
    console.log(loading)
  }
}, [loading])

export default function App () {
  return (
    <>
      <div>
        {sum(3, 5)}
      </div>
      <div>
        {loading
          ? 'loading...'
          : 'not loading...'}
      </div>
    </>
  )
}
