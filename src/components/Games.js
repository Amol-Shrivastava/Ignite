import React from "react";

//STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";

//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailsAction";
import { Link } from "react-router-dom";

//Media resize
import { smallImage } from "../util";

//Animations
import { popUp } from "../animation";

const Games = ({ name, releasedOn, bgImg, id }) => {
  //Load Details
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyleGame
      onClick={loadDetailHandler}
      variants={popUp}
      initial="hidden"
      animate="show"
    >
      <Link to={`/game/${id}`}>
        <motion.h3>{name}</motion.h3>
        <p>{releasedOn}</p>
        <motion.img
          src={smallImage(bgImg, 640)}
          alt={name}
          className="game_bg"
        />
      </Link>
    </StyleGame>
  );
};

const StyleGame = styled(motion.div)`
  /* border: 2px solid blue; */
  padding-top: 1rem;
  min-height: 30vh;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  p {
    margin-top: 1rem;
  }

  img {
    margin: 1rem auto 0;
    max-width: 100%;
    height: 40vh;
    object-fit: cover;
    /* display: block; */
  }
`;

export default Games;
