import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import useSound from "use-sound";
import pikachuVoice from "../../../sounds/pikachu.mp3";
import bulbasaurVoice from "../../../sounds/bulbasaur.mp3";
import charmanderVoice from "../../../sounds/charmander.mp3";
import squirtleVoice from "../../../sounds/squirtle.mp3";

const ListItem = ({ item, onFavoriteClick, isActive, onPokemonItemClick }) => {
  
  const [playPikachu] = useSound(pikachuVoice);
  const [playBulbasaur] = useSound(bulbasaurVoice);
  const [playCharmander] = useSound(charmanderVoice);
  const [playSquirtle] = useSound(squirtleVoice);

  return (
    <li className="pokemonCard">
      <Card className="card-root">
        <CardActionArea style={{cursor:"default"}}>
          <CardMedia
            className="card-media"
            component="img"
            image={item.sprites.front_default}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" color="primary">
            <FormControlLabel
              control={
                <Checkbox
                  className="checkBox"
                  onClick={(event) => {
                    onFavoriteClick(item, event.target.checked);
                  }}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  name="fav-symbol"
                  checked={isActive}
                />
              }
            />
          </Button>
          <Button className="volume-button" size="large" color="primary">
            <VolumeUpIcon onClick={() => {
              if(item.name === "pikachu") playPikachu();
              if(item.name === "bulbasaur") playBulbasaur();
              if(item.name === "charmander") playCharmander();
              if(item.name === "squirtle") playSquirtle();
            }}/>
          </Button>
          <Button
            className="learn-more"
            size="large"
            color="primary"
            onClick={() => onPokemonItemClick(item)}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </li>
  );
};

export default ListItem;
