import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Title,
  Card,
  Text,
  Button,
  Icon,
  Label,
} from "@ui5/webcomponents-react";
import "./Movie.scss";
import Ratio from "../Ratio/Ratio";
import "@ui5/webcomponents/dist/Icon"; // Import the SAP UI5 Icon
import SearchBar from "../SearchBar/SearchBar";

const Movie = ({
  id,
  actors,
  title,
  description,
  image,
  score,
  favorite,
  isLoaded,
  index,
}) => {
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    const favoriteState = localStorage.getItem(id);
    console.log(favoriteState);
    if (favoriteState) {
      console.log("...", JSON.parse(favoriteState).favorite);
      setDisable(() => JSON.parse(favoriteState).favorite);
      return;
    }
    setDisable(() => false);
  }, []);
  return (
    <section>
      <div className="movie">
        <Card heading="Sample Card" subtitle="Subtitle">
          <Title className="title">{title}</Title>
          <Text>{description}</Text>
          <div className="label color-black-default default-gap">
            <Label className="bold color-black-default">Actor</Label>
            <span>{actors}</span>
          </div>
          <div className="label color-black-default start-gap">
            <Label className="bold color-black-default">Review</Label>
            <Ratio score={score}></Ratio>
          </div>
          <Button
            disabled={disable}
            icon="employee"
            onClick={() => {
              localStorage.setItem(id, JSON.stringify({ favorite: true }));
            }}
          >
            Favorite
          </Button>
        </Card>
        <img
          src={image}
          alt={title}
          loading="lazy"
          onLoad={() => {
            isLoaded();
          }}
        />
      </div>
    </section>
  );
};

Movie.propTypes = {
  actors: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  ratio: PropTypes.number,
  favorite: PropTypes.bool,
  isLoaded: PropTypes.func,
};

export default Movie;
