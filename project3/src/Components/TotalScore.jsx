import React from "react";
import styled from "styled-components";

// TotalScore component now accepts 'score' as a prop
const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  width: 100%;
  margin: 0 auto; /* Center the component horizontally */
  padding: 20px;

  h1 {
    font-size: 10vw; /* Responsive font size based on viewport width */
    line-height: 1.2;
    margin: 0;
  }

  p {
    font-size: 4vw; /* Responsive font size based on viewport width */
    font-weight: 500;
    margin: 0;
  }

  /* Responsive adjustments for large screens (desktops) */
  @media (min-width: 1201px) {
    h1 {
      font-size: 100px; /* Large screen, set a specific font size */
    }
    p {
      font-size: 24px; /* Adjust paragraph font size for large screens */
    }
  }

  /* Adjustments for medium screens (tablets, small laptops) */
  @media (max-width: 1200px) {
    h1 {
      font-size: 90px; /* Medium screen font size */
    }
    p {
      font-size: 22px;
    }
  }

  /* Adjustments for small screens (tablets in portrait mode, large phones) */
  @media (max-width: 768px) {
    h1 {
      font-size: 70px; /* Slightly smaller font size */
    }
    p {
      font-size: 20px;
    }
  }

  /* Adjustments for very small screens (phones in portrait mode) */
  @media (max-width: 480px) {
    h1 {
      font-size: 50px; /* Even smaller font size for small phones */
    }
    p {
      font-size: 18px;
    }
  }

  /* Adjustments for extremely small screens (phones in landscape mode) */
  @media (max-width: 360px) {
    h1 {
      font-size: 40px; /* Further reduction for very small screens */
    }
    p {
      font-size: 16px;
    }
  }
`;
