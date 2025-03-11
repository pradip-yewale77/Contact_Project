import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [current, setCurrentDice] = useState(1); // Initialize current dice state
  const [selectedNumber, setSelectedNumber] = useState(); // State for the selected number
  const [score, setScore] = useState(0); // State for the score
  const[error,setError]=useState(" ")
  const[showRules,setShowRules]=useState(false)

  // Function to generate a random number between min and max (inclusive)
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min); // Fixed random number range
  };

  const roleDice = () => {
    if(!selectedNumber){
        setError("You have not selected any number ")
        return ;
    }

    const randomNumber = generateRandomNumber(1, 6); // Generate a random number between 1 and 6
    setCurrentDice(randomNumber); // Update the current dice value
    
    // Compare selected number with the generated number and update the score
    if (selectedNumber === randomNumber) { // Use strict equality check
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const restScore=()=>{
    setScore(0);
  }
  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector 
          setError={setError} error={error} selectedNumber={selectedNumber} 
          setSelectedNumber={setSelectedNumber} 
        />
      </div>
      <RoleDice current={current} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={restScore}>Reset</OutlineButton>
        <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules ? "Hide" :"Show"}Show Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 10px;
  padding-right: 200px;

  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns{
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:10px;
  }
`;
