import React , { useEffect } from "react";

function DrumPads({ source,play }){
    useEffect(()=>{
      document.addEventListener('keydown',handleKeyPress);
      return () => document.removeEventListener('keydown',handleKeyPress);
    });
    function handleKeyPress(e){
      if(e.keyCode === source.keyCode){
        play(source.keyTrigger,source.id);
      }
    }
    return (
        <button
          onClick = {()=>play(source.keyTrigger,source.id)}
          className="drum-pad"
          id={source.id}
        >
          <audio
           id={source.keyTrigger}
           className="clip"
           src={source.url} 
          />{source.keyTrigger}
        </button>
    )
}

export default DrumPads;