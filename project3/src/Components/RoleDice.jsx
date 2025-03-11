import React from "react";
import styled from "styled-components";

const RoleDice = ({ current, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img
          src={`/images/dice/dice_${current}.png`}
          alt={`dice ${current}`}
          style={{ height: "100px", width: "100px" }}
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  margin-top: 48px;
  align-items: center;
  flex-direction: column;
  text-align: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    margin-top: 32px;
    p {
      font-size: 20px;
    }
    .dice img {
      height: 80px;
      width: 80px;
    }
  }

  @media (max-width: 480px) {
    margin-top: 24px;
    p {
      font-size: 18px;
    }
    .dice img {
      height: 60px;
      width: 60px;
    }
  }
`;

