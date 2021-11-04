import React ,{ useState } from "react";
import DrumPads from "./DrumPads";
import Controls from "./Controls";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

function App(){
  const [power, setPower] = useState(true);
  const [ bank, setBank ] = useState(bankOne);
  const [ curString, setCurString ] = useState("-");
  const [ volume,setVolume ] = useState(13);
  function changeStyle(target) {
    if (!power) return;
    target.classList.add("activeStyle");
    setTimeout(() => {
      target.classList.remove("activeStyle");
    }, 200);
  }
  function changeBank(e) {
    if (!power) return;
    const float = e.target.style.float;
    if (float === "left") {
      e.target.style.float = "right";
      setBank(bankOne);
      setCurString("Heater Kit");
    } else {
      e.target.style.float = "left";
      setBank(bankTwo);
      setCurString("Smooth Piano Kit");
    }
  }
  function changeControls(e) {
    const float = e.target.style.float;
    if (float === "left") {
      e.target.style.float = "right";
    } else {
      e.target.style.float = "left";
      setCurString("-");
    }
    setPower(!power);
  }
  function playSound(key, id) {
    if (!power) {
      setCurString("-");
      return;
    }
    const audio = document.getElementById(key);
    changeStyle(audio.parentElement);
    setCurString(id);
    audio.currentTime = 0;
    audio.volume = volume/100;
    audio.play();
  }
  function controlslider(e){
    setVolume(e.target.value);
    setCurString(`Volume: ${e.target.value}`);
    setTimeout(()=>{
      setCurString('-');
    },1000);
  }
  return (
    <div id="drum-machine">
      <div className="pads">
        {bank.map((source) => {
          return <DrumPads source={source} play={playSound} />;
        })}
      </div>
      <div className="controls-container">
        <Controls name="Power" changeControls={changeControls} />
        <p id="display">{curString}</p>
        <div className="slidecontainer">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={controlslider}
            className="slide"
            id="myRange"
            />
        </div>
        <Controls name="Bank" changeControls={changeBank} />
      </div>
    </div>
  )
}

export default App;