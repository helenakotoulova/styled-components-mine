import styled from "styled-components";
import Button from "../Button";

// STYLOVANI PRIMO TE KOMPONENTY BUTTON, KTERA UZ MA I NEJAKOU FUNKCIONALITU.
export const StyledButton = styled(Button)`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  color: ${(props) => props.color || "#333"};

  &:active {
    //background-color: coral;
  }

  &:hover {
    opacity: 0.9;
    transform: scale(0.8);
   // & label {
     // color: green;
    //}
  }
`;

export const ButtonLabel = styled.label`
  font-size: 25px;
  color: white;
`;

/* STYLOVANI OBECNEHO BUTTONU
export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  cursor:pointer;

  &:active {
    background-color:coral;
  }

  &:hover {
    & label {
      color:green;
    }
  }
`;

export const ButtonLabel = styled.label`
font-size: 25px;
color:white;
`;

*/
