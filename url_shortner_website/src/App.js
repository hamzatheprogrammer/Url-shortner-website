import React from 'react'
import axios from 'axios'

function App() {
  const [url, setUrl] = React.useState(null)
  const [shortedUrl, setShortedurl] = React.useState("")

  async function fetchUrl(){
    const response = await axios.get(`https://url-shortener-api-zeta.vercel.app/${url}`)
    setShortedurl(response.data.url)
  }
  return (
    <div>
      <p>{shortedUrl}</p>
      <input type="text" onChange={(e)=> setUrl(e.target.value)}/>
      <button onClick={fetchUrl}>Short Url</button>
    </div>
  )
}

export default App