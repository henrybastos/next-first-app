import { useEffect, useState } from "react"

export default function ClientSideRendering () {
  const [seconds, setSeconds] = useState(0);
  
  setInterval(() => {
    setSeconds(seconds + 1);
  }, 1000)

  return (
    <section>
      <h1>Client-side Rendering</h1>
      <p>This page is updated whenever the data changes.</p>
      <p>{ `Seconds: ${ seconds }` }</p>
    </section>
  )
}