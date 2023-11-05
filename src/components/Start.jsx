import { useNavigate } from "react-router-dom";
import load from '../assets/load.gif'
import audio2 from '../assets/audio_02.mp3';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { choosePlayers } from "../redux_toolkit/features/playerSlice";



const Start = () => {
  let [loading, setLoading] = useState(false);
  let [ply1, setPly1] = useState('');
  let [ply2, setPly2] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // document titile
  document.title = "Let's Start Together";

  // to play audio when component renders 
  function play() {
    new Audio(audio2).play()
  }

  // to handle click when user click on button
  const handleClick = () => {
    play();

  

    if(ply1.trim()!=="" && ply2.trim()!==""){
      dispatch(choosePlayers({ply1,ply2}));
      setTimeout(() => {
        setLoading(true)
      }, 1000);
  
      setTimeout(() => {
        navigate('/play')
      }, 4000);
    }else{
      alert("Please, Enter Player's Name 😍!")
    }
   

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
            <h1 className="title">Let&#39;s Start <span>TicTacToe</span></h1>

            <div className="form">
              <div className="form-control">
                <label htmlFor="player1"><i className="fa-solid fa-xmark"></i></label>
                <input type="text" value={ply1}  onChange={(e)=>setPly1(e.target.value)} placeholder="Enter Name" id="player1" autoCorrect="off" autoComplete="off" />
              </div>

              <div className="form-control">
                <label htmlFor="player2"><i className="fa-regular fa-circle"></i></label>
                <input type="text" value={ply2} onChange={(e)=>setPly2(e.target.value)} placeholder="Enter Name" id="player2" autoCorrect="off" autoComplete="off" />
              </div>

              <div className="btn-box">
                <button onClick={handleClick}>Play Now</button>
              </div>
            </div>
          </>
        )
      }


    </div>
  )
}

export default Start