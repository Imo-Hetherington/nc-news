import styled from "styled-components";

const StyledCard = styled.section`
  background-color: #869aa580;
  border-radius: 3px;
  margin: 2px 5px 2px 5px;
  padding-top: 3px;
  text-align: center;
  align-items: center;
  text-decoration: none;
  color: #252f30;
  -webkit-box-shadow: 10px 11px 2px -6px rgba(117, 130, 100, 0.75);
  -moz-box-shadow: 10px 11px 2px -6px rgba(117, 130, 100, 0.75);
  box-shadow: 10px 11px 2px -6px rgba(117, 130, 100, 0.75);
`;

const StyledComment = styled(StyledCard)`
  margin: 15px;
  text-align: left;
  display: grid;
  grid-template-columns: 80px auto 100px;
  grid-template-rows: 50px auto;
  grid-template-areas: "voter username date" "voter body body";
  .voterForm {
    grid-area: voter;
    display: "inline";
    margin: 0;
    width: 80px;
    background-color: ;
  }
  .datetime: {
    grid-area: date;
  }
  .userName {
    grid-area: username;
    display: inline;
  }
  .commentBody {
    grid-area: body;
    text-align: left;
  }
  .deleteButton {
    grid-column-start: 2;
  }
`;

export { StyledCard, StyledComment };
