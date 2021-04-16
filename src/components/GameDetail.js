import React from "react";

//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Redux
import { useSelector } from "react-redux";

//Router-dom
import { useHistory } from "react-router-dom";

//Media resize
import { smallImage } from "../util";

//Images
import playstation from "../img/playstation.svg";
import xbox from "../img/xbox.svg";
import steam from "../img/steam.svg";
import nintendo from "../img/nintendo.svg";
import gamepad from "../img/gamepad.svg";
import apple from "../img/apple.svg";

import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

//Animations
// import { popUp } from "../animation";

const GameDetail = () => {
  const history = useHistory();

  //exit card
  const exitCardHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //Get Platforms Image
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  //get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="stars" key={i} src={starFull} />);
      } else {
        stars.push(<img alt="stars" key={i} src={starEmpty} />);
      }
    }
    return stars;
  };

  //Data
  const { game, screen, isLoading } = useSelector((state) => state.detail);
  let images = screen.results;
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitCardHandler}>
          <Detail>
            <Stats>
              <div className="rating">
                <motion.h3>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms &&
                    game.platforms.map((games) => (
                      <img
                        key={games.platform.id}
                        src={getPlatform(games.platform.name)}
                        alt={games.platform.name}
                      />
                    ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                src={smallImage(game.background_image, 1280)}
                alt={game.name}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {images &&
                images.map((res) => (
                  <img
                    src={smallImage(res.image, 1280)}
                    alt="game screenshot"
                    key={res.id}
                  />
                ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  /* max-width: 800px; */
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 18;
  /* z-index: -2; */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 100%;
  max-width: 80vw;
  border-radius: 1rem;
  padding: 2rem 3rem;
  background: white;
  position: absolute;
  margin: 2rem 0;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  img {
    /* margin: 1rem 0; */
    max-width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    margin-top: 0.5rem;
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.4rem;
    display: inline-block;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  img {
    margin-top: 1.5rem;
    margin-left: 3rem;
    width: 1.8rem;
    @media (max-width: 1000px) {
      width: 1.4rem;
    }
    @media (max-width: 700px) {
      margin-left: 2rem;
      width: 1.1rem;
    }
  }
`;

const Media = styled(motion.div)`
  margin-top: 2rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 2rem 0;
  line-height: 1.5;
`;
export default GameDetail;
