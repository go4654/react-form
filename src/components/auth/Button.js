import styled from "styled-components";

const SButton = styled.button`
  all: unset;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: salmon;
  color: white;
  font-weight: 700;
  box-sizing: border-box;
  margin-top: 30px;
  opacity: ${(props) => props.opacity};
`;

export const Button = ({ opacity, text }) => {
  return <SButton opacity={opacity}>{text}</SButton>;
};
