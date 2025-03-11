import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="image-container">
        <img src="/images/dice.png" alt="Dice" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        {/* <Button onClick={toggle}>Play Now</Button> */}
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      height: auto;
      width: 50vw;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 96px;
      white-space: nowrap;
      text-align: center;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 1024px) {
    .content h1 {
      font-size: 72px;
    }

    .image-container img {
      width: 40vw;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    .content h1 {
      font-size: 56px;
    }

    .image-container img {
      width: 60vw;
    }
  }

  @media (max-width: 480px) {
    .content h1 {
      font-size: 36px;
    }

    .image-container img {
      width: 70vw;
    }
  }
`;

