import { useNavigate } from "react-router-dom"
import wc1 from '../assets/wc1.gif'
import load from '../assets/load.gif'
import audio2 from '../assets/audio_02.mp3';
import { useState } from "react";

const Welcome = () => {
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // function to play sound effect on button click
  function play() {
    new Audio(audio2).play();
  }
  const handleClick = () => {
    play();

    setTimeout(()=>{
      setLoading(true)
    },1000)

    setTimeout(()=>{
      navigate('/start')
    },4000)
  }

  return (
    <div className="container">
      {
        loading ? (
          <div className="loader">
            <img src={load} alt="this is winner trophy." />
          </div>
        ) : (
          <>
            <h1 className="title">Welcome To <span>TicTacToe</span></h1>
            <div className="img-box">
              <img src={wc1} alt="this is winner trophy." />
            </div>
            <h2>Let&#39;s find a way to win together.</h2>

            <div className="btn-box">
              <button onClick={handleClick}>Start Now</button>
            </div>

          </>)
      }


    </div>
  )
}

export default Welcome