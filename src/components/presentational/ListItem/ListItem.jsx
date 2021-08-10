import React, { useState, useEffect } from "react";
import axios from "axios";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

const ListItem = ({ item, onFavoriteClick, isActive, onPokemonItemClick }) => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    // TODO: REFACTOR GETTING THE POKEMON IMAGE OUT OF PRESENTIAIONAL COMPONENTS. (9LISTITEM IS PRESENTIIONAL).
    axios.get(item.url).then((response) => {
      setImgUrl(response.data.sprites.front_default);
    });
  }, []);

  const classes = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  return (
    <li className="pokemonCard">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="30%"
            className={classes.media}
            image={imgUrl}
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
          <Button
            size="large"
            color="primary"
            
          >
            <VolumeUpIcon />
          </Button>
          <Button
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
