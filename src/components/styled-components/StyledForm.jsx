import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  textarea {
    resize: both;
    overflow: auto;
    font-size: 15px;
    margin-top: 5px;
    height: 30px;
    min-width: 275px;
  }
`;

export default StyledForm;
