import { useEffect, useState } from 'react'
import './App.css'
import { aiService } from './services/aiService'

const games = [
  'Counter Strike: Global Offensive',
  'League of Legends',
  'Valorant',
  'Rocket league',
  'Dota 2',
  'PUBG',
  'Apex'
]

const loader =
  <div class="spinner-box">
    <div class="pulse-container">
      <div class="pulse-bubble pulse-bubble-1"></div>
      <div class="pulse-bubble pulse-bubble-2"></div>
      <div class="pulse-bubble pulse-bubble-3"></div>
    </div>
  </div>


function App() {
  const [url, setUrl] = useState("")
  const [game, setGame] = useState("")
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    if(text != ""){
      setLoading(true)
      let generatedText = await aiService(url, game)
      setText(generatedText)
      setLoading(false)
    }
  }

  return (
    <div className=" grid grid-cols-2 gap-4 h-screen">
      <div className='grid grid-cols-1 gap-4 ml-4 mt-4 justify-items-center h-1/3'>
        <select className="select select-accent w-full" onChange={(e) => setGame(e.target.value)}>
          <option disabled selected>What game are we generating an article for?</option>
          {games.map((game) => {
            return <option>{game}</option>
          })}
        </select>
        <input type="text"
          placeholder="Tournament URL"
          className="input input-bordered input-accent w-full"
          onChange={(e) => setUrl(e.target.value)} />

        <button className="btn w-2/6" onClick={handleClick} disabled={loading}>
          {loading ? loader : "Generate"}
        </button>
        <label for="my-modal-4" class="underline cursor-pointer text-xs">How to use?</label>

        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
        <label for="my-modal-4" class="modal cursor-pointer">
          <label class="modal-box relative" for="">
            <h3 class="text-lg font-bold">Tournament article generator</h3>

            <p class="py-4">
              1- <a href='https://liquipedia.net/'>Go to liquipedia.net</a>
            </p>
            <p class="py-4">
              2- Find your tournament and copy url
            </p>
            <p class="py-4">
              3- Paste your url in the tournament URL label
            </p>
          </label>
        </label>
      </div>
      <div className='input input-bordered input-accent h-5/6 w-5/6 overflow-auto mt-4 '>
        <p className='' placeholder='Generate an article to continue...'>
          {loading ? loader : text ? text : <></>}
        </p>
      </div>

    </div>
  )
}

export default App
