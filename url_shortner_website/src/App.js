import React from 'react'
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [url, setUrl] = React.useState(null)
  const [shortedUrl, setShortedurl] = React.useState("")

  async function fetchUrl(){
    const response = await axios.get(`https://url-shortener-api-zeta.vercel.app/${url}`)
    setShortedurl(response.data.url)
  }
  return (
    <div className='container'>
      <h1 className='text-center mt-3 mb-3'>Url Shortner</h1>
      <div className='input-group mb-3 mt-3'>
      <input
      className='form-control'
      type="text"
      placeholder='Enter your url'
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      />
      <button className='btn btn-primary' onClick={fetchUrl}>Short Url</button>
      </div>
      <p className='text-center fw-bolder fs-4'>{shortedUrl}</p>
    </div>
  )
}

export default App