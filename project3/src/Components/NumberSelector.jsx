import React from "react";
import styled from "styled-components";

const NumberSelector = ({setError,error,selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
 const numberSelectorHandler=(value)=>{
  setSelectedNumber(value)
  setError(" ")
 }
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}  // Ensure strict equality check
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centering the container */
  padding: 16px;

  .flex {
    display: flex;
    flex-wrap: wrap; /* Ensures numbers wrap to the next line when necessary */
    gap: 16px; /* Reduces space between boxes */
    justify-content: center; /* Centers the numbers horizontally */
  }

  p {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    margin-top: 16px; /* Adds space between numbers and text */
  }
  .error{
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  cursor: pointer;
  transition: background-color 0.3s ease;

  /* Responsive styles */
  /* For small screens like mobile devices */
  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
    font-size: 16px;
  }

  /* For tablets and smaller laptops */
  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 18px;
  }

  /* For larger screens like desktops */
  @media (min-width: 1024px) {
    height: 72px;
    width: 72px;
    font-size: 24px;
  }
`;
