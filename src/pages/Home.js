import React, { useEffect } from "react";

//STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";

//COMPONENTS
import Games from "../components/Games";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";

//Animations
import { fadeIn } from "../animation";

const Home = () => {
  //Get the current Location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GamesList>
      {pathId && <GameDetail />}

      {searched.length ? (
        <div className="searchedResults">
          <h2>Searched Games</h2>
          <GamesUp>
            {searched.map(({ name, released, id, background_image }) => (
              <Games
                name={name}
                releasedOn={released}
                id={id}
                bgImg={background_image}
                key={id}
                variants={fadeIn}
                initial="hidden"
                animate="show"
              />
            ))}
          </GamesUp>
        </div>
      ) : (
        ""
      )}

      <h2>Upcoming Games</h2>
      <GamesUp>
        {upcoming.map(({ name, released, id, background_image }) => (
          <Games
            name={name}
            releasedOn={released}
            id={id}
            bgImg={background_image}
            key={id}
          />
        ))}
      </GamesUp>

      <h2>Popular Games</h2>
      <GamesUp>
        {popular.map(({ name, released, id, background_image }) => (
          <Games
            name={name}
            releasedOn={released}
            id={id}
            bgImg={background_image}
            key={id}
          />
        ))}
      </GamesUp>

      <h2>New Games</h2>
      <GamesUp>
        {newGames.map(({ name, released, id, background_image }) => (
          <Games
            name={name}
            releasedOn={released}
            id={id}
            bgImg={background_image}
            key={id}
          />
        ))}
      </GamesUp>
    </GamesList>
  );
};

const GamesList = styled(motion.div)`
  padding: 0rem 2rem;
  h2 {
    padding: 2rem 0;
  }
`;

const GamesUp = styled(motion.div)`
  min-height: 80vh;
  /* border: 2px solid green; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 4rem 2rem;
  margin-bottom: 3rem;
`;

export default Home;
