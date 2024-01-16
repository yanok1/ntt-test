import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Title, Text, Button, Label } from "@ui5/webcomponents-react";
import "./Movie.scss";
import Ratio from "../Ratio/Ratio";
import "@ui5/webcomponents/dist/Icon"; // Import the SAP UI5 Icon
import Spinner from "../Spinner/Spinner";
import "@ui5/webcomponents-icons/dist/heart-2.js";

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
  }, [id]);

  return (
    <section>
      <div className="movie-wrapper">
        <article className="movie">
          <div className="wrapper-content">
            <Title className="title">{title}</Title>
            <Text className="align-start">{description}</Text>
            <div className="label color-black-default default-gap align-start">
              <Label className="bold color-black-default">Actor</Label>
              <span>{actors}</span>
            </div>
            <div className="label color-black-default start-gap align-start">
              <Label className="bold color-black-default">Review</Label>
              <Ratio score={score}></Ratio>
            </div>
            <Button
              disabled={disable}
              className="align-start"
              onClick={(e) => {
                localStorage.setItem(id, JSON.stringify({ favorite: true }));
                setDisable(true);
              }}
            >
              <span className="btn-display">
                Favorite
                <ui5-icon name="heart-2"></ui5-icon>
              </span>
            </Button>
          </div>
          <div className={`wrapper-image `}>
            {loading ? <Spinner isLoading={loading}></Spinner> : null}
            <img
              className={`image ${loading ? `display-none not-render` : null}`}
              src={image}
              alt={title}
              loading="lazy"
              onLoad={() => {
                setLoading(() => false);
              }}
            />
          </div>
        </article>
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
