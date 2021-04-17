import React, { useState } from "react";

//style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
// import { searchGameURL } from "../api";

//Animations
import { fadeIn } from "../animation";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    console.log(textInput);
    setTextInput("");
  };

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyleNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>

      <Search onSubmit={submitSearch}>
        <input
          value={textInput}
          onChange={inputHandler}
          type="text"
          name=""
          id=""
        />
        <button type="submit">Search</button>
      </Search>
    </StyleNav>
  );
};

const StyleNav = styled(motion.div)`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 5rem;
  text-align: center;
  img {
    display: inline-block;
  }
  input {
    min-width: 400px;
    width: 30%;
    font-size: 1.2rem;
    border: none;
    /* outline: none; */
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    padding: 0.5rem;

    margin-right: 1rem;
  }
  button {
    font-size: 1.2rem;
    border: none;
    padding: 0.4rem 1rem;
    display: inline-block;
    cursor: pointer;
    background: #ff7676;
    color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    &:hover {
      box-shadow: none;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const Search = styled(motion.form)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;
export default Nav;
