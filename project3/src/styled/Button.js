import styled from "styled-components";
export const Button = styled.button`
  min-width: 220px;
  border: none;
  padding: 10px 20px;
  background: #000000;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s;
  background: ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s;
    background: ease-in;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    min-width: 180px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    min-width: 150px;
  }
`;
export const OutlineButton = styled(Button)`
   background-color: white;
   border: 1px solid black;
   color: black;
   &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
    transition: 0.3s;
  }
`;