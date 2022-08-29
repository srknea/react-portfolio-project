import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed:60,
      strings: ['Student', '...' ],
     });
  },[]);

  /*
  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true, 
      backDelay:1500,
      backSpeed:60,
      strings: ['Student','dsfds' ]
    });
  },[]);
  */

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'am</h2>
          <h1>Serkan ISIK</h1>
          <h3>
            Senior <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
