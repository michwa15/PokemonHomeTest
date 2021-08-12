import React from "react";
import Sound from "react-sound";
import PokemonTheme from "../../sounds/pokemonThemeSong.mp3"

const PlaySound = ({handleSongLoading, handleSongPlaying, handleSongFinishedPlaying, isPlaying}) => {
    return (
        <div>
            <Sound 
            url={PokemonTheme}
            playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
            playFromPosition={10}
            onLoading={handleSongLoading}
            onPlaying={handleSongPlaying}
            onFinishedPlaying={handleSongFinishedPlaying}
            volume="5"
            />
        </div>

    );
}

export default PlaySound;