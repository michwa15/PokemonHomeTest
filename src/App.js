import React,{useState} from "react";
import PokemonsContainer from "./components/containers/PokemonsContainer";
import PlaySound from "../src/components/PlaySound/PlaySound";

const App = () => {
  
  const [isPlaying, setIsPlaying] = useState(true);

  const onSoundIconClick = () => {
    setIsPlaying(!isPlaying);
  }

  return (
    <div>
      <PlaySound isPlaying={isPlaying} />
      <PokemonsContainer onSoundIconClick={onSoundIconClick} isPlaying={isPlaying}/>
    </div>
  );
};

export default App;
