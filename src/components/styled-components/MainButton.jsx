import styled from "styled-components";

const MainButton = styled.button`
  background-color: #252f30;
  border: none;
  border-radius: 3px;
  padding-top: 7px;
  line-height: 1.5;
  font-size: 18px;
  font-family: adobe-caslon-pro, serif;
  margin: 6px 4px 6px 4px;
  color: #f4fec1;
  cursor: pointer;
  :focus {
    background-color: #f4fec1;
    border: 2px solid #252f30;
    color: #252f30;
  }
`;

export default MainButton;
