import { useEffect, useRef, useState } from "react";

import audio1 from '../assets/audio_01.mp3';
import audio2 from '../assets/audio_02.mp3';
import celebrate from '../assets/celebrate.mp3';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import trophy from "../assets/trophy.gif";

// data holder array 
let data = ["", "", "", "", "", "", "", "", ""];


const Game = () => {
  // count and lock 
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let [wonFlag, setWonFlag] = useState(false);
  let [winner, setWinner] = useState("");

  let navigate = useNavigate();

  // redux toolkit 
  const players = useSelector(state => state.players);

  // useEffect to redirect user if he/she refresh the page 
  useEffect(() => {
    if (players.player1 === "") {
      navigate('/');
    }
  })


  // to reset boxes 
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  // boxes array to reset
  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  // play sound effect function 
  function play() {
    new Audio(count % 2 === 0 ? audio1 : audio2).play();
  }

  function celebration() {
    new Audio(celebrate).play();
  }
  // **************************

  // toggle function 
  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      play();
      e.target.innerHTML = '<h1>O</h1>';
      data[num] = "o";
      setCount(++count);
    } else {
      play();
      e.target.innerHTML = '<h1>X</h1>';
      data[num] = "x";
      setCount(++count);
    }

    // we are calling checkWin function here so that we can check on each click 
    checkWin()
  }

  // checkWin function 
  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[0])
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[0])
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[0])
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[1])
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[2])
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[3])
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[6])
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[2])
    }
  }
  // won function 
  const won = (sign) => {
    celebration();
    setLock(true);
    setWonFlag(true);
    if (sign === "x") {
      setWinner(`${players.player1} won!`);
    } else {
      setWinner(`${players.player2} won!`);
    }
  }

  // reset function
  const reset = () => {
    play();
    setLock(false);
    setWonFlag(false);

    data = ["", "", "", "", "", "", "", "", ""];
    setWinner("");
    box_array.map((e) => {
      e.current.innerHTML = "";
    })
  };

  // on window reload 

  return (
    <div className="container">
      {
        wonFlag ? (
          <>
            <h1 className="title">{winner}</h1>
            <div className="img-box">
              <img src={trophy} alt="this is trophy for winner" />
            </div>
          </>
        ) : (
          <>
            <h1 className="title" > <i className="fa-solid fa-xmark"></i> {players.player1} <span>Vs</span> <i className="fa-regular fa-circle"></i>  {players.player2}</h1>

            <div className="board">
              <div className="row1 row">
                <div className="boxes" ref={box1} onClick={(e) => { toggle(e, 0) }}></div>
                <div className="boxes" ref={box2} onClick={(e) => { toggle(e, 1) }}></div>
                <div className="boxes" ref={box3} onClick={(e) => { toggle(e, 2) }}></div>
              </div>

              <div className="row2 row">
                <div className="boxes" ref={box4} onClick={(e) => { toggle(e, 3) }}></div>
                <div className="boxes" ref={box5} onClick={(e) => { toggle(e, 4) }}></div>
                <div className="boxes" ref={box6} onClick={(e) => { toggle(e, 5) }}></div>
              </div>

              <div className="row3 row">
                <div className="boxes" ref={box7} onClick={(e) => { toggle(e, 6) }}></div>
                <div className="boxes" ref={box8} onClick={(e) => { toggle(e, 7) }}></div>
                <div className="boxes" ref={box9} onClick={(e) => { toggle(e, 8) }}></div>
              </div>
            </div>
          </>
        )
      }





      <div className="btn-box">
        <button onClick={reset} >Reset Game</button>
      </div>
    </div>
  )
}

export default Game