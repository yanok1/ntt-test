import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { Title, Card, Text, Button, Label } from "@ui5/webcomponents-react";
import "./Movie.scss";
import Ratio from "../Ratio/Ratio";
import "@ui5/webcomponents/dist/Icon"; // Import the SAP UI5 Icon
import Spinner from "../Spinner/Spinner";

const Movie = ({ id, actors, title, description, image, score }) => {
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const favoriteState = localStorage.getItem(id);
    if (favoriteState) {
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
        {loading ? <Spinner isLoading={loading}></Spinner> : null}
        <img
          className={loading ? `display-none` : null}
          src={image}
          alt={title}
          loading="lazy"
          onLoad={() => {
            setLoading(() => false);
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
